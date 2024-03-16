<script lang="ts">
import { defineComponent } from 'vue';
import DataTable from "./DataTable.vue";
import { Class, MasterDataObject } from '../types';

export default defineComponent({

  data() {
    return {
      SelectedClass: undefined as unknown as Class
    };
  },

  props: {
    Data: { type: Object as () => MasterDataObject, required: true }
  },

  beforeMount() {
    console.log(this.Data);
  },

  components: {
    'DataTable': DataTable,
  },

  methods: {
    
    GetClassToEdit(id: string) {
      this.SelectedClass = this.Data.classes.find((element: Class) => element.id == id ) as Class;
      this.SelectedClass.traits = JSON.parse(this.SelectedClass.traits);
      this.SelectedClass.equipment = JSON.parse(this.SelectedClass.equipment);
      this.SelectedClass.attributes = JSON.parse(this.SelectedClass.attributes);
    },

    UpdateClass () {

    },

    CreateClass () {

    }

  }

});
</script>

<template>

  <div style="display: flex;">
    <div style="width: 50%;">
      <h2>Classes</h2>
      <DataTable @getObject="(id: string) => GetClassToEdit(id)" :Data="Data.classes"></DataTable>
    </div>
    <div  style="width: 50%; margin-left: 8px;" v-if="SelectedClass !== undefined">
      <form style="display: flex; flex-direction: column;">
        <input type="hidden" name="object_type" value="Class">
        <label>ID</label>
        <input type="text" :value="SelectedClass.id">
        <br>
        <label>Name</label>
        <input type="text" :value="SelectedClass.name">
        <br>
        <label>Description</label>
        <textarea>{{ SelectedClass.description }}</textarea>
        <hr>
        <label>Resource</label>
        <input type="text" :value="SelectedClass.resource">
        <hr>
        <label>Attributes</label>
        <div class="attribute-container">
          <div v-for="([key, value]) in Object.entries(SelectedClass.attributes)" class="attribute">
            <label style="color: white;" v-text="key"></label>
            <input type="text" :value="value" style="width: 20px;">
          </div>
        </div>
        <hr>
        <button type="button" class="btn btn-primary btn-sm" id="update-object-button">Update</button>
      </form>
    </div>
  </div>

</template>../types