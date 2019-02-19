'use strict'

/**
 * 默认主页路由
 */

import Router from 'koa-router'

const router = Router()

router.get('/', async (ctx, next) => {
    ctx.body = `<h1 style="font-size: 42px;text-align: center;">Hello koa<h1/>`
})


export default router