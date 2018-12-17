import { constantRouterMap } from '@/router'
import MenuUtils from '@/utils/MenuUtils'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      console.log(routers,'routers');
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        var routers = []
        MenuUtils(routers, data.roles)
        commit('SET_ROUTERS', routers)
        resolve()
      })
    }
  }
}

export default permission
