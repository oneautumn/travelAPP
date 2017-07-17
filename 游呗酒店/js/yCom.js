 /* 长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/20 = 16px */
     function placeholderPic(){
      var w = document.documentElement.offsetWidth;
      var fontSize = parseInt(w*0.048)+"px";
      document.documentElement.style.fontSize=fontSize;
     };
     placeholderPic();
     window.onresize=function(){
      placeholderPic();
     };

// 顶部返回上一级
window.onload = function(){
	var back = document.getElementById("back");
//	console.log(back);
	back.onclick = function(){
		history.back();
	}


var height=$(document.body).height();
$(".mengban").height(height);
$(".mengbanbox").height(height);
//	预定成功蒙版部分
    $("#IPbook").click(function(){
//  	console.log( $("#IPbook"))
        $(".mengban").css("opacity","0.7");
    	$(".mengban").css("display","block");
    	$(".mengbanbox").css("display","block");
    })
    $(".mengban").click(function(){
    	$(".mengban").css("display","none");
    	$(".mengbanbox").css("display","none");
    });
    
}

     