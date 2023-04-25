<template>
  <div class="container">
    <div style="width: 25%;"></div>
    <div class="text-box">
      <h2 style="color:rgb(234, 238, 242)">About <u class='DPHIT'>DPHIT</u></h2>
      <p class="neirong">DPHIT is a comprehensive database based on the integration of big data of traditional Chinese medicine, including information on diseases, prescriptions, herbs, ingredients, targets, etc. The database includes a large number of prescriptions for modern pharmacological diseases treated with traditional Chinese medicine, including in-house preparations. Through frequency analysis, you can view their relationship with herbs, prescriptions, and targets. In addition, DPHIT has established a reliable herbal-formula-target information retrieval and management platform based on literature evidence, aiming to provide traditional Chinese medicine researchers with a comprehensive and reliable data resource to promote the modernization and industrialization of traditional Chinese medicine.
</p>
    </div>
  </div>

  <!-- 内容 -->
  <div class='mycontent' style="margin-top: 66px;">
    <h1 class="myh1">
      Overview of DBHIT
    </h1>
    <el-divider border-style="double" class="mydivider" />
    <img src="../../assets/fg2.png" alt="信息" class="hp_fg">

    <h1 class="myh1">
      Overview of DBHIT
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
          <div class="type">Prescriptions</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="8" style="text-align: center;">
          <div class="type_num counter">{{ counter2 }}</div>
          <div class="type">Hospital prescriptions
</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="7" style="text-align: center;">
          <div class="type_num counter">{{ counter3 }}</div>

          <div class="type">Herbs</div>
        </el-col>
        <el-col :span="7" style="text-align: center;">
          <div class="type_num counter">{{ counter4 }}</div>

          <div class="type">Compounds</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="8" style="text-align: center;">
          <div class="type_num counter">{{ counter5 }}</div>

          <div class="type">Targets</div>
        </el-col>
        <el-col :span="1" style="text-align: center;">
          <div class="mydivider2"></div>

        </el-col>
        <el-col :span="7" style="text-align: center;">
          <div class="type_num counter">{{ counter6 }}</div>

          <div class="type">Diseases</div>
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
    // 在组件挂载完成后开始动画
    this.animate();
  },
  methods: {
    animate() {
      let start:any = null;
      const step = (timestamp:any) => {
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
    easeInOutQuart(t:any) {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    },
  },



  components: {
    echarts1,
    echarts2,
    echarts2_detail
  }
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
  font-size: 74px;
  /* 文字颜色*/
  color: #ffffff;

}
</style>


