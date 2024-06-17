<script setup></script>

<template>
  <main class="page-wrapper">
    <section class="contacts">
      <div class="container">
        <h2 class="title">КОНТАКТЫ</h2>
        <article class="work-time">
          <h4>Время работы:</h4>
          <p class="info">
            по будням - с <time datetime="08:30">8:30</time> до
            <time datetime="17:30">17:30</time> (обед с
            <time datetime="12:00">12:00</time> до
            <time datetime="13:00">13:00</time>);
          </p>
          <p class="info">
            по субботам - с <time datetime="09:00">9:00</time> до
            <time>15:00</time> (без перерывов)
          </p>
        </article>
        <article class="phone-numbers">
          <h4>Телефоны:</h4>
          <p class="numbers">
            Металлопрокат:
            <a href="tel:+74236697-911" class="link">8 (4236) 697-911</a>;<br/>
            Эл. оборудование:
            <a href="tel:+74236628-363" class="link">8 (4236) 628-363</a>;<br/>
            Стройматериалы:
            <a href="tel:+74236697-912" class="link">8 (4236) 697-912</a>;<br/>
            Судовое снабжение:
            <a href="tel:+74236621-235" class="link">8 (4236) 621-235</a>;<br/>
            Бухгалтерия:
            <a href="tel:+74236627-066" class="link">8 (4236) 627-066</a>;<br/>
            Склад:
            <a href="tel:+74236605-709" class="link">8 (4236) 605-709</a>;
          </p>
        </article>
        <article class="email">
          <p class="info">
            <b>e-mail: </b>
            <a href="mailto: vss@bk.ru" class="link">vss@bk.ru</a>
          </p>
        </article>
        <article class="address">
          <h4>Адрес:</h4>
          <p class="info">
            692906, Россия, Приморский край, г. Находка, ул. Шоссейная, 112
            <br />
            (р-он станции "Находка")
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/common.scss";

.contacts {
  display: flex;
  justify-content: center;
}
  
.container {
  flex-direction: column;
  align-items: center;
}

.title {
  font-family: var(--font-title);
}

.info, .numbers {
  margin-top: 0;
  text-align: center;
}

.numbers {
  line-height: 35px;
}

.info-link {
  color: $secondary300;
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
