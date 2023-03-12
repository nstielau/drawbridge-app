<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Drawbridge
        </q-toolbar-title>

        <div>Drawbridge v0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Settings
        </q-item-label>

        <q-item>
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Domain Name</q-item-label>
            <q-item-label caption>{{ fqdn || "No FQDN set"}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="clearFQDN">
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Clear FQDN</q-item-label>
          </q-item-section>
        </q-item>        
      </q-list>
    </q-drawer>

    <q-page-container key="fqdn">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data() {
    return {
      fqdn: localStorage.getItem('fqdn')
    }
  },
  methods: {
    clearFQDN() {
      this.fqdn= null;
      localStorage.removeItem("fqdn");
    }
  },
})
</script>
