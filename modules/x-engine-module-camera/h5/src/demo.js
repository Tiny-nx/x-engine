
import camera from './index.js'

  window.openImagePicker = () => {
    camera
      .openImagePicker({
        __event__: (res) => {
          console.log(res);
          //拼接参数，例：'?w=200&h=100&q=0.5&bytes=1024'
          document.getElementById("debug_text").innerText = res;

          // var tag = document.getElementsByClassName('photo')[0];
          // if(tag){
          //   tag.setAttribute('src', res);
          // }else{
          //   document.body.innerHTML += "<img class='photo' style='width: 100%' "+"src="+res+">";
          // }
        },
      })
      .then((res) => {
        // document.getElementById("debug_text").innerText = res;
      });
  };

    