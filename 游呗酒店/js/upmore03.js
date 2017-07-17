        var $watingTip = $("#wating-tip");
           var vue = new Vue({
            el:"#app",
            data:function() 
            {
                return{
                    data:""
                } 
            },
            created:function()
            { 
                var that = this;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function()
                {
                    if (xhr.readyState==4) 
                        {
                            var test = JSON.parse(xhr.responseText).data.items;
//                             console.log(that.data);
                            var watTip = $("#wating-tip").slideUp();
                            var num = 1,each =3;
                            testData = test.slice(0,num*each);
                            console.log(testData.length);
                            that.data = testData;

                            document.addEventListener("touchstart", touchstartHandler, false);
                            document.addEventListener("touchmove", touchmoveHandler, false);
                            document.addEventListener("touchend", touchendHandler, false);
                            var startY;
                            //滑动的距离
                            var distanceY;
                            
                            function touchstartHandler(event){
                                //开始值
                               startY=event.touches[0].pageY;
                               starty=event.touches[0].clientY;
                               console.log(startY);
                            }
                            
                            function touchmoveHandler(event){
                                nowY=event.touches[0].pageY;
                                console.log(nowY);
                            }
                            
                            function touchendHandler(event){
                                console.log(startY-nowY);
                                if(starty>300&&startY-nowY>100){    
                                    data="";
                                    num++;
                                    console.log(num);
                                    testData=test.slice(0,num*each);
                                    console.log(testData);
                                    that.data = testData;
                                    if((num-1)*each>=test.length){
                                     //console.log(num);
                                        watTip.slideDown();
                                        setTimeout(function(){
                                        watTip.slideUp()    
                                        },200);                         
                                    }
                                  var h=$(window).height();
                                  var t = $(window).scrollTop();
                                  console.log(t);
                                  var s=t+h;
                                  $('body').animate({'scrollTop':s},1400);

                                  }
                            }
 
                        };
                }
                xhr.open("GET","../json/hotHotel.json",true);
                xhr.send();
              }
          })

