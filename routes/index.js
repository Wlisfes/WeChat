'use strict'

/**
 * 默认主页路由
 */

import Router from 'koa-router'
import { ApiAccessToken } from '../weixin/token'

const router = Router()

router.get('/', async (ctx) => {
    ctx.body = `<h1 style="font-size: 42px;text-align: center;">Hello koa<h1/>`
})

router.get('/token', async (ctx) => {
    let res = await ApiAccessToken()

    ctx.body = res
})

export default router