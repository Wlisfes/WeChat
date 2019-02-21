'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-21 21:31:58 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-21 22:11:35
 * @Type signature JSApi签名接口
 */



import { ApiAccessTicket } from './ticket'
import crypto from 'crypto'


 /**
 * 获取Sign签名
 */
export const ApiSign = async () => {
    let Ticket = await ApiAccessTicket()
    let url = 'http://limvc.iok.la'
    let noncestr = createNonce()
    let timestamp = createTimestamp()
    let signature = await createSort(noncestr, Ticket.ticket, timestamp, url)
    
    return { signature, noncestr ,timestamp }
}



/**
 * 生成随机字符串
 */
const createNonce = () => {
    return Math.random().toString(36).substr(2,15)
}



/**
 * 生成时间戳
 */
var createTimestamp = () => {
    return parseInt(new Date().getTime() / 1000,10) + ''
}



/**
 * 字典排序
 * @param { String } noncestr 
 * @param { String } ticket 
 * @param { String } timestamp 
 * @param { String } url 
 */
const createSort = (noncestr, ticket, timestamp, url) => {
    let SortArr = [
        'noncestr=' + noncestr,
        'jsapi_ticket=' + ticket,
        'timestamp=' + timestamp,
        'url=' + url
    ]

    let SortStr = SortArr.sort().join('&')

    //sha1加密
    let shasum = crypto.createHash('sha1')
        shasum.update(SortStr)

    return shasum.digest('hex')
}