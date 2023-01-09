<template>
  <q-page>
    <div
      class="row"
      style="
        margin: 0 auto;
        width: 1920px;
        height: 100%;
        background-color: #f1f2f6;
      "
    >
      <!-- 导航栏 -->
      <div
        class="col col-module"
        style="height: 1200px; margin: 32px; background-color: #f7f9f8"
      >
        <div class="content-left">
          <div class="left-title">
            <a>目录</a>
          </div>
          <div class="nav">
            <div class="nav-mune">
              <!-- 主标题 -->
              <div class="row title-bgd" style="justify-content: flex-start">
                <div class="nav-title" @click="theFirstClick">历史</div>
              </div>
              <!-- 子标题 -->
            </div>
            <div class="nav-mune">
              <!-- 主标题 -->
              <div class="row title-bgd" style="justify-content: flex-start">
                <div class="nav-title" @click="theSecondClick">
                  特征与设计哲学
                </div>
              </div>
              <!-- 子标题 -->
            </div>
            <div class="nav-mune">
              <!-- 主标题 -->
              <div class="row title-bgd" style="justify-content: space-between">
                <div class="nav-title" @click="showThirdSubmenu">语法</div>
                <q-icon
                  id="down-up1"
                  class="down-up"
                  name="expand_more"
                  style="display: block"
                  @click="showThirdSubmenu"
                ></q-icon>
                <q-icon
                  id="up-down1"
                  class="down-up"
                  name="expand_less"
                  style="display: none"
                  @click="showThirdSubmenu"
                ></q-icon>
              </div>
              <!-- 子标题 -->
              <div id="thirdSubmenu" class="nav-content" style="display: none">
                <a @click="theThird1Click">缩排</a>
                <a @click="theThird2Click">关键词</a>
                <a @click="theThird3Click">标识符</a>
                <a @click="theThird4Click">语句和控制流</a>
                <a @click="theThird5Click">表达式</a>
                <a @click="theThird6Click">函数</a>
                <a @click="theThird7Click">对象及其方法</a>
                <a @click="theThird8Click">类型</a>
                <a @click="theThird9Click">数字</a>
              </div>
            </div>
            <div class="nav-mune">
              <!-- 主标题 -->
              <div class="row title-bgd" style="justify-content: flex-start">
                <div class="nav-title" @click="theFourthclick">标准库</div>
              </div>
              <!-- 子标题 -->
            </div>
            <div class="nav-mune">
              <!-- 主标题 -->
              <div class="row title-bgd" style="justify-content: flex-start">
                <div class="nav-title" @click="theFifthclick">程序代码实例</div>
              </div>
              <!-- 子标题 -->
            </div>
            <div class="nav-mune">
              <!-- 主标题 -->
              <div class="row title-bgd" style="justify-content: space-between">
                <div class="nav-title" @click="showSixthSubmenu">实现</div>
                <q-icon
                  id="down-up2"
                  class="down-up"
                  name="expand_more"
                  style="display: block"
                  @click="showSixthSubmenu"
                ></q-icon>
                <q-icon
                  id="up-down2"
                  class="down-up"
                  name="expand_less"
                  style="display: none"
                  @click="showSixthSubmenu"
                ></q-icon>
              </div>
              <!-- 子标题 -->
              <div id="sixthSubmenu" class="nav-content" style="display: none">
                <a @click="theSixth1click">副标题1</a>
                <a @click="theSixth2click">副标题2</a>
                <a @click="theSixth3click">副标题3</a>
              </div>
            </div>
            <div class="nav-mune">
              <!-- 主标题 -->
              <div class="row title-bgd" style="justify-content: space-between">
                <div class="nav-title" @click="showSeventhSubmenu">
                  开发环境
                </div>
                <q-icon
                  id="down-up3"
                  class="down-up"
                  name="expand_more"
                  style="display: block"
                  @click="showSeventhSubmenu"
                ></q-icon>
                <q-icon
                  id="up-down3"
                  class="down-up"
                  name="expand_less"
                  style="display: none"
                  @click="showSeventhSubmenu"
                ></q-icon>
              </div>
              <!-- 子标题 -->
              <div
                id="seventhSubmenu"
                class="nav-content"
                style="display: none"
              >
                <a @click="theSeventh1click">副标题1</a>
                <a @click="theSeventh2click">副标题2</a>
                <a @click="theSeventh3click">副标题3</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 数据栏 -->
      <div
        class="col-9 col-module"
        style="
          height: 1200px;
          margin: 32px 32px 32px 0px;
          background-color: #ffffff;
        "
      >
        <!-- 1、历史 -->
        <div id="first" style="display: block">
          <div class="title-right">历史</div>
          <br />
          <div class="text-history">
            <a
              >操作系统作为衔接应用和硬件的基础软件，如何调整系统和应用配置，充分发挥硬件能力，
              从而使业务性能达到最优，对用户至关重要。然而，运行在操作系统上的业务类型成百上千，
              应用形态千差万别，对资源的要求各不相同。当前硬件和基础软件组成的应用环境设计高达
              7000多个配置对象，随着业务复杂度和调优对象的增加，调优所需的时间成本呈指数级增长，
              导致调优效率急剧下降，调优成为了一项极其复杂的工程，给用户带来巨大挑战。</a
            >
            <br />
            <br />
            <a
              >其次，操作系统作为基础设施软件，提供了大量的软硬件管理能力，每种能力适用场暴不尽相同，
              并非对所有的应用场景都通用有益，因此，不同的场景需要开启或关闭不同的能力，
              组合使用系统提供的各种能力，才能发挂应用桯序的最佳性能。</a
            >
            <br />
            <br />
            <a
              >另外，实际业务场景成干上万，计算、网路、存储等硬件配置也层出不旁，
              实验室无法遍历穷举所有的应用和业务场景，以及不同的硬件组合。</a
            >
            <br />
            <br />
            <a>为了应对上述挑战，openEuler推出了A-Tune.</a>
            <br />
            <br />
            <a
              >A-Tune是一款基于AI开发的系统性能优化引擎，它利用人工智能技术，对业务场景建立精准的系统画像，
              感知并推理出业务特征，进而做出智能决策，匹配并推荐最佳的系统参数配置组合，使业务处于最佳运行状态。</a
            >
          </div>
        </div>
        <!-- 2、特征与设计哲学 -->
        <div id="second" style="display: none">
          <div class="title-right">特征与设计哲学</div>
          <br />
          <div class="text-history">
            <a
              >设计哲学：就文化的历史生成而言，设计哲学是当代的历史旨归；
              就科学和技术的实践生成而言，设计哲学是发展的必然趋势；
              就设计本质的回归与设计理论体系的建构需求而言，设计哲学是系统的核心诉求。</a
            >
          </div>
        </div>
        <!-- 3.1语法-缩排 -->
        <div id="third1" style="display: none">
          <div class="title-right">语法/缩排</div>
          <br />
          <div class="text-history">
            <a
              >缩排是一种缩进的排版方式。当连续两行中，后一行在逻辑上是出于下层，
              则后一行首字符应当比前一行推后几个字符位置。一般是4字节。</a
            >
          </div>
        </div>
        <!-- 3.2关键词 -->
        <div id="third2" style="display: none">
          <div class="title-right">关键词</div>
          <br />
          <div class="text-history">
            <a
              >关键字又称保留字（keyword）是指在搜索引擎行业中，
              希望访问者了解的产品、服务或者公司等内容名称的用语。</a
            >
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="../js/about-A-Tune.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/about-A-Tune.css";
</style>
    