<script setup>
import { useCounterStore }  from "../../stores/counter"
    const useMovie = useCounterStore()
</script>
<template>
    <div class="relative flex flex-wrap justify-center">
    <div class="w-[70vw] h-fit absolute top-20 rounded-sm py-8 bg-[#B7BB02] grid items-center justify-items-center">
        <div class="text-slate-200 font-semibold text-xl text-center">
           <div class="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="default-radio-1" class="ml-2 text-lg text-slate-200 font-semibold">Video rusak</label>
            </div>
           <div class="flex items-center mb-4">
                <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="default-radio-2" class="ml-2 text-lg text-slate-200 font-semibold">Link download rusak</label>
            </div>
           <div class="flex items-center mb-4">
                <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="default-radio-3" class="ml-2 text-lg text-slate-200 font-semibold">Saya pemilik konten ini</label>
            </div>
           <div class="flex items-center mb-4">
                <input id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="default-radio-4" class="ml-2 text-lg text-slate-200 font-semibold">Lainya</label>
            </div>
        </div>
        <div class="flex">
            <button class="rounded-sm bg-bgDark px-2 py-1 text-lg font-semibold text-[#B7BB02] mr-5">Report</button>
            <button class="rounded-sm bg-primary px-6 py- text-lg font-semibold text-slate-200" @click="useMovie.toggleInfo">Batal</button>
        </div>
    </div>
</div>
</template>