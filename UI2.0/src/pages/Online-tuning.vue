<template>
  <q-page>
    <div
      class="row main-bg-style"
      style="
        background-color: #f1f2f6;
      "
    >
      <div class="row">
        <div
          style="color: #999999; font-size: 14px; margin: 16px 0px 24px 32px"
        >
          在线调优
        </div>
        <div style="color: #222222; font-size: 14px; margin: 16px 0px 24px 0px">
          /key_parameters_select-1637120248097
        </div>
      </div>
      <div>
        <a>workload:</a>
        <input class="online-input" type="text" placeholder="default" />
        <a>VS</a>
        <input class="online-input" type="text" placeholder="请输入" />
        <button class="btn-query" style="margin: 16px 48px 24px 32px">
          查 询
        </button>
      </div>
      <div
        class="col-12 col-module"
        style="
          width: 1856px;
          margin: 0px 32px 16px 32px;
          background-color: #ffffff;
        "
      >
        <div>
          <div
            style="
              color: #222222;
              font-size: 20px;
              margin: 31px 0px 24px 32px;
              font-weight: bold;
            "
          >
            配置利用率
          </div>
          <div class="row" style="margin: 0px 32px 16px 32px">
            <div class="configuration" style="border: 0" id="percentage1"></div>
            <div class="configuration" id="percentage2"></div>
            <div class="configuration" id="percentage3"></div>
            <div class="configuration" id="percentage4"></div>
          </div>
        </div>
      </div>
      <div
        class="col-12 col-module"
        style="
          width: 1856px;
          margin: 0px 32px 16px 32px;
          background-color: #ffffff;
        "
      >
        <div class="row" style="justify-content: space-between">
          <a
            style="
              color: #222222;
              font-size: 20px;
              margin: 31px 0px 24px 32px;
              font-weight: bold;
            "
            >各命令性能对比</a
          >
          <div>
            <a style="margin-right: 16px">选择配置</a>
            <select class="select_offline">
              <option disabled selected hidden>--请选择--</option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
            <a style="margin-right: 16px">选择命令</a>
            <select class="select_offline">
              <option disabled selected hidden>--请选择--</option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
            <button class="btn-query">查 询</button>
          </div>
        </div>
        <div class="row">
          <div class="online-modelstyle" style="margin: 0px 16px 16px 32px">
            <div class="row" style="justify-content: space-between">
              <div class="model-title">CPU</div>
              <div class="row">
                <div class="control-spread"></div>
                <div class="control-delete"></div>
              </div>
            </div>
            <div
              id="online1"
              class="col"
              style="width: 586.6px; height: 314px"
            ></div>
          </div>
          <div class="online-modelstyle" style="margin: 0px 16px 16px 0px">
            <div class="row" style="justify-content: space-between">
              <div class="model-title">STORAGE</div>
              <div class="row">
                <div class="control-spread"></div>
                <div class="control-delete"></div>
              </div>
            </div>
            <div
              id="online2"
              class="col"
              style="width: 586.6px; height: 314px"
            ></div>
          </div>
          <div class="online-modelstyle" style="margin: 0px 0px 16px 0px">
            <div class="row" style="justify-content: space-between">
              <div class="model-title">NET</div>
              <div class="row">
                <div class="control-spread"></div>
                <div class="control-delete"></div>
              </div>
            </div>
            <div
              id="online3"
              class="col"
              style="width: 586.6px; height: 314px"
            ></div>
          </div>
        </div>
        <div class="row">
          <div class="online-modelstyle" style="margin: 0px 16px 32px 32px">
            <div class="row" style="justify-content: space-between">
              <div class="model-title">MEM</div>
              <div class="row">
                <div class="control-spread"></div>
                <div class="control-delete"></div>
              </div>
            </div>
            <div
              id="online4"
              class="col"
              style="width: 586.6px; height: 314px"
            ></div>
          </div>
          <div class="online-modelstyle" style="margin: 0px 16px 32px 0px">
            <div class="row" style="justify-content: space-between">
              <div class="model-title">PERF</div>
              <div class="row">
                <div class="control-spread"></div>
                <div class="control-delete"></div>
              </div>
            </div>
            <div
              id="online5"
              class="col"
              style="width: 586.6px; height: 314px"
            ></div>
          </div>
          <div class="online-modelstyle" style="margin: 0px 32px 32px 0px">
            <div class="row" style="justify-content: space-between">
              <div class="model-title">SYS</div>
              <div class="row">
                <div class="control-spread"></div>
                <div class="control-delete"></div>
              </div>
            </div>
            <div
              id="online6"
              class="col"
              style="width: 586.6px; height: 314px"
            ></div>
          </div>
        </div>
      </div>
      <!-- 参数详情 -->
      <div
        class="col-12 col-module"
        style="
          width: 1856px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        "
      >
        <div class="row" style="justify-content: space-between">
          <a
            style="
              color: #222222;
              font-size: 20px;
              margin: 31px 0px 24px 32px;
              font-weight: bold;
            "
            >参数详情</a
          >
          <div>
            <select class="select_para">
              <option disabled selected hidden>Columns</option>
              <option>选项1</option>
              <option>选项2</option>
            </select>
          </div>
        </div>
        <div style="width: 1792px; height: 514px">
          <table class="offline-list">
            <tr>
              <th style="padding-left: 24px; padding-top: 6px">
                <div class="row">
                  <a>序号</a>
                  <div class="icon"></div>
                </div>
              </th>
              <th style="padding-left: 13px; padding-top: 6px">
                <div class="row">
                  <a style="margin-right: 8px">|</a>
                  <a>IP地址</a>
                  <div class="icon"></div>
                </div>
              </th>
              <th style="padding-left: 13px; padding-top: 6px">
                <div class="row">
                  <a style="margin-right: 8px">|</a>
                  <a>任务名称</a>
                  <div class="icon"></div>
                </div>
              </th>
              <th style="padding-left: 13px; padding-top: 6px">
                <div class="row">
                  <a style="margin-right: 8pxpadding-top: 6px;">|</a>
                  <a>任务状态</a>
                  <div class="icon"></div>
                </div>
              </th>
              <th style="padding-left: 13px; padding-top: 6px">
                <div class="row">
                  <a style="margin-right: 8px">|</a>
                  <a>开始时间</a>
                  <div class="icon"></div>
                </div>
              </th>
              <th style="padding-left: 13px; padding-top: 6px">
                <div class="row">
                  <a style="margin-right: 8px">|</a>
                  <a>开始时间</a>
                  <div class="icon"></div>
                </div>
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td>9</td>
              <td>bz2</td>
              <td>16.22</td>
              <td>3.45</td>
              <td>2.27</td>
            </tr>
            <tr class="alt">
              <td>2</td>
              <td>6</td>
              <td>bz2</td>
              <td>15.25</td>
              <td>3.37</td>
              <td>1.67</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1</td>
              <td>zlib</td>
              <td>2.31</td>
              <td>2.36</td>
              <td>88.79</td>
            </tr>
            <tr>
              <td>4</td>
              <td>8</td>
              <td>zlib</td>
              <td>8.82</td>
              <td>2.74</td>
              <td>-0.93</td>
            </tr>
            <tr>
              <td>5</td>
              <td>7</td>
              <td>gzi</td>
              <td>8.34</td>
              <td>2.71</td>
              <td>1.22</td>
            </tr>
            <tr>
              <td>6</td>
              <td>5</td>
              <td>bz2</td>
              <td>6.27</td>
              <td>2.53</td>
              <td>13.21</td>
            </tr>
            <tr>
              <td>7</td>
              <td>3</td>
              <td>bz2</td>
              <td>3.74</td>
              <td>2.553</td>
              <td>41.78</td>
            </tr>
            <tr class="alt">
              <td>8</td>
              <td>3</td>
              <td>zlib</td>
              <td>3.47</td>
              <td>2.74</td>
              <td>48.65</td>
            </tr>
            <tr>
              <td>9</td>
              <td>8</td>
              <td>zlib</td>
              <td>8.98</td>
              <td>2.71</td>
              <td>-1.60</td>
            </tr>
            <tr>
              <td>10</td>
              <td>8</td>
              <td>gzipp</td>
              <td>9.5</td>
              <td>3.01</td>
              <td>-1.35</td>
            </tr>
          </table>
        </div>
        <div
          class="row"
          style="justify-content: space-between; margin: 24px 32px 32px 32px"
        >
          <div style="padding-top: 8px">共100条数据</div>
          <div>
            <div style="float: left">
              <select class="select_page">
                <option>5条/页</option>
                <option selected>10条/页</option>
                <option>15条/页</option>
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
  </q-page>
</template>

<script src="../js/online-tuning.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/online-tuning.css";
</style>