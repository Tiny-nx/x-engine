#!/usr/bin/env python3

import os
import subprocess
import requests
import sys
import json
def genGitLog():
    bashCommand = "git log --pretty=format:%cn||%s||%cr"

    process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
    output, error = process.communicate()
    lines = output.decode('utf-8').split("\n")
    timestoEnds = 7
    ret = ""
    for line in lines:
        [name,comment,elapsed] = line.split('||')
        matches = ["fix","feat","feature"]
        if any( comment.startswith(x) for x in matches) :
            comment = comment.replace('\"','')
            comment = comment.replace('/','')
            ret += "- "+name +" "+comment+" "+ elapsed+'\n'
        if comment.startswith("pgy"):
            timestoEnds-=1
            ret += "\n\n "+'------last version------'+'\n'
        if timestoEnds==0:
            break
    return ret
    

def sendDingDing(payload:dict,url):

    headers = {
      'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload.encode('utf-8'))
    print(response.text)

def getTimeStamp():
    import datetime
    import time
    return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')   
def getBuild():
    import datetime
    import time
    return datetime.datetime.now().strftime('%Y%m%d%H%M%S')  

def doaction(name,version,downloadurl,build):
    text= f"""
{name} {version} 安卓版已上传蒲公英


蒲公英版为快速验证测试版本。仅供验证! 


[{name}]({downloadurl})


![qrcode](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={downloadurl})

**版本信息**


**Build**: {getBuild()}


**编译时间**: {getTimeStamp()}


**近期git(fix,feat)历史**: 


{genGitLog()}  
        """
    text = "\n".join(text.splitlines())
    url = "https://oapi.dingtalk.com/robot/send?access_token=55580c4957aa67216e782e6da0d4908ce5e62df9dcac2b4d4950e6098ee502d1"
    payload = {
     "msgtype": "markdown",
     "markdown": {
         "title":title,
         "text": text 
     },
    "at": {
        "isAtAll": False
    }
 }
    payload = (json.dumps(payload,ensure_ascii=False))
    print(payload)
    sendDingDing(payload,url)

if __name__ == "__main__":
    args = sys.argv
    if(len(args)<5):
        print("参数不够 .py <title> <version> <build> <downloadurl>")
        exit() 

    title = args[1]
    version =args[2]
    build =args[3]
    downloadurl =args[4]
    doaction(title,version, downloadurl,build)
