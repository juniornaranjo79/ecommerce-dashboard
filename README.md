# 🛒 E-commerce Product Dashboard

Este es un **Dashboard de Productos** desarrollado como una prueba técnica para **Frontend**. La aplicación permite gestionar un catálogo de productos con funcionalidades avanzadas de filtrado, búsqueda y navegación.

## 🚀 Tecnologías y Herramientas

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [Vue Router 4](https://router.vuejs.org/)
- **Estilos:** CSS3 (Scoped) con metodología **Mobile-First**

## ✨ Funcionalidades

- ✅ **Listado de Productos:** Visualización dinámica mediante una cuadrícula responsiva.
- ✅ **Búsqueda Avanzada:** Filtrado por nombre de producto en tiempo real.
- ✅ **Filtrado por Categoría:** Selector dinámico para segmentar el catálogo.
- ✅ **Paginación:** Sistema de navegación por páginas reutilizable.
- ✅ **Detalle de Producto:** Ruta dinámica para visualizar información específica por ID.
- ✅ **Manejo de Errores:** Página 404 integrada para rutas inexistentes.

## 🛠️ Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/juniornaranjo79/ecommerce-dashboard.git
    cd ecommerce-dashboard
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    _La aplicación se abrirá por defecto en `http://localhost:5173`_

## 📂 Estructura del Proyecto

```text
src/
├── assets/         # Estilos globales y recursos estáticos
├── components/     # Componentes de UI (Pagination, Filters, Card)
├── composables/    # Lógica de negocio (useProducts.ts)
├── mock/           # Base de datos local (JSON)
├── router/         # Configuración de rutas
├── types/          # Definiciones e interfaces de TypeScript
└── views/          # Páginas principales (Dashboard, Detail, NotFound)
```

## 📝 Notas de Arquitectura

- **Composables:** Se utilizó el patrón Composable (useProducts.ts) para separar la lógica de filtrado y paginación de la interfaz de usuario, facilitando el mantenimiento y las pruebas unitarias.
- **Responsive Design:** La cuadrícula de productos utiliza CSS Grid con un enfoque Mobile-First, ajustándose automáticamente de 1 a 3 columnas según el ancho de pantalla.
- **Clean Code:** Se aplicaron principios de responsabilidad única en cada componente.
