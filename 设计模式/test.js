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
        return "data-ddkey=\"@.v.t.TransType\" data-ddval=\"" + json.num + "\"";//�ڴ�ָ�����ĸ������洢
    }
    function getIco(json) {
        return router[json.label] == undefined ? "img/ico_btn_other.png" : router[json.label];
    }
    var router ={
        ������: "img/ico_btn_open.png",
            ���: "img/ico_btn_fina.png",
            �ɷ�: "img/ico_btn_pay.png",
            ת�˻��: "img/ico_btn_transfer.png",
            ��ƹ���: "img/ico_btn_manager.png",
            ���˿ͻ�: "img/ico_btn_manager.png",
            �Թ��ͻ�: "img/ico_btn_manager.png",
            �޿�����: "img/ico_btn_manager.png",
            ����ҵ��: "img/ico_btn_other.png",
            ���: "img/ico_btn_exchange.png",
            ��ȡ��: "img/ico_btn_cash.png"
        };
    return {
        setMenu:setMenu
    };
})();