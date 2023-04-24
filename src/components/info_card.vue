<template>
    <div class="div0" v-for="item in response">
        <div class="div1">
            <a class="div1name" v-if="item.object.disease_id" :href="'search/disease/details/'+item.object.disease_id">{{ item.object.disease_id }}</a>
            <a class="div1name" v-if="item.object.prescription_id" :href="'search/prescription/details/'+item.object.prescription_id">{{ item.object.prescription_id }}</a>
            <a class="div1name" v-if="item.object.herb_id" :href="'search/herb/details/'+item.object.herb_id">{{ item.object.herb_id }}</a>
            <a class="div1name" v-if="item.object.compound_id" :href="'search/compound/details/'+item.object.compound_id">{{ item.object.compound_id }}</a>
            <a class="div1name" v-if="item.object.target_id" :href="'search/target/details/'+item.object.target_id">{{ item.object.target_id }}</a>
        </div>
        <div class="div2">
            <div class="div3" v-for="(value, key) in item.object">
                <div class="div2row">{{ key }}</div>
                <div class="div3row">{{ value }}</div>
            </div>


        </div>

    </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/searchResponse'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useStore()

let { response, active } = storeToRefs(store)

</script>


<style>
.div0 {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin: 0 auto;
    min-height: 10px;
    width: 950px;
    background-color: rgb(255, 249, 222);
    border: 3px solid rgb(255, 255, 255);
    border-radius: 10px;
    margin-bottom: 15px;

}

.div1 {
    width: 180px;
    height: 100%;
    background-color: rgb(238, 231, 136);
    /* 左上左下弧度 */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    /* 外边框 */
}

.div1name {
    font-size: 28px;
    /* a标签文字居中 */
    display: block;
    margin: auto;
    text-align: center;
    /* 文字竖直居中 */
    line-height: 110px;
    color: rgb(0, 0, 0);
    /* 文字加粗 */
    font-weight: bold;
}
/* 好看的悬浮特效 */
.div1name:hover {
    color: rgb(128, 128, 128);
    background-color: rgba(189, 189, 189, 0.411);
    border-radius: 10px;
}
.div2 {
    width: 800px;
    height: 100%;
}

.div2row {
    height: 100%;
    max-height: 24%;
    padding-left: 15px;
    width: 250px;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(236, 235, 226);
}

.div3 {
    /* 里面的div横着摆 */
    display: flex;
    width: 800px;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.div3row {
    height: 24%;
    width: 650px;
    padding-left: 15px;

    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(231, 231, 231);
}
</style>