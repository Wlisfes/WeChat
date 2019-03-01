'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-23 21:54:22 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-01 02:23:58
 * @Types 用户信息管理
 */



import axios from 'axios'
import { ApiAccessToken } from './token'
import { WxApi } from '../config/index'



/**
 * 设置用户备注名接口
 * @param { Object } ops 
 * @param { String } ops.openid         是    用户openid
 * @param { String } ops.remark         是    用户备注名
 */
export const ApiUserUpdateInfo = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/user/info/updateremark?access_token=${Token.access_token}`, {
            "openid": ops.openid || "",
            "remark": ops.remark || ""
        })

    return res.data
}



/**
 * 获取用户基本信息（包括UnionID机制）
 * @param { Object } ops 
 * @param { String } ops.openid         是    用户openid
 * @param { String } ops.lang           否    国家地区语言版本，zh_CN 简体，zh_TW 繁体，en 英语
 */
export const ApiGetUserInfo = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.get(`${WxApi}/user/info`, {
            params: {
                "access_token": Token.access_token,
                "openid": ops.openid,
                "lang": ops.lang || "zh_CN"
            }
        })

    return res.data
}



/**
 * 批量获取用户基本信息
 * @param { Object } ops 
 * @param { Array Object } ops.user_list
 * @param { String } ops.user_list.openid     是   用户openid
 * @param { String } ops.user_list.lang       否   国家地区语言版本，zh_CN 简体，zh_TW 繁体，en 英语
 */
export const ApiGetUserInfoAll = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/user/info/batchget?access_token=${Token.access_token}`, {
            "user_list": ops.user_list
        })

    return res.data
}



/**
 * 获取用户列表
 * @param { Object } ops 
 * @param { Object } ops.next_openid       是   第一个拉取的openid，不填默认从头开始拉取
 */
export const ApiGetUserAllList = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.get(`${WxApi}/user/get`, {
            params: {
                "access_token": Token.access_token,
                "next_openid": ops.next_openid || ""
            }
        })
    
    return res.data
}