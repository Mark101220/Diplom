<script setup>
import Product from "~/components/layouts/Product.vue";
import { allProducts } from "~/scripts/mock/mock-products.js";
import Pagination from "~/components/UI/Pagination.vue";
</script>

<template>
  <main class="page-wrapper">
    <div class="container">
      <div class="products-list">
        <Product
          v-for="product in allProducts"
          :name="product.name"
          :sizes="product.sizes"
          :price="product.price"
          :image="product.image"
          :url="product.url"
        />
      </div>
      <Pagination />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";

.container {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;

  margin-top: 32px;
  margin-bottom: 32px;

  width: 100%;
}
</style>
