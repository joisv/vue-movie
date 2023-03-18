<script setup>
import { watchEffect } from "@vue/runtime-core";

  watchEffect(() => {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.display = 'none';
    }
  })
</script>
<template>
   <div class="relative flex flex-wrap justify-center">
    <div class="w-[70vw] h-fit absolute top-20 rounded-sm py-8 bg-bgDark grid items-center justify-items-center">
        <div class="text-slate-200 font-semibold text-xl text-center">
           <div class="flex items-center mb-4">
                <input id="default-radio-1" type="radio" value="" name="default-radio" class="hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="default-radio-1" class="ml-2 text-lg text-primary font-semibold">1080p HD</label>
            </div>
           <div class="flex items-center mb-4">
                <input id="default-radio-2" type="radio" value="" name="default-radio" class="hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="default-radio-2" class="ml-2 text-lg text-primary font-semibold">720p</label>
            </div>
           <div class="flex items-center mb-4">
                <input id="default-radio-3" type="radio" value="" name="default-radio" class="hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ">
                <label for="default-radio-3" class="ml-2 text-lg text-primary font-semibold">480p</label>
            </div>
        </div>
    </div>
</div>
</template>