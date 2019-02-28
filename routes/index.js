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





export default router