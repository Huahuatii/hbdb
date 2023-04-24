<template>
    <button @click="getInfo">点击</button>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import axios from 'axios'

let data = ref({})
function getInfo() {
    axios.get('api/herb/H0001/').then(function(res){
        console.log(res.data)
        data = res.data
    }).catch(function(err){
        alert(err)
    })
}


</script>