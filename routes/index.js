'use strict'

/**
 * 默认主页路由
 */

import Router from 'koa-router'
import { ApiAccessToken } from '../weixin/token'
import { ApiAccessTicket } from '../weixin/ticket'
import { ApiSign } from '../weixin/sign'

const router = Router()

router.get('/', async (ctx) => {
    ctx.body = `<h1 style="font-size: 42px;text-align: center;">Hello koa<h1/>`
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


export default router