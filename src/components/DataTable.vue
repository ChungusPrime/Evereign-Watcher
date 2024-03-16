<script lang="ts">

export default {
  data() {
    return {}
  },

  props: ["Data"],

  emits: ["getObject"],

  components: {},

  async mounted() {
    console.log(this.Data);
  },

  methods: {
    GetObjectToEdit( id: string ) {
      this.$emit("getObject", id);
    }
  }

}
</script>

<template>
  <table>
    <thead>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td></td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in Data">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>
              <button @click="GetObjectToEdit(item.id)">Edit</button>
            </td>
        </tr>
    </tbody>
  </table>

  <div style="display: none;">

  </div>



</template>