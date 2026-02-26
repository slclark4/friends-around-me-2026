import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useFormStore = defineStore("form", () => {
  const STORAGE_KEY = "formData";

  const defaultData = {
    full_name: "",
    languages: [],
    highschool_name: "",
    highschool_lat: "",
    highschool_lon: "",
    mis1_name: "",
    mis1_lat: "",
    mis1_lon: "",
    mis2_name: "",
    mis2_lat: "",
    mis2_lon: "",
  };

  let saved = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    saved = raw ? JSON.parse(raw) : null;
  } catch (e) {
    saved = null;
  }

  const formData = ref(saved ?? defaultData);

  watch(
    formData,
    (val) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      } catch (e) {
        // ignore localStorage write errors
      }
    },
    { deep: true },
  );

  function setFormData(data) {
    formData.value = {
      ...formData.value,
      ...data,
    };
  }

  function updateField(field, value) {
    formData.value[field] = value;
  }

  function resetForm() {
    formData.value = {
      full_name: "",
      languages: [],
      highschool_name: "",
      highschool_lat: "",
      highschool_lon: "",
      mis1_name: "",
      mis1_lat: "",
      mis1_lon: "",
      mis2_name: "",
      mis2_lat: "",
      mis2_lon: "",
    };
  }

  function getFormData() {
    return formData.value;
  }

  return {
    formData,
    setFormData,
    updateField,
    resetForm,
    getFormData,
  };
});
