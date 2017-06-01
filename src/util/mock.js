import Mock from 'mockjs'   //模拟数据

 export default Mock.mock('/data','get', {
 "errorcode": 0,//0表示成功，1表示错误
 "list": [1,2,3,4,5] 
});