/**
 * Created by xinnong on 2016/2/25.
 */
dyMenu = (function(){
    var html="";
         function getHtml(json) {
        alert("dddd");
        if (json == undefined) {
            return false;
        }
        var tHtml = "";
        for (var i in json.items) {
            tHtml += "<button class=\"btn btn-select\" data-button=\"\"" + getEvent(json.items[i]) + " " + getRet(json.items[i]) + ">";
            tHtml += " <img src=\"" + getIco(json.items[i]) + "\" />";
            tHtml += "<br /><span>" + json.items[i].label + "</span></button>";
        }
        html = tHtml;
        return true;
    }
     function setMenu(tar, json) {
        alert("aaaa");
        if (getHtml(json)) {
            $(tar).html(html);
        }
    }
    function getEvent(json) {
        return json.event == undefined ? "" : "data-ret=\"" + json.event + "\"";
    }
     function getRet(json) {
        return "data-ddkey=\"@.v.t.TransType\" data-ddval=\"" + json.num + "\"";//在此指定往哪个变量存储
    }
    function getIco(json) {
        return router[json.label] == undefined ? "img/ico_btn_other.png" : router[json.label];
    }
    var router ={
        开销户: "img/ico_btn_open.png",
            理财: "img/ico_btn_fina.png",
            缴费: "img/ico_btn_pay.png",
            转账汇款: "img/ico_btn_transfer.png",
            理财顾问: "img/ico_btn_manager.png",
            个人客户: "img/ico_btn_manager.png",
            对公客户: "img/ico_btn_manager.png",
            无卡无折: "img/ico_btn_manager.png",
            其他业务: "img/ico_btn_other.png",
            外币: "img/ico_btn_exchange.png",
            存取款: "img/ico_btn_cash.png"
        };
    return {
        setMenu:setMenu
    };
})();