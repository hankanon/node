/**
 * Created by xinnong on 2016/2/23.
 */
//检测是否支持颜色选择器
function hasColorSupport(){
    var input = document.createElement("input");
     input.setAttribute("type","color");
    var hascolorType=(input.type!=="text");
    if(hascolorType){
        var testString ="foo";
        input.value=testString;
        hascolorType=(input.value !== testString);
    }
    return (hascolorType);
}