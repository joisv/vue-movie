import axios from "axios";
import { ref } from "vue";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export default function getMovies(){

    const latestMovies = ref([])
    const popularMovies = ref([])
    const detailMovie = ref([])
    const detailTv = ref([])
    const resultSearch = ref([])
    const airingToday = ref([])
    const trendingsToday = ref([])
    const baseImgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    const playerPath = 'https://image.tmdb.org/t/p/original/'
    

    const getLatestMovie = async () => {
      try {
        const response = await axios.get('/movie/now_playing', {
          params: {
            api_key: 'b981dfb9bb3166e75c058c992030494f',
          }
        });
        latestMovies.value = response.data;
      } catch (error) {
          console.error(error);
      }
    }
    const getPopularMovie = async () => {
      try {
        const response = await axios.get('/movie/popular', {
          params: {
            api_key: 'b981dfb9bb3166e75c058c992030494f',
          }
        });
        popularMovies.value = response.data;
      } catch (error) {
          console.error(error);
      }
    }

    const getDetailMovie = async (id) => {
      try {
          const response = await axios.get(`/movie/${id}` , {
            params: {
              api_key: 'b981dfb9bb3166e75c058c992030494f',
            }
          });
          detailMovie.value = response.data;
        } catch (error) {
            console.error(error);
        }
    }
    const getDetailTv = async (id) => {
      try {
          const response = await axios.get(`/tv/${id}` , {
            params: {
              api_key: 'b981dfb9bb3166e75c058c992030494f',
            }
          });
          detailTv.value = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    const getAiringToday = async () => {
      try {
          const response = await axios.get('/tv/airing_today' , {
            params: {
              api_key: 'b981dfb9bb3166e75c058c992030494f',
            }
          });
          airingToday.value = response.data;
        } catch (error) {
            console.error(error);
        }
    }
    const getTrendings = async () => {
      try {
          const response = await axios.get('/trending/all/day' , {
            params: {
              api_key: 'b981dfb9bb3166e75c058c992030494f',
            }
          });
          trendingsToday.value = response.data;
        } catch (error) {
            console.error(error);
        }
    }
    const searchMulti = async (query) => {
      try {
          const response = await axios.get('/search/multi' , {
            params: {
              api_key: 'b981dfb9bb3166e75c058c992030494f',
              query: query
            }
          });
          resultSearch.value = response.data;
        } catch (error) {
            console.error(error);
        }
        console.log(resultSearch.value);  
      }


    return { 
        getLatestMovie, latestMovies, baseImgUrl, getDetailMovie, detailMovie, playerPath, airingToday, getAiringToday, getDetailTv, detailTv, getPopularMovie, popularMovies, getTrendings, trendingsToday, searchMulti, resultSearch
     }  
}