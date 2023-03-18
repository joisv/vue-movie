<script setup>
import { watchEffect, ref } from '@vue/runtime-core'
import getMovies from '../composable/fetch'
import MainDetailTv from '../components/partials/MainDetailTv.vue'
import { useCounterStore }  from "../stores/counter"
import MainEmbed from '../components/partials/MainEmbed.vue'
import Confirm from '../components/partials/Confirm.vue'
import ServerResolution from '../components/partials/ServerResolution.vue'
import StreamNavigationSm from '../components/partials/StreamNavigationSm.vue'

    const { baseImgUrl, playerPath, getDetailTv, detailTv } = getMovies()
    const useMovie = useCounterStore()
    var srcV = useMovie.srcValue
    const buttonPlay = ref(true)
    var srcV = ref(false)

    const props = defineProps({
        id:{
            required: true,
            type: String
        },
    })
     const playMe = () => {
        srcV.value = true
        buttonPlay.value = false
    }
     watchEffect(() => {
        console.log(detailTv);
        getDetailTv(props.id)
    })
</script>

<template>
    <section>
    <div class="relative">
        <img class="w-screen min-h-[40vh] absolute object-cover object-top sm:min-h-[100vh] bg-slider" :src="`${playerPath}${detailTv.backdrop_path}`">
        <button class="relative w-fit h-fit z-50 top-[13vh] left-[45vw] sm:top-[40vh]" @click="playMe" v-if="buttonPlay">
            <svg width="70px" height="70px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_iconCarrier"> <path d="M8 17.1783V6.82167C8 6.03258 8.87115 5.55437 9.53688 5.97801L17.6742 11.1563C18.2917 11.5493 18.2917 12.4507 17.6742 12.8437L9.53688 18.022C8.87115 18.4456 8 17.9674 8 17.1783Z" stroke="#01AED3" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
        </button>
    </div>
    <div class="w-full h-[35vh] sm:h-screen absolute flex items-center justify-center" :class="{ 'bg-bgDark bg-opacity-80': srcV }">
        <MainEmbed v-if="srcV"/>
    </div>
    <Confirm v-if="useMovie.konfirmasi" :tv="detailTv"/>
    <div class="w-full absolute min-h-[65vh] bg-detail top-[35vh] sm:top-[90vh] xl:top-[100vh]" @click="useMovie.toggleInfo">
        <div class="max-w-screen-xl m-auto p-2">
            <StreamNavigationSm v-if="!useMovie.isMobile"/>
            <ServerResolution v-if="!useMovie.isMobile"/>
            <div class="flex gap-5 mt-4">
                <div class="w-40 sm:w-52 h-auto" v-if="!useMovie.isMobile">
                    <img class="object-fill" :src="`${baseImgUrl}${detailTv.backdrop_path}`">
                </div>
                <MainDetailTv :tv="detailTv"/>
            </div>
        </div>
        <!-- <Related/> -->
    </div>
</section>
</template>