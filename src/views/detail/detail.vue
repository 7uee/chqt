<template>
  <div class="content">
    <!-- 列表 -->
    <div v-if="data.detailRnderScript == 'renderPolicyInfo'">
      <div
        :id="TablePanaList.columnNameAlias"
        v-for="TablePanaList in data.outFrontTablePanaList"
        :key="TablePanaList.id"
        v-html="data.detailContent[TablePanaList.columnNameAlias]"
      ></div>
    </div>
    <!-- 表格 -->
    <div v-else-if="data.detailRnderScript == 'tableFrom'">
      <div class="jianju"></div>
      <div id="tableModal" style="width: 100%; margin: 0 auto">
        <div class="detailContent_Title"><span>{{data.moduleName}}</span></div>
        <table
          width="100%"
          border="0"
          cellpadding="4"
          cellspacing="1"
          bgcolor="#cdcdcd"
          style="font-size: 12px"
        >
          <tbody>
            <tr height="28px" v-for="headerList in data.TableHeaderList" :key="headerList.id">
              <td
                style="background-color: #e5edf2; text-align: right"
                width="12.5%"
              >
              {{headerList[0] ? headerList[0].description : ''}}
              </td>

              <td
                colspan="3"
                bgcolor="#ffffff"
                style="text-align: left; padding-left: 4px"
                width="37.5%"
              >
                {{ data.detailContent[headerList[0].columnNameAlias] }}
              </td>

              <td
                style="background-color: #e5edf2; text-align: right"
                width="12.5%"
               
              >
                {{headerList[1] ? headerList[1].description:'' }}
              </td>

              <td
                colspan="3"
                bgcolor="#ffffff"
                style="text-align: left; padding-left: 4px"
                width="37.5%"
            
              >
                {{headerList[1] ? data.detailContent[headerList[1].columnNameAlias]:'' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      

      <div class="jianju"></div>
    </div>
    <table width="100%">
        <tbody>
          <tr>
            <td style="padding: 10px 0;"><hr /></td>
          </tr>
          <tr>
            <td width="100%" align="center">
              <a @click="goBack()"
                ><img src="../../assets/images/closeWindow.jpg" width="56" height="24"
              /></a>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script setup>
import { getOrderDetails } from "@/api/index";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
  detailContent: {},
  //表头
  outFrontTablePanaList: [],
  //显示类型
  detailRnderScript: "",

  //表格类型的表头
  TableHeaderList: {},
  moduleName: "",
});

//数组拆分
const getTableHeaderList = (array, subGroupLength) => {
  let index = 0;
  let newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }
  return newArray;
};

getOrderDetails(router.currentRoute.value.query).then((res) => {
  if (res.code === 0) {
    data.moduleName = res.data.moduleName;
    data.detailRnderScript = res.data.detailRnderScript;
    data.detailContent = res.data.content[0].outFrontGroups[0].content[0];
    data.outFrontTablePanaList =
      res.data.content[0].outFrontGroups[0].outFrontTablePanaList;
    data.TableHeaderList = getTableHeaderList(data.outFrontTablePanaList,2);
    console.log(data.TableHeaderList);
  }
  //this.detailContent = res.data.content
});
//返回方法
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
@import "./css/detailContent.css";
</style>
