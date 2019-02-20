'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-19 21:19:06 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-20 21:00:26
 * @Types 微信公众自动回复接口
 */


import Router from 'koa-router'
import CoWechat from 'co-wechat'
import { WxCon } from '../config/index'
import TuAi from '../config/TuAi'

const router = Router()

const Reply = CoWechat(WxCon).middleware(async (message, ctx) => {
    if(message.MsgType === 'text') {
        let res = await TuAi({
            "MsgType": message.MsgType,
            "Content": message.Content
        })

        return {
            content: res.results[0].values.text,
            type: 'text'
        }
    } else if(message.MsgType === "image") {
        let res = await TuAi({
            "MsgType": message.MsgType,
            "url": message.PicUrl
        })
        
        return {
            content: res.results[0].values.text,
            type: 'text'
        }
    }
})


router.get('/Reply', Reply)
router.post('/Reply', Reply)

export default router
