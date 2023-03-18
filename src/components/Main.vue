<script setup>
import { ref } from "@vue/reactivity"
import MainSeries from './partials/MainSeries.vue'
import NavgationSeries from './partials/NavigationSeries.vue'
import TvShow from './partials/TvShow.vue'
import Trendings from './partials/Trendings.vue'
import { useCounterStore }  from "../stores/counter"
    
    const useMovie = useCounterStore()
</script>
<template>
  <section>
    <div class="flex items-center gap-4 max-w-screen-xl m-auto">
        <div class=" font-semibold text-primary text-2xl ml-2 mt-2 mb-3 sm:text-3xl lg:text-4xl sm:font-bold sm:opacity-80 underline underline-offset-8" title="New Movie">New Movie</div>
        <NavgationSeries/>
    </div>
    <div v-if="useMovie.activeButton === 1">
      <MainSeries/>
    </div>
    <div v-if="useMovie.activeButton === 2">
      <TvShow/>
    </div>
    <div v-if="useMovie.activeButton === 3">
      <Trendings/>
    </div>
  </section>
</template>

