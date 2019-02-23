'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-23 18:00:10 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-23 21:56:14
 * @Types 标签管理
 */



import axios from 'axios'
import { ApiAccessToken } from './token'
import { WxApi } from '../config/index'



/**
 * 创建标签接口
 * @param { Object } ops 
 * @param { String } ops.name         是    标签名
 */
export const ApiSetlabel = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/tags/create?access_token=${Token.access_token}`, {
        "tag": {
            "name": "刀剑神域"
        }
    })

    return res.data
}



/**
 * 获取公众号已创建的标签接口
 */
export const ApiGetlabelAll = async () => {
    let Token = await ApiAccessToken()
    let res = await axios.get(`${WxApi}/tags/get`, {
        params: {
            "access_token": Token.access_token
        }
    })

    return res.data
}



/**
 * 编辑标签接口
 * @param { Object } ops 
 * @param { String } ops.id            是    标签id
 * @param { String } ops.name          是    标签名称
 */
export const ApiUpdatelabel = async (ops) => {
    let Token = await ApiAccessToken()
    let res =  await axios.post(`${WxApi}/tags/update?access_token=${Token.access_token}`, {
            "tag" : {
                "id" : ops.id,
                "name" : ops.name
            }
        })
    
    return res.data
}



/**
 * 删除标签接口
 * @param { Object } ops 
 * @param { String } ops.id             是    标签id
 */
export const ApiDeletelabel = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/tags/delete?access_token=${Token.access_token}`, {
        "tag": {
            id: ops.id
        }
    })

    return res.data
}



/**
 * 获取标签下粉丝列表接口
 * @param { Object } ops 
 * @param { String } ops.next_openid         否    第一个拉取的openid,不填默认从头开始拉取
 * @param { String } ops.tagid               是    标签id
 */
export const ApilabeFanlist = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/user/tag/get?access_token=${Token.access_token}`, {
        "tagid": ops.tagid,
        "next_openid": ops.next_openid
    })

    return res.data
}



/**
 * 批量为用户打标签
 * @param { Object } ops 
 * @param { Array } ops.openid_list        是    用户openid
 * @param { String } ops.tagid             是    标签id 
 */
export const ApiUserSetlabel = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/tags/members/batchtagging?access_token=${Token.access_token}`, {
        "openid_list": ops.openid_list,
        "tagid": ops.tagid
    })

    return res.data
}



/**
 * 批量为用户取消标签
 * @param { Object } ops 
 * @param { Array } ops.openid_list        是    用户openid
 * @param { String } ops.tagid             是    标签id 
 */
export const ApiUserDeletelabel = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/tags/members/batchuntagging?access_token=${Token.access_token}`, {
        "openid_list": ops.openid_list,
        "tagid": ops.tagid
    })

    return res.data
}



/**
 * 获取用户身上的标签列表
 * @param { Object } ops
 * @param { String } ops.openid            是    用户openid
 */
export const ApiUserGetlabel = async (ops) => {
    let Token = await ApiAccessToken()
    let res = await axios.post(`${WxApi}/tags/getidlist?access_token=${Token.access_token}`, {
            "openid": ops.openid
        })

    return res.data
}
