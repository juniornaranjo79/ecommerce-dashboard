<template>
  <main class="dashboard">
    <header class="dashboard-header">
      <h1>Productos Dashboard</h1>
      <p>Explora nuestro catálogo</p>
    </header>
    <section class="filters">
      <ProductFilters
        v-model:search="search"
        v-model:category="selectedCategory"
      />
    </section>
    <section class="products">
      <div class="products-grid">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <div v-if="paginatedProducts.length === 0" class="empty-state">
        <p>No se encontraron productos</p>
      </div>
      <Pagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :total-pages="totalPages"
      />
    </section>
  </main>
</template>
<script setup lang="ts">
import Pagination from "../../components/Pagination.vue";
import ProductCard from "../../components/ProductCard.vue";
import { useProducts } from "../../composable/useProducts";
import ProductFilters from "../../components/ProductFilters.vue";

const { search, selectedCategory, currentPage, totalPages, paginatedProducts } =
  useProducts();
</script>
<style scoped>
.dashboard {
  padding: var(--space-4);
}

.dashboard-header {
  padding-bottom: var(--space-5);
  h1 {
    padding-bottom: var(--space-1);
  }
}

.filters {
  padding-bottom: var(--space-5);
}

.products-grid {
  display: grid;
  gap: var(--space-3);
  grid-template-columns: 1fr;
}

@media (min-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .products-grid {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
}

.empty-state {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: var(--space-5);
}

.empty-state p {
  color: var(--text-tertiary);
  font-size: var(--text-base);
}
</style>
