<script setup>
import { ref } from '@vue/reactivity'
import {useCounterStore} from '../../stores/counter'
import  getMovies  from '../../composable/fetch'
import  router  from '../../router/index';


    const { searchMulti } = getMovies();
    const searchQuery = ref('');

    const search = () => {
      searchMulti(searchQuery.value);
      router.push({ name: 'search', query: { query: searchQuery.value } });
    };
    const useMovie = useCounterStore()
    
</script>
<template>
    <div v-if="useMovie.isActive">
        <input type="search" class="absolute rounded-sm block px-2 py-1 w-1/2 font-normal text-slate-200 bg-primary bg-clip-padding border border-none focus:outline-none mb-2 right-2 text-lg z-50 top-2" placeholder="search here..." @keyup.enter="search" v-model="searchQuery">
    </div>
    <nav class="z-50 fixed bottom-0">
        
        <div class="h-fit w-screen pl-1 pr-1">
         <div class="bg-slate-900 flex items-center justify-between rounded-sm p-3">
             <!-- home -->
          <RouterLink :to="{name : 'home'}" exact active-class="activeMobileNav"  v-bind:class="{ 'stroke-slate-300': !$route.matched.some(record => record.path === '/') }">   
            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10.5653C3 9.99094 3 9.70376 3.07403 9.4393C3.1396 9.20503 3.24737 8.98469 3.39203 8.7891C3.55534 8.5683 3.78202 8.39199 4.23539 8.03937L11.0177 2.76424C11.369 2.49099 11.5447 2.35436 11.7387 2.30184C11.9098 2.2555 12.0902 2.2555 12.2613 2.30184C12.4553 2.35436 12.631 2.49099 12.9823 2.76424L19.7646 8.03937C20.218 8.39199 20.4447 8.5683 20.608 8.7891C20.7526 8.98469 20.8604 9.20503 20.926 9.4393C21 9.70376 21 9.99094 21 10.5653V17.8002C21 18.9203 21 19.4804 20.782 19.9082C20.5903 20.2845 20.2843 20.5905 19.908 20.7822C19.4802 21.0002 18.9201 21.0002 17.8 21.0002H6.2C5.07989 21.0002 4.51984 21.0002 4.09202 20.7822C3.71569 20.5905 3.40973 20.2845 3.21799 19.9082C3 19.4804 3 18.9203 3 17.8002V10.5653Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
          <!-- end home -->
          <!-- search -->  
          <svg width="42px" height="42px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="0.048"  @click="useMovie.nav" :class="{ 'fill-primary': useMovie.isActive, 'fill-slate-200': !useMovie.isActive }">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z" />
          </svg>
          <!-- endsearch -->
          <!-- genres -->
          <svg width="37px" height="37px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke="#fafafa">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="menu-hotdog"> <path id="vector" d="M5 6H19" stroke="#f5f5f5" stroke-width="1.5" stroke-linecap="round"/> <path id="vector_2" d="M3 12H21" stroke="#f5f5f5" stroke-width="1.5" stroke-linecap="round"/> <path id="vector_3" d="M5 18H19" stroke="#f5f5f5" stroke-width="1.5" stroke-linecap="round"/> </g> </g> </g>
          </svg>
          <!-- end genres -->
          <!-- bookmark -->
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 3C3.5 1.89543 4.39543 1 5.5 1H18.5C19.6046 1 20.5 1.89543 20.5 3V22C20.5 22.3612 20.3052 22.6944 19.9904 22.8715C19.6756 23.0486 19.2897 23.0422 18.981 22.8548L12 18.6157L5.01903 22.8548C4.71028 23.0422 4.32441 23.0486 4.00961 22.8715C3.6948 22.6944 3.5 22.3612 3.5 22V3ZM18.5 3L5.5 3V20.2228L11.481 16.591C11.7999 16.3974 12.2001 16.3974 12.519 16.591L18.5 20.2228V3Z" class="fill-slate-200" />
          </svg>
          <!-- end bookmark -->
          <!-- account -->
          <svg width="37px" height="37px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
              <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
                c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8
                s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"
                class="fill-slate-300"/>
          </svg>
         </div>
        </div>
    </nav>
</template>