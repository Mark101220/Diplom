<script setup>
</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="product-info">
        <img
          src="~/assets/images/products/ugolok@2x.jpg"
          class="product-image"
        />
        <div class="product-description">
          <h1 class="product-name">Уголок</h1>
          <p class="gost">ГОСТ 8509-93</p>
          <div class="types">
            <p class="type">160х10</p>
            <p class="type">140х10</p>
            <p class="type">125х8</p>
            <p class="type">100х8</p>
            <p class="type">90х7</p>
            <p class="type">75х6</p>
            <p class="type">63х5</p>
            <p class="type">50х5</p>
            <p class="type">45х4</p>
            <p class="type">40х4</p>
            <p class="type">32х4</p>
            <p class="type">25х4</p>
          </div>
        </div>
      </div>
      <div class="checkout-info">
        <p class="text">Количество на складе: 999</p>
        <div class="quantity-flex">
          <p class="text">Количество:</p>
          <div class="quantity">
            <button class="minus" aria-label="Decrease">&minus;</button>
            <input type="number" class="input-box" value="1" min="1" max="10" />
            <button class="plus" aria-label="Increase">&plus;</button>
          </div>
        </div>
        <p class="text">Цена: 137 000 руб.</p>
        <button class="submit-button">В корзину</button>
      </div>
      </div>
      <div class="container">
        <div class="description-flex">
            <p class="description-title">Описание</p>
            <p class="description">"Уголок ГОСТ 8509-93" - это металлический элемент, изготовленный в соответствии с ГОСТ 8509-93, который предназначен для соединения и укрепления конструкций. Обладает прочными характеристиками и широким спектром применения в строительстве, машиностроении и других отраслях промышленности.</p>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";
@import "~/assets/styles/reset.scss";

.container {
    margin-top: 40px;
    gap: 50px;
}

.product-info {
  display: flex;
  gap: 50px;
  justify-content: space-between;
  height: 450px;
}

.product-image {
  height: 450px;
  width: 450px;
  border: 2px solid $secondary100;
}

.product-name {
  margin-top: 10px;
  font-size: 30px;
  margin-bottom: 20px;
}

.product-desciption {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.types {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.description-flex {
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.description-title {
    font-size: 18px;
    margin-bottom: 5px;
}

.type {
  padding: 15px 30px;
  background-color: $secondary300;
  text-align: center;
  border: 2px solid $secondary100;

  &:hover {
    background-color: $primary300;
    color: $tertiary300;
  }
}

.checkout-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 70px;
}

.submit-button {
    color: $secondary100
}

.quantity-flex {
    display: flex;
    align-items: center;
    gap: 10px;
}

.text {
    font-size: 18px;
}

.quantity {
  display: flex;
  border: 2px solid $secondary100;
  overflow: hidden;
  width: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quantity button {
  background-color: $primary300;
  color: $secondary100;
  border: none;
  cursor: pointer;
  font-size: 20px;
  width: 30px;
  height: auto;
  text-align: center;
  transition: background-color 0.2s;
}

.quantity button:hover {
  background-color: white;
  color: $primary300;
}

.input-box {
  width: 40px;
  text-align: center;
  border: none;
  padding: 8px 10px;
  font-size: 16px;
  outline: none;
}

/* Hide the number input spin buttons */
.input-box::-webkit-inner-spin-button,
.input-box::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-box[type="number"] {
  appearance: textfield;
}
</style>
