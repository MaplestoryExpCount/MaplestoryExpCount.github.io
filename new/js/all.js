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
                    name: "200等以下升級藥水",
                    druglevel: 200,
                },
                {
                    name: "210等以下升級藥水",
                    druglevel: 210,
                },
                {
                    name: "220等以下升級藥水",
                    druglevel: 220,
                },
                {
                    name: "230等以下升級藥水",
                    druglevel: 230,
                },
                {
                    name: "240等以下升級藥水",
                    druglevel: 240,
                },
                {
                    name: "250等以下升級藥水",
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
});
$('.drugdiv button').each((index, btn) => {
    $(btn).click(function () {
        druglevel = $(this).val();
        drugexp = explist[$(this).val() - 1];

        level = $("#level").val() * 1;
        exp = $("#exp").val();
        exp_per = $("#exp_per").val();

        let level_now = explist[level];//所需鳩驗



        var inner_add = document.querySelectorAll('.Results_table .result_contant');
        inner_add[0].innerHTML += '<div class="row resultadd"><div class="col-md-3 col-12"></div><div class="col-md-3"></div><div class="col-md-3"></div><div class="col-md-3"></div></div>';
        if (count > 10) {
            $(".Results_table .result_contant:nth-child(2) .resultadd:nth-child(1)").remove();
            count--;
        }

        if (druglevel > level) {

            level_after += parseInt(level_now) + parseInt(exp);
            level_after = (parseInt(level_after) - parseInt(explist[level]));

            level_per = (level_after / explist[level + 1] * 100).toFixed(2);

            var inner = document.querySelectorAll('.Results_table .result_contant .resultadd:nth-child(' + (count + 1) + ') .col-md-3');


            var t = document.getElementById("level");
            t.value = level + 1;

            var e_per = document.getElementById("exp_per");
            e_per.value = level_per;



            inner[0].innerHTML += '<div>' + level + '</div>';
            inner[1].innerHTML += '<div> ' + exp_per + ' %</div>';
            inner[2].innerHTML += '<div>' + (parseInt(level) + 1) + '</div>';
            inner[3].innerHTML += '<div> ' + level_per + ' %</div>';

            data3[count] = level + 1;


        } else {


            level_after = (parseInt(drugexp) + parseInt(exp));

            level_per = (level_after / level_now * 100).toFixed(2);
            var inner = document.querySelectorAll('.Results_table .result_contant .resultadd:nth-child(' + (count + 1) + ') .col-md-3');
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