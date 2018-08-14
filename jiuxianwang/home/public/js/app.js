
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
    // 克隆第一张图片
    var clone=$(".carousel .img li").first().clone();
    $(".carousel .img").append(clone);
    // 图片的个数
    var size = $(".carousel .img li").length;
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
        i++;
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

    var h=0,h1=0,h2=0,h3=0,h4=0;
    // 白酒轮播
    var clone1=$(".baijiu .commodity-left-ul1 li").first().clone();
    $(".baijiu .commodity-left-ul1").append(clone1);
    var size1=$(".baijiu .commodity-left-ul1 li").length;
    $(".baijiu .commodity-left-ul1").css({"width":210*(size1+1)});
    for(var x1=0;x1<size1-1;x1++){
        $(".baijiu .commodity-left-ul2 ").append("<li></li>");
    }
    $(".baijiu .commodity-left-ul2 li").first().addClass("carousel");
    $(".baijiu .commodity-left-ul2 li").first().addClass("carousel");
    $(".baijiu .commodity-left-ul2 li").mousemove(function () {
        var index1=$(this).index();
        h=index1;
        $(".baijiu .commodity-left-ul1").css({left:-index1*210});
        $(this).addClass("carousel").siblings().removeClass("carousel");
    });
    function move1() {
        if (h==size1){
            $(".baijiu .commodity-left-ul1").css({left:0});
            h=1;
        }
        if(h==-1){
            $(".baijiu .commodity-left-ul1").css({left:-(size1-1)*210});
            h=size1-2;
        }
        $(".baijiu .commodity-left-ul1").stop().animate({left:-h*210},500);

        if(h==size1-1){
            $(".baijiu .commodity-left-ul2 li").eq(0).addClass("carousel").siblings().removeClass("carousel");
        }else {
            $(".baijiu .commodity-left-ul2 li").eq(h).addClass("carousel").siblings().removeClass("carousel");
        }
    }
    var t1=setInterval(function () {
        h++;
        move1()
    },2000);
    $(".baijiu .commodity-left").hover(function () {
        clearInterval(t1) ;
    },function () {
        t1=setInterval(move1(),2000);
    });

    // 葡萄酒轮播
    var clone2=$(".putaojiu .commodity-left-ul1 li").first().clone();
    $(".putaojiu .commodity-left-ul1").append(clone2);
    var size2=$(".putaojiu .commodity-left-ul1 li").length;
    $(".putaojiu .commodity-left-ul1").css({"width":210*(size2+1)});
    for(var x2=0;x2<size2-1;x2++){
        $(".putaojiu .commodity-left-ul2 ").append("<li></li>");
    }
    $(".putaojiu .commodity-left-ul2 li").first().addClass("carousel");
    $(".putaojiu .commodity-left-ul2 li").mousemove(function () {
        var index2=$(this).index();
        h1=index2;
        $(".putaojiu .commodity-left-ul1").css({left:-index2*210});
        $(this).addClass("carousel").siblings().removeClass("carousel");
    });
    function move2() {
        if (h1==size2){
            $(".putaojiu .commodity-left-ul1").css({left:0});
            h1=1;
        }
        if(h1==-1){
            $(".putaojiu .commodity-left-ul1").css({left:-(size2-1)*210});
            h1=size2-2;
        }
        $(".putaojiu .commodity-left-ul1").stop().animate({left:-h1*210},500);

        if(h1==size2-1){
            $(".putaojiu .commodity-left-ul2 li").eq(0).addClass("carousel").siblings().removeClass("carousel");
        }else {
            $(".putaojiu .commodity-left-ul2 li").eq(h1).addClass("carousel").siblings().removeClass("carousel");
        }
    }
    var t2=setInterval(function () {
        h1++;
        move2()
    },2000);
    $(".putaojiu .commodity-left").hover(function () {
        clearInterval(t2) ;
    },function () {
        t2=setInterval(move1(),2000);
    });

    // 洋酒轮播
    var clone3=$(".yangjiu .commodity-left-ul1 li").first().clone();
    $(".yangjiu .commodity-left-ul1").append(clone3);
    var size3=$(".yangjiu .commodity-left-ul1 li").length;
    $(".yangjiu .commodity-left-ul1").css({"width":210*(size3+1)});
    for(var x3=0;x3<size3-1;x3++){
        $(".yangjiu .commodity-left-ul2 ").append("<li></li>");
    }
    $(".yangjiu .commodity-left-ul2 li").first().addClass("carousel");
    $(".yangjiu .commodity-left-ul2 li").mousemove(function () {
        var index3=$(this).index();
        h2=index3;
        $(".yangjiu .commodity-left-ul1").css({left:-index3*210});
        $(this).addClass("carousel").siblings().removeClass("carousel");
    });
    function move3() {
        if (h2==size3){
            $(".yangjiu .commodity-left-ul1").css({left:0});
            h2=1;
        }
        if(h2==-1){
            $(".yangjiu .commodity-left-ul1").css({left:-(size3-1)*210});
            h2=size3-2;
        }
        $(".yangjiu .commodity-left-ul1").stop().animate({left:-h2*210},500);

        if(h2==size3-1){
            $(".yangjiu .commodity-left-ul2 li").eq(0).addClass("carousel").siblings().removeClass("carousel");
        }else {
            $(".yangjiu .commodity-left-ul2 li").eq(h2).addClass("carousel").siblings().removeClass("carousel");
        }
    }
    var t3=setInterval(function () {
        h2++;
        move3()
    },2000);
    $(".yangjiu .commodity-left").hover(function () {
        clearInterval(t3) ;
    },function () {
        t3=setInterval(move1(),2000);
    });

    // 啤酒轮播
    var clone4=$(".pijiu .commodity-left-ul1 li").first().clone();
    $(".pijiu .commodity-left-ul1").append(clone4);
    var size4=$(".pijiu .commodity-left-ul1 li").length;

    $(".pijiu .commodity-left-ul1").css({"width":210*(size4+1)});
    for(var x4=0;x4<size4-1;x4++){
        $(".pijiu .commodity-left-ul2 ").append("<li></li>");
    }
    $(".pijiu .commodity-left-ul2 li").first().addClass("carousel");
    $(".pijiu .commodity-left-ul2 li").mousemove(function () {
        var index4=$(this).index();
        h3=index4;
        $(".pijiu .commodity-left-ul1").css({left:-index4*210});
        $(this).addClass("carousel").siblings().removeClass("carousel");
    });
    function move4() {
        if (h3==size4){
            $(".pijiu .commodity-left-ul1").css({left:0});
            h3=1;
        }
        if(h3==-1){
            $(".pijiu .commodity-left-ul1").css({left:-(size4-1)*210});
            h3=size4-2;
        }
        $(".pijiu .commodity-left-ul1").stop().animate({left:-h3*210},500);

        if(h3==size4-1){
            $(".pijiu .commodity-left-ul2 li").eq(0).addClass("carousel").siblings().removeClass("carousel");
        }else {
            $(".pijiu .commodity-left-ul2 li").eq(h3).addClass("carousel").siblings().removeClass("carousel");
        }
    }
    var t4=setInterval(function () {
        h3++;
        move4()
    },2000);
    $(".pijiu .commodity-left").hover(function () {
        clearInterval(t4) ;
    },function () {
        t4=setInterval(move1(),2000);
    });
    // 食品轮播
    var clone5=$(".shipin .commodity-left-ul1 li").first().clone();
    $(".shipin .commodity-left-ul1").append(clone5);
    var size5=$(".shipin .commodity-left-ul1 li").length;
    $(".shipin .commodity-left-ul1").css({"width":210*(size5+1)});
    // for(var x5=0;x5<size5-1;x5++){
    //     $(".shipin .commodity-left-ul2 ").append("<li></li>");
    // }
    $(".shipin .commodity-left-ul2 li").first().addClass("carousel");
    $(".shipin .commodity-left-ul2 li").mousemove(function () {
       var index5=$(this).index();
       h4=index5;
       $(".shipin .commodity-left-ul1").css({left:-index5*210});
        $(this).addClass("carousel").siblings().removeClass("carousel");
    });
    function move5() {
        if (h4==size5){
            $(".shipin .commodity-left-ul1").css({left:0});
            h4=1;
        }
        if(h4==-1){
            $(".shipin .commodity-left-ul1").css({left:-(size5-1)*210});
            h4=size5-2;
        }
        $(".shipin .commodity-left-ul1").stop().animate({left:-h4*210},500);

        if(h4==size5-1){
            $(".shipin .commodity-left-ul2 li").eq(0).addClass("carousel").siblings().removeClass("carousel");
        }else {
            $(".shipin .commodity-left-ul2 li").eq(h5).addClass("carousel").siblings().removeClass("carousel");
        }
    }
    var t5=setInterval(function () {
       h4++;
       move5()
    },2000);
    $(".shipin .commodity-left").hover(function () {
        clearInterval(t5) ;
    },function () {
        t5=setInterval(move1(),2000);
    });




    // logo墙特效
    $(".logowall-logo li").mouseenter(function () {

        $(".logowall-logo img").eq($(".logowall-logo li").index(this)).css({"margin-left":"-100px",
            "transition":"1s"})
    });
    $(".logowall-logo li").mouseleave(function () {

        $(".logowall-logo img").eq($(".logowall-logo li").index(this)).css({"margin-left":"0px",
            "transition":"1s"})
    });

    $(".logowall-label li").mousemove(function () {
        $(this).addClass("logowall-active").siblings().removeClass("logowall-active");
        $(".trademark-logo").eq($(".logowall-label li").index(this)).addClass("logowall-num").siblings().removeClass("logowall-num");
    });
    window.onscroll=function () {
        //盒子居顶的高度
        var baijiuHeight=$(".baijiu").offset().top+($(".baijiu").height())*1;
        // var potaojiuHeight=$(".content .putaojiu").get(0).offsetTop;
        // var yangjiuHeight=$(".content .yangjiu").get(0).offsetTop;
        // var pijiuHeight=$(".content .pijiu").get(0).offsetTop;
        // var shipinHeight=$(".content .shipin").get(0).offsetTop;
        // 网页的高度
        var documentHeight=$(window).height();
        // 鼠标滑动的高度
        var scrollHeight=$(window).scrollTop();

        var mainHeight=$(".content .content-main").height()+20;

        if(baijiuHeight<documentHeight+scrollHeight){
            $(".content-floor").fadeIn(300);
            $(".content-floor li").eq(0).addClass("floor-active").siblings().removeClass("floor-active");
            if(baijiuHeight+mainHeight<documentHeight+scrollHeight){
                $(".content-floor li").eq(1).addClass("floor-active").siblings().removeClass("floor-active");
            }
            if(baijiuHeight+mainHeight*2<documentHeight+scrollHeight){
                $(".content-floor li").eq(2).addClass("floor-active").siblings().removeClass("floor-active");
            }
            if(baijiuHeight+mainHeight*3<documentHeight+scrollHeight){
                $(".content-floor li").eq(3).addClass("floor-active").siblings().removeClass("floor-active");
            }
            if(baijiuHeight+mainHeight*4<documentHeight+scrollHeight){
                $(".content-floor li").eq(4).addClass("floor-active").siblings().removeClass("floor-active");
            }
        }else{
            $(".content-floor").fadeOut(300);
        }

        $(".content-floor li").eq(0).on("click",function () {
                $(window).scrollTop($(".baijiu").offset().top);
        });
        $(".content-floor li").eq(1).on("click",function () {
                $(window).scrollTop($(".baijiu").offset().top+mainHeight);
        });
        $(".content-floor li").eq(2).on("click",function () {
                $(window).scrollTop($(".baijiu").offset().top+mainHeight*2);
        });
        $(".content-floor li").eq(3).on("click",function () {
                $(window).scrollTop($(".baijiu").offset().top+mainHeight*3);
        });
        $(".content-floor li").eq(4).on("click",function () {
                $(window).scrollTop($(".baijiu").offset().top+mainHeight*4);
        });
        $(".content-floor li").eq(5).on("click",function () {
                $(window).scrollTop(0);
        });
    };


    });
