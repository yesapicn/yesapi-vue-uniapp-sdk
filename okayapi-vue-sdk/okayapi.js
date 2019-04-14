let util = require('./md5.js')  

function enryptData (params) {
  const app = getApp()
  
  const OKAYAPI_APP_KEY = "0D19F4F8568B4232213F87FC45C03253"
  const OKAYAPI_APP_SECRECT = "5Xqv89LNKEaMJaboVrRFr5rdbeLY9OEculhjmeS3PSMReLzZvB1GG2WA9pXo8I" // TODO：请勿对外暴露！！

  params['app_key'] = OKAYAPI_APP_KEY
  params['sign'] = '' // 屏蔽sign参数

  var sdic = Object.keys(params).sort();
  var paramsStrExceptSign = "";
  for (let ki in sdic) {
    paramsStrExceptSign += params[sdic[ki]];
  }

  var sign = util.hexMD5(paramsStrExceptSign + OKAYAPI_APP_SECRECT).toUpperCase();
  params['sign'] = sign;

  return params;
}

module.exports = {
  enryptData: enryptData
}  