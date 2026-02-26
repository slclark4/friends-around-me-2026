<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  title: { type: String, required: false, default: "" },
  boxValue: { type: String, required: false, default: "" },
  modelValue: { type: Boolean, required: false, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <p class="title">{{ props.title }}</p>
    <p class="text">{{ props.boxValue }}</p>
    <input type="checkbox" v-model="inputValue" />
  </div>
</template>

<style scoped>
.title {
  margin-block-end: 5px;
  font-size: 1.1em;
}

.text {
  margin-block-end: 5px;
  font-size: 0.9em;
  color: var(--color-text);
}

input {
  padding: 8px;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  width: 350px;
  box-sizing: border-box;
}
</style>
