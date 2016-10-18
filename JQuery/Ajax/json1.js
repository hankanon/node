var data=[{
  "name": "×ãÇò"
},{
  "name": "É¢²½"
},{
  "name": "ÀºÇò"
},{
  "name": "Æ¹ÅÒÇò"
},{
  "name": "Æï×ÔÐÐ³µ"
}];
$.each(data, function (index, sport) {
    //if(index==3)
        $("ul").append("<li>" + sport["name"] + "</li>");
});