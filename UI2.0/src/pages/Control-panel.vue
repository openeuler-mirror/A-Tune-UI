<template>
  <q-page>
    <div class="row main-bg-style">
      <!-- column info -->
      <div id="col-info-mod">
        <div class="float-left" style="padding-left: 204px;">
          <div id="col-info-left-text">
            上午好，张三jWX1084983愿您事事顺心，快乐相随！
          </div>
          <div id="col-info-left-subtext">
            长风破浪会有时，直挂云帆济沧海
          </div>
        </div>
        <div class="float-right" style="margin: 32px 32px;">
          <div class="float-left">
            <div class="text-right col-info-right-ti">
              IP数量
            </div>
            <div class="text-right text-white col-info-right-num">
              14711
            </div>
          </div>
          <div class="float-left">
            <div class="text-right col-info-right-ti">
              analysis数量
            </div>
            <div class="text-right text-white col-info-right-num">
              200
            </div>
          </div>
          <div class="float-left">
            <div class="text-right col-info-right-ti">
              tuning数量
            </div>
            <div class="text-right text-white col-info-right-num">
              0
            </div>
          </div>
          <div class="float-left">
            <div class="text-right col-info-right-ti">
              tuning数量
            </div>
            <div class="text-right text-white col-info-right-num">
              0
            </div>
          </div>
          <div class="float-left">
            <div class="text-right col-info-right-ti">
              tuning数量
            </div>
            <div class="text-right text-white col-info-right-num">
              0
            </div>
          </div>
        </div>
      </div>
      <!-- column table -->
      <div class="row" id="col-table-mod">
        <div class="col bg-white" style="margin-right: 16px; width: 1388px">
          <div>
            <div class="float-left text-title" style="width: 1234px;">
              近7天任务列表
            </div>
            <div class="float-left">
              <button class="confirm-btn" @click="onCommandClick">新建命令</button>
            </div>
            <div id="col-table-left">
              <table class="task-table">
                <tr>
                  <th style="padding-left: 24px; width: 50px">序号</th>
                  <th style="width: 180px;"><a>|</a>任务名称</th>
                  <th><a>|</a>IP地址</th>
                  <th><a>|</a>命令
                    <q-icon
                      name="help"
                      style="font-size: 17px;"
                    >
                      <q-tooltip
                        anchor="top middle"
                        self="bottom middle"
                        :offset="[10, 10]"
                      >
                        点击命令可直接跳转到历史命令
                      </q-tooltip>
                    </q-icon>
                  </th>
                  <th>
                    <a>|</a>任务状态
                    <img src="../assets/common/filter-default.png" />
                  </th>
                  <th style="width: 120px">
                    <a >|</a>开始时间
                    <q-icon name="unfold_more"></q-icon>
                  </th>
                  <th><a>|</a>操作</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td><q-icon name="edit"></q-icon>Test1</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-running"></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr class="alt">
                  <td>2</td>
                  <td><q-icon name="edit"></q-icon>Test2</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-finish"></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><q-icon name="edit"></q-icon>Test3</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-failed"></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><q-icon name="edit"></q-icon>Test4</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-running"></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><q-icon name="edit"></q-icon>Test5</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-finish"></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><q-icon name="edit"></q-icon>Test6</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-failed"></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td><q-icon name="edit"></q-icon>Test7</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-running"></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr class="alt">
                  <td>8</td>
                  <td><q-icon name="edit"></q-icon>Test8</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-finish"></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td><q-icon name="edit"></q-icon>Test9</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-failed"></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td><q-icon name="edit"></q-icon>Test10</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-running"></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr class="alt">
                  <td>11</td>
                  <td><q-icon name="edit"></q-icon>Test11</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-finish"></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td><q-icon name="edit"></q-icon>Test12</td>
                  <td>9.10.33.13</td>
                  <td class="col-table-hyper-color">在线调优</td>
                  <td>
                    <div class="row">
                      <div class="state-icon state-icon-failed"></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="operation-btn">详情</button>
                    <button class="operation-btn">删除</button>
                  </td>
                </tr>
              </table>
            </div>
            <div
              class="row space-btw"
              style="margin: 24px 32px 32px 32px;"
            >
              <div style="padding-top: 12px">共100条数据</div>
              <div>
                <div class="float-left">
                  <select class="select_page">
                    <option selected>10条/页</option>
                    <option>20条/页</option>
                  </select>
                </div>
                <div class="float-left">
                  <ul class="pagination">
                    <li>
                      <a href=""><q-icon name="chevron_left"></q-icon></a>
                    </li>
                    <li><a class="active" href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li>
                      <a href=""><q-icon name="chevron_right"></q-icon></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white" style="width: 452px">
          <div class="text-title">
            使用频率排行榜
          </div>
          <div>
            <table class="rate-table" border="0">
              <tr>
                <th style="padding-left: 24px">排名</th>
                <th><a>|</a>参数名称</th>
                <th class="rate-column"><a>|</a>使用频率</th>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/1.png" /></td>
                <td>CPU</td>
                <td class="rate-column">15</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/2.png" /></td>
                <td>Mem</td>
                <td class="rate-column">14</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/3.png" /></td>
                <td>主硬盘</td>
                <td class="rate-column">13</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/4.png" /></td>
                <td>显示器</td>
                <td class="rate-column">12</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/5.png" /></td>
                <td>网卡</td>
                <td class="rate-column">11</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/6.png" /></td>
                <td>声卡</td>
                <td class="rate-column">10</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/7.png" /></td>
                <td>光驱</td>
                <td class="rate-column">9</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/8.png" /></td>
                <td>网卡</td>
                <td class="rate-column">8</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/9.png" /></td>
                <td>声卡</td>
                <td class="rate-column">7</td>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/10.png" /></td>
                <td>光驱</td>
                <td class="rate-column">6</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- column chart -->
      <div class="row" id="col-chart-mod">
        <div class="col bg-white widget-chart-div">
          <div>
            <div class="add-chart-icon" @click="popWin"></div>
            <button class="bg-white add-chart-btn" @click="popWin">新增图表</button>
          </div>
        </div>
        <div class="col bg-white widget-chart-div">
          <div class="row space-btw">
            <div class="text-title" style="margin-bottom: 0px">
              运行中的任务列表
            </div>
            <div class="delete-pic" style=""></div>
          </div>
          <div id="main1" class="col line-chart"></div>
        </div>
        <div class="col bg-white widget-chart-div">
          <div class="row space-btw">
            <div class="text-title" style="margin-bottom: 0px;">
              Test1XX使用对比情况
            </div>
            <div class="delete-pic"></div>
          </div>
          <div id="main2" class="col bar-chart"></div>
        </div>
        <div class="col bg-white widget-chart-div" style="margin-right: 0px;">
          <div class="row space-btw">
            <div class="text-title" style="margin-bottom: 0px;">
              Test1XX占比情况
            </div>
            <div class="delete-pic"></div>
          </div>
          <div id="main3" class="col circle-chart"></div>
        </div>
      </div>
      <!-- cards column -->
      <div id="cards-column-1" style="display: none">
        <div class="row add-card-div">
          <div class="col bg-white widget-chart-div">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
          <div class="col bg-white widget-chart-div">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
          <div class="col bg-white widget-chart-div">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
          <div class="col bg-white widget-chart-div" style="margin-right: 0;">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
        </div>
      </div>
      <div id="cards-column-2" style="display: none">
        <div class="row add-card-div">
          <div class="col bg-white widget-chart-div">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
          <div class="col bg-white widget-chart-div">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
          <div class="col bg-white widget-chart-div">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
          <div class="col bg-white widget-chart-div" style="margin-right: 0;">
            <div>
              <div class="add-chart-icon" @click="popWin"></div>
              <button class="add-chart-btn" @click="popWin">新增图表</button>
            </div>
          </div>
        </div>
      </div>
      <!-- add card -->
      <div id="add-card-column" class="row">
        <div class="col bg-white">
          <div style="margin: 28px 0 0 916px">
            <div class="add-card-icon" @click="addCardColumn"></div>
            <button class="bg-white add-card-btn" @click="addCardColumn">
              添加卡片
            </button>
          </div>
        </div>
      </div>
    </div>
  </q-page>
  <!-- pop up window -->
  <div id="fade" class="black_overlay"></div>
  <div>
    <q-card id="light" class="popup-win">
      <q-card-section class="row space-btw">
        <div id="popup-title">新增图表</div>
        <div class="close-pic" @click="closeWin"></div>
      </q-card-section>
      <div class="row">
        <button
          class="popup-card-button"
          style="margin: 0 24px 24px 32px"
          @click="showHistory"
        >
          历史记录图表
        </button>
        <a>|</a>
        <button
          class="popup-card-button"
          style="margin: 0 0 24px 24px"
          @click="showRealtime"
        >
          实时监控图表
        </button>
      </div>
      <div id="history" style="display: block">
        <div class="row select-model">
          <a class="select-tip">选项功能</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option class="option-tip">选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div class="row select-model">
          <a class="select-tip">任务名称</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div class="row select-model">
          <a class="select-tip">选项图表</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
      </div>
      <div id="realtime" style="display: none">
        <div class="row select-model">
          <a class="select-tip">分类</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option class="option-tip">选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div class="row select-model">
          <a class="select-tip">参数</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div class="row select-model">
          <a class="select-tip">区间</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div class="row select-model">
          <a class="select-tip">周期</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div class="row select-model">
          <a class="select-tip">图表样式</a>
          <div>
            <select class="select_type">
              <option class="option-tip" disabled selected hidden>
                --请选择--
              </option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
      </div>
      <!-- --------------------------- -->
      <div class="row popup-btn">
        <button class="cancel-btn" @click="closeWin">取消</button>
        <button class="confirm-btn" @click="">确定</button>
      </div>
    </q-card>
  </div>
</template>

<script src="../js/control-panel.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/control-panel.css";
@import "../css/common.css";
</style>
