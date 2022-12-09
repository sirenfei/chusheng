!function($){
    $.fn.scrollBanner = function(obj){
        // 澹版槑鍚勪釜灞炴€х殑榛樿鍊�,涔熷氨鏄缃彃浠跺彲鎺ユ敹鐨勬帴鍙�
        var screenWidth=window.screen.width;//鑾峰彇椤甸潰鍙瀹藉害 
          var defaults = {
            images : [],
            scrollTime : 9000,
            bannerHeight : "auto",
            iconColor : "white",
            iconHoverColor : "orange",
            iconPosition : "center"
        }
        // 灏嗛粯璁ゅ€间笌浼犲叆鐨勫璞℃瘮瀵癸紝濡傛灉浼犲叆鐨勫璞℃湁鏈祴鍊煎睘鎬э紝鍒欎娇鐢ㄩ粯璁ゅ璞＄殑灞炴€�
        obj = $.extend(defaults,obj);

        // 缁勪欢DOM甯冨眬
        $("body").css({"padding":"0px","margin" : "0px"});

        this.empty().append("<div class='scrollBanner-banner'></div>");
        if(obj.images.length==1){
            $(".scrollBanner-banner").append("<div class='scrollBanner-bannerInner'><a href='"+obj.images[0].linkUrl+"' target='_black'><img src='"+obj.images[0].imgUrl+"' title='"+obj.images[0].name+"' /></a></div>");

        }else{
            $.each(obj.images,function(index,item){
                $(".scrollBanner-banner").append("<div class='scrollBanner-bannerInner'><a href='"+item.linkUrl+"' target='_black'><img src='"+item.imgUrl+"' title='"+item.name+"' /></a></div>");
            });
    
            $(".scrollBanner-banner").append("<div class='scrollBanner-bannerInner'><a href='"+obj.images[0].linkUrl+"' target='_black'><img src='"+obj.images[0].imgUrl+"' title='"+obj.images[0].name+"' /></a></div>");
    
            this.append("<div class='scrollBanner-icons'></div>");
            $.each(obj.images, function(index,item) {
                //data-*灞炴€ф槸H5鍏佽鐢ㄦ埛鑷鍦℉TML鏍囩涓婁繚瀛樻暟鎹殑灞炴€с€�
                //淇濆瓨鍦╠ata-*涓殑鏁版嵁锛屽彲浠ヤ娇鐢╦s璇诲彇璋冪敤
                $(".scrollBanner-icons").append("<span class='scrollBanner-icon' data-index ='"+index+"'></span>");
            });
        }
       
        //璁剧疆css
        this.css({
            "width":"100%",
            "height":obj.bannerHeight,
            "overflow":"hidden",
            "position":"relative"

        });

        $(".scrollBanner-banner").css({
            "width":obj.images.length+1+"00%",
            "height":obj.bannerHeight,
            "transition": "all .5s ease"
        });

        $(".scrollBanner-bannerInner").css({
            "width" : 100/(obj.images.length+1)+"%",
            "height":obj.bannerHeight,
            "overflow":"hidden",
            "float":"left"
        });
        $(".scrollBanner-bannerInner img").css({
                "width": screenWidth+"px",
                 "height":obj.bannerHeight,
                 "position": "relative",
                   "left": "50%",
                   "margin-left": "-"+screenWidth/2+"px"
        });

        $(".scrollBanner-icons").css({
            "position":"absolute",
            "z-index":"100",
            "width" :30*obj.images.length+"px",
            "bottom":"40px",
            "height":"7px"
        })

        switch (obj.iconPosition){
            case "left":
                $(".scrollBanner-icons").css({
                    "left":"40px",
                });
                break;
            case "right":
                $(".scrollBanner-icons").css({
                    "right":"40px",
                });
                break;
            case "center":
                $(".scrollBanner-icons").css({
                    "left":"50%",
                    "margin-left":"-"+15*obj.images.length+"px"
                });
                break;
            default:
                break;
        }


        $(".scrollBanner-icon").css({
                "width": "15px",
                 "height": "5px",
                 "background-color": obj.iconColor,
                 "display": "inline-block",
                 "margin": "0px 5px"


        })

        //灏忓浘鏍囨寚涓婁互鍚庡彉鑹插苟涓斿垏鎹anner鍥�
        $(".scrollBanner-icon").mouseover(function(){
            $(".scrollBanner-icon").css("background-color",obj.iconColor);
            // 鈫� 鐢眘pan瑙﹀彂mouseover浜嬩欢锛屽垯this鎸囧悜杩欎釜span銆�
            // 鈫� 浣嗘槸锛岃繖this鏄疛S瀵硅薄锛屽繀椤讳娇鐢�$灏佽鎴怞Query瀵硅薄銆�
            $(this).css("background-color",obj.iconHoverColor);

             var index = $(this).attr("data-index");
             //灏嗚鏁板櫒count淇敼涓篿ndex鐨勫€硷紝璁゜anner鍥炬粴鍔ㄧ殑瀹氭椂鍣ㄨ兘澶熷垰濂芥粴鍒版墍鎸囧浘鐗囩殑涓嬩竴寮�
             count = index;
            $(".scrollBanner-banner").css({
                "transition": "none",
                "margin-left":"-"+index+"00%"

            });
        });


        //瀹炵幇banner婊氬姩,婊氬姩闀垮害娣诲姞鍒ゆ柇 
    if(obj.images.length>1){
        var count = 0 ;
        $(".scrollBanner-icon:eq("+0+")").css("background-color",obj.iconHoverColor);
        setInterval(function(){
            count++;
            $(".scrollBanner-banner").css({
                "margin-left":"-"+count+"00%",
                "transition": "all .5s ease"
            })
            $(".scrollBanner-icon").css("background-color",obj.iconColor);
            $(".scrollBanner-icon:eq("+count+")").css("background-color",obj.iconHoverColor);

            if (count>=obj.images.length) {
                $(".scrollBanner-icon:eq("+0+")").css("background-color",obj.iconHoverColor);
            }
            if(count>obj.images.length){
                count=0;
                $(".scrollBanner-banner").css({
                "margin-left":"0px",
                "transition":"none"

                })

            }
        },obj.scrollTime);
    }

    }
}(jQuery);