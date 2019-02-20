'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-20 23:00:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-20 23:03:30
 * @Types 工具函数
 */


/**
 * 获取两个小时后的时间戳
 */
export const timestamp = () => {
    let time = new Date().getTime()
    let tiems = time + 118 * 60 * 1000

    return tiems
}