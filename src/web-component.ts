import { defineCustomElement } from 'vue'
import ModalWallet from './components/ModalWallet.vue'

const WalletModalElement = defineCustomElement(ModalWallet)
customElements.define('wallet-modal', WalletModalElement)