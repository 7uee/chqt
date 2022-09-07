<template>
  <div class="home" v-loading="loading">
    <div class="jianju"></div>
    <table
      width="980"
      border="0"
      align="center"
      cellpadding="0"
      cellspacing="0"
    >
      <tr>
        <!-- 天气 -->
        <td width="248" valign="top">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td class="title_blue_td">
                <span class="title_blue">天气预报</span>
              </td>
            </tr>
            <tr>
              <td height="60" class="blue_kuan">
                <div style="padding: 10px 0">
                  <marquee
                    onmouseout="this.start()"
                    onmouseover="this.stop()"
                    scrollAmount="2"
                    scrollDelay="0"
                    direction="left"
                    height="99%"
                  >
                    <iframe
                      allowtransparency="true"
                      frameborder="0"
                      width="565"
                      height="55"
                      scrolling="no"
                      src="http://tianqi.2345.com/plugin/widget/index.htm?s=2&z=3&t=1&v=2&d=3&k=&f=10&q=0&e=1&a=1&c=54511&w=565&h=98"
                    ></iframe>
                  </marquee>
                </div>
                <div id="statNumber" style="display: none"></div>
                <div id="statNum" style="display: none"></div>
              </td>
            </tr>
          </table>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <!-- 综合信息 -->
            <tr>
              <td class="title_deepBlue_td">
                <a class="title_more"
                  ><span color="#ffffff" @click="toList(data.zhxx.moduleNo)"
                    >更多</span
                  ></a
                >
                <a @click="toList(data.zhxx.moduleNo)" class="title_blue">{{
                  data.zhxx.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <td style="height: 132px; valign: top; background-color: #3997d4">
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                >
                  <tr
                    v-for="zhxxContent in data.zhxx.sqlData"
                    :key="zhxxContent.id"
                  >
                    <td class="firstModule">
                      <span style="float: right; color: #ffffff"
                        >[{{ zhxxContent.pub_date }}]</span
                      >
                      <a
                        @click="toDetail(data.zhxx.moduleNo, zhxxContent.id)"
                        :title="zhxxContent.title"
                        ><img
                          src="../../assets/images/smallWhiteArrows.png"
                        />{{ zhxxContent.title }}</a
                      >
                    </td>
                  </tr>
                  <!-- 虚线 -->
                  <!-- <tr>
                    <td
                      style="background: url(images/white_blue_point.jpg)"
                      height="1px"
                    ></td>
                  </tr> -->
                </table>
              </td>
            </tr>
          </table>
        </td>

        <td width="12"></td>

        <td width="730" colspan="3" class="kuan">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <!-- 交易动态 -->
            <tr style="background: #1a6a9b">
              <td height="28px" align="left" valign="middle" colspan="2">
                <a @click="toList(data.jydt.moduleNo)" class="title_more"
                  ><span color="#ffffff">更多</span></a
                >
                <a @click="toList(data.jydt.moduleNo)" class="title_blue">{{
                  data.jydt.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <!-- Table1 Cell2_1 Start-->
              <td align="center">
                <div class="tpqy">
                  <img src="@/assets/images/left.png" alt="" />
                </div>
              </td>
              <!-- Table1 Cell2_1 End-->
              <!-- Table1 Cell2_2 Start-->
              <td width="450" valign="top">
                <table
                  width="94%"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td>
                      <table
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr
                          v-for="(jydtCentent, index) in data.jydt.sqlData"
                          :key="jydtCentent.id"
                          style="
                            background: url(images/tr_blue_point_bg.jpg)
                              repeat-x;
                            height: 32px;
                          "
                        >
                          <td class="secondModule">
                            <span style="float: right"
                              >[{{ jydtCentent.pub_date }}]</span
                            >
                            <img
                              src="images/speaker.gif"
                              width="11"
                              height="11"
                            />
                            <span
                              :style="
                                index < 4
                                  ? 'cursor: pointer; color: red'
                                  : 'cursor: pointer; color: #0775bd'
                              "
                              >{{ jydtCentent.type }}</span
                            >
                            <a
                              @click="
                                toDetail(data.jydt.moduleNo, jydtCentent.id)
                              "
                              :title="jydtCentent.title"
                              >{{ jydtCentent.title }}</a
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td colspan="5" height="6px"></td>
      </tr>
      <!-- 进入后台按钮 -->
      <tr>
        <td width="248" class="kuan">
          <table border="0" cellpadding="0" cellspacing="0">
            <tr v-for="btn in data.btns" :key="btn.id">
              <td height="48" valign="top">
                <a :href="btn.url" target="_Blank">
                  <img :src="btn.imgUrl" width="248" height="42" border="0" />
                </a>
              </td>
            </tr>
          </table>
        </td>
        <!-- Table2 Cell1 End -->

        <td width="12"></td>

        <!-- Table2 Cell2 Start -->
        <!-- 待交易信息 -->
        <td width="480" valign="top" class="kuan">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td class="title_white_td">
                <a @click="toList(data.djyxx.moduleNo)" class="title_more"
                  >更多</a
                >
                <a @click="toList(data.djyxx.moduleNo)" class="title_white">{{
                  data.djyxx.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" border="0" cellspacing="1" cellpadding="0">
                  <tr>
                    <td width="30%" class="tableHeader">标题</td>

                    <td width="25%" class="tableHeader">地区</td>

                    <td width="20%" class="tableHeader">面积</td>

                    <td width="20%" class="tableHeader">底价</td>
                  </tr>
                </table>
                <div
                  style="height: 222px; overflow: hidden"
                  id="tradeAssets"
                  @click="liClick($event)"
                >
                  <!-- 无限滚动 -->
                  <vueSeamlessScroll
                    :data="data.djyxx.sqlData"
                    :step="0.2"
                    class="warp"
                  >
                    <table
                      border="0"
                      cellspacing="0"
                      cellpadding="4"
                      width="100%"
                    >
                      <tr
                        v-for="djyxxCentent in data.djyxx.sqlData"
                        :key="djyxxCentent.id"
                        style="height: 30px"
                        bgcolor="#FFFFFF"
                      >
                        <td width="30%" align="left">
                          <a
                            class="title"
                            :data-id="djyxxCentent.id"
                            :data-moduleNo="data.djyxx.moduleNo"
                            >{{ djyxxCentent.title }}</a
                          >
                        </td>
                        <td width="25%" align="left">
                          {{ djyxxCentent.distName }}
                        </td>
                        <td width="20%" align="left">
                          {{ djyxxCentent.area }}
                        </td>
                        <td width="20%" align="left">
                          {{ djyxxCentent.jydj }}
                        </td>
                      </tr>
                    </table>
                  </vueSeamlessScroll>
                </div>
              </td>
            </tr>
          </table>
        </td>
        <!-- Table2 Cell2 End -->
        <td width="12"></td>
        <!-- Table2 Cell3 Start -->
        <!-- 通知公告 -->
        <td width="248" valign="top" class="kuan">
          <!-- rowspan="2" -->
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tbody>
              <tr>
                <td class="title_white_td">
                  <a @click="toList(data.tzgg.moduleNo)" class="title_more"
                    >更多</a
                  >
                  <a @click="toList(data.tzgg.moduleNo)" class="title_white">{{
                    data.tzgg.moduleName
                  }}</a>
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    width="98%"
                    align="center"
                  >
                    <div
                      v-for="tzggCentent in data.tzgg.sqlData"
                      :key="tzggCentent.id"
                    >
                      <tr>
                        <td class="thirdModule">
                          <span style="float: right; color: red"
                            >[{{ tzggCentent.pub_date }}]</span
                          >
                          <a
                            @click="
                              toDetail(data.tzgg.moduleNo, tzggCentent.id)
                            "
                            :title="tzggCentent.title"
                          >
                            <img
                              src="images/smallyellowarrows.jpg"
                              width="7"
                              height="7"
                            />{{ tzggCentent.title }}</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#ececec" height="1"></td>
                      </tr>
                    </div>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <!-- Table2 Cell3 End -->
      </tr>

      <!--</table> Table2 Layer End -->
      <tr>
        <td colspan="5" height="6px"></td>
      </tr>
      <tr>
        <td colspan="5">
          <!--修改插入img图片-->
          <img
            style="width: 980px; height: 133px"
            src="../../assets/images/indexMiddlePic.jpg"
            alt="阳光交易"
          />
        </td>
      </tr>
      <tr>
        <td colspan="5" height="6px"></td>
      </tr>
      <tr>
        <!-- Table3 Cell1 Start -->
        <!-- 政策法规 -->
        <td width="248" valign="top" class="kuan">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td class="title_white_td">
                <a @click="toList(data.zcfg.moduleNo)" class="title_more"
                  >更多</a
                >
                <a @click="toList(data.zcfg.moduleNo)" class="title_white">{{
                  data.zcfg.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  width="98%"
                  align="center"
                >
                  <div
                    v-for="zcfgCentent in data.zcfg.sqlData"
                    :key="zcfgCentent.id"
                  >
                    <tr>
                      <td class="fourthModule">
                        <a
                          @click="toDetail(data.zcfg.moduleNo, zcfgCentent.id)"
                          :title="zcfgCentent.title"
                          ><img
                            src="images/smallyellowarrows.jpg"
                            width="7"
                            height="7"
                          />{{ zcfgCentent.title }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td bgcolor="#ececec" height="1"></td>
                    </tr>
                  </div>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!-- Table3 Cell1 End -->

        <td width="12"></td>

        <!-- Table3 Cell2 Start -->
        <!-- 成交信息 -->
        <td width="480" valign="top" class="kuan">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td class="title_white_td">
                <a @click="toList(data.cjxx.moduleNo)" class="title_more"
                  >更多</a
                >
                <a @click="toList(data.cjxx.moduleNo)" class="title_white">{{
                  data.cjxx.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" border="0" cellspacing="1" cellpadding="0">
                  <tr>
                    <td width="30%" class="tableHeader">标题</td>

                    <td width="25%" class="tableHeader">地区</td>

                    <td width="20%" class="tableHeader">面积</td>

                    <td width="20%" class="tableHeader">单价</td>
                  </tr>
                </table>
                <div style="height: 222px; overflow: hidden" id="finishAssets" @click="liClick($event)">
                  <!-- 无限滚动 -->
                  <vueSeamlessScroll
                    :data="data.cjxx.sqlData"
                    :step="0.2"
                    class="seamless-warp"
                  >
                    <table
                      border="0"
                      cellspacing="0"
                      cellpadding="4"
                      width="100%"
                    >
                      <tr
                        v-for="cjxxCentent in data.cjxx.sqlData"
                        :key="cjxxCentent.id"
                        style="height: 30px"
                        bgcolor="#FFFFFF"
                      >
                        <td width="30%" align="left">
                          <a
                            :data-id="cjxxCentent.id"
                            :data-moduleNo="data.cjxx.moduleNo"
                            >{{ cjxxCentent.title }}</a
                          >
                        </td>
                        <td width="25%" align="left">
                          {{ cjxxCentent.distName }}
                        </td>
                        <td width="20%" align="left">{{ cjxxCentent.area }}</td>
                        <td width="20%" align="left">{{ cjxxCentent.jydj }}</td>
                      </tr>
                    </table>
                  </vueSeamlessScroll>
                </div>
              </td>
            </tr>
          </table>
        </td>
        <!-- Table3 Cell2 End -->

        <td width="12"></td>

        <!-- Table3 Cell3 Start -->
        <!-- 中标公告 -->
        <td width="248" valign="top" class="kuan">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td class="title_white_td">
                <a @click="toList(data.zbgg.moduleNo)" class="title_more"
                  >更多</a
                >
                <a @click="toList(data.zbgg.moduleNo)" class="title_white">{{
                  data.zbgg.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  width="98%"
                  align="center"
                >
                  <div
                    v-for="zbggCentent in data.zbgg.sqlData"
                    :key="zbggCentent.id"
                  >
                    <tr>
                      <td class="thirdModule">
                        <span style="float: right; color: red"
                          >[{{ zbggCentent.pub_date }}]</span
                        >
                        <a
                          @click="toDetail(data.zbgg.moduleNo, zbggCentent.id)"
                          :title="zbggCentent.title"
                        >
                          <img
                            src="images/smallyellowarrows.jpg"
                            width="7"
                            height="7"
                          />{{ zbggCentent.title }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td bgcolor="#ececec" height="1"></td>
                    </tr>
                  </div>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!-- Table3 Cell3 End -->
      </tr>
      <!--</table> Table3 Layer End-->
      <tr>
        <td colspan="5" height="6px"></td>
      </tr>

      <!-- Table4 Layer Start
<table width="980" border="0" align="center" cellpadding="0" cellspacing="0">-->
      <tr>
        <!-- Table4 Cell1 Start -->
        <!-- 镇村风采 -->
        <td width="248" valign="top" class="kuan">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td class="title_white_td">
                <a @click="toList(data.zcfc.moduleNo)" class="title_more"
                  >更多</a
                >
                <a @click="toList(data.zcfc.moduleNo)" class="title_white">{{
                  data.zcfc.moduleName
                }}</a>
              </td>
            </tr>
          </table>
          <div id="diqu" class="zcfc">
            <ul>
              <li
                v-for="zcfcCentent in data.zcfc.sqlData"
                :key="zcfcCentent.id"
              >
                <a
                  class="zcfc_a"
                  @click="toDetail(data.zcfc.moduleNo, zcfcCentent.id)"
                  :title="zcfcCentent.title"
                  >{{ zcfcCentent.title }}</a
                >
              </li>
            </ul>
          </div>
        </td>
        <!-- Table4 Cell1 End -->

        <td width="12"></td>
        <!-- 土地流转 -->
        <td width="480" valign="top" class="kuan">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr></tr>
            <tr>
              <td class="title_white_td">
                <a @click="toList(data.tdlz.moduleNo)" class="title_more"
                  >更多</a
                >
                <a @click="toList(data.tdlz.moduleNo)" class="title_white">{{
                  data.tdlz.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  width="98%"
                  align="center"
                >
                  <div
                    v-for="tdlzCentent in data.tdlz.sqlData"
                    :key="tdlzCentent.id"
                  >
                    <tr height="25px">
                      <td width="375px">
                        <a
                          class="td_a"
                          style="cursor: pointer; float: left"
                          @click="toDetail(data.tdlz.moduleNo, tdlzCentent.id)"
                          :title="tdlzCentent.title"
                        >
                          {{ tdlzCentent.title }}
                        </a>
                      </td>
                      <td width="75" style="span-size: 10px; color: red">
                        [{{ tdlzCentent.pub_date }}]
                      </td>
                    </tr>
                    <tr>
                      <td bgcolor="#ececec" height="1" colspan="2"></td>
                    </tr>
                  </div>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!-- Table4 Cell2 End -->

        <td width="12"></td>

        <!-- Table4 Cell3 Start -->
        <!-- 招标信息 -->
        <td width="248" valign="top" class="kuan">
          <table
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td class="title_white_td">
                <a @click="toList(data.zbxx.moduleNo)" class="title_more"
                  >更多</a
                >
                <a @click="toList(data.zbxx.moduleNo)" class="title_white">{{
                  data.zbxx.moduleName
                }}</a>
              </td>
            </tr>
            <tr>
              <td>
                <table
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  width="98%"
                  align="center"
                >
                  <div
                    v-for="zbggContent in data.zbgg.sqlData"
                    :key="zbggContent.id"
                  >
                    <tr>
                      <td class="thirdModule">
                        <span style="float: right; color: red"
                          >[{{ zbggContent.pub_date }}]</span
                        >
                        <a
                          @click="toDetail(data.zbgg.moduleNo, zbggContent.id)"
                          :title="zbggContent.title"
                        >
                          <img
                            src="images/smallyellowarrows.jpg"
                            width="7"
                            height="7"
                          />{{ zbggContent.title }}</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td bgcolor="#ececec" height="1"></td>
                    </tr>
                  </div>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!-- Table4 Cell3 End -->
      </tr>
    </table>
    <div class="jianju"></div>
    <table
      width="980"
      border="0"
      align="center"
      cellpadding="0"
      cellspacing="0"
    >
      <tbody>
        <tr>
          <!-- Table3 Cell3 Start 合作开发zhaobiao-->
          <!-- 合作开发交易公告 -->
          <td width="480" valign="top" class="kuan">
            <table
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tr>
                <td class="title_white_td title_hz">
                  <a @click="toList(data.hzkfjygg.moduleNo)" class="title_more"
                    >更多</a
                  >
                  <a
                    @click="toList(data.hzkfjygg.moduleNo)"
                    class="title_white"
                    >{{ data.hzkfjygg.moduleName }}</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    width="98%"
                    align="center"
                    class="tableButton"
                  >
                    <div
                      v-for="hzkfjyggContent in data.hzkfjygg.sqlData"
                      :key="hzkfjyggContent.id"
                    >
                      <tr>
                        <td class="thirdModule">
                          <span style="float: right; color: red"
                            >[{{ hzkfjyggContent.pub_date }}]</span
                          >
                          <a
                            @click="
                              toDetail(
                                data.hzkfjygg.moduleNo,
                                hzkfjyggContent.id
                              )
                            "
                            :title="hzkfjyggContent.title"
                          >
                            <img
                              src="images/smallyellowarrows.jpg"
                              width="7"
                              height="7"
                            />{{ hzkfjyggContent.title }}</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#ececec" height="1"></td>
                      </tr>
                    </div>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <!-- Table3 Cell3 End -->

          <td width="20"></td>

          <!-- Table3 Cell3 Start 合作开发zhongbiao-->
          <!-- 合作开发结果公示 -->
          <td width="480" valign="top" class="kuan">
            <table
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
            >
              <tr>
                <td class="title_white_td title_hz">
                  <a @click="toList(data.hzkfjg.moduleNo)" class="title_more"
                    >更多</a
                  >
                  <a
                    @click="toList(data.hzkfjg.moduleNo)"
                    class="title_white"
                    >{{ data.hzkfjg.moduleName }}</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    width="98%"
                    align="center"
                    class="tableButton"
                  >
                    <div
                      v-for="hzkfjgContent in data.hzkfjg.sqlData"
                      :key="hzkfjgContent.id"
                    >
                      <tr>
                        <td class="thirdModule">
                          <span style="float: right; color: red"
                            >[{{ hzkfjgContent.pub_date }}]</span
                          >
                          <a
                            @click="
                              toDetail(data.hzkfjg.moduleNo, hzkfjgContent.id)
                            "
                            :title="hzkfjgContent.title"
                          >
                            <img
                              src="images/smallyellowarrows.jpg"
                              width="7"
                              height="7"
                            />{{ hzkfjgContent.title }}</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td bgcolor="#ececec" height="1"></td>
                      </tr>
                    </div>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <!-- Table3 Cell3 End -->
        </tr>
      </tbody>
    </table>
    <div class="jianju"></div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll/src";
export default {
  name: "index",
  components: {
    vueSeamlessScroll,
  },
};
</script>
<script setup>
import { getIndex } from "@/api/index";
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const data = reactive({
  zhxx: {},
  jydt: {},
  djyxx: {},
  tzgg: {},
  zcfg: {},
  cjxx: {},
  zbxx: {},
  zcfc: {},
  tdlz: {},
  zbgg: {},
  hzkfjygg: {},
  hzkfjg: {},
  btns: [
    {
      id: 1,
      url: "/tdlz_ht",
      imgUrl: require("@/assets/images/back_manager.jpg"),
    },
  ],
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

//跳转到列表页面
const toList = (moduleNo) => {
  console.log(moduleNo);
  if (moduleNo == "1") {
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
const liClick = (e) => {

  if (e.target.dataset.moduleno && e.target.dataset.id) {
    toDetail(e.target.dataset.moduleno,e.target.dataset.id);
  }
};

//获取首页数据
getIndex()
  .then((res) => {
    console.log(res);
    if (res.code == 0) {
      res.data.frontContentList.forEach(function (content) {
        switch (content.moduleName) {
          case "综合信息":
            data.zhxx = content;
            break;
          case "交易动态":
            data.jydt = content;
            console.log(data.jydt);
            break;
          case "待交易信息":
            data.djyxx = content;
            break;
          case "通知公告":
            data.tzgg = content;
            break;
          case "政策法规":
            data.zcfg = content;
            break;
          case "成交信息":
            data.cjxx = content;
            break;
          case "招标信息":
            data.zbxx = content;
            break;
          case "镇村风采":
            data.zcfc = content;
            break;
          case "土地流转":
            data.tdlz = content;
            break;
          case "中标公告":
            data.zbgg = content;
            break;
          case "合作开发交易公告":
            data.hzkfjygg = content;
            break;
          case "合作开发结果公示":
            data.hzkfjg = content;
            break;
        }
      });
    }
  })
  .catch((err) => {
    console.error(err);
  });
</script>

<style  scoped>
a {
  text-decoration: none;
  color: dimgrey;
  cursor: pointer;
}
a:hover {
  color: #ff0000;
  text-decoration: none;
}
table {
  margin: 0 auto;
}

.home {
  width: 980px;
  margin: 0 auto;
}
.home .title_blue_td {
  text-align: left;
  height: 24px;
  background: url("../../assets/images/title_blue_bg.jpg");
}
.home .title_blue_td .title_blue {
  font-size: 10.5pt;
  font-weight: bold;
  padding-left: 14px;
  color: #ffffff;
}
.jianju {
  padding-top: 6px;
}
.title_deepBlue_td {
  text-align: left;
  height: 28px;
  background: url("../../assets/images/title_blue_bg2.jpg");
}
.title_more {
  float: right;
  padding-right: 10px;
}
.title_blue {
  font-size: 10.5pt;
  font-weight: bold;
  padding-left: 14px;
  color: #ffffff;
}
.firstModule a {
  width: 170px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.firstModule img {
  padding-left: 2px;
}
.firstModule {
  text-align: left;
  font-size: 10pt;
  color: #ffffff;
  height: 26px;
  line-height: 26px;
  vertical-align: middle;
}
.title_more {
  float: right;
  padding-right: 10px;
}
.title_blue {
  font-size: 10.5pt;
  font-weight: bold;
  padding-left: 14px;
  color: #ffffff;
}
.secondModule {
  text-align: left;
  font-size: 10pt;
  vertical-align: middle;
}
.tpqy {
  height: 240px;
  margin-left: 9px;
}
.secondModule a {
  width: 220px;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: bottom;
}
.kuan {
  border: 1px solid #cccccc;
}
.title_white_td {
  text-align: left;
  height: 24px;
  background: url("../../assets/images/title_white_blue_bg.jpg");
}
.title_hz .title_white {
  padding-left: 16px;
  font-size: 10pt;
}
.title_white {
  font-size: 12pt;
  font-weight: bold;
  padding-left: 30px;
  color: #1a6a9b;
}
.title_more {
  float: right;
  padding-right: 10px;
}
.tableHeader {
  height: 29px;
  line-height: 29px;
  background: url("../../assets/images/data_title_bg.gif");
  font-weight: bold;
  color: #ffffff;
  font-size: 10.5pt;
  text-align: center;
  vertical-align: middle;
}
.thirdModule {
  height: 25px;
  line-height: 25px;
  text-align: left;
  font-size: 10pt;
  vertical-align: middle;
}
.thirdModule a {
  width: 154px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.fourthModule {
  height: 25px;
  line-height: 25px;
  text-align: left;
  font-size: 10pt;
  vertical-align: middle;
}
.fourthModule a {
  width: 214px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.zcfc {
  width: 250px;
  min-height: 230px;
}
.zcfc li {
  width: 112px;
  margin: 2px 5px;
  float: left;
  padding: 0px;
  list-style-type: none;
  background-image: url("../../assets/images/zcfc.jpg");
  height: 34px;
  font-size: 10.5pt;
  text-align: center;
  line-height: 34px;
  display: block;
}
.zcfc_a {
  font-size: 10.5pt;
  color: #2a81b8;
}
.tableButton {
  width: 385px;
  min-height: 230px;
}
.seamless-warp {
  height: 229px;
  overflow: hidden;
}
.td_a {
  width: 371px;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.tpqy img {
  width: 100%;
  height: 100%;
}
</style>