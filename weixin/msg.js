'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-01 22:04:02 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-01 22:09:42
 * @Types 消息群发
 */



import axios from 'axios'
import { WxApi } from '../config/index'
import { ApiAccessToken } from './token'



/**
 * 根据OpenID列表群发
 * @param { Object } ops 
 */
export const msgSendOpenid = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/message/mass/send?access_token=${Token.access_token}`, ops)
    
    return res.data
}