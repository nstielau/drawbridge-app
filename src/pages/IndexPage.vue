<template>
  <q-page class="flex justify-center item-start">
    <div v-if="!fqdn">
      <div class="row" style="padding-top: 10rem;">
        <h3>Please set domain name.</h3>
      </div>
      <div class="row">
        <input type="text" ref="fqdn_input">
        <button @click="set_fqdn">Save domain name</button>
      </div>
    </div>
    <div v-else>
      <div v-if="isOpen" class="row justify-center">
        <h4>Gate is Open</h4>
      </div>
      <div v-else class="row">
        <h4>Gate is Closed</h4>
      </div>
      <div class="row">
        <q-btn class="q-ma-lg q-px-lg q-py-md" 
               :loading="isWaitingResponse"
               color="warning"
               label="Open 1m"
               @click="open(60)"/>
        <q-btn class="q-ma-lg q-px-lg q-py-md"
               :loading="isWaitingResponse"
               color="warning"
               label="Open 10m"
               @click="open(600)"/>      
      </div>
      <div class="row">
        <q-btn class="q-ma-lg q-px-lg q-py-md"
               :loading="isWaitingResponse"
               color="warning"
               label="Open 30m"
               @click="open(1800)"/>
        <q-btn class="q-ma-lg q-px-lg q-py-md"
               :loading="isWaitingResponse"
               color="warning"
               label="Open 60m"
               @click="open(3600)"/>      
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      fqdn: localStorage.getItem('fqdn'),
      isWaitingResponse: false,
      isOpen: false
    }
  },
  mounted() {
    this.getGateStatus();
  },
  methods: {
    set_fqdn() {
      localStorage.setItem('fqdn', this.$refs.fqdn_input.value);
      this.fqdn = this.$refs.fqdn_input.value;
    },
    getGateStatus() {
      axios.request('https://' + this.fqdn + '/open', {
        method: 'GET'
      }).then(response => {
        console.log("Gate is open: ", response.data.connected)
        this.isOpen = response.data.connected;
      }).catch(error => console.log("Error loading gate", error));
    },
    open(seconds) {
      this.isWaitingResponse = true;
      axios.request('https://' + this.fqdn + '/open', {
        method: 'POST',
        data: seconds
      }).then(response => {
        console.log("Success opening gate", response)
        this.isWaitingResponse = false;
        this.isOpen = true;
      }).catch(error => console.log("Error opening gate", error));
    } 
  }
})
</script>

<style>
 input {
  width: 50%;
}
</style>