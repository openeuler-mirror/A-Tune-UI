<template>
  <div class="row q-pa-sm">
    <div class="col-12 col-sm-4  text-subtitle1 text-weight-bolder">
    </div>
    <div class="col-12 col-sm-8  q-gutter-md">
      <div class="flex items-center content-center q-gutter-md">
        <q-chip outline color="blue" text-color="blue" removable @remove="remove">{{ tunningArgument }}</q-chip>
        <q-input @blur="update" v-model="projectName" v-if="tunningArgument === '--project'" color="blue"
          label="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  tunningArgument: {
    type: String,
    default: '',
  },

});

let projectName = ref('');

let emit = defineEmits(["update","remove"]);

const update = () => {
  emit("update", projectName.value);
}

const remove = () => {
  emit("remove", props.tunningArgument);
}

</script>