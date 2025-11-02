<!-- WalletModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <div class="tabs">
              <button
                :class="['tab', { active: activeTab === 'reown' }]"
                @click="activeTab = 'reown'"
              >
                reown
              </button>
              <button
                :class="['tab', { active: activeTab === 'manual' }]"
                @click="activeTab = 'manual'"
              >
                Manual Kit
              </button>
            </div>
            <button class="close-btn" @click="closeModal">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <div class="content-grid">
              <!-- Left Panel - Wallet List -->
              <div class="wallet-list">
                <div class="wallet-list-panel">
                  <h3 class="section-title">Popular:</h3>
                  <div class="wallet-items">
                    <button
                      v-for="(wallet, idx) in wallets"
                      :key="wallet.id"
                      class="wallet-item"
                      :disabled="isConnecting && connectingWallet === wallet.id"
                      @click="openWeb3Modal(wallet)"
                    >
                      <div class="wallet-icon">
                        <component :is="getWalletIcon(wallet.id)" />
                      </div>
                      <span class="wallet-name">{{ wallet.name }}</span>
                      <span v-if="wallet.recommended" class="recommended-badge">
                        RECOMMENDED
                      </span>
                      <span
                        v-if="connectingWalletId === wallet.id && idx !== 0"
                        class="connecting-spinner"
                        style="position: absolute; right: 18px;"
                      >
                        ⟳
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Right Panel - Connection Status -->
              <div class="connection-panel">
                <div v-if="errorMessage" class="error-state">
                  <div class="error-icon">⚠️</div>
                  <p class="error-title">Wallet Not Found</p>
                  <p class="error-message">{{ errorMessage }}</p>
                  <div class="action-buttons">
                    <a 
                      v-if="installLink" 
                      :href="installLink" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="install-button"
                    >
                      Install {{ getWalletName(connectingWallet) }}
                    </a>
                    <button class="retry-button" @click="clearError">Try Another Wallet</button>
                  </div>
                  <p class="help-text">After installing, refresh this page and try again</p>
                </div>
                <div v-else-if="!isConnecting" class="connection-placeholder">
                  <div class="globe-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="2"/>
                      <ellipse cx="32" cy="32" rx="12" ry="30" stroke="currentColor" stroke-width="2"/>
                      <line x1="2" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                      <line x1="32" y1="2" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <p class="connection-text">Connect your wallet to get started</p>
                </div>
                <div v-else class="connecting-state">
                  <div class="spinner">⟳</div>
                  <p class="connecting-text">Connecting to {{ getWalletName(connectingWallet) }}...</p>
                  <p class="connecting-subtext">Please check your wallet extension</p>
                </div>
              </div>
            </div>

            <Web3WalletModal
              v-if="showWeb3Modal && selectedWalletForWeb3"
              :key="selectedWalletForWeb3?.id"
              :isOpen="showWeb3Modal"
              :wallet="selectedWalletForWeb3"
              @close="closeWeb3Modal"
              @connect="connectWallet"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed, h } from 'vue';
import Web3WalletModal from './Web3WalletModal.vue';

interface Wallet {
  id: string;
  name: string;
  icon: string;
  recommended?: boolean;
}

interface Props {
  modelValue: boolean;
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'connect', data: { wallet: Wallet; address: string; provider: any }): void;
  (e: 'error', error: { wallet: Wallet; message: string }): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>()

const activeTab = ref<'reown' | 'manual'>('reown');
const isOpen = ref(props.modelValue);
const isConnecting = ref(false);
const connectingWallet = ref<string>('');
const errorMessage = ref<string>('');
const installLink = ref<string>('');

const wallets = ref<Wallet[]>([
  { id: 'metamask', name: 'Metamask', icon: '🦊', recommended: true },
  { id: 'trust', name: 'Trust Wallet', icon: '🛡️' },
  { id: 'coinbase', name: 'Coinbase Wallet', icon: '💠' },
  { id: 'ledger', name: 'Ledger', icon: '📱' },
  { id: 'trezor', name: 'Trezor Wallet', icon: '🔒' },
  { id: 'phantom', name: 'Phantom Wallet', icon: '👻' },
  { id: 'okx', name: 'OKX Wallet', icon: '⬛' },
  { id: 'rabby', name: 'Rabby Wallet', icon: '🐰' },
  { id: 'uniswap', name: 'Uniswap Wallet', icon: '🦄' },
  { id: 'solflare', name: 'Solflare', icon: '🔥' },
  { id: 'magiceden', name: 'Magic Eden', icon: '🪄' }
]);

// Wallet Icon Components
const getWalletIcon = (walletId: string) => {
  const icons: Record<string, any> = {
    metamask: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('path', { d: 'M32 4L22 12L24 8L32 4Z', fill: '#E17726', stroke: '#E17726' }),
      h('path', { d: 'M8 4L18 12.1L16 8L8 4Z', fill: '#E27625', stroke: '#E27625' }),
      h('path', { d: 'M28 28L25 33L31 35L33 28H28Z', fill: '#E27625', stroke: '#E27625' }),
      h('path', { d: 'M7 28L9 35L15 33L12 28H7Z', fill: '#E27625', stroke: '#E27625' }),
      h('path', { d: 'M15 18L13 21L19 21.2L19 15L15 18Z', fill: '#E27625', stroke: '#E27625' }),
      h('path', { d: 'M25 18L21 14.9L21 21.2L27 21L25 18Z', fill: '#E27625', stroke: '#E27625' }),
      h('path', { d: 'M12 28L16 26L12.5 28.2L12 28Z', fill: '#E27625', stroke: '#E27625' }),
      h('path', { d: 'M24 26L28 28L27.5 28.2L24 26Z', fill: '#E27625', stroke: '#E27625' })
    ]),
    
    trust: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('circle', { cx: '20', cy: '20', r: '18', fill: '#3375BB' }),
      h('path', { d: 'M20 8L12 14V22C12 27 16 31 20 32C24 31 28 27 28 22V14L20 8Z', fill: 'white' })
    ]),
    
    coinbase: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('circle', { cx: '20', cy: '20', r: '18', fill: '#0052FF' }),
      h('rect', { x: '14', y: '14', width: '12', height: '12', rx: '2', fill: 'white' })
    ]),
    
    ledger: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('rect', { x: '8', y: '8', width: '24', height: '24', rx: '2', fill: 'black' }),
      h('path', { d: 'M16 12H24V16H20V24H16V12Z', fill: 'white' })
    ]),
    
    trezor: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('circle', { cx: '20', cy: '20', r: '18', fill: '#01B757' }),
      h('path', { d: 'M20 10L12 18H28L20 10Z', fill: 'white' }),
      h('rect', { x: '16', y: '18', width: '8', height: '12', fill: 'white' })
    ]),
    
    phantom: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('rect', { x: '6', y: '6', width: '28', height: '28', rx: '8', fill: '#AB9FF2' }),
      h('circle', { cx: '16', cy: '18', r: '2', fill: 'black' }),
      h('circle', { cx: '24', cy: '18', r: '2', fill: 'black' }),
      h('path', { d: 'M14 24Q20 28 26 24', stroke: 'black', 'stroke-width': '2', 'stroke-linecap': 'round', fill: 'none' })
    ]),
    
    okx: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('rect', { x: '8', y: '8', width: '8', height: '8', fill: 'black' }),
      h('rect', { x: '24', y: '8', width: '8', height: '8', fill: 'black' }),
      h('rect', { x: '16', y: '16', width: '8', height: '8', fill: 'black' }),
      h('rect', { x: '8', y: '24', width: '8', height: '8', fill: 'black' }),
      h('rect', { x: '24', y: '24', width: '8', height: '8', fill: 'black' })
    ]),
    
    rabby: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('circle', { cx: '20', cy: '20', r: '18', fill: '#8C7EFF' }),
      h('circle', { cx: '14', cy: '16', r: '3', fill: 'white' }),
      h('circle', { cx: '26', cy: '16', r: '3', fill: 'white' }),
      h('path', { d: 'M12 12Q8 8 12 8Q16 8 14 12', stroke: 'white', 'stroke-width': '2', fill: 'none' }),
      h('path', { d: 'M28 12Q32 8 28 8Q24 8 26 12', stroke: 'white', 'stroke-width': '2', fill: 'none' })
    ]),
    
    uniswap: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('circle', { cx: '20', cy: '20', r: '18', fill: '#FF007A' }),
      h('path', { d: 'M16 12L20 20L24 12', stroke: 'white', 'stroke-width': '2', fill: 'none' }),
      h('path', { d: 'M16 28L20 20L24 28', stroke: 'white', 'stroke-width': '2', fill: 'none' })
    ]),
    
    solflare: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('circle', { cx: '20', cy: '20', r: '18', fill: '#FC9965' }),
      h('path', { d: 'M12 24L20 12L28 24', stroke: 'white', 'stroke-width': '2.5', 'stroke-linecap': 'round', fill: 'none' }),
      h('path', { d: 'M12 24H28', stroke: 'white', 'stroke-width': '2.5', 'stroke-linecap': 'round' })
    ]),
    
    magiceden: () => h('svg', { viewBox: '0 0 40 40', fill: 'none' }, [
      h('rect', { x: '6', y: '6', width: '28', height: '28', rx: '6', fill: '#E42575' }),
      h('path', { d: 'M15 14L20 20L25 14', stroke: 'white', 'stroke-width': '2', fill: 'none' }),
      h('circle', { cx: '20', cy: '25', r: '2', fill: 'white' })
    ])
  };
  
  return icons[walletId] || icons.metamask;
};

const closeModal = () => {
  if (!isConnecting.value) {
    isOpen.value = false;
    errorMessage.value = '';
    emit('update:modelValue', false);
  }
};

const clearError = () => {
  errorMessage.value = '';
};

const getWalletName = (walletId: string) => {
  return wallets.value.find(w => w.id === walletId)?.name || '';
};

// MetaMask Connection
const connectMetaMask = async (wallet: Wallet) => {
  if (typeof window.ethereum === 'undefined') {
    throw new Error('MetaMask is not installed. Please install it from https://metamask.io');
  }

  try {
    const accounts = await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
    });
    
    return {
      address: accounts[0],
      provider: window.ethereum
    };
  } catch (error: any) {
    if (error.code === 4001) {
      throw new Error('Connection request was rejected');
    }
    throw error;
  }
};

// Trust Wallet Connection
const connectTrustWallet = async (wallet: Wallet) => {
  if (typeof window.trustwallet === 'undefined' && typeof window.ethereum === 'undefined') {
    throw new Error('Trust Wallet is not installed. Please install it from https://trustwallet.com');
  }

  const provider = window.trustwallet || window.ethereum;
  
  try {
    const accounts = await provider.request({ 
      method: 'eth_requestAccounts' 
    });
    
    return {
      address: accounts[0],
      provider: provider
    };
  } catch (error: any) {
    if (error.code === 4001) {
      throw new Error('Connection request was rejected');
    }
    throw error;
  }
};

// Coinbase Wallet Connection
const connectCoinbaseWallet = async (wallet: Wallet) => {
  if (typeof window.coinbaseWalletExtension === 'undefined' && typeof window.ethereum === 'undefined') {
    throw new Error('Coinbase Wallet is not installed. Please install it from https://www.coinbase.com/wallet');
  }

  const provider = window.coinbaseWalletExtension || window.ethereum;
  
  try {
    const accounts = await provider.request({ 
      method: 'eth_requestAccounts' 
    });
    
    return {
      address: accounts[0],
      provider: provider
    };
  } catch (error: any) {
    if (error.code === 4001) {
      throw new Error('Connection request was rejected');
    }
    throw error;
  }
};

// Generic wallet connection (for Ledger, Trezor, etc.)
const connectGenericWallet = async (wallet: Wallet) => {
  throw new Error(`${wallet.name} connection requires additional setup. Please use their official app or browser extension.`);
};

const connectWallet = async (wallet: Wallet) => {
  if (isConnecting.value) return;

  isConnecting.value = true;
  connectingWallet.value = wallet.id;
  errorMessage.value = '';

  try {
    let result;

    switch (wallet.id) {
      case 'metamask':
        result = await connectMetaMask(wallet);
        break;
      case 'trust':
        result = await connectTrustWallet(wallet);
        break;
      case 'coinbase':
        result = await connectCoinbaseWallet(wallet);
        break;
      case 'ledger':
      case 'trezor':
        result = await connectGenericWallet(wallet);
        break;
      default:
        throw new Error('Unsupported wallet');
    }

    emit('connect', {
      wallet,
      address: result.address,
      provider: result.provider
    });

    closeModal();
  } catch (error: any) {
    console.error('Wallet connection error:', error);
    errorMessage.value = error.message || 'Failed to connect wallet';
    emit('error', {
      wallet,
      message: error.message || 'Failed to connect wallet'
    });
  } finally {
    isConnecting.value = false;
    connectingWallet.value = '';
  }
};

const showWalletDetail = ref(false);
const selectedWallet = ref<Wallet | null>(null);

const openWalletDetail = (wallet: Wallet) => {
  selectedWallet.value = wallet;
  showWalletDetail.value = true;
};

const closeWalletDetail = () => {
  showWalletDetail.value = false;
  selectedWallet.value = null;
};

const showWeb3Modal = ref(false);
const selectedWalletForWeb3 = ref<Wallet | null>(null);

const connectingWalletId = computed(() => {
  return showWeb3Modal.value && selectedWalletForWeb3.value
    ? selectedWalletForWeb3.value.id
    : '';
});

function openWeb3Modal(wallet: Wallet) {
  selectedWalletForWeb3.value = wallet;
  showWeb3Modal.value = true;
}
function closeWeb3Modal() {
  showWeb3Modal.value = false;
  selectedWalletForWeb3.value = null;
}

// Watch for prop changes
watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal;
});

// Add type declarations for window
declare global {
  interface Window {
    ethereum?: any;
    trustwallet?: any;
    coinbaseWalletExtension?: any;
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
}

.tabs {
  display: flex;
  gap: 0.5rem;
}

.tab {
  padding: 0.5rem 1.25rem;
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.tab.active {
  background: #000;
  color: white;
}

.tab:hover:not(.active) {
  background: #f3f4f6;
}

.close-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: #6b7280;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #f3f4f6;
  color: #111827;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  min-height: 400px;
}

.wallet-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wallet-list-panel {
  max-height: 350px;
  overflow-y: auto;
  padding-right: 8px;
}

.section-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem 0;
}

.wallet-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.wallet-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: none;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  position: relative;
  font-family: inherit;
}

.wallet-item:hover:not(:disabled) {
  background: #f9fafb;
  transform: translateX(4px);
}

.wallet-item:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}



.wallet-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 6px;
}

.wallet-icon svg {
  width: 100%;
  height: 100%;
}

.icon-emoji {
  font-size: 24px;
}

.wallet-name {
  flex: 1;
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
}

.recommended-badge {
  padding: 0.25rem 0.75rem;
  background: #d1fae5;
  color: #065f46;
  font-size: 0.65rem;
  font-weight: 700;
  border-radius: 12px;
  letter-spacing: 0.5px;
}

.connecting-spinner {
  font-size: 1.25rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.connection-panel {
  background: #f9fafb;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.connection-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
}

.globe-icon {
  color: #d1d5db;
}

.connection-text {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

.connecting-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
}

.spinner {
  font-size: 3rem;
  animation: spin 1s linear infinite;
  color: #667eea;
}

.connecting-text {
  color: #111827;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.connecting-subtext {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
}

.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
}

.error-icon {
  font-size: 3rem;
}

.error-title {
  color: #dc2626;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.error-message {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
  max-width: 300px;
}

.retry-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: inherit;
  transition: transform 0.2s;
}

.retry-button:hover {
  transform: translateY(-2px);
}

/* Custom scrollbar styles */
.wallet-list-panel::-webkit-scrollbar {
  width: 6px;
  background: #f3f4f6;
  border-radius: 8px;
}

.wallet-list-panel::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 8px;
}

.wallet-list-panel::-webkit-scrollbar-thumb:hover {
  background: #a1a1aa;
}

/* For Firefox */
.wallet-list-panel {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
}

/* Modal transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .modal-container,
.modal-fade-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.9);
}

/* Responsive styles */
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .connection-panel {
    min-height: 200px;
  }

  .modal-header {
    padding: 1rem 1.5rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .tab {
    padding: 0.4rem 1rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .modal-container {
    border-radius: 16px;
    max-height: 95vh;
  }

  .modal-overlay {
    padding: 0.5rem;
  }

  .wallet-item {
    padding: 0.875rem;
  }

  .wallet-name {
    font-size: 0.9rem;
  }

  .recommended-badge {
    font-size: 0.6rem;
    padding: 0.2rem 0.6rem;
  }

  .globe-icon svg {
    width: 48px;
    height: 48px;
  }

  .connection-text {
    font-size: 0.9rem;
  }
}

.web3-modal-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.wallet-header-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
}

.wallet-header-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

