'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-22 22:15:03 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-23 11:26:13
 * @Types 消息模板
 */



import axios from 'axios'
import { WxApi,WxCon } from '../config/index'
import { ApiAccessToken } from './token'



/**
 * 获取模板ID
 * @param { Object } ops 
 * ops.template_id_short  TM00015   是    模板库中模板的编号，有“TM**”和“OPENTMTM**”等形式
 */
export const templateID = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/template/api_add_template`, {
            "access_token": Token.access_token,
            "template_id_short": ops.template_id_short
        })
    
    return res.data
}



/**
 * 获取模板列表
 */
export const templateAll = async () => {
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
 * ops.template_id  Dyvp3-Ff0cnail_CDSzk1fIc6-9lOkxsQE7exTJbwUE   是    模板ID
 */
export const templateDelete = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/template/del_private_template`, {
        "access_token": Token.access_token,
        "template_id": ops.template_id
    })

    return res.data
}
 


/**
 * 发送模板消息
 * @param { Object } ops 
 * ops.touser                   是    接收者openid
 * ops.template_id              是    模板ID
 * ops.url                      否    模板跳转连接
 * ops.miniprogram              否    跳小程序所需数据，不需跳小程序可不用传该数据
 * ops.appid                    是    所需跳转到的小程序appid
 * ops.pagepath                 否    所需跳转到小程序的具体页面路径，支持带参数
 * ops.data                     是    模板数据
 * ops.color                    否    模板内容字体颜色，不填默认为黑色
 */
export const templateSend = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/message/template/send?access_token=${Token.access_token}`, {
        "touser": "o9CNf0fP4Sq79RMrzmSFq37tm03o",//"o9CNf0SqiGWHfX4PFHqR5t5KVOkg",
        "template_id": "aNTiyh90Fi6_0DxP39r5EkW2bwqaXtHJBCbjBMMV_-E",
        "url": ops.url,
        "data": {
            "first": {
                "value":"恭喜你购买成功！",
                "color":"#173177"
            },
            "keyword1":{
                "value":"巧克力",
                "color":"#173177"
            },
            "keyword2": {
                "value":"39.8元",
                "color":"#173177"
            },
            "keyword3": {
                "value":"2014年9月22日",
                "color":"#173177"
            },
            "remark":{
                "value":"欢迎再次购买！",
                "color":"#173177"
            }
        }
    })

    return res.data
}
