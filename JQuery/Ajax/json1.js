var data=[{
  "name": "����"
},{
  "name": "ɢ��"
},{
  "name": "����"
},{
  "name": "ƹ����"
},{
  "name": "�����г�"
}];
$.each(data, function (index, sport) {
    //if(index==3)
        $("ul").append("<li>" + sport["name"] + "</li>");
});