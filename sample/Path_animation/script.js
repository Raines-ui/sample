const submitBtn = document.querySelector('button');
// 初始化对象
var init = {
    _bgColor: "#24e49a",
    _text: "Success",
    _activeClass: "active",
    _inactiveClass: "inactive"
}
// 自定义对象
// var custom = {
//     // _text: "成功",
// }
// 判断数据类型
// function getType(obj){
//     return Object.prototype.toString.call(obj).slice(8,-1);
// }
// 拷贝对象
// function copyObj(custom, init) {
//     // JSON.stringify()将custom的内容转换成字符串进行比对
//     if (JSON.stringify(custom) == "{}") {
//         custom = init;
//         console.log(custom);
//     } else {
//         custom = init;
//         for (var c_key in custom) {
//             for (var i_key in init) {
//                 if (c_key == i_key) {
//                     c_key = i_key;
//                 }
//             }
//         }

//     }
// }
// copyObj(custom, init);
// function 
// Init.prototype._bgColor = "#24e49a";
// Init.prototype._text = "Success";
// function Init() {
//     this._activeClass = "active",
//     this._inactiveClass = "inactive"
// }
// 自定义对象
// Custom.prototype._bgColor = "#24e49a";
// Custom.prototype._text = "成功";
// function Custom() {}
// Init.prototype = new Custom();
// var obj = new Init();
const submitEvent = (e) => {
    if (!e.target.classList.contains(init._activeClass)) {
        e.target.classList.add(init._activeClass);
        setTimeout(() => {
            e.target.classList.remove(init._inactiveClass);
            e.target.style.backgroundColor = init._bgColor;
            e.target.innerHTML = init._text;
        }, 1000);
    }
}
submitBtn.addEventListener('click', submitEvent)