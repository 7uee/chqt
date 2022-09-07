
const state = {
  moduleName:'',
  detailId:sessionStorage.detailId || 0,
  moduleNo:sessionStorage.moduleNo || "21",
  activeMenu:"",
  menu:null
}

const mutations = {
  SET_DETAIL_ID: (state, detailId) => {
    state.detailId = detailId
  },
  SET_ACTIVE_MENU: (state, activeMenu) => {
    state.activeMenu = activeMenu
  },
  SET_ModuleNo: (state, moduleNo) => {
    state.moduleNo = moduleNo
  },
  SET_ModuleName: (state, moduleName) => {
    state.moduleName = moduleName
  },
  SET_MENU:(state,menu)=>{
    state.menu=menu
  }
}

const actions = {
  InitMenu({ commit }, menu) {
    return new Promise(() => {
      if (menu!=null){
        commit('SET_MENU', menu)
      }
    })
  },
  setActiveMenu({ commit }, activeMenu) {
    return new Promise(() => {
      if (activeMenu!=null){
        commit('SET_ACTIVE_MENU', activeMenu)
      }
    })
  },
  setModuleNo({ commit }, ModuleNo) {
    return new Promise(() => {
      if (ModuleNo!=null){
        sessionStorage.moduleNo = ModuleNo
        commit('SET_ModuleNo', ModuleNo)
      }
    })
  },
  setModuleName({ commit }, ModuleName) {
    return new Promise(() => {
      if (ModuleName!=null){
        commit('SET_ModuleName', ModuleName)
      }
    })
  },
  setDetailId({ commit }, detailId) {
    return new Promise(() => {
      if (detailId!=null){
        sessionStorage.detailId = detailId
        commit('SET_DETAIL_ID', detailId)
      }
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
