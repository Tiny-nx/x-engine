(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1daffb89"],{"061d":function(t,i,e){},4115:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("GmHeader",{attrs:{hideItem:["center"],slotsShow:["right"],leftText:"选择小区","background-color":"#fff"},scopedSlots:t._u([{key:"dynamicsRight",fn:function(){return[s("span",{staticClass:"header-right"},[s("van-button",{on:{click:t.yes}},[t._v("确定")])],1)]},proxy:!0}])}),s("div",{staticStyle:{width:"100%",margin:"0 15px 10px 15px","font-size":"15px","font-weight":"bold"}},[s("img",{staticStyle:{width:"15.2px",height:"13.6px"},attrs:{src:e("4da7"),alt:""}}),s("span",{staticStyle:{"margin-left":"3px"}},[t._v(t._s(t.mallName)+"11")])]),s("div",{staticClass:"content"},[s("ul",t._l(t.listInfo,(function(i,a){return s("li",{key:a,on:{click:function(e){return t.info(i,a)}}},[s("p",[t._v(t._s(i.resName))]),s("span",[t._v(t._s(i.resAddress))]),a==t.idx?s("img",{attrs:{src:e("d881")}}):t._e()])})),0)])],1)},a=[],n={data:function(){return{listInfo:[],pageNumber:1,pageSize:10,currentPage:1,idx:null,mallName:"",title:""}},created:function(){this.mallName=this.$engine.api("com.zkty.jsi.globalstorage","get","mallName"),this.init()},methods:{init:function(){var t=this,i={pageNumber:this.pageNumber,pageSize:this.pageSize,mallCode:this.$engine.api("com.zkty.jsi.globalstorage","get","mallCode")};this.$api.choose(i).then((function(i){t.listInfo=i.data.records}))},page:function(t){this.pageNumber=t,this.init()},info:function(t,i){this.idx=i;var e={pageNumber:this.pageNumber,pageSize:this.pageSize,type:"RESIDENTIAL",userId:this.$utils.getUserId(),communityId:t.id};this.$api.insert(e).then((function(t){})),this.$utils.storage.set("addresId",t.id),this.title=t.resName,localStorage.setItem("select",JSON.stringify(this.title))},yes:function(){localStorage.setItem("tabs",JSON.stringify(1)),this.$router.go(-1)}}},g=n,A=(e("bad6"),e("2877")),c=Object(A["a"])(g,s,a,!1,null,"9dcdd73c",null);i["default"]=c.exports},"4da7":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQxNzE3NzlBRkFCMTFFQjg4NzdDOENEQkY2ODk1MEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQxNzE3N0FBRkFCMTFFQjg4NzdDOENEQkY2ODk1MEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NDE3MTc3N0FGQUIxMUVCODg3N0M4Q0RCRjY4OTUwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NDE3MTc3OEFGQUIxMUVCODg3N0M4Q0RCRjY4OTUwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvSZOgsAAAMXSURBVHja7JhbiE1RGMfPwQwjxnUSx4MHHuRhXBKREC+GSUiU4rjmYdzKLbdciym5JUKdM1FM8mBmnIfhUSkkhCjCg2PSMEcjM4bm+C/+uz7LXnvvadvbaTpf/TprnbX2Xt/61vq+9a0dzWazkVyWLpEcl27JZNLUNhjMAyUBjNsEroO3pg7xePy3gob2qaAGFAdonMNgEajt6BIXgUsBK2eNU+W2QnYWXAeGsqw86C5//6WMAwWgHzgE1nhVsC/YJurXwMIArHcMbGR5BTgLHnhZ4q2gP8s/wK6Alncv+MByV3DSyx5UXrtB1BPgRUAKfgY7RH0yWOKm4B7Qk+UWsC9gJ1EGuC/qlaCXScHhYKX4/xR4F7CC7WC9cMAhYKdJwYP0KiUZxqgw5A5DmiWbaKw/FByjeWolI31YoqJGM8vdwVFdwc3CkmlwIuTj9j1X0JJyMEIqOF00Ku2/2rxkFejjMtAZMNqlz2IQs/n/OGhkOSp1UgoOEB0f2Ty8FJzjmVlkGHg/WAvqxCmki0o8LrKP7q1t4LmoD5QKpkXDTO3BaeA8ZzUFXBXOFBEngRXQY1RAt/YMcJknl7LyFQZoS5SRSkU9LRVMiYYtjPKTGLSV1QpF+2xwG8wCE7k0FzgBS9RA98B8MJ7xNUUHkO+ppeJqz9WD3uIEq7c6RhOJxDD8PhYd/recBhVWPqgs+Iabt8UhoG5nzDKJChNzmISapI2r8sShz01Glb8CdYrxsBq0ivaH3HtHmMSqDOSpiP4fuUdHgRt0hGVM0drZ5wvfO5ZJwQRwAHwX47yk8mXa+L+WWJ9FHfeIdcLstplpD5JxsEYBt02TIZ9sFBGknON6TvndpFWfqY0oC33q9Le6vIK+78U+nqvw0O+ZDLphKljIi4+bVPlVsNMusS6vwTeWB/G+m1NOok6QkaQ6H2byCvp0EnnGLrfJsjsysTKHNK3YMKargrfAApHCx3wYoCTi/gE0wwzc8xKrC1JNSCuokuTV/Fbj2YIq0ZzLHK1Uu9yYpEHLJxs8PNPMDPyVU6do/iu/T/kpwADL+p6W43sOpgAAAABJRU5ErkJggg=="},bad6:function(t,i,e){"use strict";e("061d")},d881:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEQUlEQVRoQ92aa2wUVRTHf2e22hKFgMhDRWMU5IN+kKAW3OIrwWiMigmvmkI31dBGaFNFSEwIGmK0gI9q1ACRpJUmKoFINEr8ZGLLy2jqV4XEWNRWQcszFGX3mDszu1uW3e7MdLZ1vMkmm8w9//P/3zn33HPvHSGEpsvunozI/QhzgJkoMxDGA2Nd+NMoJxAOAz+gHET1K9mx/4/hupegAPrU3Ku4EKtGdBkp7kLwh6UoFt+gsoOy5Iey/cBfQbj4cwpozbxrKNPnUa0HrgjiNI/NWUS2ckFek47OXj+YngXoitmX8XdFMynWI1zpx4nnvsoZLDZw+UCrbPvuHy92ngRozdzpxKydwCwvoCH06SaZWiwdB44UwyoqQBPzFqCpdmBcMbCQn59CrFpp69wzFO6QArS2agXoe0AsZHJe4ZIgz0h717ZCBgUFuOS3gM/s4pWa934K0lBIRF4BbtjsGsWRz5WXRKyF+cLpEgGauGcGmvx2FGK+2Ds5hcTukLavzWKYaRcJsFPl+YpDI5htipHOfd5N+UDl4BR7sYBEfA3KJr+oI9pfWCtt+zanfWYE2CuslfqxZItUWCrNYpeybkmv2FkBiarXUX0uLD8lxRF5Q9q6VhsftgCnMLN6QqxtSsofOEtZ6gZTADoCaqtWgr5Taq/h4ssqae961xGQiB9EqQzXgUe0G2fCg4vh8w749SePRnbsHJK2fXPE3Yz0+a7nvbsq3HNWFTS8COVj4LMPYHfBiuFSDLOfUJ0qujy+BOGjMPj4wpi/CKobwbKgrwdaGuHEn74gUJaK1sbfBJr9WQ6jt1jwZBPMX+iA/H4UXjXkjwcBbTUCvgAeDmLt26a8AhpeAhM6NvlfoGUV9AcibxD2mhA6jDDdNxm/BuMnQvMmMJM2Q74R+o/5Rcr2V46YN2AQrg6O4sFy2k3w7GaYOCU88g7ScSNgACj3QCPbZcIkqF8PX+6E7s6hTW+7E1a+DGPc/b+J+Zam4Y181uP5YAIer4Mn6kAVPm2HPdud/7nt3kdh+WqIlTlP+o7CRhM2gWM+14MtwH8IjZsA67bA5OscwO/3w9YNcO6M60BgUT08UpN1aMjbqTI08m4IBZ3EU6Y5IsaaAzh3dN9+AY79Bk+vg8oHSk0e3EkcPI3efCusfQtMejRt4Byc7odJ12bJ9/bAxqawRz6Nv3f4C9ntcWh8BWJ5Di5s8gFWWO8ZpTWcUuK+x6B2DcigDV7vz+7I+ywPvJM3IbQ0vGJuQR2Yn2mGvEmVJ0tK3inmjL/QyumHqmHq9fDJ+3Ay0GGz9/FPl9O2gMhvaKK+pXTCKMKbeltA1I9V3Mkc3YMtW0DUjxadt/AfPtxNpmbn3tr8/47X0ytJpC84ckRE84opIyLKl3xZEfbE/ngELz66kdiS3NuYfIVS0WvWjIgoX3QPVh7ZTw1yX19kP/bIF4ej+bnNv43O13RkQkJ1AAAAAElFTkSuQmCC"}}]);