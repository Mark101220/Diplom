<script setup>
import Product from '~/components/layouts/Product.vue'
import { products } from '~/scripts/mock/mock-products.js';
</script>

<template>
<div class='list'>
      <Product
         v-for='product in products'
         :name='product.name'
         :sizes='product.sizes'
         :price='product.price'
         :image='product.image'
         :url='product.url'
      />
   </div>

</template>

<style lang="scss" scoped>
@mixin for-phone {
    @media (max-width: 960px) {
        @content;
    }
}

.list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;

    margin-top: 32px;
    margin-bottom: 32px;
    
    width: 100%;

    @include for-phone {
        grid-template-columns: 1fr;
        margin-left: 15px;
        margin-right: 15px;
        grid-gap: 0px;
    }
}

</style>