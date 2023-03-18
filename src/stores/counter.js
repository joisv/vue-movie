import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'movie',
  state: () => ({
    konfirmasi : false,
    info : false,
    infoTv : false,
    download : false,
    report : false,
    resolusi : false,
    isMobile : false,
    activeButton : 1,
    isActive : false,
    src : 'https://www.youtube.com/embed/jfKfPfyJRdk'
  }),

  actions:{
    nav(){
      this.isActive = !this.isActive
    },
    toggleInfo() {
      this.resetVariables();
    },
    moreInfo() {
      this.resetVariables();
      this.info = true;
    },
    moreInfoTv() {
      this.resetVariables();
      this.infoTv = true;
    },
    downLoad() {
      this.resetVariables();
      this.download = true;
    },
    useReport() {
      this.resetVariables();
      this.report = true;
    },
    useResolusi() {
      this.resetVariables();
      this.resolusi = true;
    },
    resetVariables() {
      this.konfirmasi = true;
      this.download = false;
      this.info = false;
      this.infoTv = false;
      this.report = false;
      this.resolusi = false;
    },
    useResolusi() {
      this.konfirmasi = this.resolusi = true;
      this.download = this.info = this.report = false;
    },
  },
  getters: {
    srcValue: (state) => {
      return !!state.src
  }
  }
})
