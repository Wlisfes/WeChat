'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-22 22:15:03 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-01 22:01:15
 * @Types 消息模板
 */



import axios from 'axios'
import { WxApi } from '../config/index'
import { ApiAccessToken } from './token'



/**
 * 获取模板ID
 * @param { Object } ops 
 * @param { String } ops.template_id_short     是    模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
 */
export const ApitemplateID = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/template/api_add_template?access_token=${Token.access_token}`, {
                "template_id_short": ops.template_id_short
            })
    
    return res.data
}



/**
 * 获取模板列表
 */
export const ApitemplateAll = async () => {
    let Token = await ApiAccessToken()
    let res = await axios.get(`${WxApi}/template/get_all_private_template`, {
            params: {
                "access_token": Token.access_token
            }
        })

    return res.data
}



/**
 * 删除模板
 * @param { Object } ops 
 * @param { String } ops.template_id     是    模板ID
 */
export const ApitemplateDelete = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/template/del_private_template?access_token=${Token.access_token}`, {
            "template_id": ops.template_id
        })

    return res.data
}
 


/**
 * 发送模板消息
 * @param { Object } ops 
 * @param { String } ops.touser             是    接收者openid
 * @param { String } ops.template_id        是    模板ID
 * @param { String } ops.url                否    模板跳转连接
 * @param { Object } ops.miniprogram        否    跳小程序所需数据，不需跳小程序可不用传该数据
 * @param { String } ops.appid              是    所需跳转到的小程序appid
 * @param { String } ops.pagepath           否    所需跳转到小程序的具体页面路径，支持带参数
 * @param { Array } ops.data                是    模板数据
 * @param { String } ops.color              否    模板内容字体颜色，不填默认为黑色
 */
export const ApitemplateSend = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/message/template/send?access_token=${Token.access_token}`, ops)

    return res.data
}
