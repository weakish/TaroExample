const restify = require('restify');

function tickets(req, res, next) {
  const jsonString = [
  {
    "label": "远程支持票",
    "description": "可获得活动PPT等资料",
    "price": 9.99,
    "quota": -1,
    "info": {
      "email": {
        "isSensitive": false,
        "label": "电子邮箱",
        "description": "请输入您的电子邮箱，用于接收活动PPT等资料"
      }
    }    
  },
  {
    "label": "赞助商票",
    "description": "品牌露出，详情联系market@example.com",
    "price": 999.99,
    "quota": 2,
    "info": {
        "name": {
          "isSensitive": true,
          "label": "姓名",
          "description": "请输入您的真实姓名"
        },
        "ID": {
          "isSensitive": true,
          "label": "身份证号",
          "description": "由于现场安保需要，请输入您的身份证号或护照号"
        },
        "gender": {
          "isSensitive": true,
          "label": "性别",
          "description": "请填写您的性别"
        }
    }
  },
  {
    "label": "标准票",
    "description": "可现场参加活动",
    "price": 99.99,
    "quota": 321,
    "info": {
        "name": {
          "isSensitive": true,
          "label": "姓名",
          "description": "请输入您的真实姓名"
        },
        "ID": {
          "isSensitive": true,
          "label": "身份证号",
          "description": "由于现场安保需要，请输入您的身份证号或护照号"
        },
        "gender": {
          "isSensitive": true,
          "label": "性别",
          "description": "请填写您的性别"
        }
    }
  }
  ];
  res.send(jsonString);
  next();
}

const server = restify.createServer();

server.get('/', tickets);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
