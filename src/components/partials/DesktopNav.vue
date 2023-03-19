<script setup>
import { ref } from '@vue/runtime-core'
import  getMovies  from '../../composable/fetch'
import  router  from '../../router/index';


    const { searchMulti } = getMovies();
    const searchQuery = ref('');

    const search = () => {
      searchMulti(searchQuery.value);
      router.push({ name: 'search', query: { query: searchQuery.value } });
    };  
</script>

<template>
    <nav>
        <div class="relative hidden sm:block ">
            <div class="absolute px-5 py-3 flex gap-14 w-full z-50 items-center justify-between">
                <RouterLink :to="{name: 'home'}">
                    <div class="w-full h-auto flex items-center gap-3 group">
                        <div class="w-fit h-20 flex items-center gap-1 ">
                            <div class="h-10 w-4 bg-primary group-hover:bg-sky-500 -skew-x-[18deg] group-hover:translate-y-4 group-hover:-translate-x-[10px] ease-in duration-200"></div>
                            <div class="h-10 w-4 bg-primary group-hover:bg-violet-600 -skew-x-[18deg] group-hover:-translate-y-4 group-hover:translate-x-[1px] ease-in duration-200"></div>
                            <div class="h-10 w-4 bg-primary group-hover:bg-lime-500 -skew-x-[18deg] group-hover:translate-y-8 group-hover:-translate-x-[18px] ease-in duration-200"></div>
                        </div>
                        <h1 class="text-primary font-bold text-2xl group-hover:text-slate-200">XX<span class="group-hover:text-primary font-bold text-2xl text-slate-200 text-center">Toon</span></h1>
                    </div>
                </RouterLink>
                <div class=" z-50 flex items-center w-full">
                    <div>
                        <ul>
                            <div class="flex items-center gap-4">
                                <li class="font-normal text-slate-200 text-lg"><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
                                <li class="font-normal text-slate-200 text-lg"><a class="nav-item" href="/schedule">List</a></li>
                                <li class="font-normal text-slate-200 text-lg"><a class="nav-item" href="/schedule">Schedule</a></li>
                                <!-- <li class="font-normal text-slate-200 text-lg"><router-link class="nav-item" :to="{name: 'favourite'}">Favourite</router-link></li> -->
                            </div>
                        </ul>
                    </div>
                    <div class="relative w-full -top-1 flex items-center">
                        <input type="search" class="searchMe search-lg absolute rounded-sm block px-2 py-1 w-1/2 font-normal text-slate-200 bg-primary bg-opacity-80 bg-clip-padding border border-none focus:outline-none mb-2 right-2 text-lg " placeholder="search here..."  v-model="searchQuery" @keyup.enter="search">
                    </div>
                    <!-- <button class="relative right-10 -top-1"  @click="search">
                        <svg width="38px" height="38px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0F1729" stroke-width="0.048">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="#ededed"/> </g>
                        </svg>
                    </button>  -->
                </div>
            </div>
        </div>
    </nav>
</template>