
var env = "prod";

function getHosts() {
  var hosts = {};
  if (env == "dev") {
    hosts = {
      // serverHostName: 'https://test2.fubaofei.com/mobile2'
       serverHostName: 'http://172.16.20.20:20110'

    }
  } else if (env == "sit") {
    hosts = {
      serverHostName: 'https://172.16.20.246:30290' 
    }
  } else if (env == "uat") {
    hosts = {
      serverHostName: 'https://uat.zhongbaohui.vip/aquarius' 
    }
  } else if (env == "prod") {
    hosts = {
      //鏈嶅姟鍦板潃
      serverHostName: 'https://zhongbaohui.vip/aquarius'
    }
  }
  return hosts;
};