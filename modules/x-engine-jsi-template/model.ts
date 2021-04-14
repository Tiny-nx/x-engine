// model.ts 解析版本
const parserVersion = "1.0.0";

// 命名空间
const moduleID = "com.zkty.jsi.xxxx";

const conf = {
  args: {},
  permissions: {
    X_USER_INFO: "READ",
    X_LBS: "READ_WRITE",
    X_PHOTO: "READ",
  },
};

interface NamedDTO {
  //文字
  title: string;
  //大小
  titleSize: int;
}


@sync
@async
function simpleMethod() {}

@sync
@async
function simpleArgMethod(arg:string):string {}

@sync
@async
function nestedAnonymousObject(): { a: string; i: { n1: string } } {}

@async
@sync
function namedObject(): NamedDTO {}


// test function
function test_同步无返回(){
  let val = xengine.api("com.zkty.jsi.xxxx", "simpleMethod");
  document.getElementById("debug_text").innerText = "无返回,查看原生控制台打印";
}
// test function
function test_同步简单参数(){
  let val = xengine.api("com.zkty.jsi.xxxx", "simpleArgMethod","hello,from js");
  document.getElementById("debug_text").innerText =val;
}

function test_同步返回命名对象() {
  let val = xengine.api("com.zkty.jsi.xxxx", "namedObject", {});
  document.getElementById("debug_text").innerText =typeof val + ":" + val.title + "," + val.titleSize;
}

function test_同步返回匿名嵌套对象() {
  let val = xengine.api("com.zkty.jsi.xxxx", "nestedAnonymousObject", {});
  document.getElementById("debug_text").innerText =typeof val + ":" + val.a + "," + val.i.n1;

}

function test_异步返回命名对象() {
  xengine.api("com.zkty.jsi.xxxx", "namedObject", {}, (val) => {
    document.getElementById("debug_text").innerText =
    typeof val + ":" + val.title + "," + val.titleSize;
  });
}
function test_异步简单参数() {
  xengine.api("com.zkty.jsi.xxxx", "simpleArgMethod","hello,from js", (val) => {
    document.getElementById("debug_text").innerText = val
  });
}

function test_异步返回命名对象() {
  xengine.api("com.zkty.jsi.xxxx", "namedObject", {},
  (val)=>
  {
    document.getElementById("debug_text").innerText =
    typeof val + ":" + val.title + "," + val.titleSize;
  }
  );
}

function test_异步返回匿名嵌套对象() {
  xengine.api("com.zkty.jsi.xxxx", "nestedAnonymousObject", {},
  (val)=>
  {
    document.getElementById("debug_text").innerText =typeof val + ":" + val.a + "," + val.i.n1;
  }
  );
}
  
  
  
  
  
  
  
  
