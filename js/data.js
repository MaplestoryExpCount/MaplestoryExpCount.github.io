
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
    var explist_permil = explist[i].toLocaleString('en-US');


    $(".data1 li:nth-of-type(" + i + ")").html(i + "等 升級經驗需求為&nbsp; " + explist_permil);
}
function search() {
    $("#ansexp").text("結果：" + explist[$("#level_search").val()].toLocaleString('en-US'))
}
var tArray = new Array();
for (var k = 0; k < 60; k++) {
    tArray[k] = new Array();
    for (var j = 0; j < 10; j++) {
        tArray[k][j] = "";
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