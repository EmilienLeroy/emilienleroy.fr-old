import vuex from 'vuex';
import ViewModule from './view';

interface StoreType {
  view: ViewModule
}

const store = new vuex.Store<StoreType>({})