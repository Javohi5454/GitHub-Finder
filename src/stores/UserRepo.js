import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserRepo = defineStore('User', () => {
  // state
  const search = ref('')
  const userInfo = ref(null)
  const repositories = ref([])
  const currentSort = ref('name')
  const currentSortDir = ref('asc')
  // getters
  const getRepoList = computed(() => repositories)
  
  // actions
  const getUserRepo = async (search) => {
    try {
      const queryRepo = await fetch(`https://api.github.com/users/${search}/repos`)
      const resRepo = await queryRepo.json()
      const queryUser = await fetch(`https://api.github.com/users/${search}`)
      const resInfo = await queryUser.json()
      console.log(resRepo);
      console.log(resInfo);
      repositories.value = resRepo
      userInfo.value = resInfo
    } catch (err) {
      console.log('Ошибка ' + err);
    }
  }
  const sortList = (event) => {
    if(event === currentSort.value){
      currentSortDir.value = currentSortDir.value === 'asc' ? 'desc' : 'asc'
      // console.log(currentSortDir.value);
    }else{
      currentSort.value = event
      // console.log(currentSort.value);
    }
  }
  const getSortList = () => {
    return repositories.value.sort((a,b) => {
      let mod = 1
      if(currentSortDir.value === 'desc') mod = -1
      if(a[currentSort.value] < b[currentSort.value]) return -1 * mod
      if(a[currentSort.value] > b[currentSort.value]) return 1 * mod
    })
  }
  
  return { search,getUserRepo,userInfo,repositories,getRepoList,sortList,currentSort,currentSortDir,getSortList}
})
