$(function () {
    var arrUrl = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
    var arrText = ['文字一', '文字二', '文字三', '识文断字'];
    var oDiv = $("#box");
    var oSpan = oDiv.find("span");
    var oStrong = oDiv.find("strong");
    var oP = oDiv.find("p");
    var oImg = oDiv.find("img");
    var num = 0;
    var flag = true;

    $("input").eq(0).click(function () {
        oSpan.text("图片可从最后一张跳转到第一张循环切换");
        flag = false;
    });

    $("input").eq(1).click(function () {
        oSpan.text("图片只能到最后一张\或只能到第一张切换");
        flag = true;
    });

    initImg(num);

    function initImg(num) {
        oP.text(arrText[num]);
        oStrong.text(num + 1 + ' / ' + arrText.length);
        oImg.attr("src", arrUrl[num]);
    }

    $("#next").click(function () {
        num++;
        if (num === arrText.length) {
            if (flag) {
                num = arrText.length - 1;
                alert('已经到最后一张啦~');
            } else {
                num = 0;
            }
        }

        initImg(num);
    });

    $("#prev").click(function () {
        num--;
        if (num === -1) {
            if (flag) {
                alert('这已经是第一张了，不能再往前了~~');
                num = 0;
            } else {
                num = arrText.length - 1;
            }

        }
        initImg(num);
    });

});