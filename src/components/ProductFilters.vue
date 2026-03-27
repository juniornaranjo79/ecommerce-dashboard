<template>
  <div class="filters-container">
    <div class="search-field">
      <input
        :value="search"
        @input="onSearchChange"
        placeholder="Buscar por nombre..."
        class="filter-input"
        type="text"
      />
    </div>
    <div class="category-field">
      <p>Filtrar por:</p>
      <select
        :value="category"
        @change="onCategoryChange"
        class="filter-select"
      >
        <option value="All">Todas las categorías</option>
        <option value="Electronics">Electronica</option>
        <option value="Clothing">Ropa</option>
        <option value="Home">Hogar</option>
      </select>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  search: string;
  category: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:search", value: string): void;
  (e: "update:category", value: string): void;
}>();

const onSearchChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:search", target.value);
};

const onCategoryChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("update:category", target.value);
};
</script>
<style scoped>
.filters-container {
  align-items: center;
  background: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  margin: 0.85rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
}

.filter-input,
.filter-select {
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 1rem;
  padding: 0.6rem 1rem;
}

.filter-input {
  flex: 1;
  min-width: 250px;
}

.filter-select {
  cursor: pointer;
  min-width: 180px;
}
</style>
