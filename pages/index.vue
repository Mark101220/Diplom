<script setup>
import ProductsPreview from '~/components/main-page/ProductsPreview.vue';
</script>

<template>
  <main class="page-wrapper">
    <section class="banner">
      <div class="container">
          <div class="banner-caption">
            <h1 class="banner-title">
              ООО "ПРИМСНАБ" – Ваш<br />
              надежный партнер в строительстве!
            </h1>
            <div class="banner-text">
              <p>Мы предлагаем:</p>
              <ul class="banner-list">
                <li>
                  Широкий ассортимент строительных и производственных
                  материалов.
                </li>
                <li>Высокое качество по низким ценам.</li>
              </ul>
              <p>
                Присоединяйтесь к нашему успешному опыту и начните строить
                сегодня!
              </p>
            </div>
            <NuxtLink class="button-link" to="/store">Магазин</NuxtLink>
        </div>
      </div>
    </section>
    <section class="products-preview">
      <div class="container">
        <h1 class="title">Наши товары</h1>
        <ProductsPreview />
        <NuxtLink class="button-link-all" to="/store">Показать все</NuxtLink>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";
@import '~/assets/styles/reset.scss';

@mixin for-phone {
  @media (max-width: 960px) {
    @content;
  }
}

.container {
  flex-direction: column;
  align-items: center;
  position: relative;
    justify-content: center;
  @include for-phone {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.banner {
  display: flex;
  justify-content: center;

  background-image: url('~/assets/images/banner.jpg');
  background-position: center;
  background-size: cover;
  height: 500px;
  width: 100%;
}

.banner-caption {
  position: absolute;
  right: 0;
  border-radius: 15px;
  background-color: $secondary200;
  padding: 37px 40px;
  border: 3px solid $secondary100;

  @include for-phone {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 0px;
    height: 424px;
  }
}

.banner-title {
  font-family: var(--font-title);
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 17px;
  color: $tertiary300;
}

.banner-text {
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 45px;
  color: $tertiary300;
}

.banner-list {
  list-style-type: none;
  padding-left: 10px;
}

.title {
  font-family: var(--font-title);
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
}

.products-preview {
  display: flex;
  justify-content: center;

  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
}
</style>
