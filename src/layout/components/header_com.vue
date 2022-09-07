<template>
  <div class="home">
    <div class="cont">
      <div class="top_img">
        <img src="@/assets/images/title.png" alt="">
      </div>
      <div class="menu_box">
        <div class="menus">
          <ul>
            <!-- <li class="menu" v-for="menu in data.menus" :key="menu.id">
              <a @click="toList(menu)">{{ menu.menuName }}</a>
            </li> -->
            <li class="menu" v-for="menu in data.menus" :key="menu.id">
              <a v-if="menu.menuType == 'route'" @click="toList(menu.moduleNo)">
                {{ menu.menuName }}
              </a>
              <a v-else :href="menu.event">
                {{ menu.menuName }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="welcome" v-if="router.currentRoute.value.name == 'indexf'">
        <p class="p1">欢迎您访问从化区农村集体资产管理交易平台！</p>
        <p class="p1">
          <span>{{ data.today }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getMenu } from "@/api/index";
import { reactive, onUpdated } from "vue";
import { useRouter } from "vue-router";

const router = useRouter(); // 组件内路由
const data = reactive({
  menus: [],
  searchValue: "",
  today: "",
  // defaultList: store.state.menu.defaultList,
  //loading: store.state.menu.loading,
});
onUpdated(() => {
  getToday();
});
const getToday = () => {
  let date = new Date();
  let year = date.getFullYear(); //  返回的是年份
  let month = date.getMonth() + 1; //  返回的月份上个月的月份，记得+1才是当月
  let dates = date.getDate(); //  返回的是几号
  let day = date.getDay(); //  周一返回的是1，周六是6，但是周日是0
  let arr = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  let week = arr[day];
  data.today = `今天是:${year}年${month}月${dates}日 ${week}`;
};

//获取菜单栏
getMenu()
  .then((res) => {
    console.log(res);
    if (res.code == 0) {
      //data.menus = res.data.slice(0, 8);
      data.menus = res.data;
    }
  })
  .catch((err) => {
    console.error(err);
  });

//跳转到列表页面
const toList = (moduleNo) => {
  console.log(moduleNo)
  if (moduleNo == '1') {
    router.push({
      //name: "listf",
      path: "/index",
      query: {},
    });
  } else {
    router.push({
      //name: "listf",
      path: "/list",
      query: {
        moduleNo: moduleNo,
      },
    });
  }
};
</script>

<style  scoped>
li {
  list-style: none;
}
a{
  cursor: pointer;
}
.home .cont {
  width: 980px;
  margin: 0 auto;
  background-color: #ffffff;
}
.home .cont .top_img {
  width: 100%;
  background-color: #f5f5f5;
}
.home .cont .top_img img{
  width: 100%;
  height: 100%;
}
.menu_box {
  width: 100%;
}
.menu_box .menus {
  background: url("../../assets/images/nav_bg_6.png") repeat-x;
  font-size: 14px;
  font-weight: bold;
}
.menu_box .menus:hover {
  /* background-image: url('../tdlz/images/menu_bg_a_hover.jpg');*/
  color: #015dbb;
  font-size: 10.5pt;
}
.menu_box .menus ul {
  display: flex;
  align-items: center;
  font-size: 10.5pt;
  font-weight: bold;
}
.menu_box .menus ul li {
  width: 12%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333333;
}
.menu a {
  color: #ffffff;
}
.cont .welcome {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0057b8;
  background: url("../../assets/images/welcome_words_bg.jpg") no-repeat center
    center;
  font-size: 10.5pt;
  height: 42px;
}
.cont .welcome .p1 {
  padding: 0 10px;
}
.menu a:hover {
  display: block;
  font-size: 10.5pt;
  /* background-image: url('../../assets/images/menu_bg_a_hover.jpg'); */
  color: #015dbb;
}
</style>