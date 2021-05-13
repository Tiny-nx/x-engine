

JSI Id: com.zkty.jsi.viewer

version: 0.1.13



## openFileReader
`sync`,`async`
> 打开文件
**demo**
``` js

  xengine.api("com.zkty.jsi.viewer", "openFileReader", 'http://gfsei.atguat.net.cn/9b82cdfe4167b7da07fb395ce3963f4cw004.pdf?Expires=2563098084&AccessKey=40de0c1abb5e4506bccc56d4aee3d945&Signature=1083d55756878793fe68cf43fd599d95', (val) => {
     document.getElementById("debug_text").innerText = JSON.stringify(val);
  });

``` 

**无参数**

**返回值**
``` js



//返回参数
interface StatusDTO {

  //状态信息返回
  result: string;

}
``` 


    