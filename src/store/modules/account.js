const state = {
    account: null
};
const getters = {
    getAccount: (state) => {
        return state.account;
    }
};
const mutations = {
    setAccount (state, data) {
        state.account = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
}