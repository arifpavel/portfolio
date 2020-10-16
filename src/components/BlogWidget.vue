<template>
  <div class="grid grid-cols-1 gap-2">
      <div v-for="post in posts" :key="post.id" class="max-w-sm w-full lg:max-w-full lg:flex">
        <!-- <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('./../../blog/images/background.jpg')" title="Woman holding a mug">
                    
        </div> -->
        <g-image class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="../../blog/images/background.jpg" />
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">{{ post.title }}</div>
            <p class="text-gray-700 text-base">{{ post.body }}</p>
            </div>
            <div class="flex items-center">
            <div class="text-sm">
                <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                <p class="text-gray-600">Aug 18</p>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            posts: []
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (res) => {
            // console.log(res.data[0])
            this.posts.push(res.data[0])
            this.posts.push(res.data[1])
        }).catch( (e) => {

        })
    }
}
</script>

<style>

</style>