const express = require('express');
const app = express();
const bodyParser = require('body-parser');  // 用于接收post的数据
// 处理静态资源
app.use(express.static('public'));
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问服务
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// 路由
app.get('/data', (req, res) => {
    res.send('HELLO YANG!');
})
app.get('/data1', (req, res) => {
    res.send('HELLO SHAO!');
})
app.get('/data2', (req, res) => {
    res.send('HELLO TONG!');
})

// fetch的get传参---传统url
app.get('/abc', (req, res) => {
    res.send(`GET的传统URL的get传参：${req.query.id}`)
})
// fetch的get传参---restful形式的url
app.get('/abc/:id', (req, res) => {
    res.send(`GET的restful形式的URL传参：${req.params.id}`)
})
// fetch的delete传参---resful形式的URL传参
app.delete('/abc/:id',(req,res)=>{
    res.send(`DELETE的restful形式的URL传参：${req.params.id}`)
})
// fetch的post传参
app.post('/abc', (req, res) => {
    res.send(`POST请求参数：${req.body.uName}---${req.body.pwd}`)
})
// 启动监听
app.listen(3101, () => {
    console.log('ServiceTurnedOn')
})