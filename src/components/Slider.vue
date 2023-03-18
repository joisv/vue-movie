<script setup>
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import { onMounted, ref } from 'vue';
import getMovies from '../composable/fetch'

    const { playerPath, latestMovies, getLatestMovie } = getMovies()
    onMounted( async () => {
    await  getLatestMovie()
    console.log(latestMovies.value);
    var swiper = new Swiper('.swiper', {
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
            autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        });
    })
    
</script>
<template>
     <div class="swiper w-full h-full">
    <div class="swiper-wrapper h-[43vh] sm:h-[60vh] lg:h-[80vh]">
    <template v-for="movie in latestMovies.results" :key="movie.id">
      <div class="swiper-slide relative">
        <div class="bg-center bg-cover h-full bg-slider" :style="{ 'background-image': 'url(' + (movie.backdrop_path ?playerPath + movie.backdrop_path : 'image/Sample.jpg') + ')' }"></div>
        <div class="absolute bottom-3 p-3">
          <h1 class="text-primary text-2xl font-semibold mb-1">{{ movie.title }}</h1>
          <div class="flex items-center">
            <div class="w-fit px-1 bg-primary text-xs font-medium rounded-sm mr-2">
              <span>HD</span>
            </div>
            <div class="flex items-center gap-1">
              <svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C5.6655 12 8.06036 10.8412 9.70832 9" stroke="rgb(203, 213, 225)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-sm font-medium text-slate-300">{{ movie.vote_average }}</span>
            </div>
            <div class="flex items-center ml-2">
              <span class="text-slate-300 font-medium text-sm">{{ movie.genres ? movie.genres.length > 0 ? movie.genres.map(g => g.name).join(', ') : 'Genre not available' : 'Genre not available' }}</span>
            </div>
          </div>
            <div class="flex items-center mt-2 gap-1">
              <div class="px-1 border-[1px] border-slate-300 text-primary text-sm font-medium">favourite</div>
              <div class="px-1 bg-primary text-sm font-medium">watch now</div>
            </div>
        </div>
      </div>
    </template>  
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <!-- Add Arrows -->
  </div>
</template>