<template>
  <Header />
  <form @submit.prevent>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Account Number</th>
          <th v-text="state.account?.accountNumber" />
        </tr>
        <tr>
          <th>Account Signing Key</th>
          <th v-text="state.account?.signingKey" />
        </tr>
        <tr>
          <th>Node Identifier</th>
          <th v-text="state.nodeIdentifier?.accountNumber" />
        </tr>
        <tr>
          <th>Node Identifier Signing Key</th>
          <th v-text="state.nodeIdentifier?.signingKey" />
        </tr>
        <tr>
          <th>Server Password (Optional)</th>
          <th v-text="state.serverPassword" />
        </tr>
      </tbody>
    </table>
    <input
      type="submit"
      autofocus
      value="Regenerate Data"
      @click="updateData"
    />
  </form>
  <Footer />
</template>

<script>
import { reactive } from "vue";
import { generateKeyPair } from "./utils/generate-key-pair.js";
import { generatePassword } from "./utils/generate-password.js";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: { Header, Footer },
  setup() {
    const state = reactive({
      account: null,
      nodeIdentifier: null,
    });

    function updateData() {
      {
        // account
        const { public: accountNumber, secret: signingKey } = generateKeyPair();
        state.account = {
          accountNumber,
          signingKey,
        };
      }
      {
        // server node info
        const { public: accountNumber, secret: signingKey } = generateKeyPair();
        state.nodeIdentifier = {
          accountNumber,
          signingKey,
        };
      }
      {
        // server password
        state.serverPassword = generatePassword(50);
      }
    }

    updateData();

    return {
      state,
      updateData,
    };
  },
};
</script>

<style lang="scss">
table {
  margin: 1.5rem 0;
  border-collapse: collapse;

  &,
  tr,
  th {
    border: 1px solid #333;
  }

  th {
    padding: 1rem;
  }
}

input {
  cursor: pointer;
  transition: 150ms ease;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 0.25rem 0.75rem;
  background: transparent;
  outline: none;
  box-shadow: 5px 5px 2px -2px rgba(0, 0, 0, 0.75);
  border: 1px solid black;

  &:active {
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 3.5px 3.5px 2px -2px rgba(0, 0, 0, 0.75);
  }
}
</style>
