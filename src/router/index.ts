import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/dashboard/Dashboard.vue"),
    meta: { title: "Panel de Productos" },
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () => import("../views/productDetail/ProductDetail.vue"),
    props: true,
    meta: { title: "Detalle del Producto" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/notFound/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  const title = to.meta.title as string;
  if (title) {
    document.title = `${title} - E-commerce`;
  }
});

export default router;
