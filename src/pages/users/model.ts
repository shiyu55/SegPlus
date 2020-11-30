import {loaddatelist, saveOne,updateOne,delOne} from './service'
import {Subscription} from 'umi'
export interface IndexModelType {
 
  subscriptions: { setup: Subscription };
}

const indexdd = {

 
  namespace: 'index',

  state: {
    list:[],
    current: {},
    showEdit:false,
    isEdit:false,
  },

  effects: {
    *loadData({} , { call, put }:any) {
      const res =yield call(loaddatelist)
      yield put ({
        type:'save',
        payload:{
          list: res,
          showEdit:false,
          isEdit:false,
        }
      }

      )
    },
    *insert({payload} :any, { call, put }:any) {
      yield call(saveOne,payload)
      yield put ({
        type:'loadData',
        payload:{}
      }

      )
    },

    *update({payload} :any, { call, put }:any) {
      yield call(updateOne,payload.id,payload.data)
      yield put ({
        type:'loadData',
        payload:{}
      }

      )
    },
    *del({payload} :any, { call, put }:any) {
      yield call(delOne,payload.id)
      yield put ({
        type:'loadData',
        payload:{}
      }

      )
    }
  },

  reducers: {
    save(state:any, {payload}:any) {
      return {
        ...state,...payload
      };
    }
   
  },
  subscriptions: {
    setup({dispatch, history}:any) {
      return history.listen(({ pathname }:any )=> {
        if (pathname === '/users') {
          dispatch({
            type: 'loadData'
          })
        }
      });
    }
  }
}
export default indexdd
