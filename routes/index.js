'use strict'

/**
 * 默认主页路由
 */

import Router from 'koa-router'
import { ApiAccessToken } from '../weixin/token'
import { ApiAccessTicket } from '../weixin/ticket'
import { ApiSign } from '../weixin/sign'
import { ApitemplateSend } from '../weixin/messageTemplate'
import { ApiSetlabel } from '../weixin/labelTags'
import { ApiGetUserInfo,ApiGetUserAllList } from '../weixin/adminUser'



const router = Router()

router.get('/', async (ctx) => {

    await ctx.render('index')
})

router.get('/token', async (ctx) => {
    let res = await ApiAccessToken()

    ctx.body = res
})


router.get('/ticket', async (ctx) => {
    let res = await ApiAccessTicket()

    ctx.body = res
})


router.get('/sign', async (ctx) => {
    let res = await ApiSign(ctx)
    
    ctx.body = res
})

router.get('/send', async (ctx) => {
    let res = await ApitemplateSend({
        url: "http://lisfes.cn"
    })

    ctx.body = res
})


router.get('/tags/set', async (ctx) => {
    let res = await ApiSetlabel()

    ctx.body = res
})


router.get('/userinfo', async (ctx) => {
    let res = await ApiGetUserInfo(ctx.query)
   
    ctx.body = res
})


router.get('/user/get', async (ctx) => {
    let res = await ApiGetUserAllList(ctx.query)

    ctx.body = res
})


const mark = () => {
    // import user from '../weixin/adminUser'
    const user = require("../weixin/adminUser")
    return user
}


console.log(mark())

export default router