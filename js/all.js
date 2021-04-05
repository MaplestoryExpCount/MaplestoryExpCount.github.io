

var vm = new Vue({
    el: "#editor",
    data: {
        level: " ",
        exp: " ",
        levelexp: " ",
        itemList: [
            {
                id: '1',
                itemName: '200等以下升級藥水',
                imgUrl: 'img/exp.PNG',
                price: '5571115568',
                count: '1'
            },
            {
                id: '2',
                itemName: '210等以下升級藥水',
                imgUrl: 'img/exp.PNG',
                price: '76120258214',
                count: '1'
            },
            {
                id: '3',
                itemName: '220等以下升級藥水',
                imgUrl: 'img/exp.PNG',
                price: '33644667337',
                count: '1'
            },
            {
                id: '4',
                itemName: '230等以下升級藥水',
                imgUrl: 'img/exp.PNG',
                price: '105634315757',
                count: '1'
            },
            {
                id: '5',
                itemName: '240等以下升級藥水',
                imgUrl: 'img/exp.PNG',
                price: '294389628937',
                count: '1'
            },
            {
                id: '6',
                itemName: '250等以下升級藥水',
                imgUrl: 'img/exp.PNG',
                price: '650378595225',
                count: '1'
            },
        ]
    },
    // watch: {
    //     level: function (val) {
    //         this.levelexp = "你的目前等級為" + val + ' ' + "你的目前經驗值為" + this.exp + "你的經驗趴數為" + y
    //     },
    //     exp: function (val) {
    //         this.levelexp = "你的目前等級為" + this.level + ' ' + "你的目前經驗值為" + val + "你的經驗趴數為"
    //     },

    // }
});


function calculate() {


    var getlevel = $("#a0402").text()
    var exp = $("#a0403").text()

    if (getlevel > 275) { y = 1 }
    else if (getlevel >= 274) { y = 6672530555086 }
    else if (getlevel >= 273) { y = 6606465896125 }
    else if (getlevel >= 272) { y = 6541055342699 }
    else if (getlevel >= 271) { y = 6476292418514 }
    else if (getlevel >= 270) { y = 6412170711400 }
    else if (getlevel >= 269) { y = 3174341936337 }
    else if (getlevel >= 268) { y = 3142912808255 }
    else if (getlevel >= 267) { y = 3111794859659 }
    else if (getlevel >= 266) { y = 3080985009564 }
    else if (getlevel >= 265) { y = 3050480207490 }
    else if (getlevel >= 264) { y = 3020277433159 }
    else if (getlevel >= 263) { y = 2990373696198 }
    else if (getlevel >= 262) { y = 2960766035840 }
    else if (getlevel >= 261) { y = 2931451520634 }
    else if (getlevel >= 260) { y = 2902427248153 }
    else if (getlevel >= 259) { y = 1436845172353 }
    else if (getlevel >= 258) { y = 1422618982528 }
    else if (getlevel >= 257) { y = 1408533646068 }
    else if (getlevel >= 256) { y = 1394587768385 }
    else if (getlevel >= 255) { y = 1380779968699 }
    else if (getlevel >= 254) { y = 1367108879900 }
    else if (getlevel >= 253) { y = 1353573148416 }
    else if (getlevel >= 252) { y = 1340171434076 }
    else if (getlevel >= 251) { y = 1326902409977 }
    else if (getlevel >= 250) { y = 1313764762354 }
    else if (getlevel >= 249) { y = 650378595225 }
    else if (getlevel >= 248) { y = 643939203194 }
    else if (getlevel >= 247) { y = 637563567519 }
    else if (getlevel >= 246) { y = 631251056950 }
    else if (getlevel >= 245) { y = 625001046486 }
    else if (getlevel >= 244) { y = 618812917313 }
    else if (getlevel >= 243) { y = 612686056746 }
    else if (getlevel >= 242) { y = 606619858165 }
    else if (getlevel >= 241) { y = 600613720956 }
    else if (getlevel >= 240) { y = 594667050452 }
    else if (getlevel >= 239) { y = 294389628937 }
    else if (getlevel >= 238) { y = 288617283272 }
    else if (getlevel >= 237) { y = 282958120855 }
    else if (getlevel >= 236) { y = 277409922407 }
    else if (getlevel >= 235) { y = 271970512164 }
    else if (getlevel >= 234) { y = 188664267947 }
    else if (getlevel >= 233) { y = 184964968576 }
    else if (getlevel >= 232) { y = 181338204487 }
    else if (getlevel >= 231) { y = 177782553419 }
    else if (getlevel >= 230) { y = 174296620999 }
    else if (getlevel >= 229) { y = 105634315757 }
    else if (getlevel >= 228) { y = 102557588114 }
    else if (getlevel >= 227) { y = 99570473897 }
    else if (getlevel >= 226) { y = 96670363007 }
    else if (getlevel >= 225) { y = 93854721366 }
    else if (getlevel >= 224) { y = 69522015826 }
    else if (getlevel >= 223) { y = 66211443644 }
    else if (getlevel >= 222) { y = 63058517756 }
    else if (getlevel >= 221) { y = 60055731197 }
    else if (getlevel >= 220) { y = 57195934473 }
    else if (getlevel >= 219) { y = 33644667337 }
    else if (getlevel >= 218) { y = 31152469757 }
    else if (getlevel >= 217) { y = 28844879405 }
    else if (getlevel >= 216) { y = 26708221672 }
    else if (getlevel >= 215) { y = 24729834882 }
    else if (getlevel >= 214) { y = 22897995262 }
    else if (getlevel >= 213) { y = 21201847465 }
    else if (getlevel >= 212) { y = 19631340246 }
    else if (getlevel >= 211) { y = 18177166895 }
    else if (getlevel >= 210) { y = 16830710088 }
    else if (getlevel >= 209) { y = 6120258214 }
    else if (getlevel >= 208) { y = 5464516263 }
    else if (getlevel >= 207) { y = 4879032378 }
    else if (getlevel >= 206) { y = 4356278909 }
    else if (getlevel >= 205) { y = 3889534741 }
    else if (getlevel >= 204) { y = 3472798876 }
    else if (getlevel >= 203) { y = 3100713283 }
    else if (getlevel >= 202) { y = 2768494003 }
    else if (getlevel >= 201) { y = 2471869646 }
    else if (getlevel >= 200) { y = 2207026470 }
    else if (getlevel >= 199) { y = 571115568 }
    else if (getlevel >= 198) { y = 543919589 }
    else if (getlevel >= 197) { y = 518018657 }
    else if (getlevel >= 196) { y = 493351102 }
    else if (getlevel >= 195) { y = 469858193 }
    else if (getlevel >= 194) { y = 447483994 }
    else if (getlevel >= 193) { y = 426175233 }
    else if (getlevel >= 192) { y = 405881175 }
    else if (getlevel >= 191) { y = 386553500 }
    else if (getlevel >= 190) { y = 368146191 }
    else if (getlevel >= 189) { y = 350615420 }
    else if (getlevel >= 188) { y = 333919448 }
    else if (getlevel >= 187) { y = 318018522 }
    else if (getlevel >= 186) { y = 302874783 }
    else if (getlevel >= 185) { y = 288452175 }
    else if (getlevel >= 184) { y = 274716358 }
    else if (getlevel >= 183) { y = 261634627 }
    else if (getlevel >= 182) { y = 249175836 }
    else if (getlevel >= 181) { y = 237310320 }
    else if (getlevel >= 180) { y = 226009829 }
    else if (getlevel >= 179) { y = 215247457 }
    else if (getlevel >= 178) { y = 204997579 }
    else if (getlevel >= 177) { y = 195235790 }
    else if (getlevel >= 176) { y = 185938848 }
    else if (getlevel >= 175) { y = 177084618 }
    else if (getlevel >= 174) { y = 168652018 }
    else if (getlevel >= 173) { y = 160620970 }
    else if (getlevel >= 172) { y = 152972353 }
    else if (getlevel >= 171) { y = 145687956 }
    else if (getlevel >= 170) { y = 138750435 }
    else if (getlevel >= 169) { y = 132143272 }
    else if (getlevel >= 168) { y = 124370139 }
    else if (getlevel >= 167) { y = 117054249 }
    else if (getlevel >= 166) { y = 110168705 }
    else if (getlevel >= 165) { y = 103688193 }
    else if (getlevel >= 164) { y = 97588888 }
    else if (getlevel >= 163) { y = 91848366 }
    else if (getlevel >= 162) { y = 86445521 }
    else if (getlevel >= 161) { y = 81360491 }
    else if (getlevel >= 160) { y = 76574580 }
    else if (getlevel >= 159) { y = 72070193 }
    else if (getlevel >= 158) { y = 67830770 }
    else if (getlevel >= 157) { y = 63840725 }
    else if (getlevel >= 156) { y = 60085389 }
    else if (getlevel >= 155) { y = 56550955 }
    else if (getlevel >= 154) { y = 53224429 }
    else if (getlevel >= 153) { y = 50093581 }
    else if (getlevel >= 152) { y = 47146900 }
    else if (getlevel >= 151) { y = 44373553 }
    else if (getlevel >= 150) { y = 41763344 }
    else if (getlevel >= 149) { y = 39306677 }
    else if (getlevel >= 148) { y = 36994520 }
    else if (getlevel >= 147) { y = 34818372 }
    else if (getlevel >= 146) { y = 32770233 }
    else if (getlevel >= 145) { y = 30842573 }
    else if (getlevel >= 144) { y = 29028304 }
    else if (getlevel >= 143) { y = 27320757 }
    else if (getlevel >= 142) { y = 25713654 }
    else if (getlevel >= 141) { y = 24201087 }
    else if (getlevel >= 140) { y = 22777494 }
    else if (getlevel >= 139) { y = 21437642 }
    else if (getlevel >= 138) { y = 20129242 }
    else if (getlevel >= 137) { y = 18900697 }
    else if (getlevel >= 136) { y = 17747134 }
    else if (getlevel >= 135) { y = 16663976 }
    else if (getlevel >= 134) { y = 15646926 }
    else if (getlevel >= 133) { y = 14691950 }
    else if (getlevel >= 132) { y = 13795259 }
    else if (getlevel >= 131) { y = 12953295 }
    else if (getlevel >= 130) { y = 12162719 }
    else if (getlevel >= 129) { y = 11420394 }
    else if (getlevel >= 128) { y = 10723375 }
    else if (getlevel >= 127) { y = 10068897 }
    else if (getlevel >= 126) { y = 9454364 }
    else if (getlevel >= 125) { y = 8877338 }
    else if (getlevel >= 124) { y = 8335529 }
    else if (getlevel >= 123) { y = 7826788 }
    else if (getlevel >= 122) { y = 7349097 }
    else if (getlevel >= 121) { y = 6900561 }
    else if (getlevel >= 120) { y = 6479400 }
    else if (getlevel >= 119) { y = 6083944 }
    else if (getlevel >= 118) { y = 5712624 }
    else if (getlevel >= 117) { y = 5363967 }
    else if (getlevel >= 116) { y = 5036589 }
    else if (getlevel >= 115) { y = 4729192 }
    else if (getlevel >= 114) { y = 4440556 }
    else if (getlevel >= 113) { y = 4169537 }
    else if (getlevel >= 112) { y = 3915059 }
    else if (getlevel >= 111) { y = 3676112 }
    else if (getlevel >= 110) { y = 3451749 }
    else if (getlevel >= 109) { y = 3241079 }
    else if (getlevel >= 108) { y = 3043267 }
    else if (getlevel >= 107) { y = 2857528 }
    else if (getlevel >= 106) { y = 2683125 }
    else if (getlevel >= 105) { y = 2519367 }
    else if (getlevel >= 104) { y = 2365603 }
    else if (getlevel >= 103) { y = 2365603 }
    else if (getlevel >= 102) { y = 2365603 }
    else if (getlevel >= 101) { y = 2365603 }
    else if (getlevel >= 100) { y = 2365603 }
    else if (getlevel >= 99) { y = 2365603 }
    else if (getlevel >= 98) { y = 2221224 }
    else if (getlevel >= 97) { y = 2085657 }
    else if (getlevel >= 96) { y = 1958364 }
    else if (getlevel >= 95) { y = 1838840 }
    else if (getlevel >= 94) { y = 1726611 }
    else if (getlevel >= 93) { y = 1621231 }
    else if (getlevel >= 92) { y = 1522283 }
    else if (getlevel >= 91) { y = 1429374 }
    else if (getlevel >= 90) { y = 1342136 }
    else if (getlevel >= 89) { y = 1260222 }
    else if (getlevel >= 88) { y = 1177778 }
    else if (getlevel >= 87) { y = 1100728 }
    else if (getlevel >= 86) { y = 1028718 }
    else if (getlevel >= 85) { y = 961419 }
    else if (getlevel >= 84) { y = 898523 }
    else if (getlevel >= 83) { y = 839742 }
    else if (getlevel >= 82) { y = 784806 }
    else if (getlevel >= 81) { y = 733464 }
    else if (getlevel >= 80) { y = 685481 }
    else if (getlevel >= 79) { y = 640637 }
    else if (getlevel >= 78) { y = 598727 }
    else if (getlevel >= 77) { y = 559558 }
    else if (getlevel >= 76) { y = 522952 }
    else if (getlevel >= 75) { y = 488741 }
    else if (getlevel >= 74) { y = 456768 }
    else if (getlevel >= 73) { y = 424901 }
    else if (getlevel >= 72) { y = 395257 }
    else if (getlevel >= 71) { y = 367681 }
    else if (getlevel >= 70) { y = 342029 }
    else if (getlevel >= 69) { y = 318167 }
    else if (getlevel >= 68) { y = 295970 }
    else if (getlevel >= 67) { y = 275321 }
    else if (getlevel >= 66) { y = 256113 }
    else if (getlevel >= 65) { y = 238245 }
    else if (getlevel >= 64) { y = 221624 }
    else if (getlevel >= 63) { y = 221624 }
    else if (getlevel >= 62) { y = 221624 }
    else if (getlevel >= 61) { y = 221624 }
    else if (getlevel >= 60) { y = 221624 }
    else if (getlevel >= 59) { y = 221624 }
    else if (getlevel >= 58) { y = 205208 }
    else if (getlevel >= 57) { y = 190008 }
    else if (getlevel >= 56) { y = 175934 }
    else if (getlevel >= 55) { y = 162902 }
    else if (getlevel >= 54) { y = 150836 }
    else if (getlevel >= 53) { y = 139663 }
    else if (getlevel >= 52) { y = 129318 }
    else if (getlevel >= 51) { y = 119739 }
    else if (getlevel >= 50) { y = 110870 }
    else if (getlevel >= 49) { y = 102658 }
    else if (getlevel >= 48) { y = 95054 }
    else if (getlevel >= 47) { y = 88013 }
    else if (getlevel >= 46) { y = 81494 }
    else if (getlevel >= 45) { y = 75458 }
    else if (getlevel >= 44) { y = 69869 }
    else if (getlevel >= 43) { y = 64694 }
    else if (getlevel >= 42) { y = 59902 }
    else if (getlevel >= 41) { y = 55465 }
    else if (getlevel >= 40) { y = 51357 }
    else if (getlevel >= 39) { y = 47553 }
    else if (getlevel >= 38) { y = 39628 }
    else if (getlevel >= 37) { y = 33024 }
    else if (getlevel >= 36) { y = 27520 }
    else if (getlevel >= 35) { y = 22934 }
    else if (getlevel >= 34) { y = 19112 }
    else if (getlevel >= 33) { y = 19112 }
    else if (getlevel >= 32) { y = 19112 }
    else if (getlevel >= 31) { y = 19112 }
    else if (getlevel >= 30) { y = 19112 }
    else if (getlevel >= 29) { y = 19112 }
    else if (getlevel >= 28) { y = 15927 }
    else if (getlevel >= 27) { y = 13273 }
    else if (getlevel >= 26) { y = 11061 }
    else if (getlevel >= 25) { y = 9218 }
    else if (getlevel >= 24) { y = 7682 }
    else if (getlevel >= 23) { y = 6402 }
    else if (getlevel >= 22) { y = 5335 }
    else if (getlevel >= 21) { y = 4446 }
    else if (getlevel >= 20) { y = 3705 }
    else if (getlevel >= 19) { y = 3088 }
    else if (getlevel >= 18) { y = 2574 }
    else if (getlevel >= 17) { y = 2145 }
    else if (getlevel >= 16) { y = 1788 }
    else if (getlevel >= 15) { y = 1490 }
    else if (getlevel >= 14) { y = 1242 }
    else if (getlevel >= 13) { y = 1242 }
    else if (getlevel >= 12) { y = 1242 }
    else if (getlevel >= 11) { y = 1242 }
    else if (getlevel >= 10) { y = 1242 }
    else if (getlevel >= 9) { y = 1242 }
    else if (getlevel >= 8) { y = 840 }
    else if (getlevel >= 7) { y = 560 }
    else if (getlevel >= 6) { y = 372 }
    else if (getlevel >= 5) { y = 135 }
    else if (getlevel >= 4) { y = 92 }
    else if (getlevel >= 3) { y = 57 }
    else if (getlevel >= 2) { y = 34 }
    else { y = 15 }
    percentage = (Math.round(exp / y * 10000) / 100.00)

    document.getElementById("a0404input").value = y;
    document.getElementById("a0403input").innerHTML += parseInt(parseInt(exp, 10) + 571115568, 10);

    document.getElementById("useexp").innerHTML = percentage
        + "%"
    document.getElementById("expvalue2").style.width = percentage
        + "%";
    document.getElementById("expvalue2").style.background = "green";

}
$(document).ready(function () {
    $("#button").click(function () {


        if ($("#expvalue2").hasClass("run")) {
            $("#expvalue2").removeClass("run")
        } else {
            $("#expvalue2").addClass("run")
        }

        var need = parseInt($("#a0404input").val(), 10)
        var acc = parseInt($("#a0403input").text(), 10)

        if (need <= acc) {
            alert("提高等級")
            document.getElementById("expusevalue").innerHTML = percentage + "%";
            document.getElementById("a0404").innerHTML = y;
            // parseInt($("#level").value(), 10) = parseInt($("#level").value(), 10) + 1
            document.getElementById("after").innerHTML = "等級為" + $("#a0402").text() + "使用後的經驗值為" + Math.abs(acc - need) + "經驗趴數為"
            $("#level").text() = (parseInt($("#level").val(), 10) + 1)
            document.getElementById("a0405").innerHTML = Math.abs(acc - need);
            document.getElementById("level").innerHTML = Math.abs(acc - need);

        }

        else {
            alert("尚未提高")
            acc += parseInt($("#button").val(), 10)
        }

    });
});



// $(document).ready(function () {
//     $("#button").click(function () {
//         $("#a0401").hasClass("run")

//     })
// });

// });
// var s2 = 571115568//199等經驗
// var s2 = 6120258214//209等經驗
// var s3 = 33644667337//219等經驗
// var s4 = 105634315757//229等經驗
// var s5 = 294389628937//239等經驗
// var s6 = 650378595225//249等經驗

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
// getlevel = $("#a0401").text()
// alert(getlevel)












//     alert("test" + y + "test" + nowlevel)
//     if (getlevel < 210) {
//         nowlevel = parseFloat(nowlevel) + 1;
//         alert(nowlevel + "經驗" + myexp)

//     } else if (nowlevel < 220) {
//         m = parseFloat(myexp);
//         // document.getElementById("value").value = aa;
//         // console.log(aa.toString());
//         alert(("level" + nowlevel))
//         if ((m + s2) > y) {
//             nowlevel = parseFloat(nowlevel) + 1;
//             alert("提升至" + "level" + nowlevel)
//             alert(y + "b" + mylevel)
//             document.getElementById("use").innerHTML = nowlevel;
//             document.getElementById("level").value = nowlevel;
//             percentage = ((myexp + s2) / y).toFixed(2) + '%'

//             document.getElementById("use").innerHTML = nowlevel + "經驗值為" + (m + s2) + "趴數" + percentage;


//             alert = (y)



//         }
//         else {

//             myexp = myexp + s2;
//             // alert("維持在" + (m + s2))
//             // alert(y + "a")
//             mylevel = nowlevel
//             alert("維持在" + "level" + nowlevel)

//             pp = myexp * 100 / y
//             alert(pp)
//             // alert("m+s2")
//             // alert(m + s2)
//             // alert(y)
//             percentage = pp.toFixed(2) + '%'
//             alert(percentage)
//             alert(myexp)

//             document.getElementById("use").innerHTML = nowlevel + "經驗值為" + myexp;
//             document.getElementById("expusevalue").innerHTML = percentage;

//             document.getElementById("level").value = nowlevel;
//             document.getElementById("expvalue2").style.width = pp + "%";
//             document.getElementById("expvalue2").style.background = "green";


//         }



//     }



// });