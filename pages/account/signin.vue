<script>

</script>

<template>
  <div class="page-wrapper">
    <div class="container">
      <form class="signin-form">
        <h1 class="title">Вход:</h1>
        <div class="input-flex">
          <p class="text">e-mail:</p>
          <input 
           type="text" 
           v-model="email" 
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
        <button class="submit-button" @click="signinHandler()">Войти</button>
      </form>
      <p class="question">Нет аккаунта? Перейдите по<br/> ссылке, чтобы <NuxtLink class="link" to="/account/registration">зарегистрироваться</NuxtLink>.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/forms.scss';
</style>
