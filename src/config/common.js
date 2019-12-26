export function setAccount(item) {
    localStorage.setItem('jwt', item.jwt);
    localStorage.setItem('uid', item.uid);
    localStorage.setItem('companyName', item.company ? item.company.companyName : '');
    localStorage.setItem('companyKhdm', item.company ? item.company.khdm : '');
}