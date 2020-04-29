import types, {SET_ACTIVE_ELE_DATA} from './mutations-type'

export default {
  /**
   * 向画板添加元素
   * @param commit
   * @param state
   * @param dispatch
   * @param data
   */
  addElementAction({commit, state, dispatch}, data) {
    commit(types.SET_ACTIVE_ELE_DATA, data.id);
    commit(types.ADD_ELEMENT, data)
  },

  setTopAction({commit, state, dispatch}, data) {
    commit(types.CHANGE_TOP, data)
  },

  setLeftAction({commit, state, dispatch}, data) {
    commit(types.CHANGE_LEFT, data)
  },

  setWidthAction({commit, state, dispatch}, data) {
    commit(types.CHANGE_WIDTH, data)
  },

  setHeightAction({commit, state, dispatch}, data) {
    commit(types.CHANGE_HEIGHT, data)
  },

  /**
   * 设置为激活
   * 将当前点击的ele设置为active，其他的设置为false
   * @param commit
   * @param state
   * @param id
   */
  setActiveAction({commit, state}, {id}) {
    for (let i = 0, l = state.boardData.compList.length; i < l; i++) {
      commit(types.DISABLE_ACTIVE, i);
      if (state.boardData.compList[i].id === id) {
        commit(types.ENABLE_ACTIVE, i);
        commit(types.SET_ACTIVE_ELE_DATA, id);
        continue;
      }
    }
  },
  /**
   * 取消激活
   * @param commit
   * @param state
   * @param id
   */
  unsetActiveAction({commit, state}, {id}) {
    let index = state.boardData.compList.findIndex(v => {
      return v.id === id;
    });
    commit(types.DISABLE_ACTIVE, index);
    let actives = 0;
    for (let i = 0, l = state.boardData.compList.length; i < l; i++) {
      if (state.boardData.compList[i].style.active) {
        actives++;
        continue;
      }
    }
    if (actives === 0) {
      // 全部元素激活取消
      commit(types.SET_DIS_ALL_ACTIVE_ELE_DATA);
    }
  },
}
