<template>
  <q-page>
    <div
      class="row"
      style="
        justify-content: flex-start;
        width: 1920px;
        background-color: #f1f2f6;
      "
    >
      <a
        style="
          color: #222222;
          font-size: 20px;
          margin: 24px 0px 16px 32px;
          font-weight: bold;
        "
        >命令记录</a
      >
      <div
        class="col-12 col-module"
        style="
          width: 1856px;
          height: 1000px;
          margin: 0px 32px 32px 32px;
          background-color: #ffffff;
        "
      >
        <div class="row" style="justify-content: space-between">
          <div class="btn-grp">
            <button
              style="
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                margin-left: 32px;
              "
            >
              全部
            </button>
            <button style="width: 95px">离线调优</button>
            <button
              style="
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
              "
            >
              在线调优
            </button>
          </div>
          <div class="container">
            <form action="" class="parent">
              <input type="text" class="search" placeholder="搜索" />
              <input type="button" name="" id="" class="btn" />
            </form>
          </div>
        </div>
        <div style="width: 1792px; height: 750px">
          <table class="record-list">
            <tr>
              <th style="padding-left: 24px">序号</th>
              <th style="padding-left: 13px; width: 300px">
                <a style="margin-right: 8px">|</a>命令/ID
              </th>
              <th style="padding-left: 13px">
                <a style="margin-right: 8px">|</a>IP地址
              </th>
              <th style="padding-left: 13px">
                <a style="margin-right: 8px">|</a>任务状态
                <img src="../assets/control-panel/filter-default.png" />
              </th>
              <th style="padding-left: 13px">
                <a style="margin-right: 8px">|</a>开始时间
                <q-icon
                  name="unfold_more"
                  style="font-size: 17px; margin-left: 2px"
                ></q-icon>
              </th>
              <th style="padding-left: 13px; width: 600px">
                <a style="margin-right: 8px">|</a>描述
              </th>
              <th style="padding-left: 13px; width: 150px">
                <a style="margin-right: 8px">|</a>操作
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392965</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button" @click="onOfflineClick">
                  详情
                </button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr class="alt">
              <td>2</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392964</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button" @click="onOnlineClick">
                  详情
                </button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392963</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392962</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392961</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392960</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392959</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr class="alt">
              <td>8</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392958</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392957</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392956</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr class="alt">
              <td>11</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392955</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392954</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392953</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392952</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td><q-icon name="edit"></q-icon>compress-1627891392951</td>
              <td>9.10.33.13</td>
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
              <td><input type="text" placeholder="--双击输入描述信息--" /></td>
              <td>
                <button class="table-button">详情</button>
                <button class="table-button">删除</button>
              </td>
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
                <option>10条/页</option>
                <option selected>15条/页</option>
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

<script src="../js/command-record.js" language="JavaScript" type="text/javascript"></script>

<style scoped>
@import "../css/command-record.css";
</style>