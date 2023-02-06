import { getList } from '@/services/demo-list';
import type { DvaModel } from 'alita';

export interface UseAppInfoModelState {
  user: any;
}

const useAppInfoModel: DvaModel<UseAppInfoModelState> = {
  namespace: 'useAppInfo',

  state: {
    user: {},
  },

  effects: {
    *login({ payload }, { call, put }): any {
      const data = yield call(getList, payload);
      yield put({
        type: 'save',
        payload: { user: data },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default useAppInfoModel;
