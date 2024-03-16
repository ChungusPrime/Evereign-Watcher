<script lang="ts">

import { MasterDataObject } from "../types";
import DataTable from "./DataTable.vue";

export default {
  data() {
    return {}
  },

  props: {
    Data: { type: Object as () => MasterDataObject, required: true }
  },

  components: {
    'DataTable': DataTable,
  },

  async mounted() {},

  methods: {}

}
</script>

<template>
  <div class="container">
    <h2>Attributes</h2>
    <DataTable :Data="Data.attributes"></DataTable>
  </div>
</template>