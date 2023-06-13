<template>
  <div class="sort">
    <h2 class="sort-title">Сортировка</h2>
    <div class="sort-list">
      <button 
        type="button" 
        class="sort-list__link"  
        @click="sortRepo('name')"
        :class="{active: UserRepo.currentSort == 'name'}">
        ИМЯ
      </button>
      <button 
        type="button" 
        class="sort-list__link" 
        @click="sortRepo('stargazers_count')"
        :class="{active: UserRepo.currentSort == 'stargazers_count'}">
        ЗВЕЗДЫ
      </button>
      <button 
        type="button" 
        class="sort-list__link" 
        @click="sortRepo('created_at')"
        :class="{active: UserRepo.currentSort == 'created_at'}">
        ДАТА
      </button>
    </div>
  </div>
</template>

<script setup>
  import { useUserRepo } from '@/stores/UserRepo.js'
  const UserRepo = useUserRepo()
  const sortRepo = (event) => {
    UserRepo.sortList(event)
  }
  
</script>
