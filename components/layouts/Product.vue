<script setup>
defineProps({
  image: {
    x1: String,
    x2: String,
  },
  name: String,
  sizes: String,
  price: String,
  url: String,
});
</script>

<template>
  <NuxtLink class="product-card" to="/product">
    <article class="product-preview">
      <div class="pic">
        <picture>
          <source :srcset="`${image.x2} 2x, ${image.x1}`" />
          <img :src="image.x1" :alt="name" class="image" />
        </picture>
        <div class="product-information">
          <h4 class="name">{{ name }}</h4>
          <p class="sizes">{{ sizes }}</p>
          <p class="price">от {{ price }} руб.</p>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/reset.scss';
@import '~/assets/styles/variables.scss';
@import '~/assets/styles/buttons.scss';

@mixin for-phone {
    @media (max-width: 960px) {
        @content;
    }
}

.product-card {
  text-decoration: none;
  color: black;
}

.product-preview {
  position: relative;
  background-color: $secondary100;
  border-radius: 8px;

  &:hover {
    background-color: $primary300;
  }

  @include for-phone {
    border-radius: 0px;
    border-bottom: 1px solid $tertiary300;
  }
}

.pic {
    display: grid;
    grid-template-rows: 230px 130px;
    padding: 5px;
    gap: 5px;

    @include for-phone {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 160px;
      gap: 0px;
    }
}

.image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    @include for-phone {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
}

.product-information {
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 8px;
    background-color: $tertiary300;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

    @include for-phone {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      background-color: $secondary100;
      color: $tertiary300;
    }
}

.name {
    font-size: 23px;
    font-weight: 700;
}

.sizes {
    font-size: 16px;
    font-weight: 400;
}

.price {
    font-size: 20px;
    font-weight: 500;
}
</style>