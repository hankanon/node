/**
 * Created by xinnong on 2016/4/7.
 */
    //��utils����Ϊwindow�����µ�һ�����ԣ�����ֵΪ����
window.utils = {};

//��utils�����϶��岶������ķ���
window.utils.captureMouse = function(element){
    //����һ����Ϊmouse�Ķ���
    var mouse = {x:0,y:0};

    //ΪԪ�ذ�mousemove�¼�
    element.addEventListener('mousemove',function(event){
        var x,y;

        //��ȡ���λ�ڵ�ǰ��Ļ��λ�ã� �������ݴ���
        if(event.pageX||event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop;
        }
        //����ǰ������ֵ��ȥԪ�ص�ƫ��λ�ã���Ϊ���λ�ڵ�ǰcanvas��λ��
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    },false);
    //����ֵΪmouse����
    return mouse;
};

//�����ķ���
window.utils.captureTouch = function (element) {
    var touch = {
        x: null,
        y: null,
        isPressed: false,
        event: null
    };
      var body_scrollLeft = document.body.scrollLeft,
          element_scrollLeft = document.documentElement.scrollLeft,
          body_scrollTop = document.body.scrollTop,
          element_scrollTop = document.documentElement.scrollTop,
          offsetLeft = element.offsetLeft,
          offsetTop = element.offsetTop;

    // ��touchstart�¼�
    element.addEventListener('touchstart', function (event) {
        touch.isPressed = true;
        touch.event = event;
    }, false);

    // ��touchend�¼�
    element.addEventListener('touchend', function (event) {
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
        touch.event = event;
    }, false);

    //��touchmove�¼�
    element.addEventListener('touchmove', function (event) {
        var x, y, touch_event = event.touches[0]; //��һ��touch

        if (touch_event.pageX || touch_event.pageY) {
            x = touch_event.pageX;
            y = touch_event.pageY;
        } else {
            x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
            y = touch_event.clientY + body_scrollTop + element_scrollTop;
        }
        //��ȥƫ����
        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;
    }, false);
    //����touch����
    return touch;
};

//����ѭ��
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        return window.setTimeout(callback, 17 /*~ 1000/60*/);
    });
}

//����ѭ��ȡ��
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
    window.clearTimeout);
}