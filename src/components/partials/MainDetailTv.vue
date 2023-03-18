<script setup>
import { useCounterStore }  from "../../stores/counter"
import StreamNavigation from '../../components/partials/StreamNavigation.vue'
    const useMovie = useCounterStore()
    defineProps({
        tv: Object
    })
</script>

<template>
    <div class="w-full">
        <h1 class="text-3xl font-medium text-slate-200 relative w-fit sm:text-3xl lg:text-4xl">{{ this.tv.name }}
        <span class="text-primary font-medium text-sm absolute">HD</span>
        </h1>
        <h1 class="text-base font-medium text-primary relative w-fit sm:text-lg lg:text-xl">{{ this.tv.original_name }}</h1>
        <div class="flex items-center gap-2">
            <div class="ratings mt-2 text-sm font-medium text-slate-200 mb-2">7.2</div>
            <div class="flex gap-2" v-if="!useMovie.isMobile">
                <span class="text-slate-200 font-normal">{{ this.tv.first_air_date }}</span>
                <div class="text-primary font-medium">
                    <p>{{ this.tv.genres ? this.tv.genres.map(g => g.name).join(', '): 'Title not available' }}</p>
                </div>
                <p class="text-slate-200 font-medium">1h 46m</p>
            </div>
        <button class="bg-primary p-2 font-medium ml-4 z-20" @click.stop="useMovie.moreInfoTv" v-if="useMovie.isMobile">more info</button>
        </div>
        <div class="mt-2" v-if="!useMovie.isMobile">
            <h2 class="text-slate-200 font-medium">Jenny Gage</h2>
            <h2 class="text-primary font-medium">Director</h2>
        </div>
        <StreamNavigation v-if="useMovie.isMobile"/>
        <div class="mt-2 w-1/2" v-if="!useMovie.isMobile">
            <h1 class="text-slate-200 font-semibold text-xl">Sinopsis</h1>
            <span class="text-primary sm:w-[80%] " >{{ this.tv.overview ? this.tv.overview.substring(0, 200) + ' More...' : 'N/A' }}</span>
        </div>
    </div>
</template>