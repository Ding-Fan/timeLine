/**
 * Created by zichuange on 2017/9/12.
 */

let refresh = function() {
  let timeLine = Date.now();
  let main = document.querySelector("#main");

  main.innerHTML = timeLine;
};

setInterval(refresh, 1);

