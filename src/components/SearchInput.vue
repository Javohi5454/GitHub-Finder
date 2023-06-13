<template>
  <form class="search" @submit.prevent="getUser"> 
    <input type="text" placeholder="Введите имя пользователя" class="search-input" v-model="seachValue">
    <button type="button" class="search-btn" @click="getUser">НАЙТИ</button>
  </form>
</template>

<script setup>
  import { useUserRepo } from '../stores/UserRepo'
  import { ref } from 'vue'
  const seachValue = ref('')
  const UserRepo = useUserRepo()
  const getUser = () => {
    UserRepo.getUserRepo(seachValue.value)
  }
</script>