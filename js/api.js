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
    res.header('Access-Control-Allow-Headers', 'Content-Type,myToken');
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
app.delete('/abc/:id', (req, res) => {
    res.send(`DELETE的restful形式的URL传参：${req.params.id}`)
})
// fetch的post传参
app.post('/abc', (req, res) => {
    res.send(`POST请求参数：${req.body.uName}---${req.body.pwd}`)
})
// fetch的put传参
app.put('/abc/:id', (req, res) => {
    res.send(`PUT传递参数：要修改的数据id为：${req.params.id}，数据要修改为：${req.body.uName}----${req.body.pwd}`)
})

// fetch的Json数据传送
app.get('/json', (req, res) => {
    res.json({  // 直接发送json，也可用send
        id: 1,
        name: '杨少通',
        gender: 'man',
        age: 23,
        type: 'JsonFormatData'
    })
})
//-------------------------------------------------------------------------------------------------------------
// axios 基础练习
app.get('/asData0', (req, res) => {
    res.send('Hello Axios');
})

// axios的get传递参数---传统URL
app.get('/asData1', (req, res) => {
    res.send(`Axios的Get传统URL传递参数：${req.query.id}`);
})
// axios的get传递参数---restful形式的URL
app.get('/asData2/:id', (req, res) => {
    res.send(`Axios的Restful形式URL的Get传参：${req.params.id}`);
})
// axios的get传递参数---params
app.get('/asData3', (req, res) => {
    res.send(`Axios通过Get传递params参数：${req.query.id}`)
})
//---------------------------------------------------------------
// axios的delete传递参数---restful形式的URL传参
app.delete('/asDataDel/:id/:name', (req, res) => {
    res.send(`Axios的Delete传参,restful形式的URL传多参：${req.params.id}----${req.params.name}`)
})
//---------------------------------------------------------------
// axios的Post传参---默认Json
app.post('/asDataPost1', (req, res) => {
    res.send(`Axios通过Post传来的默认Json数据：${req.body.id}----${req.body.name}`);
})
// axios的Post传参---表单格式
app.post('/asDataPost2', (req, res) => {
    res.send(`Axios通过Post传来的默认表单数据：${req.body.sendType}----${req.body.dataType}----${req.body.way}`);
})
//---------------------------------------------------------------
// axios的put传参---默认Json
app.put('/asDataPut/:id', (req, res) => {
    res.send(`Axios通过Put传来的默认Json数据：${req.params.id}----${req.body.sendType}----${req.body.name}`)
})
// Axios配置过基准URL地址的post请求
app.post('/asDflDataPost', (req, res) => {
    res.json(req.body);
})
// 启动监听
app.listen(3101, () => {
    console.log('ServiceTurnedOn')
})
