<script setup>
import { nav } from "~/scripts/constants.js";
</script>

<template>
  <header class="mobile-header">
    <div class="top-part">
      <div class="left-part">
        <input type="checkbox" id="sidebar-active" />
        <label class="open-menu-button" for="sidebar-active">
          <img src="../assets/icons/menu.svg" class="sidebar-icon" />
        </label>
        <label id="overlay" for="sidebar-active"></label>
        <div class="links-container">
          <div class="top-part">
            <label class="close-menu-button" for="sidebar-active">
              <img src="../assets/icons/menu-white.svg" class="sidebar-icon" />
            </label>
            <div class="company-logo-flex">
              <img
                class="company-logo-image"
                src="../assets/images/logo.png"
                alt="Логотип компании"
              />
              <p class="company-name">
                <span class="white-company-name">ООО <b>"ПРИМСНАБ"</b></span>
              </p>
            </div>
          </div>
          <nav class="sidenav">
            <ul class="side-nav-list">
              <li class="nav-list-item" v-for="item in nav">
                <NuxtLink class="item-link" :to="item.url">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <NuxtLink to="/" class="company-logo-flex">
          <img
            class="company-logo-image"
            src="../assets/images/logo.png"
            alt="Логотип компании"
          />
          <p class="company-name">ООО <b>"ПРИМСНАБ"</b></p>
        </NuxtLink>
      </div>
      <ul class="account-parts">
        <li>
          <NuxtLink class="link" to="/account/signin"
            ><img class="icon" src="../assets/icons/login.svg"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/account/registration"
            ><img class="icon" src="../assets/icons/register.svg"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/account/cart"
            ><img class="icon" src="../assets/icons/shopping_cart_checkout.svg"
          /></NuxtLink>
        </li>
      </ul>
    </div>
    <div class="search-bar-flex">
      <input class="search-bar" type="text" placeholder="Найти товар" />
      <button class="search-bar-button">
        <img
          class="search-bar-button-icon"
          src="../assets/icons/smoothie.svg"
        />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";
@import "~/assets/styles/header.scss";
@import "~/assets/styles/reset.scss";

.mobile-header {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
}

.left-part {
    display: flex;
    align-items: center;
    gap: 3px;
}

.sidebar-icon {
  width: 30px;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
}

.open-menu-button,
.close-menu-button {
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
}

.side-nav-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 25px;
  margin-left: 6px;
  margin-top: 13px;
}

.links-container {
  flex-direction: column;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 10;
  width: 232px;
  height: 100%;
  background-color: $secondary100;
  transition: 0.75s ease-out;
  padding: 5px;
  padding-right: 60px;
}

.links-container-header {
  display: flex;
}

.white-company-name {
  color: white;
}

#sidebar-active {
  display: none;
}

#sidebar-active:checked ~ .links-container {
  left: 0;
}

#sidebar-active:checked ~ #overlay {
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition: 0.75s ease-in-out;
}

.top-part {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-bar-flex {
  padding: 3px;
}
</style>
