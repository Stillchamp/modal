<template>
  <div class="app-container">
    <div class="demo-card">
      <h1>Web3 Wallet Connect</h1>
      <p>Connect your favorite wallet to get started with Web3</p>
      
      <div v-if="connectedWallet" class="success-message">
        ✓ Connected to {{ connectedWallet.wallet.name }}
        <div class="address">{{ shortenAddress(connectedWallet.address) }}</div>
      </div>

      <div v-if="errorMessage" class="error-message">
        ⚠️ {{ errorMessage }}
      </div>
      
      <button @click="showModal = true" class="connect-button">
        {{ connectedWallet ? 'Change Wallet' : 'Connect Wallet' }}
      </button>
    </div>

    <WalletModal 
      v-model="showModal" 
      @connect="handleConnect"
      @error="handleError"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WalletModal from '@/components/ModalWallet.vue';

const showModal = ref(false);
const connectedWallet = ref<any>(null);
const errorMessage = ref('');

const handleConnect = (data: any) => {
  console.log('Connected:', data);
  connectedWallet.value = data;
  errorMessage.value = '';
  
  // Now you have access to:
  // data.wallet - wallet info
  // data.address - user's wallet address
  // data.provider - Web3 provider for transactions
};

const handleError = (error: any) => {
  console.error('Connection error:', error);
  errorMessage.value = error.message;
  
  // Clear error after 5 seconds
  setTimeout(() => {
    errorMessage.value = '';
  }, 5000);
};

const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
</script>

<style scoped>

.error-message {
  padding: 1rem;
  background: #fee;
  color: #c00;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.address {
  font-size: 0.85rem;
  font-family: monospace;
  margin-top: 0.5rem;
}

.app-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.demo-card {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #111827;
  font-weight: 700;
}

p {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.success-message {
  padding: 1.5rem;
  background: #f0fdf4;
  border-radius: 12px;
  margin-bottom: 1rem;
  color: #065f46;
  font-weight: 600;
}

.connect-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;
  font-family: inherit;
}

.connect-button:hover {
  transform: translateY(-2px);
}
</style>