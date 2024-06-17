<script setup></script>

<template>
  <main class="page-wrapper">
    <section class="about-company">
      <div class="container">
        <h2 class="title">О КОМПАНИИ</h2>
        <p class="text">
          <strong>ООО "ПРИМСНАБ"</strong> – компания с высокой репутацией
          надежного поставщика. Сегодня нашими постоянными клиентами являются
          сотни компаний Приморского края.
        </p>
        <p class="text">
          Компания ведёт свою деятельность с <strong>1991</strong> года.
        </p>
        <p class="text">
          Одно из главных направлений компании это снабжение организаций и
          частных лиц товарами строительного и производственного назначения.
        </p>
        <p class="text">
          Обеспечиваем комплексное снабжение предприятий по предварительным
          заявкам. Оперативно комплектуем и выполняем централизованную доставку
          МТС с оптовых баз крупных промышленных центров контейнерами и сборными
          вагонами.
        </p>
        <p class="text">
          Многолетняя работа с производителями металлопроката, позволяет нам
          предложить клиентам высококачественную продукцию по низким ценам.
          Поставки черного, нержавеющего и цветного металлопроката под заказ
          занимают минимально возможное количество времени.
        </p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";

.about-company {
  display: flex;
  width: 100%;
  justify-content: center;
}

.container {
  flex-direction: column;
  align-items: center;
}

.text {
  text-align: center;
}

.title {
  font-family: var(--font-title);
}
</style>
