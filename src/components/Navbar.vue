<script lang="ts">

export default {

  data() {
    return {
        NavItems: [
          'Classes', 
          'Abilities',
          'Attributes'
        ]
    }
  },

  props: ['CurrentMenu'],

  async created() {
    //
  },

  methods: {

    ChangeMenu( menu: string ) {
      this.$emit("changeMenu", menu);
    }

  }

}
</script>

<template>
    <div id="navbar" style="display: flex;">
      <button type="button" v-for="item in NavItems" @click="ChangeMenu(item)">{{ item }}</button>
    </div>
</template>