level_after = 0;
count = 0;
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var exp_per;
Vue.createApp({
    data: function () {
        return {
            expinput: {
                level: 200,
                exp: 0,
                exp_per: 0,
            },


            itemchoose: [
                {
                    name: "199等以下升級藥水",
                    druglevel: 200,
                },
                {
                    name: "209等以下升級藥水",
                    druglevel: 210,
                },
                {
                    name: "219等以下升級藥水",
                    druglevel: 220,
                },
                {
                    name: "229等以下升級藥水",
                    druglevel: 230,
                },
                {
                    name: "239等以下升級藥水(颱風成長秘藥)",
                    druglevel: 240,
                },
                {
                    name: "249等以下升級藥水(極限成長秘藥)",
                    druglevel: 250,
                },
            ]

        }
    },
    methods: {

    },
    mounted() {

    },
}).mount("#app")
$(document).ready(function () {
    $("#dialog-text .dialog-text-row").hover(function () {
        $(this).find(".tr").css("border-color", "transparent transparent transparent #ff0000");
        $("p").css("border-color", "transparent transparent transparent #ff0000");
    }, function () {
        $(".tr").css("border-color", "transparent transparent transparent #c7c7c7");
    });
});
var text = '<div class="dialog-text-row"><div class="tr"></div><p> 介紹</p></div><div class="dialog-text-row"><div class="tr"></div><p>資料來源</p></div>';

$("#dialog-text .dialog-text-row:nth-of-type(1)").click(function () {
    $("#dialog-text2").css("display", "block");
    $("#dialog-text").css("display", "none");
    $("#dialog-text3").css("display", "none");

    $("#dialog-btn1").css("display", "block");
});
$("#dialog-text .dialog-text-row:nth-of-type(2)").click(function () {
    $("#dialog-text3").css("display", "block");
    $("#dialog-text").css("display", "none");
    $("#dialog-text2").css("display", "none");
    $("#dialog-btn1").css("display", "block");
});
$("#dialog-btn1").click(function () {
    $("#dialog-text3").css("display", "none");
    $("#dialog-text2").css("display", "none");
    $("#dialog-text").css("display", "block");
    $("#dialog-btn1").css("display", "none");
});
$("#dialog-btn2").click(function () {
    $("#dialog").css("display", "none");
    $("#dialog-text3").css("display", "none");
    $("#dialog-text2").css("display", "none");
    $("#dialog-text").css("display", "block");
});
$("#menu").click(function () {
    $("#dialog").css("display", "block")
    $("#dialog-btn2").css("display", "block");

});
$("#exp").blur(function () {
    level = $("#level").val() * 1;
    exp = $("#exp").val();
    var ans = (exp / explist[level] * 100).toFixed(2);
    if (ans > 100) {
        alert("輸入經驗值大於等級需求")
        return;
    }
    $("#exp_per").val(ans);
});
$("#exp_per").blur(function () {
    level = $("#level").val() * 1;
    exp_per = $("#exp_per").val();
    var ans = (explist[level] * exp_per / 100).toFixed(0);
    if (exp_per < 0 || exp_per > 100) {
        alert("請輸入0-100");
        return;
    }

    $("#exp").val(ans);
    $("#exp").css("pointer-events", "none")
});

$('.drugdiv button').each((index, btn) => {
    $(btn).click(function () {
        druglevel = $(this).val();
        drugexp = explist[$(this).val() - 1];

        level = $("#level").val() * 1;
        exp = $("#exp").val();
        exp_per = $("#exp_per").val();

        let level_now = explist[level];//所需經驗
        if (level < 141) {
            alert("所有秘藥不提供給141等以下使用");
            return 0;
        }
        if (druglevel != 200 & level < 200) {
            alert("本秘藥不提供給200等以下使用，請選擇其他藥水");
            return 0;
        }

        var inner_add = document.querySelectorAll('.Results_table .result_contant');
        inner_add[0].innerHTML += '<div class="row resultadd"><div class="col-3 "></div><div class="col-3"></div><div class="col-3"></div><div class="col-3"></div></div>';
        if (count > 10) {
            $(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(1)").remove();
            count--;
        }

        if (level <= 199 & level >= 141) {
            var ra = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            sum = 0.0;
            sum2 = 0.0;
            var item = 0;
            for (var i = 0; i < 10; i++) {
                if (sum > parseInt(ra) || parseFloat(exp_data2[level - 141][i]) == 0) {
                    item = i;
                    break;
                }
                if (sum < parseFloat(ra)) {
                    sum += (parseFloat(exp_data2[level - 141][i]) * 100);
                    item++;
                } else {

                    sum -= (parseFloat(exp_data2[level - 141][i - 1]) * 100);
                    item--;
                    break;
                }

            }
            // if (item = 0) {
            //     item = 2;
            // }
            level_after = parseInt(exp);

            level += item;

            level_per = (level_after / explist[level] * 100).toFixed(2);

            var inner = document.querySelectorAll('.Results_table .result_contant .resultadd:nth-child(' + (count + 1) + ') .col-3');


            var t = document.getElementById("level");
            t.value = level + item;

            var e_per = document.getElementById("exp_per");
            e_per.value = level_per;


            data3[count] = level;
            inner[0].innerHTML += '<div>' + (parseInt(level) - parseInt(item)) + '</div>';
            inner[1].innerHTML += '<div> ' + exp_per + ' %</div>';
            inner[2].innerHTML += '<div>' + (parseInt(level)) + '</div>';
            inner[3].innerHTML += '<div> ' + level_per + ' %</div>';

        }

        if (druglevel > level & level > 199) {


            level_after = parseInt(exp);

            level_per = (level_after / explist[level + 1] * 100).toFixed(2);
            var inner = document.querySelectorAll('.Results_table .result_contant .resultadd:nth-child(' + (count + 1) + ') .col-3');


            var t = document.getElementById("level");
            t.value = level + 1;

            var e_per = document.getElementById("exp_per");
            e_per.value = level_per;
            data3[count] = level + 1;

            inner[0].innerHTML += '<div>' + level + '</div>';
            inner[1].innerHTML += '<div> ' + exp_per + ' %</div>';
            inner[2].innerHTML += '<div>' + (parseInt(level) + 1) + '</div>';
            inner[3].innerHTML += '<div> ' + level_per + ' %</div>';


        } else if (level > 199) {

            level_after = (parseInt(drugexp) + parseInt(exp));

            level_per = (level_after / level_now * 100).toFixed(2);
            var inner = document.querySelectorAll('.Results_table .result_contant .resultadd:nth-child(' + (count + 1) + ') .col-3');
            inner[0].innerHTML += '<div>' + level + '</div>';
            inner[1].innerHTML += '<div> ' + exp_per + ' %</div>';

            if (level_per < 100) {
                inner[2].innerHTML += '<div>' + level + '</div>';
                inner[3].innerHTML += '<div> ' + level_per + ' %</div>';
                data3[count] = level;
                var e_per = document.getElementById("exp_per");

                e_per.value = level_per;

            }
            else if (level_per > 100) {
                level_after = (parseInt(level_after) - parseInt(explist[level]));
                level_per = (level_after / explist[level + 1] * 100).toFixed(2);
                data3[count] = level + 1;

                var e_per = document.getElementById("exp_per");
                e_per.value = level_per;
                inner[2].innerHTML += '<div>' + (parseInt(level) + 1) + '</div>';
                inner[3].innerHTML += '<div> ' + level_per + ' %</div>';


            }
        }

        data1[count] = level;
        data2[count] = exp_per;
        data4[count] = level_per;

        var e_exp = document.getElementById("exp");
        e_exp.value = (explist[data3[count]] * data4[count] / 100).toFixed(0);

        var l = document.getElementById("level");
        l.value = data3[count];


        count++;
        if (level = "") {
            alert("請輸入等級" + level);
            return;
        }
        else if ($("#level").val() < 140 || $("#level").val() > 300) {
            alert("請輸入等級範圍在140-300之間");
            return;
        }
        $(".expshow-1 div").addClass("expshow-2");
        $(".expshow-1 div").css("width", level_per + "%");
        $(".expshow-1 div").text(level_per + "%");


    });
});
demoP = document.getElementById("demo");

function myFunction() {
    demoP.innerHTML = "";
    for (let i = 0; i < data1.length; i++) {

        demoP.innerHTML += "第" + (i + 1) + "次使用從等級&nbsp;" + data1[i] + "&nbsp;的&nbsp;" + data2[i] + "% &nbsp;到&nbsp;" + data3[i] + "&nbsp;的&nbsp;" + data4[i] + "%<br>";
    }
}

function goback() {
    if (count == 0) {
        alert("已無過去資料");
        return 0;
    }
    var l = document.getElementById("level");
    l.value = $(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(" + count + ") .col-3:nth-child(1)").text();
    var ans = parseFloat($(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(" + count + ") .col-3:nth-child(2)").text());


    $("#exp_per").val(ans);

    var e_exp = document.getElementById("exp");

    e_exp.value = (explist[l.value] * ans / 100).toFixed(0);

    $(".expshow-1 div").addClass("expshow-2");
    $(".expshow-1 div").css("width", ans + "%");
    $(".expshow-1 div").text(ans + "%");

    $(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(" + count + ")").remove();
    count--;

}

