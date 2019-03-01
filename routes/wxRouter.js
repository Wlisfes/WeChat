'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-01 00:56:47 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-01 18:22:06
 * @Types 微信业务接口集成挂载router
 */



import Router from 'koa-router'
import wx from '../weixin/index'

const router = Router()


/**
 * 网页JSApi签名接口
 */
router.get('/sign', async (ctx) => {
    let res = await wx.ApiSign(ctx)
    ctx.body = res
})


/**
 * 设置用户备注名接口
 */
router.post('/user/update', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApiUserUpdateInfo(ops)

    ctx.body = res
})


/**
 * 获取用户基本信息接口
 */
router.get('/user/get/info', async (ctx) => {
    let ops = ctx.query || {}
    let res = await wx.ApiGetUserInfo(ops)

    ctx.body = res
})


/**
 * 批量获取用户基本信息接口
 */
router.post('/user/get/infoAll', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApiGetUserInfoAll(ops)

    ctx.body = res
})


/**
 * 获取用户列表接口
 */
router.get('/user/get/list', async (ctx) => {
    let ops = ctx.query || {}
    let res = await wx.ApiGetUserAllList(ops)

    ctx.body = res
})


/**
 * 创建标签接口
 */
router.post('/set/label', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApiSetlabel(ops)

    ctx.body = res
})


/**
 * 获取公众号已创建的标签接口
 */
router.get('/get/labelAll', async (ctx) => {
    let res = await wx.ApiGetlabelAll()

    ctx.body = res
})


/**
 * 编辑标签接口
 */
router.post('/updata/label', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApiUpdatalabel(ops)

    ctx.body = res
})


/**
 * 删除标签接口
 */
router.post('/delete/label', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApiDeletelabel(ops)

    ctx.body = res
})


/**
 * 获取标签下粉丝列表接口
 */
router.post('/get/label/user', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApilabeFanlist(ops)

    ctx.body = res
})


/**
 * 批量为用户打标签接口
 */
router.post('/user/set/label', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApiUserSetlabel(ops)

    ctx.body = res
})


/**
 * 批量为用户取消标签接口
 */
router.post('/user/delete/label', async (ctx) => {
    let ops = ctx.request.body || {}
    let res = await wx.ApiUserDeletelabel(ops)

    ctx.body = res
})


/**
 * 获取用户身上的标签接口
 */
router.get('/get/user/label', async (ctx) => {
    let ops = ctx.query || {}
    let res = await wx.ApiUserGetlabel(ops)

    ctx.body = res
})










export default router
