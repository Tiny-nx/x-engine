// model.ts 解析版本
const parserVersion = "1.0.0";

// 命名空间
const moduleID = "com.zkty.module.open";
// JS模块名称
const JSModule = "@zkty-team/x-engine-module-open";

const conf = {
  args: {},
  permissions: {
    X_USER_INFO: "READ",
    X_LBS: "READ_WRITE",
    X_PHOTO: "READ",
  },
};

// dto
interface SheetDTO {
  // 标题
  title: string;
  // 子标题?
  itemList?: Array<string>;
  // 内容
  content?: string;
  // 点击子标题回调函数
  __event__: (index: string) => void;
}

interface ContinousDTO {
  __event__?: (string) => {};
}

interface MsgPayloadDTO {
  type: string;
  args?: Map<string, string>;
  sender?: string;
  receiver?: Array<string>;
  __event__: (string) => void;
  __ret__: (string) => void;
}
function broadcastOn() {
  window.broadcastOn = (...args) => {
    xengine.broadcastOn(function (res) {
      document.getElementById("debug_text").innerText = JSON.stringify(res);
    });
  };
}
function broadcastOff() {
  window.broadcastOff = () => {
    xengine.broadcastOff();
  };
}
function triggerNativeBroadCast() {
  window.triggerNativeBroadCast = () => {
    open.triggerNativeBroadCast();
  };
}
function repeatReturn__event__(args: ContinousDTO): string {
  window.repeatReturn__event__ = () => {
    open.repeatReturn__event__({
      __event__: function (res) {
        document.getElementById("debug_text").innerText =
          "支持多次返回" + JSON.stringify(res);
        return res;
      },
    });
  };
}
function repeatReturn__ret__(args: ContinousDTO): string {
  window.repeatReturn__ret__ = () => {
    open.repeatReturn__ret__({
      __ret__: function (res) {
        document.getElementById("debug_text").innerText =
          "支持多次返回" + JSON.stringify("__ret__:" + res);
        return res;
      },
    });
  };
}

function ReturnInPromiseThen(args: ContinousDTO): string {
  window.ReturnInPromiseThen = () => {
    open.ReturnInPromiseThen().then((res) => {
      document.getElementById("debug_text").innerText =
        "then 只支持一次性返回" + JSON.stringify(res);
    });
  };
}

// 无参数无返回值
function noArgNoRet() {
  window.noArgNoRet = (...args) => {
    open.noArgNoRet(...args).then((res) => {
      document.getElementById("debug_text").innerText = "ret:" + res;
    });
  };
}

// 无参数有 primitive 返回值
function noArgRetPrimitive(): string {
  window.noArgRetPrimitive = (...args) => {
    open.noArgRetPrimitive(...args).then((res) => {
      document.getElementById("debug_text").innerText = "ret:" + res;
    });
  };
}

// 无参数有返回值
function noArgRetSheetDTO(): SheetDTO {
  window.noArgRetSheetDTO = (...args) => {
    open.noArgRetSheetDTO(...args).then((res) => {
      document.getElementById("debug_text").innerText = "title:" + res["title"];
    });
  };
}

function haveArgNoRet(arg: SheetDTO = { title: "abc" }) {
  window.haveArgNoRet = (...args) => {
    open.haveArgNoRet(...args).then((res) => {
      document.getElementById("debug_text").innerText = "ret:" + res;
    });
  };
}

// have args ret primitive
function haveArgRetPrimitive(arg: SheetDTO = { title: "abc" }): string {
  window.haveArgRetPrimitive = (...args) => {
    open.haveArgRetPrimitive(...args).then((res) => {
      document.getElementById("debug_text").innerText = "ret:" + res;
    });
  };
}

// have args ret Object
function haveArgRetSheetDTO(arg: SheetDTO): SheetDTO {
  window.haveArgRetSheetDTO = (...args) => {
    open.haveArgRetSheetDTO({ title: "abc" }).then((res) => {
      document.getElementById("debug_text").innerText = "ret:" + res["title"];
    });
  };
}

function anonymousType(
  arg: {
    age?: int;
    name?: string;
    books?: Array<string>;
    complexArg?: { a: int; name: string };
  } = {
    age: 12,
    name: "zk",
    books: ["1", "2", "3"],
    complexArg: { a: 1, name: "zk2" },
  }
): {
  age?: int;
  name?: string;
  books?: Array<string>;
  complexArg?: { a: int; name: string };
} {
  window.anonymousType = (...args) => {
    open
      .anonymousType({
        age: 14,
      })
      .then((res) => {
        document.getElementById("debug_text").innerText =
          "ret:" + JSON.stringify(res);
      });
  };
}