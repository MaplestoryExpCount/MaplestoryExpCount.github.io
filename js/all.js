//經驗表

var level199 = 571115568
var level200 = 2207026470
var level201 = 2471869646
var level202 = 2768494003
var level203 = 3100713283
var level204 = 3472798876
var level205 = 3889534741
var level206 = 4356278909
var level207 = 4879032378
var level208 = 5464516263
var level209 = 6120258214
var level210 = 16830710088
var level211 = 18177166895
var level212 = 19631340246
var level213 = 21201847465
var level214 = 22897995262
var level215 = 24729834882
var level216 = 26708221672
var level217 = 28844879405
var level218 = 31152469757
var level219 = 33644667337
var level220 = 57195934473
var level221 = 60055731197
var level222 = 63058517756
var level223 = 66211443644
var level224 = 69522015826
var level225 = 93854721366
var level226 = 96670363007
var level227 = 99570473897
var level228 = 102557588114
var level229 = 105634315757
var level230 = 174296620999
var level231 = 177782553419
var level232 = 181338204487
var level233 = 184964968576
var level234 = 188664267947
var level235 = 271970512164
var level236 = 277409922407
var level237 = 282958120855
var level238 = 288617283272
var level239 = 294389628937
var level240 = 594667050452
var level241 = 600613720956
var level242 = 606619858165
var level243 = 612686056746
var level244 = 618812917313
var level245 = 625001046486
var level246 = 631251056950
var level247 = 637563567519
var level248 = 643939203194
var level249 = 650378595225
var level250 = 1313764762354
var level251 = 1326902409977
var level252 = 1340171434076
var level253 = 1353573148416
var level254 = 1367108879900
var level255 = 1380779968699
var level256 = 1394587768385
var level257 = 1408533646068
var level258 = 1422618982528
var level259 = 1436845172353
var level260 = 2902427248153
var level261 = 2931451520634
var level262 = 2960766035840
var level263 = 2990373696198
var level264 = 3020277433159
var level265 = 3050480207490
var level266 = 3080985009564
var level267 = 3111794859659
var level268 = 3142912808255
var level269 = 3174341936337
var level270 = 6412170711400
var level271 = 6476292418514
var level272 = 6541055342699
var level273 = 6606465896125
var level274 = 6672530555086


let level = [];
if (localStorage.getItem("level")) {
    mylevel = JSON.parse(localStorage.getItem("level"));
    levelData();
}
$(".drug button").click(function () {
    let mylevel = $(".level").val(), myexp = $(".exp").val();
    let newlevel = {
        mylevel: mylevel,
        myexp: myexp
    }
    var s2 = 571115568//199等經驗
    var s2 = 6120258214//209等經驗
    var s3 = 33644667337//219等經驗
    var s4 = 105634315757//229等經驗
    var s5 = 294389628937//239等經驗
    var s6 = 650378595225//249等經驗





    level.push(newlevel);
    localStorage.setItem("level", JSON.stringify(level));

    nowlevel = parseFloat(mylevel)
    // switch (nowlevel) {
    //     case nowlevel >= 1 && nowlevel <= 199:
    //         nowlevel = parseFloat(nowlevel) + 1
    //         break
    //         ;
    //     case nowlevel >= 200 && nowlevel <= 209:
    //         nowlevel = parseFloat(nowlevel) + 1
    //         break

    // }
    if (nowlevel < 210) {
        nowlevel = parseFloat(nowlevel) + 1;
        alert(nowlevel + "經驗" + myexp)

    } else if (nowlevel < 220) {
        m = parseFloat(myexp);
        // document.getElementById("value").value = aa;
        // console.log(aa.toString());
        y = 24729834882
        alert(("level" + nowlevel))
        if ((m + s2) > y) {
            nowlevel = parseFloat(nowlevel) + 1;
            alert("提升至" + "level" + nowlevel)
            alert(y + "b")
            document.getElementById("use").innerHTML = nowlevel;
            document.getElementById("level").value = nowlevel;
            percentage = ((myexp + s2) / y).toFixed(2) + '%'

            document.getElementById("use").innerHTML = nowlevel + "經驗值為" + (m + s2) + "趴數" + percentage;





        }
        else {
            myexp = myexp + s2;
            // alert("維持在" + (m + s2))
            // alert(y + "a")
            mylevel = nowlevel
            alert("維持在" + "level" + nowlevel)

            pp = myexp * 100 / y
            alert(pp)
            // alert("m+s2")
            // alert(m + s2)
            // alert(y)
            percentage = pp.toFixed(2) + '%'
            alert(percentage)
            alert(myexp)

            document.getElementById("use").innerHTML = nowlevel + "經驗值為" + myexp;
            document.getElementById("expusevalue").innerHTML = percentage;

            document.getElementById("level").value = nowlevel;
            document.getElementById("expvalue2").style.width = pp + "%";
            document.getElementById("expvalue2").style.background = "green";


        }



    }


    // //200以下
    // if (nowlevel < 210) {
    //     nowlevel = parseFloat(nowlevel) + 1;
    //     alert(nowlevel + "經驗" + myexp)

    // } else {
    //     myexp = parseFloat(myexp) + s2
    //     alert(nowlevel + "經驗" + myexp)


    // }
    // //210以下

    // if (nowlevel < 220) {
    //     nowlevel = parseFloat(nowlevel) + 1;
    //     alert(nowlevel + "經驗" + myexp)

    // } else {
    //     myexp = parseFloat(myexp) + s3
    //     alert(nowlevel + "經驗" + myexp)


    // }
    // //220以下

    // if (nowlevel < 230) {
    //     nowlevel = parseFloat(nowlevel) + 1;
    //     alert(nowlevel + "經驗" + myexp)

    // } else {
    //     myexp = parseFloat(myexp) + s4
    //     alert(nowlevel + "經驗" + myexp)


    // }
    // //230以下

    // if (nowlevel < 240) {
    //     nowlevel = parseFloat(nowlevel) + 1;
    //     alert(nowlevel + "經驗" + myexp)

    // } else {
    //     myexp = parseFloat(myexp) + s5
    //     alert(nowlevel + "經驗" + myexp)


    // }
    // //240以下
    // if (nowlevel < 250) {
    //     nowlevel = parseFloat(nowlevel) + 1;
    //     alert(nowlevel + "經驗" + myexp)

    // } else {
    //     myexp = parseFloat(myexp) + s6
    //     alert(nowlevel + "經驗" + myexp)


    // }
    // //250以下    
})


function levelData() {

    level.forEach(function (level, index, array) {
        document.getElementById('level').value = `${level.nowlevel}`;


    })
}
$("#delete").click(function () {
    localStorage.clear(level)
    window.location.reload();

})
var level200 = 2207026470



