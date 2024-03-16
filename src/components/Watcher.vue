<script lang="ts">
import Navbar from "./Navbar.vue";
import ClassEditor from "./ClassEditor.vue";
import AbilityEditor from "./AbilityEditor.vue";
import AttributeEditor from "./AttributeEditor.vue";

export default {
  data() {
    return {
      Data: null,
      CurrentMenu: "Classes"
    }
  },

  components: {
    'Navbar': Navbar,
    'ClassEditor': ClassEditor,
    'AbilityEditor': AbilityEditor,
    'AttributeEditor': AttributeEditor,
  },

  async beforeMount () {
    await this.loadData();
  },

  methods: {
    async loadData() {
      const response = await fetch("http://localhost:8081/master_data");
      const data = await response.json();
      this.Data = data.MasterData;
    },

    ChangeMenu ( menu: string ) {
      this.CurrentMenu = menu;
      console.log(menu, this.CurrentMenu);
    }
  }
}
</script>

<template>
  <div class="container">
      <div class="header">
        <h1>Evereign - Watcher</h1>
      </div>
      <hr>
      <Navbar @changeMenu="(menu) => ChangeMenu(menu)"></Navbar>
      <hr>
      <div class="row">
        <div id="tables-container">
          <ClassEditor v-if="Data !== null" v-show="CurrentMenu === 'Classes'" :Data="Data"></ClassEditor>
          <AbilityEditor v-if="Data !== null" v-show="CurrentMenu === 'Abilities'" :Data="Data"></AbilityEditor>
          <AttributeEditor v-if="Data !== null" v-show="CurrentMenu === 'Attributes'" :Data="Data"></AttributeEditor>
        </div>
      </div>
  </div>
</template>