function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
})
var child = document.querySelector(".childone");
function details(det){
  var img =document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
}
