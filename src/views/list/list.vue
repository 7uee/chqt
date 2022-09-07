<template>
  <div class="home">
    <table width="980" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td height="42" class="welcomeWords" align="left">
          <span
            >&nbsp;&nbsp;您当前的位置：
            <a href="http://3z.conghua.gov.cn" style="color: #0057b8">首页</a> -
            <a style="color: #0057b8">{{ data.contentList.moduleName }}</a>
          </span>
        </td>
      </tr>
    </table>
    <div class="jianju"></div>
    <table
      id="globalTable"
      width="980"
      border="0"
      align="center"
      cellpadding="0"
      cellspacing="0"
    >
      <tr>
        <!-- globalTable Cell1 Start -->
        <td class="leftParam_td" v-if="data.filterDist">
          <div id="selectedDistDiv">
            <img
              v-show="data.contentParams.parame.parameters.distNo"
              id="removeSelectedDistImg"
              src="@/assets/images/distXX.png"
              @click="filtrateDist({})"
            />
            <span id="selectedDist">地区选择：{{ data.distName }}</span>
          </div>
          <div class="leftDist">
            <ul>
              <li v-for="dist in data.dists" :key="dist.id">
                <a @click="filtrateDist(dist)">※{{ dist.distName }}※</a>
                <table>
                  <tr>
                    <td>
                      <ul>
                        <li v-for="village in data.villages" :key="village.id">
                          <a
                            @click="filtrateDist(village)"
                            v-if="village.distNo.indexOf(dist.distNo) >= 0"
                          >
                            {{ village.distName }}</a
                          >
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </li>
            </ul>
          </div>
        </td>
        <!-- globalTable Cell2 Start -->
        <td width="12px"></td>

        <!-- globalTable Cell3 Start -->
        <td valign="top" class="kuan">
          <table
            id="rightTable"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <!-- Title -->
            <tr>
              <td class="menuTitle_td">{{ data.contentList.moduleName }}</td>
            </tr>
            <!-- 筛选 -->
            <tr v-for="filter in data.filters" :key="filter.id">
              <td v-if="filter.filterType == 'normal'" class="topParam_td">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr height="30px">
                    <td>{{ filter.description }}&nbsp;</td>

                    <td colspan="3" style="text-align: left">
                      <input
                        name="fntitle"
                        type="text"
                        v-model="data.inquireText"
                        alt="C"
                        width="140"
                      />
                    </td>

                    <td align="center">
                      &nbsp;<input
                        id="findBtn"
                        name="findBtn"
                        type="button"
                        title="查 询"
                        class="btn_search"
                        @click="inquire()"
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td class="">
                <table
                  id="table_policyInfo"
                  width="100%"
                  align="center"
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                >
                  <tbody>
                    <!-- 列表内容 -->
                    <div
                    class="policyInfoList"
                      v-if="
                        data.contentList.detailRnderScript == 'renderPolicyInfo'
                      "
                    >
                      <tr
                        class="conList"
                        v-for="list in data.contentList.data.list"
                        :key="list.id"
                      >
                        <td align="left" width="652px">
                          <a
                            @click="
                              toDetail(data.contentList.moduleNo, list.id)
                            "
                            :title="list.title"
                            v-html="list.title"
                          ></a>
                        </td>

                        <td width="100px">[{{ list.pub_date }}]</td>
                      </tr>
                      <div
                        v-if="data.contentList.data.list.length == 0"
                        style="height: 600px"
                      >
                        <img
                          style="width: 100%; height: 100%"
                          src="@/assets/images/zwsj.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <!-- 表格内容 -->
                    <table
                      v-else-if="
                        data.contentList.detailRnderScript == 'tableFrom'
                      "
                      width="100%"
                      cellspacing="0"
                      cellpadding="2"
                      border="0"
                    >

                      <tbody
                        class="trBody"
                        v-if="data.contentList.outFrontFileItemList.length != 0"
                      >
                        <tr>
                          <td
                            v-for="fileitem in data.contentList
                              .outFrontFileItemList"
                            :key="fileitem.id"
                            class="tableHead"
                            align="left"
                          >
                            {{ fileitem.columnDescription }}
                          </td>
                        </tr>
                        <tr
                          class="ztConList"
                          v-for="list in data.contentList.data.list"
                          :key="list.id"
                        >
                          <td
                            v-for="fileitem in data.contentList
                              .outFrontFileItemList"
                            :key="fileitem.id"
                            height="25px"
                            width="20%"
                            align="left"
                          >
                            <img
                              style="padding: 0 5px"
                              v-if="fileitem.alias == 'c1'"
                              src="@/assets/images/tb01.gif"
                              width="4"
                              height="5"
                            />
                            <a
                              @click="
                                toDetail(
                                  data.contentList.moduleNo,
                                  list.keyword
                                )
                              "
                              v-if="fileitem.alias == 'c1'"
                            >
                              {{ list[fileitem.alias] }}
                            </a>
                            <span v-else>
                              {{ list[fileitem.alias] }}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <div v-else style="width: 600px; height: 600px; margin: 0 auto">
                        <img
                          style="width: 100%; height: 100%"
                          src="@/assets/images/zwsj.png"
                          alt=""
                        />
                      </div>
                    </table>

                    <tr>
                      <td colspan="2" height="30px">
                        <div class="pageStyle">
                          <span
                            data-v-00b44b45=""
                            style="
                              display: inline-block;
                              vertical-align: -webkit-baseline-middle;
                            "
                            >共{{ data.contentList.data.total }}条信息&nbsp;
                            每页显示{{
                              data.contentList.data.pageSize
                            }}条信息&nbsp;&nbsp;</span
                          >
                          <el-pagination
                            small
                            background
                            layout="prev, pager, next"
                            :total="data.contentList.data.total"
                            @current-change="updPage"
                            :page-size="data.contentList.data.pageSize"
                            :current-page="data.contentList.data.pageNum"
                            prev-text="<上页"
                            next-text="下页>"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!-- globalTable Cell3 End -->
      </tr>
    </table>
    <div class="jianju"></div>
  </div>
</template>
<script>
export default {
  name: "list",
};
</script>
<script setup>
import { getDistByLevel, getList, getFilter } from "@/api/index.js";
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
  distParams: {
    // 地区级别
    level: "4",
    // 地区编码
    distNo: "0112",
  },

  distName: "",
  contentParams: {
    moduleNo: router.currentRoute.value.query.moduleNo,
    pageNum: "1",
    pageSize: "20",
    //筛选参数
    parame: {
      parameters: {
        distNo: "",
        title: "",
      },
    },
  },
  contentList: {
    moduleName: "",
    outFrontFileItemList: [],
    data: {
      list: {},
    },
  },
  dists: [],
  villages: [],
  //筛选项
  filters: [],
  filterDist: false,
  //筛选标题
  inquireText: "",
});

//跳转到详情页面
const toDetail = (moduleNo, id) => {
  router.push({
    path: "/detail",
    query: {
      moduleNo: moduleNo,
      id: id,
    },
  });
};

//点击查询
const inquire = () => {
  console.log(data.inquireText);
  data.contentParams.parame.parameters.title = data.inquireText;
};

// 获取筛选项
const filter = () => {
  getFilter(router.currentRoute.value.query.moduleNo).then((res) => {
    res.data.forEach((filter) => {
      if (filter.filterType == "dist") {
        data.filterDist = true;
      }
    });
    data.filters = res.data;
  });
};

//包含指定表头
const filterFileItem = (item) => {
  let arr = ["c1", "c2", "c3", "c4"];
  if (arr.includes(item.alias)) return true;
};
// 分页
const updPage = (page) => {
  data.contentParams.pageNum = page;
};
//点击地区
const filtrateDist = (dist) => {
  data.contentParams.parame.parameters.distNo = dist.distNo;
  data.distName = dist.distName;
};
//获取列表
const getApiList = async () => {
  console.log(data.contentParams.parame);
  await getList(data.contentParams, data.contentParams.parame).then((res) => {
    data.contentList = res.data;
    data.contentList.outFrontFileItemList =
      data.contentList.outFrontFileItemList.filter(filterFileItem);
  });
};
//getApiList();
//监听moduleNo
watch(
  () => router.currentRoute.value.query.moduleNo,
  (newVal) => {
    if (newVal) {
      console.log(newVal);
      data.contentParams.moduleNo = newVal;
    }
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);
//当筛选的值发生变化的时候执行
watch(
  () => data.contentParams,
  (newVal) => {
    if (newVal) {
      getApiList();
      filter();
    }
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
);
//获取地区列表
const getDist = async (params) => {
  await getDistByLevel(params)
    .then((res) => {
      console.log(res);
      if (res.code == 0) {
        if (res.data[0].distNo.length <= 6) {
          data.dists = res.data;
          //获取村
          data.distParams.level = "5";
          getDist(data.distParams);
        } else {
          data.villages = res.data;
        }
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
//获取街
getDist(data.distParams);
</script>

<style scoped>
@import "./css/menucontentlist1.css";
/* #globalTable {
  min-height: 800px;
} */
.kuan {
  border: 1px solid #cccccc;
}
::v-deep .btn-prev {
  border: #8db5d7 1px solid;
  padding: 0 5px !important;
}
::v-deep.el-pagination.is-background ::v-deep.btn-next:disabled,
::v-deep.el-pagination.is-background .btn-prev:disabled {
  border: 1px solid #ccc;
}
::v-deep .btn-next {
  border: #8db5d7 1px solid;
  padding: 0 5px !important;
}

::v-deep .el-pagination.is-background.el-pagination--small .el-pager li {
  border: #8db5d7 1px solid;
  color: #000;
  text-decoration: none;
  background: #fff;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #ffca7d;
}
.el-pagination {
  display: inline-block;
}
/* .trBody .ztConList:nth-child(2n) {
  background-color: #e5edf2;
} */
.policyInfoList{
  width: 100%;
  height: 600px;
}
.trBody .ztConList:nth-child(odd) {
    background: #e5edf2;
}
.policyInfoList tr:nth-child(odd) {
    background: #e5edf2;
}
</style>