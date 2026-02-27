<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useFormStore } from "../stores/formStore.js";
import TextBox from "./TextBox.vue";
import SelectMultiple from "./SelectMultiple.vue";

const router = useRouter();
const formStore = useFormStore();

const full_name = computed({
  get: () => formStore.formData.full_name,
  set: (value) => formStore.updateField("full_name", value),
});

const languages = computed({
  get: () => formStore.formData.languages,
  set: (value) => formStore.updateField("languages", value),
});

const highschool_name = computed({
  get: () => formStore.formData.highschool_name,
  set: (value) => formStore.updateField("highschool_name", value),
});

const highschool_lat = computed({
  get: () => formStore.formData.highschool_lat,
  set: (value) => formStore.updateField("highschool_lat", value),
});

const highschool_lon = computed({
  get: () => formStore.formData.highschool_lon,
  set: (value) => formStore.updateField("highschool_lon", value),
});

const mis1_name = computed({
  get: () => formStore.formData.mis1_name,
  set: (value) => formStore.updateField("mis1_name", value),
});

const mis1_lat = computed({
  get: () => formStore.formData.mis1_lat,
  set: (value) => formStore.updateField("mis1_lat", value),
});

const mis1_lon = computed({
  get: () => formStore.formData.mis1_lon,
  set: (value) => formStore.updateField("mis1_lon", value),
});

const mis2_name = computed({
  get: () => formStore.formData.mis2_name,
  set: (value) => formStore.updateField("mis2_name", value),
});

const mis2_lat = computed({
  get: () => formStore.formData.mis2_lat,
  set: (value) => formStore.updateField("mis2_lat", value),
});

const mis2_lon = computed({
  get: () => formStore.formData.mis2_lon,
  set: (value) => formStore.updateField("mis2_lon", value),
});

function onSubmit() {
  const payload = formStore.getFormData();
  console.log("Form submit:", payload);
  // Future: call API to query database
  router.push("/results");
}
</script>

<template>
  <div class="friends-form-wrapper">
    <form @submit.prevent="onSubmit" @keydown.enter.prevent>
      <div class="form-inputs">
        <div class="row-wrapper">
          <TextBox v-model="full_name" title="Full Name" />
          <TextBox
            v-model="highschool_name"
            title="Where did you Graduate High School?"
          />
        </div>
        <div class="row-wrapper">
          <SelectMultiple v-model="languages" title="Languages Spoken" />
          <TextBox
            v-model="mis1_name"
            title="Where did you serve your mission?"
          />
        </div>
        <div class="second-mission">
          <p>
            Have you served in another mission? Enter that second location here!
          </p>
          <TextBox v-model="mis2_name" title="Second Mission Location" />
        </div>
        <div class="row-wrapper">
          <TextBox v-model="mis1_lat" title="Mission 1 Latitude" />
          <TextBox v-model="mis1_lon" title="Mission 1 Longitude" />
        </div>
        <div class="row-wrapper">
          <TextBox v-model="mis2_lat" title="Mission 2 Latitude" />
          <TextBox v-model="mis2_lon" title="Mission 2 Longitude" />
        </div>
        <div class="row-wrapper">
          <TextBox v-model="highschool_lat" title="High School Latitude" />
          <TextBox v-model="highschool_lon" title="High School Longitude" />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.friends-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border: 5px solid #88b940;
  border-radius: 1em;
  padding: 1.5em 1em;
}

.form-inputs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 900px;

  @media (max-width: 850px) {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #318760;
}

.row-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  align-items: center;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
  }
}

.second-mission {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second-mission p {
  margin-block-end: -5px;
}
</style>
