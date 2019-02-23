'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-20 21:02:26 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-23 18:02:05
 * @Types access_token获取
 */


import axios from 'axios'
import query from '../sql/mysql'
import { WxCon,WxApi } from '../config/index'
import { timestamp } from './tool'



/**
 * 获取access_token
 */
export const ApiAccessToken = async () => {
    let Token;
    try {
        //数据库读取access_token
        var MyToken = await query(`SELECT * FROM token`)
    } catch (e) {
        Token = await isToken([])
    }

    //验证有效期
    Token = await isToken(MyToken)
    
    
    return Token
}



/**
 * 向微信服务器获取access_token
 */
const getWxToken = async () => {
    let Token = await axios.get(`${WxApi}/token`, {
        params: {
            "grant_type": "client_credential",
            "appid": WxCon.appid,
            "secret": WxCon.appsecret
        }
    })

    let access_token = Token.data.access_token
    let expires_in = timestamp()

    //先清空数据库表 token
    await query(`DELETE FROM token`)

    //access_token写入数据库表 token
    await query(`INSERT INTO token(access_token, expires_in) VALUES(?, ?)`, [access_token, expires_in])

    return { access_token,expires_in }
}




/**
 * access_token有效期验证
 * @param { Array } ops 
 */
const isToken = async (ops) => {
    let Token;
    if(ops.length > 0) {
        let Time = new Date().getTime()

        //对比当前时间戳
        if(ops[0].expires_in > Time) {
            Token = {
                "access_token": ops[0].access_token,
                "expires_in": ops[0].expires_in
            }
        } else {
            //无效  重新获取
            Token = await getWxToken()
        }

    } else {
        //查询错误  重新获取
        Token = await getWxToken()
    }

    return Token
}