<template>
  <HeaderNav/>
  <div class="content">
    <SearchInput/>
    <UserCard/>
    <SortRep/>
    <div class="content-items" v-if="getRepo != null">
      <RepItem
        v-for="(item, ind) in sortList"
        :key="ind"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
  import HeaderNav from './components/HeaderNav.vue'
  import SearchInput from './components/SearchInput.vue'
  import SortRep from './components/SortRep.vue'
  import UserCard from './components/UserCard.vue'
  import RepItem from './components/RepItem.vue'
  import { useUserRepo } from './stores/UserRepo'
  import { computed, onMounted } from 'vue'
  const UserRepo = useUserRepo()
  const getRepo = UserRepo.getRepoList
  const sortList = computed(() => UserRepo.getSortList())
  onMounted(() => {
    console.log(getRepo);
    console.log(sortList);
  })
</script>