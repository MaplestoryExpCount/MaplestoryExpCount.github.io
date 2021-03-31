// var mlevel = document.querySelector('.drug1 button');
// var mexp = document.querySelector('.drug1 button');
// function saveName(e) {
//     //宣告一個變數，綁定輸入欄，讀取&紀錄使用者輸入的文字
//     var str = document.querySelector('.exp').value;
//     localStorage.setItem('myexp', str); //把輸入的內容存在瀏覽器 
// }
// function call(e) {
//     str = localStorage.getItem('myexp'); //取出已存在瀏覽器的資料
//     alert('你的名字叫做' + str);
// }

// mlevel.addEventListener('click', saveName)
// mexp.addEventListener('click', call)


let level = [];
if (localStorage.getItem("level")) {
    level = JSON.parse(localStorage.getItem("level"));
    levelData();
}
$(".drug button").click(function () {
    let mylevel = $(".level").val(), myexp = $(".exp").val();
    let newlevel = {
        mylevel: mylevel,
        myexp: myexp
    }
    level.push(newlevel);
    localStorage.setItem("level", JSON.stringify(level));
    $("ul").append(`<li>${mylevel}}和${myexp}</li>`);
    alert(mylevel + "經驗" + myexp)
})
function levelData() {

    level.forEach(function (level, index, array) {
        $("ul").append(`<li>${level.mylevel}和${level.myexp}</li>`);
    })
}
