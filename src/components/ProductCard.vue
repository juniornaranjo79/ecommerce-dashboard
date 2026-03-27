<template>
  <article class="product-card">
    <div class="product-image-container">
      <img :src="product.image" :alt="product.name" loading="lazy" />
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <span class="category-badge">{{ product.category }}</span>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <router-link
        :to="{ name: 'ProductDetail', params: { id: product.id } }"
        class="view-detail-btn"
        >Ver detalle</router-link
      >
    </div>
  </article>
</template>
<script setup lang="ts">
import type { Product } from "../type";

interface Props {
  product: Product;
}

const props = defineProps<Props>();
</script>
<style scoped>
.product-card {
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
}

.product-image-container {
  height: 200px;
  width: 100%;
  img {
    border-radius: 8px;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

.product-info {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
}

.category-badge {
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--white);
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  padding: 0.2rem;
  text-transform: uppercase;
  width: 80%;
}

.product-title {
  color: var(--text-h);
  font-size: 1.25rem;
  margin: 0;
}

.product-price {
  color: var(--text-p);
  font-size: 1.1rem;
  font-weight: 700;
}

.view-detail-btn {
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--white);
  font-weight: 600;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s;
}

.view-detail-btn:hover {
  background-color: var(--bg-hover);
}
</style>
