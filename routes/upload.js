'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-02-19 21:20:44 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-19 21:21:23
 * @Types 图片上传接口
 */


import Router from 'koa-router'
import multer from 'koa-multer'

const router = Router()


//上传配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: (req, file, cb) => {
        cb(null, 'public/upload')
    },
    //修改文件名
    filename: (req, file, cb) => {
        var fileFormat = (file.originalname).split('.')
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
    }
})

//加载配置
var upload = multer({ storage: storage })

//上传图片
router.post('/upload', upload.single('file'),async (ctx) => {
    console.log(`${ctx.href}/${ctx.req.file.filename}`)
    console.log(ctx.href)
    //返回前端文件名
    ctx.body = {
        filename: `${ctx.href}/${ctx.req.file.filename}`
    }
})



export default router