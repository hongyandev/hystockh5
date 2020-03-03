import vue from 'vue'
import vuex from 'vuex'
import account from './modules/account'

vue.use(vuex);

export default new vuex.Store({
    modules: {
        account
    }
})