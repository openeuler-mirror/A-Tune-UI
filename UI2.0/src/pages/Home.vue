<template>
  <q-page>
    <div class="row">
      <!-- 首页第一栏 -->
      <div class="col-12 col-module-a row" style="height: 600px; width: 1920px">
        <div
          class="float-left"
          style="margin-left: 188px; padding: 0px; float: left"
        >
          <p
            class="text-left text-h5 text-weight-bold"
            style="
              margin-top: 220px;
              margin-bottom: 32px;
              font-size: 40px;
              color: #222222;
            "
          >
            A-Tune介绍
          </p>
          <p
            class="q-pt-sm introduce-text"
            style="
              font-size: 18px;
              color: #222222;
              padding: 0px;
              margin-bottom: 262px;
            "
          >
            A-Tune是一款基于AI的操作系统性能调优引擎。A-Tune利用AI技术，
            <br />使操作系统“懂”业务，简化IT系统调优工作的同时，让应用程序发挥出色性能。
          </p>
        </div>
        <div>
          <img
            alt=""
            src="~assets/home/banner-picture.png"
            style="background-size: contain|cover; width: auto; height: 100%"
          />
        </div>
      </div>
      <!-- 首页第二栏 -->
      <div class="col-12 col-module" style="height: 280px; width: 1920px">
        <div class="row" style="justify-content: center">
          <!-- 第二栏——AI算法 -->
          <div class="col introduce" style="margin-left: 188px">
            <img
              alt="A-Tune piciure"
              src="~assets/home/AI-algorithm.png"
              style="float: left; width: 43%"
            />
            <div style="float: left">
              <p
                class="text-left text-weight-medium"
                style="
                  font-size: 20px;
                  color: #222222;
                  margin-bottom: 16px;
                  margin-top: 56px;
                "
              >
                AI算法
              </p>
              <p style="margin-bottom: 54px">利用人工智能技术推理出具体应用</p>
            </div>
          </div>
          <!-- 第二栏——自动化 -->
          <div class="col introduce">
            <img
              alt="A-Tune piciure"
              src="~assets/home/automation.png"
              style="float: left; width: 43%"
            />
            <div style="float: left">
              <p
                class="text-left text-weight-medium"
                style="
                  font-size: 20px;
                  color: #222222;
                  margin-bottom: 16px;
                  margin-top: 56px;
                "
              >
                自动化
              </p>
              <p style="margin-bottom: 54px">
                根据业务负载给出最佳参数配置组合
              </p>
            </div>
          </div>
          <!-- 第二栏——性能调优 -->
          <div class="col introduce" style="margin-right: 188px">
            <img
              alt="A-Tune piciure"
              src="~assets/home/performance-optimizing.png"
              style="float: left; width: 43%"
            />
            <div style="float: left">
              <p
                class="text-left text-weight-medium"
                style="
                  font-size: 20px;
                  color: #222222;
                  margin-bottom: 16px;
                  margin-top: 56px;
                "
              >
                性能调优
              </p>
              <p style="margin-bottom: 54px">可使业务运行于最佳系统性能状态</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 首页第三栏——离线动态调优-->
      <div
        class="col-12 col-module-b row"
        style="height: 680px; width: 1920px; justify-content: center"
      >
        <div class="col" style="margin: 250px 210px 270px 188px">
          <p
            class="text-left text-weight-bold"
            style="font-size: 30px; color: #222222; margin-bottom: 32px"
          >
            离线动态调优
          </p>
          <p class="introduce-text">
            A-Tune提供了最佳配置的自动搜索能力，免去人工反复做参数调整、性能评价的调优过程，极大地提升最优配置的搜寻效率。
          </p>
          <p class="introduce-text" style="margin-top: 24px">
            要在被调优系统或应用闲置时使用，使用AI算法对用户提供的参数进行反复调优，从而达到性能较好的结果。同时提供重要参数选择功能，即在用户提供的参数中筛选出对当前场景性能影响更高的参数。
          </p>
        </div>
        <img
          alt="A-Tune piciure"
          src="~assets/home/offline-dynamic-tuning.png"
          style="width: 452px; height: 442px; margin: 119px 428px 119px 0px"
        />
      </div>
      <!-- 首页第四栏——在线静态调优-->
      <div
        class="col-12 col-module row"
        style="height: 680px; width: 1920px; justify-content: center"
      >
        <img
          alt="A-Tune piciure"
          src="~assets/home/online-static-tuning.png"
          style="width: 452px; height: 442px; margin: 119px 0px 119px 376px"
        />
        <div class="col" style="margin: 250px 188px 294px 258px">
          <p
            class="text-left text-h6 text-weight-bold"
            style="font-size: 30px; color: #222222; margin-bottom: 32px"
          >
            在线静态调优
          </p>
          <p class="introduce-text">
            采集系统的实时统计数据进行负载类型识别，并进行自动优化。
          </p>
          <p class="introduce-text" style="margin-top: 24px">
            需要在被调优系统或应用运行时使用，使用A-Tune采集功能对当前操作系统各项指标数据进行采集，并将采集结果进行建模分析，与已有模型对比，识别出当前系统运行的应用。随后将应用的调优参数下发。
          </p>
        </div>
      </div>
      <!-- 首页第五栏 -->
      <div class="col-12 col-module-c" style="height: 680px; width: 1920px">
        <p
          class="text-center text-weight-bolder"
          style="
            margin: 56px 0px;
            font-size: 30px;
            font-family: SimHei;
            color: #222222;
          "
        >
          支持14大类50款应用调优
        </p>
        <div style="text-align: center">
          <img
            alt="14大类50款应用"
            src="~assets/home/14-categories-and-50-applications.png"
            style="margin-bottom: 56px"
          />
        </div>
      </div>
      <!-- 首页第六栏 -->
      <div class="col-12 col-module-d" style="height: 220px; width: 1920px">
        <div class="text-center" style="padding: 56px 0px">
          <span
            style="
              font-size: 24px;
              color: #ffffff;
              display: inline-block;
              padding-bottom: 24px;
            "
            >A-Tune安装部署</span
          >
          <br />
          <span style="font-size: 14px; color: #cccccc"
            >A-Tune整体应用可以分为三部分：atune-client,atuned,atune-engine。三部分功能可以作为整体部署在同一节点上，也可以拆分或两两组合，分别部署在二到三个节点上。</span
          >
          <br />
          <span
            style="
              font-size: 14px;
              color: #ffffff;
              display: inline-block;
              padding: 12px 16px 0px 16px;
            "
            >具体部署方法请参考</span
          >
          <a href="http://gitee.com/openeuler/A-Tune/blob/master/README.md"
            style="
              font-size: 14px;
              color: #3781de;
              font-family: HuaweiSans;
              padding-left: 16px;
              padding-right: 16px;
            "
            >http://gitee.com/openeuler/A-Tune/blob/master/README.md</a
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/home.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/home.css";
</style>
