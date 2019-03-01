'use strict'

/**
 * 默认主页路由
 */

import Router from 'koa-router'

const router = Router()



router.get('/', async (ctx) => {

    await ctx.render('text')
})






export default router