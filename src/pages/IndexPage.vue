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
      <div v-if="isOpen" >
        <div class="row justify-center">
          <h4>Gate is Open</h4>
        </div>
        <div class="row justify-center">
          <q-btn class="q-ma-lg q-px-lg q-py-md"
                 :loading="isWaitingResponse"
                 color="negative"
                 label="Release gate hold"
                 @click="release_hold()"/>
         </div>
      </div>
      <div v-else class="row justify-center">
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
      isWaitingResponse: false,
      isOpen: false
    }
  },
  computed: {
    fqdn() {
      if (localStorage.getItem('fqdn')) {
        return localStorage.getItem('fqdn');
      }
      return new URL(window.location).searchParams.get('fqdn')
    }
  },
  mounted() {
    this.getGateStatus();
  },
  methods: {
    set_fqdn() {
      var new_fqdn = this.$refs.fqdn_input.value;
      try {
        new_fqdn = new URL(new_fqdn).hostname;
      } catch {}
      localStorage.setItem('fqdn', new_fqdn);
      this.fqdn = new_fqdn;
    },
    getGateStatus() {
      axios.request('https://' + this.fqdn + '/hold', {
        method: 'GET'
      }).then(response => {
        console.log("Gate is open: ", response.data.connected)
        this.isOpen = response.data.connected;
      }).catch(error => console.log("Error loading gate status", error));
    },
    open(seconds) {
      this.isWaitingResponse = true;
      axios.request('https://' + this.fqdn + '/hold', {
        method: 'POST',
        data: seconds
      }).then(response => {
        console.log("Success opening gate", response)
        this.isWaitingResponse = false;
        this.isOpen = true;
      }).catch(error => console.log("Error opening gate", error));
    },
    release_hold() {
      this.isWaitingResponse = true;
      axios.request('https://' + this.fqdn + '/hold/cancel', {
        method: 'POST'
      }).then(response => {
        console.log("Release hold on gate", response)
        this.isWaitingResponse = false;
        this.isOpen = false;
      }).catch(error => console.log("Error release gate hold", error));
    }
  }
})
</script>

<style>
 input {
  width: 50%;
}
</style>