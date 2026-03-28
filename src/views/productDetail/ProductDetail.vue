<template>
  <div v-if="product" class="product-detail">
    <div class="detail-container">
      <router-link to="/" class="return-btn"
        ><span class="return-icon">←</span>Volver al listado</router-link
      >
      <div class="detail-grid">
        <div class="img-container">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="info-container">
          <span class="category-badge">{{ product.category }}</span>
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-price">${{ product.price.toFixed(2) }}</p>
          <p>{{ product.description }}</p>
        </div>
      </div>
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
  padding: var(--space-4);
}

.detail-container {
  max-width: 1024px;
  margin: 0 auto;
}

.product-title {
  margin: 0;
}

.product-price {
  color: var(--text-primary);
  font-size: 1.85rem;
  font-weight: 700;
}

.return-btn {
  align-items: center;
  color: var(--text-secondary);
  display: inline-flex;
  font-size: var(--text-sm);
  font-weight: 500;
  gap: var(--space-2);
  padding-bottom: var(--space-5);
  transition: color 0.2s ease;
}

.return-btn:hover {
  color: var(--accent);
}

.return-icon {
  font-size: var(--text-lg);
}

.detail-grid {
  display: grid;
  gap: var(--space-5);
}

@media (min-width: 768px) {
  .detail-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.img-container {
  aspect-ratio: 4/3;
  background: var(--white);
  border: 1px solid var(--bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.category-badge {
  align-self: flex-start;
  background-color: var(--accent);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.05em;
  padding: var(--space-1) var(--space-2);
  text-transform: uppercase;
  width: fit-content;
}

@media (min-width: 768px) {
  .product-detail {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
