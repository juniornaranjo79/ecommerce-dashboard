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
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.product-card:hover {
  border-color: var(--border);
  box-shadow: var(--shadow);
}

.product-image-container {
  aspect-ratio: 4 / 3;
  width: 100%;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
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
}

.product-title {
  color: var(--text-primary);
  font-size: var(--text-xl);
}

.product-price {
  color: var(--text-primary);
  font-size: var(--text-lg);
  font-weight: 700;
}

.view-detail-btn {
  background-color: var(--accent);
  border-radius: var(--radius-sm);
  color: var(--white);
  display: block;
  font-weight: 500;
  padding: var(--space-2) var(--space-4);
  text-align: center;
  transition: background 0.2s ease;
}

.view-detail-btn:hover {
  background-color: var(--bg-hover);
}
</style>
