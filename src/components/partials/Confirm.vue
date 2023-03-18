<script setup>
import MoreInfo from './MoreInfo.vue'
import MoreInfoTv from './MoreInfoTv.vue'
import Download from './Download.vue'
import Report from './Report.vue'
import Resolusi from './Resolusi.vue'
import { useCounterStore }  from "../../stores/counter"
    const useMovie = useCounterStore()
    defineProps({
        movie: Object,
        tv: Object
    })
</script>

<template>
    <div class="absolute w-full h-fit z-50 m-auto top-52 p-2">
       <MoreInfo v-if="useMovie.info" :movie="movie"/>
       <MoreInfoTv v-if="useMovie.infoTv" :tv="tv"/>
       <Download v-if="useMovie.download"/>
       <Report v-if="useMovie.report"/>
       <Resolusi v-if="useMovie.resolusi"/>
    </div>
</template>