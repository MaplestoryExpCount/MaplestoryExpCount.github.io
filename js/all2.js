new Vue({
    el: "#editor",
    data: {
        input: " "
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input, { sanitize: true });
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.input = e.target.value;

        }, 300)
    }


});

let level = [];
if (localStorage.getItem("level")) {
    mylevel = JSON.parse(localStorage.getItem("level"));
    levelData();
}
// $("#level").focus(function () {
//     if ($(this).val() == this.defaultValue) {
//         $(this).val("");
//     }
// });

// $("#level").blur(function () {
//     if ($(this).val() == "") {
//         $(this).val(this.defaultValue);
//     }
// });

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
    y = parseFloat(y)

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
    myexp = parseFloat(myexp)
    mylevel = 215
    if (mylevel > 275) { y = 1 }
    else if (mylevel >= 274) { y = 6672530555086 }
    else if (mylevel >= 273) { y = 6606465896125 }
    else if (mylevel >= 272) { y = 6541055342699 }
    else if (mylevel >= 271) { y = 6476292418514 }
    else if (mylevel >= 270) { y = 6412170711400 }
    else if (mylevel >= 269) { y = 3174341936337 }
    else if (mylevel >= 268) { y = 3142912808255 }
    else if (mylevel >= 267) { y = 3111794859659 }
    else if (mylevel >= 266) { y = 3080985009564 }
    else if (mylevel >= 265) { y = 3050480207490 }
    else if (mylevel >= 264) { y = 3020277433159 }
    else if (mylevel >= 263) { y = 2990373696198 }
    else if (mylevel >= 262) { y = 2960766035840 }
    else if (mylevel >= 261) { y = 2931451520634 }
    else if (mylevel >= 260) { y = 2902427248153 }
    else if (mylevel >= 259) { y = 1436845172353 }
    else if (mylevel >= 258) { y = 1422618982528 }
    else if (mylevel >= 257) { y = 1408533646068 }
    else if (mylevel >= 256) { y = 1394587768385 }
    else if (mylevel >= 255) { y = 1380779968699 }
    else if (mylevel >= 254) { y = 1367108879900 }
    else if (mylevel >= 253) { y = 1353573148416 }
    else if (mylevel >= 252) { y = 1340171434076 }
    else if (mylevel >= 251) { y = 1326902409977 }
    else if (mylevel >= 250) { y = 1313764762354 }
    else if (mylevel >= 249) { y = 650378595225 }
    else if (mylevel >= 248) { y = 643939203194 }
    else if (mylevel >= 247) { y = 637563567519 }
    else if (mylevel >= 246) { y = 631251056950 }
    else if (mylevel >= 245) { y = 625001046486 }
    else if (mylevel >= 244) { y = 618812917313 }
    else if (mylevel >= 243) { y = 612686056746 }
    else if (mylevel >= 242) { y = 606619858165 }
    else if (mylevel >= 241) { y = 600613720956 }
    else if (mylevel >= 240) { y = 594667050452 }
    else if (mylevel >= 239) { y = 294389628937 }
    else if (mylevel >= 238) { y = 288617283272 }
    else if (mylevel >= 237) { y = 282958120855 }
    else if (mylevel >= 236) { y = 277409922407 }
    else if (mylevel >= 235) { y = 271970512164 }
    else if (mylevel >= 234) { y = 188664267947 }
    else if (mylevel >= 233) { y = 184964968576 }
    else if (mylevel >= 232) { y = 181338204487 }
    else if (mylevel >= 231) { y = 177782553419 }
    else if (mylevel >= 230) { y = 174296620999 }
    else if (mylevel >= 229) { y = 105634315757 }
    else if (mylevel >= 228) { y = 102557588114 }
    else if (mylevel >= 227) { y = 99570473897 }
    else if (mylevel >= 226) { y = 96670363007 }
    else if (mylevel >= 225) { y = 93854721366 }
    else if (mylevel >= 224) { y = 69522015826 }
    else if (mylevel >= 223) { y = 66211443644 }
    else if (mylevel >= 222) { y = 63058517756 }
    else if (mylevel >= 221) { y = 60055731197 }
    else if (mylevel >= 220) { y = 57195934473 }
    else if (mylevel >= 219) { y = 33644667337 }
    else if (mylevel >= 218) { y = 31152469757 }
    else if (mylevel >= 217) { y = 28844879405 }
    else if (mylevel >= 216) { y = 26708221672 }
    else if (mylevel >= 215) { y = 24729834882 }
    else if (mylevel >= 214) { y = 22897995262 }
    else if (mylevel >= 213) { y = 21201847465 }
    else if (mylevel >= 212) { y = 19631340246 }
    else if (mylevel >= 211) { y = 18177166895 }
    else if (mylevel >= 210) { y = 16830710088 }
    else if (mylevel >= 209) { y = 6120258214 }
    else if (mylevel >= 208) { y = 5464516263 }
    else if (mylevel >= 207) { y = 4879032378 }
    else if (mylevel >= 206) { y = 4356278909 }
    else if (mylevel >= 205) { y = 3889534741 }
    else if (mylevel >= 204) { y = 3472798876 }
    else if (mylevel >= 203) { y = 3100713283 }
    else if (mylevel >= 202) { y = 2768494003 }
    else if (mylevel >= 201) { y = 2471869646 }
    else if (mylevel >= 200) { y = 2207026470 }
    else if (mylevel >= 199) { y = 571115568 }
    else if (mylevel >= 198) { y = 543919589 }
    else if (mylevel >= 197) { y = 518018657 }
    else if (mylevel >= 196) { y = 493351102 }
    else if (mylevel >= 195) { y = 469858193 }
    else if (mylevel >= 194) { y = 447483994 }
    else if (mylevel >= 193) { y = 426175233 }
    else if (mylevel >= 192) { y = 405881175 }
    else if (mylevel >= 191) { y = 386553500 }
    else if (mylevel >= 190) { y = 368146191 }
    else if (mylevel >= 189) { y = 350615420 }
    else if (mylevel >= 188) { y = 333919448 }
    else if (mylevel >= 187) { y = 318018522 }
    else if (mylevel >= 186) { y = 302874783 }
    else if (mylevel >= 185) { y = 288452175 }
    else if (mylevel >= 184) { y = 274716358 }
    else if (mylevel >= 183) { y = 261634627 }
    else if (mylevel >= 182) { y = 249175836 }
    else if (mylevel >= 181) { y = 237310320 }
    else if (mylevel >= 180) { y = 226009829 }
    else if (mylevel >= 179) { y = 215247457 }
    else if (mylevel >= 178) { y = 204997579 }
    else if (mylevel >= 177) { y = 195235790 }
    else if (mylevel >= 176) { y = 185938848 }
    else if (mylevel >= 175) { y = 177084618 }
    else if (mylevel >= 174) { y = 168652018 }
    else if (mylevel >= 173) { y = 160620970 }
    else if (mylevel >= 172) { y = 152972353 }
    else if (mylevel >= 171) { y = 145687956 }
    else if (mylevel >= 170) { y = 138750435 }
    else if (mylevel >= 169) { y = 132143272 }
    else if (mylevel >= 168) { y = 124370139 }
    else if (mylevel >= 167) { y = 117054249 }
    else if (mylevel >= 166) { y = 110168705 }
    else if (mylevel >= 165) { y = 103688193 }
    else if (mylevel >= 164) { y = 97588888 }
    else if (mylevel >= 163) { y = 91848366 }
    else if (mylevel >= 162) { y = 86445521 }
    else if (mylevel >= 161) { y = 81360491 }
    else if (mylevel >= 160) { y = 76574580 }
    else if (mylevel >= 159) { y = 72070193 }
    else if (mylevel >= 158) { y = 67830770 }
    else if (mylevel >= 157) { y = 63840725 }
    else if (mylevel >= 156) { y = 60085389 }
    else if (mylevel >= 155) { y = 56550955 }
    else if (mylevel >= 154) { y = 53224429 }
    else if (mylevel >= 153) { y = 50093581 }
    else if (mylevel >= 152) { y = 47146900 }
    else if (mylevel >= 151) { y = 44373553 }
    else if (mylevel >= 150) { y = 41763344 }
    else if (mylevel >= 149) { y = 39306677 }
    else if (mylevel >= 148) { y = 36994520 }
    else if (mylevel >= 147) { y = 34818372 }
    else if (mylevel >= 146) { y = 32770233 }
    else if (mylevel >= 145) { y = 30842573 }
    else if (mylevel >= 144) { y = 29028304 }
    else if (mylevel >= 143) { y = 27320757 }
    else if (mylevel >= 142) { y = 25713654 }
    else if (mylevel >= 141) { y = 24201087 }
    else if (mylevel >= 140) { y = 22777494 }
    else if (mylevel >= 139) { y = 21437642 }
    else if (mylevel >= 138) { y = 20129242 }
    else if (mylevel >= 137) { y = 18900697 }
    else if (mylevel >= 136) { y = 17747134 }
    else if (mylevel >= 135) { y = 16663976 }
    else if (mylevel >= 134) { y = 15646926 }
    else if (mylevel >= 133) { y = 14691950 }
    else if (mylevel >= 132) { y = 13795259 }
    else if (mylevel >= 131) { y = 12953295 }
    else if (mylevel >= 130) { y = 12162719 }
    else if (mylevel >= 129) { y = 11420394 }
    else if (mylevel >= 128) { y = 10723375 }
    else if (mylevel >= 127) { y = 10068897 }
    else if (mylevel >= 126) { y = 9454364 }
    else if (mylevel >= 125) { y = 8877338 }
    else if (mylevel >= 124) { y = 8335529 }
    else if (mylevel >= 123) { y = 7826788 }
    else if (mylevel >= 122) { y = 7349097 }
    else if (mylevel >= 121) { y = 6900561 }
    else if (mylevel >= 120) { y = 6479400 }
    else if (mylevel >= 119) { y = 6083944 }
    else if (mylevel >= 118) { y = 5712624 }
    else if (mylevel >= 117) { y = 5363967 }
    else if (mylevel >= 116) { y = 5036589 }
    else if (mylevel >= 115) { y = 4729192 }
    else if (mylevel >= 114) { y = 4440556 }
    else if (mylevel >= 113) { y = 4169537 }
    else if (mylevel >= 112) { y = 3915059 }
    else if (mylevel >= 111) { y = 3676112 }
    else if (mylevel >= 110) { y = 3451749 }
    else if (mylevel >= 109) { y = 3241079 }
    else if (mylevel >= 108) { y = 3043267 }
    else if (mylevel >= 107) { y = 2857528 }
    else if (mylevel >= 106) { y = 2683125 }
    else if (mylevel >= 105) { y = 2519367 }
    else if (mylevel >= 104) { y = 2365603 }
    else if (mylevel >= 103) { y = 2365603 }
    else if (mylevel >= 102) { y = 2365603 }
    else if (mylevel >= 101) { y = 2365603 }
    else if (mylevel >= 100) { y = 2365603 }
    else if (mylevel >= 99) { y = 2365603 }
    else if (mylevel >= 98) { y = 2221224 }
    else if (mylevel >= 97) { y = 2085657 }
    else if (mylevel >= 96) { y = 1958364 }
    else if (mylevel >= 95) { y = 1838840 }
    else if (mylevel >= 94) { y = 1726611 }
    else if (mylevel >= 93) { y = 1621231 }
    else if (mylevel >= 92) { y = 1522283 }
    else if (mylevel >= 91) { y = 1429374 }
    else if (mylevel >= 90) { y = 1342136 }
    else if (mylevel >= 89) { y = 1260222 }
    else if (mylevel >= 88) { y = 1177778 }
    else if (mylevel >= 87) { y = 1100728 }
    else if (mylevel >= 86) { y = 1028718 }
    else if (mylevel >= 85) { y = 961419 }
    else if (mylevel >= 84) { y = 898523 }
    else if (mylevel >= 83) { y = 839742 }
    else if (mylevel >= 82) { y = 784806 }
    else if (mylevel >= 81) { y = 733464 }
    else if (mylevel >= 80) { y = 685481 }
    else if (mylevel >= 79) { y = 640637 }
    else if (mylevel >= 78) { y = 598727 }
    else if (mylevel >= 77) { y = 559558 }
    else if (mylevel >= 76) { y = 522952 }
    else if (mylevel >= 75) { y = 488741 }
    else if (mylevel >= 74) { y = 456768 }
    else if (mylevel >= 73) { y = 424901 }
    else if (mylevel >= 72) { y = 395257 }
    else if (mylevel >= 71) { y = 367681 }
    else if (mylevel >= 70) { y = 342029 }
    else if (mylevel >= 69) { y = 318167 }
    else if (mylevel >= 68) { y = 295970 }
    else if (mylevel >= 67) { y = 275321 }
    else if (mylevel >= 66) { y = 256113 }
    else if (mylevel >= 65) { y = 238245 }
    else if (mylevel >= 64) { y = 221624 }
    else if (mylevel >= 63) { y = 221624 }
    else if (mylevel >= 62) { y = 221624 }
    else if (mylevel >= 61) { y = 221624 }
    else if (mylevel >= 60) { y = 221624 }
    else if (mylevel >= 59) { y = 221624 }
    else if (mylevel >= 58) { y = 205208 }
    else if (mylevel >= 57) { y = 190008 }
    else if (mylevel >= 56) { y = 175934 }
    else if (mylevel >= 55) { y = 162902 }
    else if (mylevel >= 54) { y = 150836 }
    else if (mylevel >= 53) { y = 139663 }
    else if (mylevel >= 52) { y = 129318 }
    else if (mylevel >= 51) { y = 119739 }
    else if (mylevel >= 50) { y = 110870 }
    else if (mylevel >= 49) { y = 102658 }
    else if (mylevel >= 48) { y = 95054 }
    else if (mylevel >= 47) { y = 88013 }
    else if (mylevel >= 46) { y = 81494 }
    else if (mylevel >= 45) { y = 75458 }
    else if (mylevel >= 44) { y = 69869 }
    else if (mylevel >= 43) { y = 64694 }
    else if (mylevel >= 42) { y = 59902 }
    else if (mylevel >= 41) { y = 55465 }
    else if (mylevel >= 40) { y = 51357 }
    else if (mylevel >= 39) { y = 47553 }
    else if (mylevel >= 38) { y = 39628 }
    else if (mylevel >= 37) { y = 33024 }
    else if (mylevel >= 36) { y = 27520 }
    else if (mylevel >= 35) { y = 22934 }
    else if (mylevel >= 34) { y = 19112 }
    else if (mylevel >= 33) { y = 19112 }
    else if (mylevel >= 32) { y = 19112 }
    else if (mylevel >= 31) { y = 19112 }
    else if (mylevel >= 30) { y = 19112 }
    else if (mylevel >= 29) { y = 19112 }
    else if (mylevel >= 28) { y = 15927 }
    else if (mylevel >= 27) { y = 13273 }
    else if (mylevel >= 26) { y = 11061 }
    else if (mylevel >= 25) { y = 9218 }
    else if (mylevel >= 24) { y = 7682 }
    else if (mylevel >= 23) { y = 6402 }
    else if (mylevel >= 22) { y = 5335 }
    else if (mylevel >= 21) { y = 4446 }
    else if (mylevel >= 20) { y = 3705 }
    else if (mylevel >= 19) { y = 3088 }
    else if (mylevel >= 18) { y = 2574 }
    else if (mylevel >= 17) { y = 2145 }
    else if (mylevel >= 16) { y = 1788 }
    else if (mylevel >= 15) { y = 1490 }
    else if (mylevel >= 14) { y = 1242 }
    else if (mylevel >= 13) { y = 1242 }
    else if (mylevel >= 12) { y = 1242 }
    else if (mylevel >= 11) { y = 1242 }
    else if (mylevel >= 10) { y = 1242 }
    else if (mylevel >= 9) { y = 1242 }
    else if (mylevel >= 8) { y = 840 }
    else if (mylevel >= 7) { y = 560 }
    else if (mylevel >= 6) { y = 372 }
    else if (mylevel >= 5) { y = 135 }
    else if (mylevel >= 4) { y = 92 }
    else if (mylevel >= 3) { y = 57 }
    else if (mylevel >= 2) { y = 34 }
    else { y = 15 }



    alert("test" + y + "test" + nowlevel)
    if (nowlevel < 210) {
        nowlevel = parseFloat(nowlevel) + 1;
        // alert(nowlevel + "經驗" + myexp)

    } else if (nowlevel < 220) {
        m = parseFloat(myexp);
        // document.getElementById("value").value = aa;
        // console.log(aa.toString());
        // alert(("level" + nowlevel))
        if ((m + s2) > y) {
            nowlevel = parseFloat(nowlevel) + 1;
            alert("提升至" + "level" + nowlevel)
            alert(y + "b" + mylevel)
            document.getElementById("use").innerHTML = nowlevel;
            document.getElementById("level").value = nowlevel;
            percentage = ((myexp + s2) / y).toFixed(2) + '%'

            document.getElementById("use").innerHTML = nowlevel + "經驗值為" + (m + s2) + "趴數" + percentage;


            alert = (y)



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
            document.getElementById("expusevalue").innerHTML = percentage + "%";

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




