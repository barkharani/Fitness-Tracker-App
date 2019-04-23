import {
  SET_USER,
  SET_TOKEN,
  SELECTED_OPTION,
  SELECTED_SIDEBAR,
} from './mutation-types';

export default {
  [SET_USER](state, obj) {
    state.user = obj;
  },
  [SET_TOKEN](state, obj) {
    state.token = obj;
  },
  [SELECTED_OPTION](state, obj) {
    state.selectedOption = obj;
  },  
  [SELECTED_SIDEBAR](state, obj) {
    state.selectedSidebar = obj;
  },
};
