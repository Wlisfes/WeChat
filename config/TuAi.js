'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-19 21:53:21 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-19 23:13:14
 * @Types 图灵机器人Api接口
 */

import axios from 'axios'
import { TuApi,NirvanaAi } from './index'


/**
 * 
 * @param { Object }  
 */
const TuAi = async (param) => {
    let res;
    try {
        let data = await axios.post(TuApi, TuAiObject(param))
            res = data.data
    } catch (error) {
        res = {
            "intent": {
                "code": 1
            }
        }
    }
    
    return res
}

/**
 * 
 * @param { Object } // assign数据组合
 */
const TuAiObject = (ops) => {
    let TuAiOps = {
        "reqType": 0,
        "perception": {
            
        },
        "userInfo": {
            "apiKey": NirvanaAi.apiKey,
            "userId": NirvanaAi.userId
        }
    }


    //文本消息
    if(ops.MsgType === "text") {
        TuAiOps.perception['inputText'] = { "text": ops.Content }

    //图文消息
    } else if(ops.MsgType === "image") {
        TuAiOps.reqType = 1
        TuAiOps.perception['inputImage'] = { "url": ops.url }

    //语音消息
    } else if(ops.MsgType === "voice") {
        TuAiOps.reqType = 2
        TuAiOps.perception['inputMedia'] = { "url": ops.url }
    }

    return TuAiOps
}


export default TuAi