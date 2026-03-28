<template>
  <nav class="pagination" aria-label="Navegación de páginas">
    <button
      class="page-btn"
      :disabled="modelValue <= 1"
      @click="updatePage(modelValue - 1)"
    >
      &laquo; Anterior
    </button>

    <div class="page-numbers">
      <button
        v-for="page in totalPages"
        :key="page"
        class="page-number-btn"
        :class="{ active: page === modelValue }"
        @click="updatePage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="page-btn"
      :disabled="modelValue >= totalPages"
      @click="updatePage(modelValue + 1)"
    >
      Siguiente &raquo;
    </button>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  modelValue: number;
  totalPages: number;
}

const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const updatePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= props.totalPages) {
    emit("update:modelValue", newPage);
  }
};
</script>

<style scoped>
.pagination {
  align-items: center;
  display: flex;
  gap: var(--space-3);
  justify-content: center;
  margin-top: var(--space-5);
  padding: var(--space-4);
}

.page-numbers {
  display: flex;
  gap: var(--space-2);
}

.page-btn,
.page-number-btn {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--accent);
  cursor: pointer;
  padding: var(--space-2) var(--space-4);
  transition: all 0.2s;
}

.page-btn:disabled {
  background: var(--bg-disabled);
  color: var(--text-disabled);
  cursor: not-allowed;
}

.page-number-btn:hover:not(.active) {
  background: var(--white);
  color: var(--accent);
}

.page-number-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
  font-weight: 500;
}
</style>
