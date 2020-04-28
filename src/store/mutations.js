import {
  ADD_ELEMENT,
  CHANGE_HEIGHT,
  CHANGE_WIDTH,
  CHANGE_TOP,
  CHANGE_LEFT,
  ENABLE_ACTIVE,
  DISABLE_ACTIVE,
  SET_ACTIVE_ELE_DATA,
} from "./mutations-type";

export default {
  [ADD_ELEMENT](state, compData) {
    state.boardData.compList.push(compData)
    state.boardData.activeElementData = state.boardData.compList[0];
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
  [SET_ACTIVE_ELE_DATA](state, index) {
    state.boardData.activeElementData = state.boardData.compList[index];
  },
}
