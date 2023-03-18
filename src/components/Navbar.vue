<script setup>
import MobileNav from './partials/MobileNav.vue'
import DesktopNav from './partials/DesktopNav.vue'
import { useCounterStore }  from "../stores/counter"
import { onMounted, onBeforeUnmount } from '@vue/runtime-core'

    const useMovie = useCounterStore()
    onMounted(() => {
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('resize', checkScreenSize);
    })
    const checkScreenSize = () => {
      useMovie.isMobile = window.innerWidth < 640;
    }
</script>
<template>
    <MobileNav v-if="useMovie.isMobile"/>
    <DesktopNav v-if="!useMovie.isMobile"/>
</template>