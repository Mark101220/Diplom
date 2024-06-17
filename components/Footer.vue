<script setup>

</script>

<template>
    <footer class="footer-wrapper">
      <div class="container">
          <p class="copyright">Copyright &copy; ООО "ПРИМСНАБ" 2017 </p>
      </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/common.scss';
@import '~/assets/styles/reset.scss';

@mixin add-padding {
    @media (max-width: 446px) {
        @content;
    }
}

@mixin change-font-size {
    @media (max-width: 308px) {
        @content;
    }
}

.footer-wrapper {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    background-color: $tertiary300;
}

.copyright {
    display: flex;
    justify-content: center;
    padding-top: 13px;
    padding-bottom: 13px;
    width: 100%;

    @include change-font-size {
        font-size: 12px;
    }
}
    
.container {
    @include add-padding {
        padding-left: 6px;
        padding-right: 6px;
    }
}
</style>