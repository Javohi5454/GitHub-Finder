<template>
  <div class="card" v-if="userInfo">
    <div class="card-left">
      <img :src="userInfo.avatar_url" alt="" class="card-left__img">
      <a :href="userInfo.html_url" target="_blank" class="card-left__link">ПОСЕТИТЬ</a>
    </div>
    <div class="card-right">
      <h2>{{userInfo.login}}</h2>
      <ul class="card-right__list">
        <li>Репозиториев: <span>{{ userInfo.public_repos }}</span></li>
        <li>Создан: <span>{{ new Date(userInfo.created_at).getFullYear() }}</span></li>
        <li>Подписчиков: <span>{{ userInfo.followers }}</span></li>
        <li>Подписок: <span>{{ userInfo.following }}</span></li>
      </ul>
    </div>
    
  </div>
</template>

<script setup>
  import { useUserRepo } from '../stores/UserRepo'
  import { computed } from 'vue'
  const userInfo = computed(() =>  useUserRepo().userInfo)
</script>