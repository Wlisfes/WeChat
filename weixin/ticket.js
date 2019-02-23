'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-21 21:09:27 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-22 22:28:55
 * @Types ticket获取
 */


import axios from 'axios'
import query from '../sql/mysql'
import { WxApi } from '../config/index'
import { timestamp } from './tool'
import { ApiAccessToken } from './token'


 /**
 * 获取ticket
 */
export const ApiAccessTicket = async () => {
    let Ticket;
    try {
        //数据库读取ticket
        var MyTicket = await query(`SELECT * FROM ticket`)
    } catch (e) {
        Ticket = await isTicket([])
    }

    //验证有效期
    Ticket = await isTicket(MyTicket)
    
    
    return Ticket
}




/**
 * 向微信服务器获取ticket
 */
const getWxTicket = async () => {
    let Token = await ApiAccessToken()
    let Ticket = await axios.get(`${WxApi}/ticket/getticket`, {
        params: {
            "access_token": Token.access_token,
            "type": "jsapi"
        }
    })

    let ticket = Ticket.data.ticket
    let expires_in = timestamp()

    //先清空数据库表 ticket
    await query(`DELETE FROM ticket`)

    //ticket写入数据库表 ticket
    await query(`INSERT INTO ticket(ticket, expires_in) VALUES(?, ?)`, [ticket, expires_in])

    return { ticket,expires_in }
}



/**
 * ticket 有效期验证
 * @param { Array } ops 
 */
const isTicket = async (ops) => {
    let Ticket;
    if(ops.length > 0) {
        let Time = new Date().getTime()

        //对比当前时间戳
        if(ops[0].expires_in > Time) {
            Ticket = {
                "ticket": ops[0].ticket,
                "expires_in": ops[0].expires_in
            }
        } else {
            //无效  重新获取
            Ticket = await getWxTicket()
        }

    } else {
        //查询错误  重新获取
        Ticket = await getWxTicket()
    }

    return Ticket
}