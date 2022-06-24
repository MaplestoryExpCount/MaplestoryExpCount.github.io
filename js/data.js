
Vue.createApp({
    data: function () {

    },
    methods: {

    },
    mounted() {

    },
}).mount("#data")

Vue.createApp({
    data: function () {

    },
    methods: {

    },
    mounted() {

    },
}).mount("#data2")
for (var i = 1; i < 301; i++) {
    $(".data1 li:nth-of-type(" + i + ")").html(i + "等 升級經驗需求為&nbsp; " + explist[i]);
}
var tArray = new Array(); //先宣告一維
for (var k = 0; k < 60; k++) { //一維長度為i,i為變數，可以根據實際情況改變
    tArray[k] = new Array(); //宣告二維，每一個一維陣列裡面的一個元素都是一個陣列；
    for (var j = 0; j < 10; j++) { //一維陣列裡面每個元素陣列可以包含的數量p，p也是一個變數；
        tArray[k][j] = ""; //這裡將變數初始化，我這邊統一初始化為空，後面在用所需的值覆蓋裡面的值
    }
}
for (var j = 1; j < 60; j++) {
    for (var k = 0; k < 10; k++) {
        tArray[j][k] = exp_data2[j - 1][k];
        tArray[j][k] = parseFloat(tArray[j][k]) * 100;
    }
}
for (var j = 1; j < 60; j++) {
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 1 + ")").html((j + 140))

    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 2 + ")").html(tArray[j][0] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 3 + ")").html(tArray[j][1] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 4 + ")").html(tArray[j][2] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 5 + ")").html(tArray[j][3] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 6 + ")").html(tArray[j][4] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 7 + ")").html(tArray[j][5] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 8 + ")").html(tArray[j][6] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 9 + ")").html(tArray[j][7] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 10 + ")").html(tArray[j][8] + "%")
    $("#data2 .table_d2:nth-of-type(" + j + ") div:nth-of-type(" + 11 + ")").html(tArray[j][9] + "%")

    $("#data2 .table_d2:nth-of-type(" + 45 + ") div:nth-of-type(" + 2 + ")").html("55%")
    $("#data2 .table_d2:nth-of-type(" + 50 + ") div:nth-of-type(" + 2 + ")").html("55%")


}