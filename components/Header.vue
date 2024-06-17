<script setup>
import { nav } from '~/scripts/constants.js';
import MobileHeader from './MobileHeader.vue';
</script>

<template>
  <header class="general-header">
    <div class="navigation-bar">
      <div class="container">
        <nav class="navigation">
          <ul class="nav-list">
            <li class="nav-list-item" v-for="item in nav">
              <NuxtLink class="item-link" :to="item.url">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="tools-bar">
      <div class="container">
        <div class="tools-bar-flex-row">
          <NuxtLink to="/" class="company-logo-flex">
            <img
              class="company-logo-image"
              src="../assets/images/logo.png"
              alt="Логотип компании"
            />
            <p class="company-name"><b>ООО "ПРИМСНАБ"</b></p>
          </NuxtLink>
          <div class="search-bar-flex">
            <input class="search-bar" type="text" placeholder="Найти товар" />
            <button class="search-bar-button">
              <img
                class="search-bar-button-icon"
                src="../assets/icons/smoothie.svg"
              />
            </button>
          </div>
          <ul class="account-parts">
            <li>
              <NuxtLink  class="link" to="/account/signin"
                ><img class="icon" src="../assets/icons/login.svg" />
                <p>Войти</p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink  class="link" to="/account/registration"
                ><img class="icon" src="../assets/icons/register.svg" />
                <p>Регистрация</p></NuxtLink
              >
            </li>
            <li>
              <NuxtLink  class="link" to="/account/cart"
                ><img
                  class="icon"
                  src="../assets/icons/shopping_cart_checkout.svg"
                />
                <p>Корзина</p></NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div class="mobile">
    <MobileHeader />
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/common.scss';
@import '~/assets/styles/header.scss';
@import '~/assets/styles/reset.scss';

@mixin for-phone {
  @media (max-width: 960px) {
    @content;
  }
}

.general-header {
    position: fixed;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    z-index: 11;
    width: 100%;

    @include for-phone {
      display: none;
    }

}

.navigation-bar {
    display: flex;
    justify-content: center;
    width: 100%; 
    padding-top: 13px;
    padding-bottom: 13px;
    background-color: #00355d;
}

.nav-list {
    gap: 16px;
}

.nav-list-item {
    border-right: 1px solid rgba(255, 255, 255, 0.6);
}

.tools-bar {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: $tertiary300;
}

.tools-bar-flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.mobile {
  display: none;
  
  @include for-phone {
    width: 100%;
    display: flex;
    gap: 3px;
  }
}
</style>
