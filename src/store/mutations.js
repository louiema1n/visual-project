import {
  ADD_ELEMENT,
  CHANGE_HEIGHT,
  CHANGE_WIDTH,
  CHANGE_TOP,
  CHANGE_LEFT,
  ENABLE_ACTIVE,
  DISABLE_ACTIVE,
  SET_ACTIVE_ELE_DATA,
  SET_DIS_ALL_ACTIVE_ELE_DATA,
} from "./mutations-type";

export default {
  [ADD_ELEMENT](state, compData) {
    state.boardData.activeElementData = compData;
    state.boardData.activeElementId = compData.id;
    state.boardData.compList.push(compData)
  },
  [CHANGE_HEIGHT](state, payload) {
    state.boardData.compList[payload.id].style.height = payload.height;
  },
  [CHANGE_WIDTH](state, payload) {
    state.boardData.compList[payload.id].style.width = payload.width;
  },

  [CHANGE_TOP](state, payload) {
    state.boardData.compList[payload.id].style.top = payload.top;
  },

  [CHANGE_LEFT](state, payload) {
    state.boardData.compList[payload.id].style.left = payload.left;
  },

  [ENABLE_ACTIVE](state, index) {
    state.boardData.compList[index].style.active = true;
  },

  [DISABLE_ACTIVE](state, index) {
    state.boardData.compList[index].style.active = false;
  },
  [SET_ACTIVE_ELE_DATA](state, id) {
    state.boardData.activeElementData = state.boardData.compList.find(v => {return v.id === id});
    state.boardData.activeElementId = id;
  },
  [SET_DIS_ALL_ACTIVE_ELE_DATA](state) {
    state.boardData.activeElementData = {};
    state.boardData.activeElementId = undefined;
  },
}
