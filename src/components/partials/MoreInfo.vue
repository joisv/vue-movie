<script setup>
import { useCounterStore }  from "../../stores/counter"
    const useMovie = useCounterStore()
</script>
<script>
export default {
  props: ['movie'],
   methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}/${month}/${day}`;
    }
  }
}
</script>

<template>
    <div class="bg-bgDark rounded-sm p-2 opacity-90">
            <div class="w-full h-[20vh]">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/1ZtxO4UXmac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h1 class="text-2xl font-medium text-slate-200 w-fit mt-1">{{ $props.movie.title }}
            </h1>
            <div class="flex items-center mt-1 gap-2">
                <div class="ratings mt-2 text-sm font-medium text-slate-200 mb-2">8.0</div>
                <h3 class="text-primary font-medium">2h49m</h3>
                <p class="text-primary">{{ $props.movie.genres ? $props.movie.genres.map(g => g.name).join(', '): 'Title not available' }}</p>
            </div>
            <div class="flex gap-4 items-center">
                <div>
                    <p class="text-primary font-medium">{{ $props.movie.status }}</p>
                    <p class="text-slate-200 font-semibold">Status</p>
                </div>
                <div>
                    <p class="text-primary font-medium">{{ $props.movie.popularity }}</p>
                    <p class="text-slate-200 font-semibold">Popularity</p>
                </div>
                <div>
                    <p class="text-primary font-medium">{{ formatDate($props.movie.release_date) }}</p>
                    <p class="text-slate-200 font-semibold">Release date</p>
                </div>
            </div>
            <div class="w-fit- h-32 overflow-x-scroll">
                <h1 class="text-slate-200 font-semibold text-lg mt-1">Sinopsis</h1>
                <p class="text-primary">{{ $props.movie.overview }}</p>
            </div>
            <button class="bg-primary px-2 mt-2 text-bgDark" @click="useMovie.toggleInfo">close</button>
        </div>
</template>