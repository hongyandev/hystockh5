// 本地数据
import success from './common/success.json'
import GetPage from './page/GetPage.json'
import PageProduct from './page/Product.json'
import PageOrder from './page/Order.json'
import GetUserIndex from './user/GetUserIndex.json'
import GetFavorite from './user/GetFavorite.json'
import GetAddressList from './user/GetAddressList.json'
import GetAddressById from './user/GetAddressById.json'
import GetCoupon from './user/GetCoupon.json'

export default {
    '/Page/GetPage': GetPage,
    '/Page/Product': PageProduct,
    '/Page/Order': PageOrder,
    '/User/GetUserIndex': GetUserIndex,
    '/User/GetFavorite': GetFavorite,
    '/User/DelFavorite': success,
    '/User/GetAddressList': GetAddressList,
    '/User/GetAddressById': GetAddressById,
    '/User/SaveAddress': success,
    '/User/DelAddress': success,
    '/User/GetCoupon': GetCoupon,
    '/User/ExchangeCoupon': success,
}