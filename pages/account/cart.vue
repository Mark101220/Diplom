<script setup>

</script>

<template>
<div class="page-wrapper">
    <div class="container">
        <p class="text">Ваша корзина пуста</p>
        <NuxtLink class="link" to="/store">Вернуться к покупкам</NuxtLink>
        <div class="buttons">
            <NuxtLink class="button-link" to="/account/signin">Войти</NuxtLink>
            <NuxtLink class="button-link" to="/account/registration">Зарегистрироваться</NuxtLink>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/common.scss';
@import '~/assets/styles/reset.scss';

.container {
    flex-direction: column;
    align-items: center;
    margin-top: 27px;
}

.text {
    font-size: 28px;
    font-weight: 700px;
}

.link {
    margin-top: 10px;
}

.buttons {
    display: flex;
    margin-top: 50px;
    gap: 20px;
}

</style>