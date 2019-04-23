import {
  SET_USER,
  SET_TOKEN,
  SELECTED_OPTION,
  SELECTED_SIDEBAR,
} from './mutation-types';

export default {
  SET_USER({ commit }, obj) {
    commit(SET_USER, obj);
  },
  updateToken({ commit }, obj) {
    commit(SET_TOKEN, obj);
  },
  SELECTED_OPTION({ commit }, obj) {
    commit(SELECTED_OPTION, obj);
  },
  SELECTED_SIDEBAR({ commit }, obj) {
    commit(SELECTED_SIDEBAR, obj);
  },
};
