<script setup>
import { computed, ref} from "@vue/runtime-core"
import { useCounterStore } from "../../stores/counter"
    const useMovie = useCounterStore()

</script>

<template>
    <iframe class="sm:h-[70%] md:h-[80%] lg:w-[90vw] lg:h-[95vh] h-[30vh] w-full" :src="useMovie.src" frameborder="0" data-skip-sw></iframe>
</template>