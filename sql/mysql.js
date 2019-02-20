/*
 * @Author: 情雨随风 
 * @Date: 2019-02-20 21:52:51 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-02-20 22:07:52
 * @Types sql查询
 */

const mysql = require('mysql')

const pool = mysql.createPool({
    host: '111.231.222.196',
    user: 'weixin',
    password: 'lisfes',
    database: 'weixin',
    charset: 'utf8',
    insecureAuth: true
})


let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release(); //为每一个请求都建立一个connection使用完后调用connection.release(); 直接释放资源。 
                    //query用来操作数据库表
                })
            }
        })
    })
}

export default query