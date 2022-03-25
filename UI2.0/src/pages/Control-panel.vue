<template>
  <q-page>
    <div class="row" style="width: 1920px; background-color: #f1f2f6">
      <div class="col-12 col-mod-a" style="width: 1920px; height: 108px">
        <div style="padding-left: 204px; float: left">
          <div
            style="
              color: #1d68c4;
              font-size: 20px;
              margin-bottom: 8px;
              padding-top: 32px;
            "
          >
            上午好，张三jWX1084983愿您事事顺心，快乐相随！
          </div>
          <div style="color: #1d68c4; font-size: 14px; padding-bottom: 32px">
            长风破浪会有时，直挂云帆济沧海
          </div>
        </div>
        <div style="float: right; margin: 32px 64px">
          <div style="float: left">
            <div
              class="text-right"
              style="
                color: #e6e6e6;
                font-size: 14px;
                margin-bottom: 8px;
                margin-right: 48px;
              "
            >
              IP数量
            </div>
            <div
              class="text-right"
              style="color: #ffffff; font-size: 24px; margin-right: 48px"
            >
              14711
            </div>
          </div>
          <div style="float: left">
            <div
              class="text-right"
              style="
                color: #e6e6e6;
                font-size: 14px;
                margin-bottom: 8px;
                margin-right: 48px;
              "
            >
              analysis数量
            </div>
            <div
              class="text-right"
              style="color: #ffffff; font-size: 24px; margin-right: 48px"
            >
              200
            </div>
          </div>
          <div style="float: left">
            <div
              class="text-right"
              style="
                color: #e6e6e6;
                font-size: 14px;
                margin-bottom: 8px;
                margin-right: 48px;
              "
            >
              tuning数量
            </div>
            <div
              class="text-right"
              style="color: #ffffff; font-size: 24px; margin-right: 48px"
            >
              0
            </div>
          </div>
          <div style="float: left">
            <div
              class="text-right"
              style="
                color: #e6e6e6;
                font-size: 14px;
                margin-bottom: 8px;
                margin-right: 48px;
              "
            >
              tuning数量
            </div>
            <div
              class="text-right"
              style="color: #ffffff; font-size: 24px; margin-right: 48px"
            >
              0
            </div>
          </div>
          <div style="float: left">
            <div
              class="text-right"
              style="
                color: #e6e6e6;
                font-size: 14px;
                margin-bottom: 8px;
                margin-right: 32px;
              "
            >
              tuning数量
            </div>
            <div
              class="text-right"
              style="color: #ffffff; font-size: 24px; margin-right: 32px"
            >
              0
            </div>
          </div>
        </div>
      </div>
      <!-- 第二栏 -->
      <div
        class="col-12 col-mod row"
        style="height: 580px; width: 1856px; margin: 0px 32px 16px 32px"
      >
        <div
          class="col"
          style="margin-right: 16px; background-color: #ffffff; width: 1388px"
        >
          <div>
            <div
              style="
                color: #222222;
                font-size: 20px;
                margin-left: 32px;
                margin-top: 32px;
                margin-bottom: 24px;
                width: 1234px;
                float: left;
                font-weight: bold;
              "
            >
              近7天任务列表
            </div>
            <div style="float: left">
              <button class="new-command-btn">新建命令</button>
            </div>
            <div
              style="
                overflow-y: auto;
                overflow-x: hidden;
                width: 1356px;
                height: 400px;
              "
            >
              <table class="task-list">
                <tr>
                  <th style="padding-left: 24px; width: 90px">序号</th>
                  <th style="padding-left: 13px; width: 150px">
                    <a style="margin-right: 8px">|</a>任务名称
                  </th>
                  <th style="padding-left: 13px; width: 150px">
                    <a style="margin-right: 8px">|</a>IP地址
                  </th>
                  <th style="padding-left: 13px; width: 150px">
                    <a style="margin-right: 8px">|</a>命令
                    <q-icon
                      name="help"
                      style="font-size: 17px; margin-left: 2px"
                    >
                      <q-tooltip
                        anchor="top middle"
                        self="bottom middle"
                        :offset="[10, 10]"
                      >
                        点击命令可直接跳转到历史命令
                      </q-tooltip>
                    </q-icon>
                    <!-- <img src="../assets/默认-帮助.png" /> -->
                  </th>
                  <th style="padding-left: 13px; width: 150px">
                    <a style="margin-right: 8px">|</a>任务状态
                    <img src="../assets/control-panel/filter-default.png" />
                  </th>
                  <th style="padding-left: 13px; width: 180px">
                    <a style="margin-right: 8px">|</a>开始时间
                    <q-icon
                      name="unfold_more"
                      style="font-size: 17px; margin-left: 2px"
                    ></q-icon>
                  </th>
                  <th style="padding-left: 13px; width: 100px">
                    <a style="margin-right: 8px">|</a>操作
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td><q-icon name="edit"></q-icon>Test1</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #3781de"
                      ></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr class="alt">
                  <td>2</td>
                  <td><q-icon name="edit"></q-icon>Test2</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #5ce59d"
                      ></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><q-icon name="edit"></q-icon>Test3</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #f8a758"
                      ></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><q-icon name="edit"></q-icon>Test4</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #3781de"
                      ></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><q-icon name="edit"></q-icon>Test5</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #5ce59d"
                      ></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><q-icon name="edit"></q-icon>Test6</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #f8a758"
                      ></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td><q-icon name="edit"></q-icon>Test7</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #3781de"
                      ></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr class="alt">
                  <td>8</td>
                  <td><q-icon name="edit"></q-icon>Test8</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #5ce59d"
                      ></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td><q-icon name="edit"></q-icon>Test9</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #f8a758"
                      ></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td><q-icon name="edit"></q-icon>Test10</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #3781de"
                      ></div>
                      <div>运行中</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr class="alt">
                  <td>11</td>
                  <td><q-icon name="edit"></q-icon>Test11</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #5ce59d"
                      ></div>
                      <div>已完成</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td><q-icon name="edit"></q-icon>Test12</td>
                  <td>9.10.33.13</td>
                  <td style="color: #559ff8">在线调优</td>
                  <td>
                    <div class="row">
                      <div
                        class="state-icon"
                        style="background-color: #f8a758"
                      ></div>
                      <div>失败</div>
                    </div>
                  </td>
                  <td>2021-11-22 11:23:00</td>
                  <td>
                    <button class="table-button">详情</button>
                    <button class="table-button">删除</button>
                  </td>
                </tr>
              </table>
            </div>
            <div
              class="row"
              style="
                justify-content: space-between;
                margin: 24px 32px 32px 32px;
              "
            >
              <div style="padding-top: 12px">共100条数据</div>
              <div>
                <div style="float: left">
                  <select class="select_page">
                    <option selected>10条/页</option>
                    <option>20条/页</option>
                  </select>
                </div>
                <div style="float: left">
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
        <div class="col-3" style="background-color: #ffffff; width: 452px">
          <div
            style="
              color: #222222;
              font-size: 20px;
              margin-left: 32px;
              margin-top: 32px;
              margin-bottom: 24px;
              font-weight: bold;
            "
          >
            使用频率排行榜
          </div>
          <div>
            <table class="rate-table" border="0">
              <tr>
                <th style="padding-left: 24px">排名</th>
                <th style="padding-left: 13px">
                  <a style="margin-right: 8px">|</a>参数名称
                </th>
                <th
                  style="
                    padding-left: 13px;
                    padding-right: 24px;
                    text-align: right;
                  "
                >
                  <a style="margin-right: 8px">|</a>使用频率
                </th>
              </tr>
              <tr>
                <td><img src="../assets/control-panel/1.png" /></td>
                <td>CPU</td>
                <td class="rate-column">15</td>
              </tr>
              <tr class="alt">
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
      <!------ 第三栏 ------>
      <div
        class="col-12 col-module row"
        style="height: 300px; width: 1856px; margin: 0px 32px 16px 32px"
      >
        <div
          class="col"
          style="margin-right: 16px; background-color: #ffffff; width: 452px"
        >
          <div>
            <div class="control-add-a" @click="popWin"></div>
            <button class="add-chart" @click="popWin">新增图表</button>
          </div>
        </div>
        <div
          style="
            margin-right: 16px;
            background-color: #ffffff;
            width: 452px;
            height: 300px;
          "
        >
          <div class="row" style="justify-content: space-between">
            <div
              style="
                color: #222222;
                font-size: 20px;
                margin-left: 32px;
                margin-top: 32px;
                margin-bottom: 24px;
                font-weight: bold;
                z-index: 1;
              "
            >
              运行中的任务列表
            </div>
            <div class="control-delete" style="z-index: 1"></div>
          </div>
          <div
            id="main1"
            class="col"
            style="
              margin-right: 16px;
              margin-top: -74px;
              background-color: #ffffff;
              width: 452px;
              height: 288px;
            "
          ></div>
        </div>
        <div
          style="
            margin-right: 16px;
            background-color: #ffffff;
            width: 452px;
            height: 300px;
          "
        >
          <div class="row" style="justify-content: space-between">
            <div
              style="
                color: #222222;
                font-size: 20px;
                margin-left: 32px;
                margin-top: 32px;
                font-weight: bold;
              "
            >
              Test1XX使用对比情况
            </div>
            <div class="control-delete"></div>
          </div>
          <div
            id="main2"
            class="col"
            style="
              margin-right: 16px;
              width: 452px;
              height: 262px;
              margin-top: -24px;
            "
          ></div>
        </div>
        <div style="background-color: #ffffff; width: 452px; height: 300px">
          <div class="row" style="justify-content: space-between">
            <div
              style="
                color: #222222;
                font-size: 20px;
                margin-left: 32px;
                margin-top: 32px;
                font-weight: bold;
              "
            >
              Test1XX占比情况
            </div>
            <div class="control-delete"></div>
          </div>
          <div
            id="main3"
            class="col"
            style="width: 452px; height: 288px; margin-top: -55px"
          ></div>
        </div>
      </div>
      <!-- ---添加卡片 ----->
      <div id="add-cardcolumn" style="display: none">
        <div
          class="col-12 col-module row"
          style="height: 300px; width: 1856px; margin: 0px 32px 16px 32px"
        >
          <div
            class="col"
            style="margin-right: 16px; background-color: #ffffff; width: 452px"
          >
            <div>
              <div class="control-add-a" @click="popWin"></div>
              <button class="add-chart" @click="popWin">新增图表</button>
            </div>
          </div>
          <div
            class="col"
            style="margin-right: 16px; background-color: #ffffff; width: 452px"
          >
            <div>
              <div class="control-add-a" @click="popWin"></div>
              <button class="add-chart" @click="popWin">新增图表</button>
            </div>
          </div>
          <div
            class="col"
            style="margin-right: 16px; background-color: #ffffff; width: 452px"
          >
            <div>
              <div class="control-add-a" @click="popWin"></div>
              <button class="add-chart" @click="popWin">新增图表</button>
            </div>
          </div>
          <div style="background-color: #ffffff; width: 452px; height: 300px">
            <div>
              <div class="control-add-a" @click="popWin"></div>
              <button class="add-chart" @click="popWin">新增图表</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 第四栏 -->
      <div
        class="col-12 col-module row"
        style="height: 80px; width: 1856px; margin: 0px 32px 16px 32px"
      >
        <div class="col" style="background-color: #ffffff">
          <div style="margin: 28px 0px 0px 916px">
            <div class="control-add-b" @click="addCardColumn"></div>
            <button
              style="
                float: left;
                color: #999999;
                font-size: 14px;
                margin-top: 3px;
                margin-left: 16px;
                border: 0;
                padding: 0px;
                background-color: #fff;
                cursor: pointer;
              "
              @click="addCardColumn"
            >
              添加卡片
            </button>
          </div>
        </div>
      </div>
    </div>
  </q-page>
  <div id="fade" class="black_overlay"></div>
  <div>
    <q-card id="light" class="pop-win">
      <q-card-section class="row" style="justify-content: space-between">
        <div
          style="color: #222222; font-size: 20px; padding: 14px 0px 8px 14px"
        >
          新增图表
        </div>
        <div class="close-card" @click="closeWin"></div>
      </q-card-section>
      <div class="row">
        <button
          class="card-button"
          style="margin: 0px 24px 24px 32px"
          @click="showHistory"
        >
          历史记录图表
        </button>
        <a>|</a>
        <button
          class="card-button"
          style="margin: 0px 0px 24px 24px"
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
      <div class="row" style="position: absolute; bottom: 0px; left: 30%">
        <button class="button-add-chart-no" @click="closeWin">取消</button>
        <button class="button-add-chart-yes">确定</button>
      </div>
    </q-card>
  </div>
</template>

<script src="../js/control-panel.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/control-panel.css";
</style>