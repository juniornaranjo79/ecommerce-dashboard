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
      <label class="category-label">Categoría</label>
      <select
        :value="category"
        @change="onCategoryChange"
        class="filter-select"
      >
        <option value="All">Todas</option>
        <option value="Electronics">Electrónica</option>
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
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .filters-container {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}

.search-field {
  flex: 1;
  max-width: 320px;
}

.category-field {
  align-items: center;
  display: flex;
  gap: var(--space-3);
}

.category-label {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
}

.filter-input {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-3);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  width: 100%;
}

.filter-input::placeholder {
  color: var(--text-tertiary);
}

.filter-input:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
  outline: none;
}

.filter-select {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  cursor: pointer;
  font-size: var(--text-sm);
  padding: var(--space-2) var(--space-3);
  transition: border-color 0.2s ease;
}

.filter-select:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
  outline: none;
}
</style>
