
$(document).ready(function () {
    // 我的酒仙js
    $(".right-jx").on("mouseenter",function () {
            $(this).find(".right-jx-div").css({"background":"#ffffff"});
            $(this).find(".right-jx-list").show();
    });
    $(".right-jx").on("mouseleave",function () {
        $(this).find(".right-jx-div").css({"background":"#f2f2f2"});
        $(this).find(".right-jx-list").hide();
    });
    // 左边导航js
    $(".nav-event").on("mouseenter",function () {
       $(this).css({"background":"#f1f1f1","border-left":"2px solid #ce171f"}) ;
       $(this).find(".nav-right").show();
       $(".right").not($(this).find(".nav-right")).hide();
    });

    $(".nav-event").on("mouseleave",function () {
       $(this).find(".nav-right").hide();
       $(this).css({"background":"#fff","border-left":"0 none"})
    });


    // 轮播
    var i=0;
    // 第一个图片
    var clone=$(".carousel .img li").first().clone();
    $(".carousel .img").append(clone);
    // 图片的个数
    var size = $(".carousel .img li").size();
    $(".carousel .img").css({"width":1920*(size+1)});
    // 圆点
    for(var j=0;j<size-1;j++){
        $(".carousel .num").append("<li></li>");
    }
    $(".carousel .num li").first().addClass('on');
    //鼠标划入圆点
    $(".carousel .num li").hover(function(){
        var index=$(this).index();
        i=index;
        $(".carousel .img").stop().animate({left:-index*1920},500);
        $(this).addClass('on').siblings().removeClass('on');
    })

    /*自动轮播*/
    var t=setInterval(function(){
        ++i;
        move();
    },2000);

    //对banner定时器的操作
    $(".carousel").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,2000);
    })


    /*向左按钮*/
    $(".carousel .btn_l").click(function(){
        --i;
        move();
    })
    /*向右按钮*/
    $(".carousel .btn_r").click(function(){
        ++i;
        move();
    })

    function move(){
        if(i==size){
            $(".carousel .img").css({left:0});
            i=1;
        }
        if(i==-1){
            $(".carousel .img").css({left:-(size-1)*1920});
            i=size-2;
        }

        $(".carousel .img").stop().animate({left:-i*1920},500);

        if(i==size-1){
            $(".carousel .num li").eq(0).addClass('on').siblings().removeClass('on');
        }else{
            $(".carousel .num li").eq(i).addClass('on').siblings().removeClass('on');
        }
    }

    // 标签切换
    $(".list li").mouseenter(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".commodity").eq($(".list li").index(this)).addClass("active-1").siblings().removeClass("active-1");


    });

    $(".list1 li").mouseenter(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".notice").eq($(".list1 li").index(this)).addClass("active-2").siblings().removeClass("active-2");
    });

});
