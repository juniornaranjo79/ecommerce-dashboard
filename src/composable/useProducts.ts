import { computed, ref } from "vue";
import type { Category, Product } from "../type";
import mockData from "../mock/products.json";

export function useProducts() {
  const products = ref<Product[]>(mockData);
  const search = ref("");
  const selectedCategory = ref<Category>("All");
  const currentPage = ref(1);
  const itemsPerPage = 5;

  const filteredProducts = computed(() => {
    const normalizeText = (text: string) =>
      text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    const searchTerm = normalizeText(search.value);

    return products.value.filter((product) => {
      const productName = normalizeText(product.name);
      const matchesName = productName.includes(searchTerm);
      const matchesCategory =
        selectedCategory.value === "All" ||
        product.category === selectedCategory.value;

      return matchesName && matchesCategory;
    });
  });

  const totalPages = computed(() =>
    Math.ceil(filteredProducts.value.length / itemsPerPage),
  );

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.value.slice(start, end);
  });

  const setCategory = (cat: Category) => {
    selectedCategory.value = cat;
    currentPage.value = 1;
  };

  return {
    search,
    selectedCategory,
    currentPage,
    totalPages,
    paginatedProducts,
    setCategory,
    allProducts: products,
  };
}
