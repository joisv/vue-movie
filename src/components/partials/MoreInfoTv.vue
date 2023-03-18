<script setup>
import { useCounterStore }  from "../../stores/counter"
    const useMovie = useCounterStore()
defineProps({
    tv: Object
})
</script>
<template>
    <div class="bg-bgDark rounded-sm p-2 opacity-90">
            <h1 class="text-2xl font-medium text-slate-200 w-fit mt-1">{{ this.tv.name }}
            </h1>
            <h1 class="text-lg font-medium text-primary w-fit mt-1">{{ this.tv.original_name }}
            </h1>
            <div class="flex items-center mt-1 gap-2">
                <div class="ratings mt-2 text-sm font-medium text-slate-200 mb-2">{{ this.tv.vote_average }}</div>
                <h3 class="text-primary font-medium">2h49m</h3>
                <p class="text-primary">{{ this.tv.genres ? this.tv.genres.map(g => g.name).join(', '): 'Title not available' }}</p>
            </div>
            <div class=" gap-4 items-center">
                <div class="flex gap-3">
                    <p class="text-slate-200 font-semibold">Status</p>
                    <p class="text-primary font-medium">{{ this.tv.status }}</p>
                </div>
                <div class="flex gap-3">
                    <p class="text-slate-200 font-semibold">Popularity</p>
                    <p class="text-primary font-medium">{{ this.tv.popularity }}</p>
                </div>
                <div class="flex gap-3">
                    <p class="text-slate-200 font-semibold">Episodes</p>
                    <p class="text-primary font-medium">{{ this.tv.number_of_episodes }}</p>
                </div>
                <div class="flex gap-3">
                    <p class="text-slate-200 font-semibold">Season</p>
                    <p class="text-primary font-medium">{{ this.tv.number_of_seasons }}</p>
                </div>
                <div class="flex gap-3">
                    <p class="text-slate-200 font-semibold">Country</p>
                    <p class="text-primary font-medium">{{ this.tv.origin_country[0] }}</p>
                </div>
            </div>
            <div class="w-fit- h-32 overflow-x-scroll">
                <h1 class="text-slate-200 font-semibold text-lg mt-1">Sinopsis</h1>
                <p class="text-primary">{{ this.tv.overview }}</p>
            </div>
            <button class="bg-primary px-2 mt-2 text-bgDark" @click="useMovie.toggleInfo">close</button>
        </div>
</template>