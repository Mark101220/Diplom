<script setup lang="ts">
import { PaginationEllipsis, PaginationList, PaginationListItem, PaginationNext, PaginationPrev, PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot :total="100" :sibling-count="1" show-edges :default-page="2">
    <PaginationList v-slot="{ items }" class="PaginationList">
      <PaginationPrev :style="{ marginRight: 16 }" class="Button">
        <
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="Button" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="PaginationEllipsis">
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext :style="{ marginLeft: 16 }" class="Button">
        >
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

/* reset */
button {
  all: unset;
}

.Button{
  text-align: center;
  font-size: 15px;
  line-height: 1;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 0.25rem; 
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background-color: $secondary300;
}

.Button:disabled {
  opacity: .5;
}

.Button:hover{
  background-color: red;
}

.Button[data-selected]{ 
  background-color: $secondary100;
  color: $tertiary300;
}

.PaginationEllipsis{
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
}

.PaginationList{
  display: flex;
  align-items: center;
  gap: 0.25rem; 
  color: black;
}
</style>