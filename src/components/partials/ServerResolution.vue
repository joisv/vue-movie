<script setup>
import {useCounterStore} from '../../stores/counter'
    const useMovie = useCounterStore()
</script>

<template>
    <div class="w-full flex gap-2 py-2 h-fit justify-center mt-5">
            <div class="border-[3px] border-primary rounded-sm p-2 flex items-center justify-center cursor-pointer" :class="{'stroke-primary': useMovie.activeButton !== 1, 'stroke-slate-200': useMovie.activeButton === 1, 'text-primary': useMovie.activeButton !== 1, 'text-slate-200': useMovie.activeButton === 1, active: useMovie.activeButton === 1 }" @click="useMovie.activeButton = 1">
                <svg width="35px" height="35px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_iconCarrier"> <path d="M8 17.1783V6.82167C8 6.03258 8.87115 5.55437 9.53688 5.97801L17.6742 11.1563C18.2917 11.5493 18.2917 12.4507 17.6742 12.8437L9.53688 18.022C8.87115 18.4456 8 17.9674 8 17.1783Z"  stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"/> </g>
                </svg>
                <span class="">Server 1</span>
            </div>
            <div class="border-[3px] border-primary rounded-sm p-2 flex items-center justify-center cursor-pointer" :class="{'stroke-primary': useMovie.activeButton !== 2, 'stroke-slate-200': useMovie.activeButton === 2, 'text-primary': useMovie.activeButton !== 2, 'text-slate-200': useMovie.activeButton === 2, active: useMovie.activeButton === 2 }" @click="useMovie.activeButton = 2">
                <svg width="35px" height="35px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_iconCarrier"> <path d="M8 17.1783V6.82167C8 6.03258 8.87115 5.55437 9.53688 5.97801L17.6742 11.1563C18.2917 11.5493 18.2917 12.4507 17.6742 12.8437L9.53688 18.022C8.87115 18.4456 8 17.9674 8 17.1783Z"  stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"/> </g>
                </svg>
                <span class="">Server 1</span>
            </div>
            <div class="border-[3px] border-primary rounded-sm p-2 flex items-center justify-center cursor-pointer" :class="{'stroke-primary': useMovie.activeButton !== 3, 'stroke-slate-200': useMovie.activeButton === 3, 'text-primary': useMovie.activeButton !== 3, 'text-slate-200': useMovie.activeButton === 3, active: useMovie.activeButton === 3 }" @click="useMovie.activeButton = 3">
                <svg width="35px" height="35px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_iconCarrier"> <path d="M8 17.1783V6.82167C8 6.03258 8.87115 5.55437 9.53688 5.97801L17.6742 11.1563C18.2917 11.5493 18.2917 12.4507 17.6742 12.8437L9.53688 18.022C8.87115 18.4456 8 17.9674 8 17.1783Z"  stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"/> </g>
                </svg>
                <span class="">Server 1</span>
            </div>
           
        </div>
</template>