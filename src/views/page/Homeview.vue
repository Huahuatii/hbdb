<template>
  <div class="container">
    <div style="width: 25%;"></div>
    <div class="text-box">
      <h2 style="color:rgb(234, 238, 242); font-size: 72px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="height: 60px; color: #7f7e7c;"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill='rgb(234, 238, 242)' d="M505 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L383 95c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l88-88zM305.5 27.3c-6.2-6.2-16.4-6.2-22.6 0L271.5 38.6c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4-30.5 30.5c-3.4-27.3-15.5-53.8-36.5-74.8L101.8 231c-6.2-6.2-16.4-6.2-22.6 0L67.9 242.3c-37.5 37.5-37.5 98.3 0 135.8l10.4 10.4L9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l68.9-68.9 12.2 12.2c37.5 37.5 98.3 37.5 135.8 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-21.8-21.8-49.6-34.1-78.1-36.9l31.9-31.9 12.2 12.2c22.5 22.5 53.3 31.5 82.4 27c0-1 0-2.1 0-3.1c0-33.1 9.1-64.1 25-90.6c-15.5-8.7-32.5-13.8-49.8-15.5l31.9-31.9 12.2 12.2c6 6 12.6 11.1 19.7 15.2c27.5-34 67.3-57.5 112.6-63.8c-4.1-3.8-8.4-7.3-12.9-10.5L505 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-59.4 59.4c-20.6-4.4-42-3.7-62.3 2.1c6.1-21.3 6.6-43.8 1.4-65.3L409 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L329.1 52.9c-3.7-5-7.8-9.8-12.4-14.3L305.5 27.3zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0-144c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-8.8 7.2-16 16-16z"/></svg> What <span class='DPHIT'>is <u>DPHIT</u> ?</span></h2>
      <p class="neirong">DPHIT is a comprehensive database based on the integration of big data of traditional Chinese medicine, including information on diseases, prescriptions, herbs, ingredients, targets, etc. The database includes a large number of prescriptions for modern pharmacological diseases treated with traditional Chinese medicine, including in-house preparations. Through frequency analysis, you can view their relationship with herbs, prescriptions, and targets. In addition, DPHIT has established a reliable herbal-formula-target information retrieval and management platform based on literature evidence, aiming to provide traditional Chinese medicine researchers with a comprehensive and reliable data resource to promote the modernization and industrialization of traditional Chinese medicine.
</p>
    </div>
  </div>

  <!-- 内容 -->
  <div class='mycontent' style="margin-top: 66px;">
    <h1 class="myh1">
      Summary Diagram
    </h1>
    <el-divider border-style="double" class="mydivider" />
    <img src="../../assets/fg2.png" alt="信息" class="hp_fg">

    <h1 class="myh1">
      Data Overview
    </h1>
    <el-divider border-style="double" class="mydivider" />
  </div>

  <div class='mycontent'>
    <div style="border:3px solid #896d41d9;margin: 15px;padding: 15px;border-radius:1ch ;">
      <el-row :gutter="20">
        <!-- 第一列的数据 -->
        <el-col :span="7" style="text-align: center;">
          <div class="type_num counter">{{ counter1 }}</div>
          <!-- ['Prescription','Herb', 'Compound', 'Target', 'Disease'] -->
          <div class="type">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 18px; color: #7f7e7c;"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#7f7e7c" d="M0 32C0 14.3 14.3 0 32 0H352c17.7 0 32 14.3 32 32V64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64V32zm32 96H352V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V416H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V320H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V224H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V128z" /></svg> 
            Prescriptions</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="8" style="text-align: center;">
          <div class="type_num counter">{{ counter2 }}</div>
          <div class="type"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 18px; color: #7f7e7c;"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#7f7e7c" d="M0 32C0 14.3 14.3 0 32 0H352c17.7 0 32 14.3 32 32V64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64V32zm32 96H352V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zM160 240v48H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V352h48c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H224V240c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg> Hospital prescriptions
</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="7" style="text-align: center;">
          <div class="type_num counter">{{ counter3 }}</div>

          <div class="type"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 18px; color: #7f7e7c;"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#7f7e7c" d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l74.8-74.8c7.4 4.6 15.3 8.2 23.8 10.5C200.3 452.8 270 454.5 338 409.4c12.2-8.1 5.8-25.4-8.8-25.4l-16.1 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l97.7-29.3c3.4-1 6.4-3.1 8.4-6.1c4.4-6.4 8.6-12.9 12.6-19.6c6.2-10.3-1.5-23-13.5-23l-38.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l80.9-24.3c4.6-1.4 8.4-4.8 10.2-9.3C494.5 163 507.8 86.1 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c2.1 7.9 12 9.6 17.8 3.8L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"/></svg> Herbs</div>
        </el-col>
        <el-col :span="7" style="text-align: center;">
          <div class="type_num counter">{{ counter4 }}</div>
          <!-- 数字 -->
          <!-- <el-statistic title="Daily active users" :value="counter3" /> -->

          <div class="type"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style="height: 18px; color: #7f7e7c;"><path d="M490.666667 197.717333a42.666667 42.666667 0 0 1 42.666666 0l147.818667 85.333334a42.666667 42.666667 0 0 1 21.333333 36.949333v170.666667a42.666667 42.666667 0 0 1-21.333333 36.949333l-147.797333 85.333333a42.666667 42.666667 0 0 1-42.666667 0l-147.818667-85.333333a42.666667 42.666667 0 0 1-21.333333-36.949333v-170.666667a42.666667 42.666667 0 0 1 21.333333-36.949333l147.797334-85.333334z m-83.797334 146.922667v121.386667L512 526.741333l105.152-60.714666v-121.386667L512 283.925333l-105.152 60.714667z" fill="#7f7e7c" p-id="1095"></path><path d="M554.688 106.666667v170.666666h-85.333333V106.666667h85.333333zM341.333333 453.717333a42.666667 42.666667 0 0 1 42.666667 0l147.797333 85.333334a42.666667 42.666667 0 0 1 21.333334 36.949333v170.666667a42.666667 42.666667 0 0 1-21.333334 36.949333l-147.797333 85.333333a42.666667 42.666667 0 0 1-42.666667 0l-147.797333-85.333333a42.666667 42.666667 0 0 1-21.333333-36.949333v-170.666667a42.666667 42.666667 0 0 1 21.333333-36.949333l147.797333-85.333334z m-83.797333 146.922667v121.386667L362.666667 782.741333l105.130666-60.714666v-121.386667L362.666667 539.925333l-105.130667 60.714667z" fill="#7f7e7c"></path><path d="M640.021333 453.717333a42.666667 42.666667 0 0 1 42.666667 0l147.797333 85.333334a42.666667 42.666667 0 0 1 21.333334 36.949333v170.666667a42.666667 42.666667 0 0 1-21.333334 36.949333l-147.797333 85.333333a42.666667 42.666667 0 0 1-42.666667 0l-147.797333-85.333333a42.666667 42.666667 0 0 1-21.333333-36.949333v-170.666667a42.666667 42.666667 0 0 1 21.333333-36.949333l147.797333-85.333334z m-83.797333 146.922667v121.386667L661.333333 782.741333l105.130667-60.714666v-121.386667l-105.130667-60.714667-105.130666 60.714667zM260.16 783.616l-147.797333 85.333333-42.666667-73.898666 147.797333-85.333334 42.666667 73.898667z" fill="#7f7e7c" p-id="1097"></path><path d="M752.384 783.616l147.797333 85.333333 42.666667-73.898666-147.797333-85.333334-42.666667 73.898667z" fill="#7f7e7c" p-id="1098"></path></svg> Compounds</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="8" style="text-align: center;">
          <div class="type_num counter">{{ counter5 }}</div>

          <div class="type"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 18px; color: #7f7e7c;"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#7f7e7c" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg> Targets</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="7" style="text-align: center;">
          <div class="type_num counter">{{ counter6 }}</div>

          <div class="type"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 18px; color: #7f7e7c;"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#7f7e7c" d="M236.4 61.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6h10c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4zM160 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg> Diseases</div>
        </el-col>
      </el-row>
      <!-- 第二列的数据 -->
    </div>
    <div>
      <div class='echart-div' style="float:left">
        <echarts1 />
      </div>
      <div class='echart-div' style="float:right">
        <!-- 一个居中的标题 -->
        <echarts2 />
      </div>
    </div>


  </div>
  <div style="min-height: 10px; color: #f3ecdd;">1</div>

</template>

<script lang="ts">
import echarts1 from '../home/echarts_home.vue'
import echarts2 from '../home/echarts_home2.vue'
import echarts2_detail from '../home/echarts2_detail.vue'

export default {
  data() {
    return {
      targetNumber1: 5212, // 设置目标数字
      targetNumber2: 1340, // 设置目标数字
      targetNumber3: 2751, // 设置目标数字
      targetNumber4: 576, // 设置目标数字
      targetNumber5: 1284, // 设置目标数字
      targetNumber6: 2218, // 设置目标数字
      counter1: 0, // 初始数字为0
      counter2: 0, // 初始数字为0
      counter3: 0, // 初始数字为0
      counter4: 0, // 初始数字为0
      counter5: 0, // 初始数字为0
      counter6: 0, // 初始数字为0
      duration: 1000, // 动画持续时间为1秒
    };
  },
  computed: {
    // 通过计算属性计算出数字变化的百分比
    percent() {
      return this.counter1 / this.targetNumber1;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    animate() {
      let start: any = null;
      const step = (timestamp: any) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        this.counter1 = Math.round(this.targetNumber1 * this.easeInOutQuart(progress / this.duration));
        this.counter2 = Math.round(this.targetNumber2 * this.easeInOutQuart(progress / this.duration));
        this.counter3 = Math.round(this.targetNumber3 * this.easeInOutQuart(progress / this.duration));
        this.counter4 = Math.round(this.targetNumber4 * this.easeInOutQuart(progress / this.duration));
        this.counter5 = Math.round(this.targetNumber5 * this.easeInOutQuart(progress / this.duration));
        this.counter6 = Math.round(this.targetNumber6 * this.easeInOutQuart(progress / this.duration));
        if (progress < this.duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
    // 缓动函数，使动画更平滑
    easeInOutQuart(t: any) {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    },
    handleScroll() {
      const triggerPosition = 700; // 触发动画的位置
      const currentPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (currentPosition >= triggerPosition) {
        this.animate();
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
  },
  components: {
    echarts1,
    echarts2,
    echarts2_detail,
  },
};
</script>





<style>
.container {
  background-image: url("../../assets/herb_background_pic.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-filter: blur(3px); */
  display: flex;
  justify-content: center;

}

.text-box {
  background-color: #896d419b;
  border-radius: 10px;
  border: 1px solid #896d41d9;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  height: 30%;
  /* 高度居中 */
  text-align: justify;
  max-width: 1000px;
  margin: 5% auto;
  /* 里面文字居中 */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}

.hp_fg {
  width: 1290px;
  padding: 30px;

}

h2 {
  color: aliceblue;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.neirong {
  color: rgb(226, 229, 233);
  font-size: 1.5rem;
}

.mycontent {
  width: 1350px;
  margin: 0 auto;
}

.myh1 {
  color: rgb(86, 86, 86);
}

.type_num {
  margin: 0 auto;
  padding: 0 auto;
  font-size: 60px;
  color: #60584bdd;
  font-weight: 500;
}

.type {
  font-size: 20px;
  color: #6b6b6bd9;
  font-weight: 500;
}

.mydivider {
  background-color: rgb(197, 115, 14);
}

.mydivider2 {
  background-color: #896d419b;
  width: 3px;
  height: 90%;
  margin: auto
}

.echart-div {
  background-color: #f8f1dd;
  border-radius: px;
  border: 1px solid #896d41d9;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  min-height: 480px;
  /* 高度居中 */
  text-align: justify;
  width: 600px;
  margin: 15px;
}
.DPHIT{
  font-size: 60px;
  /* 文字颜色*/
  color: #ffffff;

}

/* .num_icon{
  height:auto ;
} */
</style>


