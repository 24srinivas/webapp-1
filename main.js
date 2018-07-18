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
  detail(data.obj);

})
var child = document.querySelector(".childone");
function details(det){
  var img =document.createElement("img");
  img.src=det.image;
  child.appendChild(img);

  var name=document.createElement("h3");
  name.textContent=det.name;
  child.appendChild(name);

   var num=document.createElement("h3");
   num.textContent=det.phone;
   child.appendChild(num);

   var mail = document.createElement("a");
   mail.href= "mailto:17b9@srkrec.edu.in";
   mail.textContent =det.email;
   child.appendChild(mail);

    var title=document.createElement("h3");
   title.textContent=det.v;
   child.appendChild(title);

   var line = document.createElement("hr");
   child.appendChild(line);

   var address = document.createElement("h2");
   address.textContent=det.address;
   child.appendChild(address);

}

var child1 = document.querySelector(".childtwo");
function detail(det){
   var title=document.createElement("h2");
   title.textContent=det.r;
   child1.appendChild(title);

   var line=document.createElement("hr");
   child1.appendChild(line);

   var par=document.createElement("h5");
   par.textContent=det.main;
   child1.appendChild(par);


}
