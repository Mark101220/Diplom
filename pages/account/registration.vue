<script>

</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <form class="registration-form">
        <h1 class="title">Регистрация:</h1>
        <div class="input-flex">
          <p class="text">Имя:</p>
          <input
            type="text"
            v-model="firstName"
            class="input-field"
            required
          />
        </div>
        <div class="input-flex">
          <p class="text">Фамилия:</p>
          <input
            type="text"
            v-model="secondName"
            class="input-field"
            required
          />
        </div>
        <div class="input-flex">
          <p class="text">Телефон:</p>
          <input
            type="text"
            v-model="phone"
            class="input-field"
            required
          />
        </div>
        <div class="input-flex">
          <p class="text">e-mail:</p>
          <input
            type="text"
            v-model="email"
            class="input-field"
            required
          />
        </div>
        <button class="submit-button" @click="loginHandler()">
          Зарегистрироваться
        </button>
      </form>
      <p class="question">
        Уже есть аккаунт? Перейдите по<br />
        ссылке, чтобы
        <NuxtLink class="link" to="/account/signin">войти</NuxtLink>.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/forms.scss";
</style>
