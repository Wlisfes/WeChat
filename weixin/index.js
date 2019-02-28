'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-23 23:59:18 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-01 01:16:16
 * @Types  微信接口文件合并
 */



import * as adminUser from './adminUser'
import * as labelTags from './labelTags'
import * as messageTemplate from './messageTemplate'
import * as sign from './sign'
import * as ticket from './ticket'
import * as token from './token'



export default Object.assign(
    {},
    adminUser,
    labelTags,
    messageTemplate,
    sign,
    ticket,
    token
    
)
