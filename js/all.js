webtitle = '新楓之谷&nbsp;V258&nbsp; New Age &nbsp; 版本&nbsp;經驗成長秘藥計算機 Beta 1.1'

$('.webtitle').html(webtitle);
document.title = $('.webtitle').text();
level_after = 0;
count = 0;
allcount = 0;
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var exp_per;
var exp_per_after = 0;
var backlevel = 0;
var lastexp = [];
lastexp[0] = 0;
back = false;
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
                    name: "199等以下升級藥水<br>(終極成長秘藥)",
                    druglevel: 200,
                    druglevelid: "drug200",
                    img: "./img/exp.png",
                },
                {
                    name: "209等以下升級藥水<br>(成長秘藥200~209)",
                    druglevel: 210,
                    druglevelid: "drug210",
                    img: "./img/exp.png",
                },
                {
                    name: "219等以下升級藥水<br>(成長秘藥200~219)",
                    druglevel: 220,
                    druglevelid: "drug220",
                    img: "./img/exp.png",
                },
                {
                    name: "229等以下升級藥水<br>(成長秘藥200~229)",
                    druglevel: 230,
                    druglevelid: "drug230",
                    img: "./img/exp.png",
                },
                {
                    name: "239等以下升級藥水<br>(颱風成長秘藥200~239)",
                    druglevel: 240,
                    druglevelid: "drug240",
                    img: "./img/239drug.png",
                },
                {
                    name: "249等以下升級藥水<br>(極限成長秘藥200~249)",
                    druglevel: 250,
                    druglevelid: "drug250",
                    img: "./img/249drug.png",
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
$("#level").blur(function () {
    let level = $("#level").val() * 1;
    if (level < 141 || level >= 300) {
        $("#level").val(200);
        $("#exp").val(0);
        $("#exp_per").val(0);
        $("#level").focus();
        alert("請輸入等級範圍在141-300等之間");

    }
});
$("#exp").blur(function () {
    level = $("#level").val() * 1;
    exp = $("#exp").val();
    var ans = Math.abs((exp / explist[level] * 100).toFixed(3));
    lastexp[0] = exp;
    var original_per = Math.abs((exp / explist[level] * 100).toFixed(3));

    if (ans > 100) {
        alert("輸入經驗值大於等級需求")
        return;
    }
    $("#exp_per").val(ans);
    // $("#exp_per").css("pointer-events", "none");
    $(".expshow-1").html('<div class="col-md-12"></div>');

    $(".expshow-1 div").addClass("expshow-2");

    $(".expshow-1 div").css("width", original_per + "%");
    $(".expshow-1 div").text(original_per + "%");
    if (level < 141 || level >= 300) {
        $("#level").val(200);
        $("#exp").val(0);
        $("#exp_per").val(0);
        $("#level").focus();
        alert("請輸入等級範圍在141-300等之間");

    }

});
// $("#exp").focus(function () {
//     $("#exp_per").css("pointer-events", "none");

// });
// $("#exp_per").focus(function () {
//     $("#exp").css("pointer-events", "none");

// });
$("#exp_per").blur(function () {
    level = $("#level").val() * 1;
    exp_per = $("#exp_per").val();
    var ans = Math.abs((explist[level] * exp_per / 100).toFixed(0));
    lastexp[0] = ans;

    exp_per_after = exp_per;
    if (exp_per < 0 || exp_per > 100) {
        alert("請輸入0-100");
        return;
    }

    $("#exp").val(ans);
    // $("#exp").css("pointer-events", "none");
    $(".expshow-1").html('<div class="col-md-12"></div>');



    $(".expshow-1 div").addClass("expshow-2");

    $(".expshow-1 div").css("width", exp_per + "%");
    $(".expshow-1 div").text(exp_per + "%");
    if (level < 141 || level >= 300) {
        $("#level").val(200);
        $("#exp").val(0);
        $("#exp_per").val(0);
        $("#level").focus();
        alert("請輸入等級範圍在141-300等之間");

    }

});
$("#reset").click(function () {
    $("#level").val(200);
    $("#exp").val(0);
    $("#exp_per").val(0);
    $(".result_contant").html('');
    $(".expshow-1").html('<div class="col-md-12"></div>');
    count = 0;
    $(".drugselect").val('1');
    $("#drug200,#drug210,#drug220,#drug230,#drug240,#drug250").text('0');
    // $("#exp").css("pointer-events", "auto")
    // $("#exp_per").css("pointer-events", "auto")


});
var drug200 = 0;
var drug210 = 0;
var drug220 = 0;
var drug230 = 0;
var drug240 = 0;
var drug250 = 0;
var lastdrug = [];

var lastdrugnum = [];
$('.drugdiv button').each((index, btn) => {
    $(btn).click(function () {

        druglevel = $(this).val();
        drugexp = explist[$(this).val() - 1];
        level = $("#level").val() * 1;
        exp = $("#exp").val();
        exp_per = $("#exp_per").val();
        let drug_num = 0;
        if (level < 141) {
            alert("所有秘藥不提供給141等以下使用");
            return 0;
        }
        if (druglevel != 200 && level < 200) {
            alert("本秘藥不提供給200等以下使用，請選擇其他藥水");
            return false;
        }
        switch (druglevel) {
            case "200":
                drug200 = document.getElementById("drug200").innerHTML;
                drug_num = parseInt(($(this).parent(".drugdiv").find("select").val() * 1))
                drug200 = parseInt((parseInt(drug200) + drug_num));
                document.getElementById("drug200").innerHTML = drug200;
                break;
            case "210":
                drug210 = document.getElementById("drug210").innerHTML;
                drug_num = parseInt(($(this).parent(".drugdiv").find("select").val() * 1))
                drug210 = parseInt((parseInt(drug210) + drug_num));
                document.getElementById("drug210").innerHTML = drug210;
                break;
            case "220":
                drug220 = document.getElementById("drug220").innerHTML;
                drug_num = parseInt(($(this).parent(".drugdiv").find("select").val() * 1))
                drug220 = parseInt((parseInt(drug220) + drug_num));
                document.getElementById("drug220").innerHTML = drug220;
                break;
            case "230":
                drug230 = document.getElementById("drug230").innerHTML;
                drug_num = parseInt(($(this).parent(".drugdiv").find("select").val() * 1))
                drug230 = parseInt((parseInt(drug230) + drug_num));
                document.getElementById("drug230").innerHTML = drug230;
                break;
            case "240":
                drug240 = document.getElementById("drug240").innerHTML;
                drug_num = parseInt(($(this).parent(".drugdiv").find("select").val() * 1))
                drug240 = parseInt((parseInt(drug240) + drug_num));
                document.getElementById("drug240").innerHTML = drug240;
                break;
            case "250":
                drug250 = document.getElementById("drug250").innerHTML;
                drug_num = parseInt(($(this).parent(".drugdiv").find("select").val() * 1))
                drug250 = parseInt((parseInt(drug250) + drug_num));
                document.getElementById("drug250").innerHTML = drug250;
                break;
        }
        let level_now = explist[level];//所需經驗



        Recursion();
        function Recursion() {
            for (var n = 0; n < drug_num; n++) {
                var inner_add = document.querySelectorAll('.Results_table .result_contant');
                inner_add[0].innerHTML += '<div class="row resultadd"><div class="col-3 "></div><div class="col-3"></div><div class="col-3"></div><div class="col-3"></div></div>';

                if (count > 10) {
                    $(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(1)").remove();
                    count--;
                }
                if (level <= 199 && level >= 141) {
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
                    level_after = parseInt(exp);
                    level += item;

                    level_per = Math.abs((level_after / explist[level + 1] * 100).toFixed(3));

                    var inner = document.querySelectorAll('.Results_table .result_contant .resultadd:nth-child(' + (count + 1) + ') .col-3');




                    var e_per = document.getElementById("exp_per");
                    e_per.value = level_per;


                    inner[0].innerHTML += '<div>' + (parseInt(level) - parseInt(item)) + '</div>';
                    inner[1].innerHTML += '<div> ' + exp_per + ' %</div>';
                    inner[2].innerHTML += '<div>' + (parseInt(level)) + '</div>';
                    inner[3].innerHTML += '<div> ' + level_per + ' %</div>';

                    var e_exp = document.getElementById("exp");
                    e_exp.value = level_after;

                    data3[count] = level;
                    $("#level").val(data3[count]);


                }
                else if (druglevel > level && level > 199) {

                    level_after = parseInt(exp);

                    level_per = Math.abs((level_after / explist[level + 1] * 100).toFixed(3));
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
                    level_per = Math.abs((level_after / explist[level] * 100).toFixed(3));

                    var inner = document.querySelectorAll('.Results_table .result_contant .resultadd:nth-child(' + (count + 1) + ') .col-3');
                    inner[0].innerHTML += '<div>' + level + '</div>';

                    inner[1].innerHTML += '<div> ' + exp_per_after + ' %</div>';
                    if (level_per < 100) {

                        inner[2].innerHTML += '<div>' + level + '</div>';
                        inner[3].innerHTML += '<div > ' + (level_after / explist[level] * 100).toFixed(3) + ' %</div>';
                        data3[count] = level;

                        level_per = Math.abs((level_after / explist[level] * 100).toFixed(3));

                        var e_per = document.getElementById("exp_per");

                        e_per.value = level_per;

                    }
                    else if (level_per > 100) {

                        level_after = (parseInt(level_after) - parseInt(explist[level]));
                        level_per = Math.abs((level_after / explist[level + 1] * 100).toFixed(3));
                        data3[count] = parseInt(level) + 1;

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
                e_exp.value = level_after;

                var l = document.getElementById("level");
                l.value = data3[count];

                count++;
                lastdrug[count - 1] = druglevel;
                lastexp[count] = level_after;
                lastdrugnum[count] = $(this).parent(".drugdiv").find("select").val();
                $(".expshow-1 div").addClass("expshow-2");
                $(".expshow-1 div").css("width", level_per + "%");
                $(".expshow-1 div").text(level_per + "%");


                level = parseInt(l.value);
                exp = level_after;
                exp_per_after = level_per;


            }
            if (level = "") {
                alert("請輸入等級" + level);
                return;
            }
            else if ($("#level").val() < 140 || $("#level").val() > 300) {
                $("#level").val(200);
                $("#exp").val(0);
                $("#exp_per").val(0);
                $(".result_contant").html('');
                $(".expshow-1").html('<div class="col-md-12"></div>');
                count = 0;
                $(".drugselect").val('1');
                $("#drug200,#drug210,#drug220,#drug230,#drug240,#drug250").text('0');
                // $("#exp").css("pointer-events", "auto")
                // $("#exp_per").css("pointer-events", "auto")
                alert("請輸入等級範圍在141-300之間");

                return;
            }

        }







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
    var l_a = $("#level").val()
    var l = document.getElementById("level");
    l.value = $(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(" + count + ") .col-3:nth-child(1)").text();


    var ans = Math.abs(parseFloat($(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(" + count + ") .col-3:nth-child(2)").text()));
    switch (lastdrug[count - 1]) {
        case "200":
            drug200 = document.getElementById("drug200").innerHTML;
            drug200--;
            document.getElementById("drug200").innerHTML = drug200;
            backlevel = 200;
            break;
        case "210":
            drug210 = document.getElementById("drug210").innerHTML;
            drug210--;

            document.getElementById("drug210").innerHTML = drug210;
            backlevel = 210;
            break;
        case "220":
            drug220 = document.getElementById("drug220").innerHTML;
            drug220--;
            document.getElementById("drug220").innerHTML = drug220;
            backlevel = 220;
            break;
        case "230":
            drug230 = document.getElementById("drug230").innerHTML;
            drug230--;
            document.getElementById("drug230").innerHTML = drug230;
            backlevel = 230;
            break;
        case "240":
            drug240 = document.getElementById("drug240").innerHTML;
            drug240--;
            document.getElementById("drug240").innerHTML = drug240;
            backlevel = 240;
            break;
        case "250":
            drug250 = document.getElementById("drug250").innerHTML;
            drug250--;
            document.getElementById("drug250").innerHTML = drug250;
            backlevel = 250;
            break;
    }
    $("#exp_per").val(ans);

    var e_exp = document.getElementById("exp");

    if (back == false) {
        lastexp.pop();
        e_exp.value = parseInt(lastexp.pop());
        back = true;
    } else {
        e_exp.value = parseInt(lastexp.pop());

    }


    $(".expshow-1 div").addClass("expshow-2");
    $(".expshow-1 div").css("width", ans + "%");
    $(".expshow-1 div").text(ans + "%");

    $(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(" + count + ")").remove();
    count--;

}
