
import vue from 'vue'
import  vuex from 'vuex'

vue.use(vuex);
const store = new vuex.Store({
    state: {
        token:{} //|| JSON.parse(localStorage.getItem('token'))
    },

    mutations: {
        setToken(state,data){
            console.info(data);
           // localStorage.setItem('token', JSON.stringify(data));
            state.token = data;
        }
    },
    getters: {
        getToken: state => {
            return state;
        }
    }
});
export default store

