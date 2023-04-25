<template>
  <div class="search-box" style="height: 300px; margin-top: 300px;border-radius: 2ch;">
      <div>
          <div class="search-box-header">
              <div class="search-box-buttons" style="margin: 0 auto;padding-top:35px ;">
                  <button class="nav-link" :class="{ active: isActive === 0 }" @click="changeType(0, 'e.g. Type 2 Diabetes, Arthritis, Insomnia')">Disease</button>
                  <button class="nav-link" :class="{ active: isActive === 1 }"
                      @click="changeType(1, 'e.g. Aspirin, Paracetamol, Ibuprofen')">Prescription</button>
                  <button class="nav-link" :class="{ active: isActive === 2 }" @click="changeType(2, 'e.g. Ginger, Turmeric, Ginkgo Biloba')">Herb</button>
                  <button class="nav-link" :class="{ active: isActive === 3 }" @click="changeType(3, 'e.g. Metformin, Lipitor, Vitamin C')">Compound</button>
                  <button class="nav-link" :class="{ active: isActive === 4 }" @click="changeType(4, 'e.g. Insulin Receptor, Dopamine Transporter, COX-2')">>Target</button>
              </div>
          </div>
          <div class="search-box-body" style="width: 1000px; margin: 0 auto;min-height:70px ;">
              <div style=" display:flex">


                  <div class="dropdown-menu" style="width: 120px;flex-basis: 50%;">
                      <el-select class="myelselect" v-model="value" filterable placeholder="Select a type"
                          popper-class="eloption" :popper-append-to-body="true" size="large">
                          <el-option v-for="(subtype, index) in selected_subtype_list" :key="index" :label="subtype"
                              :value="subtype" @click="changeSubType(index)" />
                      </el-select>
                      <!-- <a class="dropdown-item" v-for="(subtype, index) in selected_subtype_list" :key=index href="#"
              @click="changeSubType(index)">{{ subtype }}</a> -->
                  </div>
                  <div style="flex-basis: 50%;">
                      <div style="myform">
                          <input multiple type="text" class="search-box-input"
                              aria-label="Text input with dropdown button" v-model="input_text"
                              placeholder="Enter your search query">
                          
                          <button type="submit" class="larch-box-button"
                              style="height: 70px; width: 60px;" @click="search()">



                              <svg t="1681132717992" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                  xmlns="http://www.w3.org/2000/svg" p-id="2996" width="32" height="32">
                                  <path
                                      d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z"
                                      fill="#575B66" p-id="2997"></path>
                              </svg>
                          </button>
                          <p class="search-box-example" v-show="!menu_drop">{{ example1 }}</p>
                          <div class="dropdown-item oo" v-if="menu_drop" id="xx">
                              <option class="myoption" v-for="(suggest, index) in suggest_list" :key=index
                                  :label="suggest" :value="suggest" @click="choose_suggest(index)">{{
                                      suggest }}
                              </option>
                              
                              <!-- <p class="dropdown-item" v-for="su in suggest" :key="su" @click="choose">{{su}}</p> -->
                          </div>
                      </div>

                  </div>
              </div>


          </div>


      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'

const value = ref('')
// 切换导航标签相关
// 主选项
const nav_type_list = ['disease', 'prescription', 'herb', 'compound', 'target']
let selected_type = ref("disease")
let isActive = ref(0)
// 副选项
const nav_subtype_list: Record<string, string[]> = {
  "disease": ["chinese_name", "english_name"],
  "prescription": ["chinese_name", "pinyin"],
  "herb": ["chinese_character", "latin_name"],
  "compound": ["pref_name", "cas"],
  "target": ["gene", "uniprot"]
}
let selected_subtype_list = nav_subtype_list[selected_type.value]
let selected_subtype = ref(selected_subtype_list[0])
let selected_subtype_index = 0
let example1 = "e.g. Type 2 Diabetes, Arthritis, Insomnia"

// 切换主选项
function changeType(i: number, example:any) {
  isActive.value = i;
  selected_type.value = nav_type_list[i]
  example1 = example;
}
// 切换副选项
watch(selected_type, (nv, ov) => {
  selected_subtype_list = nav_subtype_list[nv]
})

function changeSubType(i: number) {
  selected_subtype.value = selected_subtype_list[i],
      selected_subtype_index = i
  suggest_list.value = []
}


// 建议器相关
let input_text = ref()
let suggest_list = ref([])
let menu_drop = ref(false)
let have_chosen = false

// 检测输入框内容变化实时返回建议信息
watch(input_text, (nv, ov) => {
  suggest_list.value = []
  menu_drop.value = true
  if (nv == "" || have_chosen) {
      menu_drop.value = false
  }
  have_chosen = false
  let query_key = selected_subtype_index == 0 ? 'cn' : 'ln'
  // 向后端发送建议请求
  axios.get(`http://192.168.30.139:8000/${selected_type.value}/suggest/?${query_key}=${input_text.value}`, { "data": nv }).then(function (res) {
      suggest_list.value = res.data.suggest
  })
})

// 建议选项选择
function choose_suggest(i: number) {
  have_chosen = true
  input_text.value = suggest_list.value[i]
  menu_drop.value = false
}


// 搜索相关
function search() {
  axios.get(`http://192.168.30.139:8000/${selected_type.value}/search/?text=${input_text.value}`).then(function (res) {
      console.log(res.data)
  })
}
// 实时建议器

</script>
<style scoped>
.myform {
  position: relative;
  width: 900px;
}

.search-box {
  background-color: #e6cb92d5;
  width: 1050px;
  margin: 0 auto;
  border: 1px solid #b48607;
  border-radius: 5px;
  padding: 20px;
}

.search-box-header {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-box-title {
  display: flex;
  align-items: center;
}

.search-box-title img {
  height: 60px;
  margin-right: 20px;
}

.search-box-buttons {
  /* button居中 */
  text-align: center;
}

.larch-box-button {
  border-radius: 100px;
  position: absolute;
  left: 50%;
  padding-left: 450px;
  width: 120px;
  height: 70px;
  background-color: #cf6e6e00;
  border: none;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.larch-box-button svg {
display: inline-block;
transition: transform 0.3s ease-in-out;
}
.larch-box-button:hover svg {
transform: rotate(360deg);
transform: scale(1.5);
}
.myoption {
  background-color: #cf6e6e00;
  cursor: pointer;
}
#xx{
background-color: #eeee;
cursor: pointer;
font-family: 'Roboto', sans-serif;
}
#xx :hover{
background-color: #cfcdcdee;
cursor: pointer;
}
.search-box-buttons button {
  margin-left: 15px;
  display: inline-block;
  padding: 0.5em 1.5em;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  border-radius: 2em;
  color: #fff;
  background: linear-gradient(to bottom right, #e2ab45, #ff8d33);
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  cursor: pointer;
}

.search-box-buttons button.hover {
  transform: translateY(-0.2em);
  box-shadow: 0 0.75em 1.5em rgba(0, 0, 0, 0.15);
}

.search-box-buttons button.active {
  box-shadow: 0 0 10px rgba(255, 87, 51, 0.8);
  border: 3px solid #eb4b27a2;
}



.search-box-input {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 50px;
  width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, #fffff9, #e4d894);
  caret-color: #f7fbff;
  padding: 10px;
  border: none;
  border-radius: 0.7em 0.7em 0.7em 0.7em;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
}

@keyframes pulse {
  0% {
      transform: scale(1);
  }

  50% {
      transform: scale(1.1);
  }

  100% {
      transform: scale(1);
  }
}

:deep(.el-input__wrapper) {
  height: 70px;
  background-color: #ffffffef;
  font-size: 28cap;
  margin: 0 12px;
  border: 12px;
  border-radius: 5px;
}
</style>
  