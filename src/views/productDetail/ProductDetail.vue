<template>
  <div v-if="product" class="product-detail">
    <div class="img-container">
      <router-link to="/" class="return-btn">← Volver al listado</router-link>
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="info-container">
      <h2 class="product-title">{{ product.name }}</h2>
      <span class="category-badge">{{ product.category }}</span>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <div v-else><not-found /></div>
</template>

<script setup lang="ts">
import { useProducts } from "../../composable/useProducts";
import { computed } from "vue";
import NotFound from "../notFound/NotFound.vue";

const props = defineProps<{
  id: string;
}>();

const { allProducts } = useProducts();

const product = computed(() =>
  allProducts.value.find((product) => product.id === Number(props.id)),
);
</script>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  padding: 1rem;
}
.img-container {
  display: flex;
  flex-direction: column;
  gap: 15px;

  img {
    border-radius: 8px;
  }
}

.info-container {
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 1rem;
}

.product-title {
  margin: 0;
}

.product-price {
  color: var(--text-p);
  font-size: 1.85rem;
  font-weight: 700;
}

.return-btn {
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--white);
  font-weight: 600;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;
}

.category-badge {
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--white);
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  padding: 0.5rem;
  text-transform: uppercase;
  width: 50%;
}

@media (min-width: 768px) {
  .product-detail {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
