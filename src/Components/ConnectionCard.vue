<template>
  <div class="connection-card">
    <div v-if="bestMatch" class="best-match">
      <h1>Best Match</h1>
    </div>
    <!-- <div
      v-for="(value, key) in connectionData"
      :key="key"
      class="connection-item"
    >
      <span class="label">{{ key }}:</span>
      <span class="value">{{ value }}</span>
    </div> -->
    <div class="connection-item">
      <h3>{{ connectionData.name }}</h3>
      <p><b>Distance:</b> {{ connectionData.distance }} miles</p>
      <p><b>Connection:</b> {{ connectionData.connection }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bestMatch: { type: Boolean, required: false, default: false },
  connectionData: { type: Object, required: true, default: () => ({}) },
});
</script>

<style scoped>
.connection-card {
  border: 3px solid #cbd5e1;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
}
.best-match {
  padding: 20px;
  max-width: 400px;
  margin: 0;
}
.connection-item {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connection-item p {
  margin: 0;
  padding: 0 20px;
}
.label {
  font-weight: bold;
  margin-right: 5px;
}
.value {
  color: #555;
}
</style>
