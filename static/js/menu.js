const url = window.location.href;
$(".navLi").removeClass("active");
var isIndex=0;
for (i = 0, len = $(".navLi").length; i < len; i++) {
    var nav = $(".navLi").eq(i).attr("htm");
    if (url.indexOf(nav) > 0) {
        $(".navLi").eq(i).addClass("active");
       
    } else{
        isIndex++
    }
}
if(isIndex==$(".navLi").length){
    $(".navLi").eq(0).addClass("active");
}

$(".product-nav").mouseover(function () {
    $(".product-child-nav").removeClass("active1");
    for (i = 0, len = $(".product-child-nav").length; i < len; i++) {
        var nav1 = $(".product-child-nav").eq(i).attr("htm");
        if (url.indexOf(nav1) > 0) {
            $(".product-child-nav").eq(i).addClass("active1");
        }
    }
    $(".product-child").show();
}).mouseout(function () {
    $(".product-child").hide();
})