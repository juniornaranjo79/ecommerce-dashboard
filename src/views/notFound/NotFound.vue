<template>
  <main class="not-found">
    <div class="content">
      <h1 class="error-code">404</h1>
      <div class="divider"></div>
      <h2 class="error-message">Página no encontrada</h2>
      <p class="description">
        Lo sentimos, la página que buscas no existe o ha sido movida a otra
        ubicación.
      </p>

      <div class="actions">
        <router-link to="/" class="btn btn-primary"> Ir al Inicio </router-link>

        <button @click="goBack" class="btn btn-outline">Volver atrás</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.not-found {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  padding: var(--space-5);
  text-align: center;
}

.content {
  max-width: 500px;
}

.error-code {
  background: linear-gradient(135deg, var(--accent) 0%, var(--bg-hover) 100%);
  background-clip: text;
  font-size: 5rem;
  font-weight: 900;
  margin: 0;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.divider {
  background-color: var(--accent);
  border-radius: var(--radius-sm);
  height: 4px;
  margin: var(--space-5) auto;
  width: 60px;
}

.error-message {
  color: var(--text-primary);
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
}

.description {
  color: var(--text-secondary);
  margin-bottom: var(--space-5);
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  justify-content: center;
}

.btn {
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--text-base);
  font-weight: 600;
  padding: var(--space-2) var(--space-5);
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background-color: var(--accent);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--accent);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  border-color: var(--accent);
  color: var(--accent);
}

.btn-outline:hover {
  background-color: var(--bg-hover);
  border-color: var(--bg-hover);
  color: var(--white);
}

/* Responsive */
@media (min-width: 768px) {
  .actions {
    flex-direction: row;
  }

  .error-code {
    font-size: 8rem;
  }
}
</style>
