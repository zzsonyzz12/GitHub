  
   //这可以判定鼠标从哪个方向进入.
  
  function getDir(ev, ele) {
      var l = ele.getBoundingClientRect().left;
      var t = ele.getBoundingClientRect().top;
      var w = ele.getBoundingClientRect().width;
      var h = ele.getBoundingClientRect().height;
      var x = (ev.clientX - l - w / 2) * (w > h ? (h / w) : 1);
      var y = (ev.clientY - t - h / 2) * (h > w ? (w / h) : 1);
      var deg = Math.atan2(y, x) / (Math.PI / 180);
      var d = (Math.round((deg + 180) / 90) + 3) % 4;
      return d;
      // d的值{上:0,右:1,下:2,左:3}
    }
//做一个动画,传入对象和需要改变的属性值
     function jxls(obj, json) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var speed = 0;
                var begin = 0;
                var target = 0;
                var flag = true;
                for (var key in json) {
                    begin = parseInt(window.getComputedStyle(obj)[key]);
                    target = parseInt(json[key]);
                    speed = (target - begin) * 0.2;
                    speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);
                    obj.style[key] = speed + begin + "px";
                    if (begin !== target) {
                        flag = false;
                    }
                }
                if(flag){
                    clearInterval(obj.timer);
                }

            }, 20)
          }