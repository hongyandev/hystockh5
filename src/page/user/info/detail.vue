<template>
    <div>
        <headerNav title="账号管理"/>
        <van-cell-group>
            <van-cell title="修改个人信息"  is-link to="/user/info/userInfo"/>
            <van-cell title="修改绑定手机"  is-link to="/user/info/changePhone"/>
        </van-cell-group>
        <div class="van-cell">
            <van-button type="danger" block size="normal" to="/login/phone">退出登录</van-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
