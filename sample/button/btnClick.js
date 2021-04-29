window.onload = function () {
    // querySelectorAll获取多个标签并合并成array
    // getElementsByTagName虽然也可以获取多个标签，但它不是一个array，而是HtmlColection
    var btns = document.querySelectorAll("button");
    btns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            //鼠标位置-当前目标的位置
            var x = e.clientX - e.target.offsetLeft;
            var y = e.clientY - e.target.offsetTop;
            console.log("e.clientX:"+e.clientX);
            console.log("e.target.offsetLeft:"+e.target.offsetLeft);
            console.log("x:"+x);
            var bubble = document.createElement("span");
            bubble.style.left = x + 'px';
            bubble.style.top = y + 'px';
            btn.appendChild(bubble);
            setTimeout(function () {
            btn.removeChild(bubble);
            }, 800)
        });
    });
}
