<template>
  <q-page class="flex flex-center">
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
      <div class="row">
        <q-btn class="q-ma-lg q-px-lg q-py-md" 
               :loading="loading"
               color="warning"
               label="Open 1m"
               @click="open(60)"/>
        <q-btn class="q-ma-lg q-px-lg q-py-md"
               color="warning"
               label="Open 10m"
               @click="open(600)"/>      
      </div>
      <div class="row">
        <q-btn class="q-ma-lg q-px-lg q-py-md"
               color="warning"
               label="Open 30m"
               @click="open(1800)"/>
        <q-btn class="q-ma-lg q-px-lg q-py-md"
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
      loading: false
    }
  },
  methods: {
    set_fqdn() {
      localStorage.setItem('fqdn', this.$refs.fqdn_input.value);
      this.fqdn = this.$refs.fqdn_input.value;
    },
    open(seconds) {
      this.loading = true;

      axios.request('https://' + this.fqdn + '/open', {
        method: 'POST',
        data: seconds
      }).then(response => {
        console.log("Success opening gate", response)
        this.loading = false;
      }).catch(error => {
        console.log("Error opening gate", error);
        this.loading = false;
      });
    } 
  }
})
</script>

<style>
 input {
  width: 50%;
}
</style>