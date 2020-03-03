import store from '../store';

export function setAccount(item) {
    localStorage.setItem('token', item.jwt);
    localStorage.setItem('uid', item.uid);
    localStorage.setItem('companyName', item.company ? item.company.companyName : '');
    localStorage.setItem('companyKhdm', item.company ? item.company.khdm : '');
    store.commit('account/setAccount', {
        token: item.jwt,
        uid: item.uid,
        companyName: item.company ? item.company.companyName : '',
        companyKhdm: item.company ? item.company.khdm : ''
    })
}

export function cleanAccount() {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    localStorage.removeItem('companyName');
    localStorage.removeItem('companyKhdm');
    store.commit('account/setAccount', null);
}