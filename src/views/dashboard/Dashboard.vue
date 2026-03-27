<template>
  <main>
    <h1>Productos Dashboard</h1>
    <ProductFilters
      v-model:search="search"
      v-model:category="selectedCategory"
    />
    <section class="products">
      <div class="products-grid">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <Pagination v-model="currentPage" :total-pages="totalPages" />
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
.products {
  padding: 1rem;
}
.products-grid {
  display: grid;
  gap: 15px;
  grid-auto-rows: minmax(350px, auto);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .products-grid {
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
