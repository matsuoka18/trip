message = '';
url = "https://script.google.com/macros/s/AKfycbzTopcGzYj97auh11Ilq5dLM2QyAop3eyXqPALpWAfcRyalILr09k9a4zgesPl-8agY/exec";
function start(){
    console.log("start START");
    cookie = document.cookie;
    //cookie = 'message=b1-';
    c_check = cookie.indexOf("message=");
    c_check2 = cookie.indexOf("-",c_check);
    if(c_check == -1){
        console.log("cookie Error");
        alert("このページはcookieを許可しない場合、適切に動作しません");
    }else{
        message = cookie.substring(c_check+8,c_check2);
        console.log("message:"+message);
    }
    console.log("start FIN");
gas();
ani();
}
function gas(){
    console.log("gas START");
    
    data = [{
        "message":message
    }]
    params = {
        "method":"POST",
        "mode":"no-cors",
        "Content-Type":"application/json",
        "body":JSON.stringify(data)
    }
    fetch(url,params);
    gas2();
    console.log("gas FIN");
}
count = 0;
function gas2(){
    count++;
    console.log("gas2 START");
fetch(url,{
    "method":"GET",
    "mode":"cors"
})
.then(response =>{
    if(response.ok){
        return response.json()
    }
})
.then(resJson =>{
    code = resJson[0];
    if(code == message){
        console.log("message 一致");
        start2(resJson);
    }else{
        if(count < 4){
            console.log("ERROR (other data)");
        gas2();
        }else{
            count =0;
            console.log("ERROR (retry)")
            gas();
        }
    }
})
console.log("gas2 FIN");
}
branch = 0;
function start2(data){
document.getElementById("div2").style.opacity = 1;
    branch =1;
last = data.length;
console.log("last:"+last);
code = data[0];
theme = data[1];
theme2 = data[3];
best = data[2];
console.log(code);
console.log(theme);
console.log(theme2);
console.log(best);
document.getElementById("p1").innerHTML = theme;
document.getElementById("p3").innerHTML = theme2;
best2 = best.replace("img","");

for(var a = 4; a<last; a++){
pic = data[a];
pic2 = pic.replace("img","");
if(pic2 <= 700 && pic2 >400){
  datas = "<div class="+"\""+"pice"+"\""+">"+"<img src="+"\""+"https://canada-japan.github.io/pthos/"+pic+".jpg"+"\""+">"+"<p>"+theme+" | "+theme2+"</p><p>購入→</p></div>";
div.insertAdjacentHTML("beforeend",datas);
}else if(pic2 >=701){
  datas = "<div class="+"\""+"pice"+"\""+">"+"<img src="+"\""+"https://canada-japan.github.io/pthos2/"+pic+".jpg"+"\""+">"+"<p>"+theme+" | "+theme2+"</p><p>購入→</p></div>";
div.insertAdjacentHTML("beforeend",datas);
}else if(pic2 >= 301 && pic2 <=400){
  datas = "<div class="+"\""+"pice"+"\""+">"+"<img src="+"\""+"https://canada-japan.github.io/pthos2/"+pic+".jpg"+"\""+">"+"<p>"+theme+" | "+theme2+"</p><p>購入→</p></div>";
div.insertAdjacentHTML("beforeend",datas);
}else if(pic2 <=300){
  datas = "<div class="+"\""+"pice"+"\""+">"+"<img src="+"\""+"https://canada-japan.github.io/pthos/"+pic+".jpg"+"\""+">"+"<p>"+theme+" | "+theme2+"</p><p>購入→</p></div>";
div.insertAdjacentHTML("beforeend",datas);
}
}
if(best2 <= 700 && best2 >400){
  datas = "<img src="+"\""+"https://canada-japan.github.io/pthos/"+best+".jpg"+"\""+">";
  div.insertAdjacentHTML("afterbegin",datas);
  }else if(best2 >=701){
    datas = "<img src="+"\""+"https://canada-japan.github.io/pthos2/"+best+".jpg"+"\""+">";
  div.insertAdjacentHTML("afterbegin",datas);
  }else if(best2 >= 301 && best2 <=400){
    datas = "<img src="+"\""+"https://canada-japan.github.io/pthos2/"+best+".jpg"+"\""+">";
  div.insertAdjacentHTML("afterbegin",datas);
  }else if(best2 <=300){
    datas = "<img src="+"\""+"https://canada-japan.github.io/pthos/"+best+".jpg"+"\""+">";
  div.insertAdjacentHTML("afterbegin",datas);
  }
setTimeout(anit,1000);
}
function anit(){
    $("#p2").animate({
        'marginLeft':'40vw'
      },0)
    $("#p2").animate({
      'width':'60vw',
      'marginLeft':'20vw'
    },1000)
    $("#p1").animate({
        'opacity':0
      },1000)
      $("#p3").animate({
        'opacity':0
      },1000)
    $("#p1").animate({
        'opacity':1
      },1000)
      $("#p3").animate({
        'opacity':1
      },1000)
}
function ani(){
    $("#loading").animate({
        'opacity':0
      },500)    
      $("#loading").animate({
        'opacity':1
      },500)    
    $("#diving").animate({
        'width':0,
        'left':0,
      },0)
      $("#diving2").animate({
        'width':0,
        'left':'40vw'
      },0)
      $("#diving3").animate({
        'height':0,
        'top':0
      },0)
      $("#diving4").animate({
        'height':0,
        'top':'20vh'
      },0)
      $("#diving").animate({
        'width':'40vw'
      },1000)
      $("#diving2").animate({
        'width':'40vw',
        'left':'0vw'
      },1000)
      $("#diving3").animate({
        'height':'20vh'
      },1000)
      $("#diving4").animate({
        'height':'20vh',
        'top':'0vw'
      },1000)
      if(branch  == 1){
        $("#load").animate({
            'opacity':0
          },4000)    
      setTimeout(()=>{
        document.getElementById("load").display = "none";
                  },4000)
              }else{
                setTimeout(ani2,1000);
              }
}
function ani2(){
    $("#loading").animate({
        'opacity':0
      },500)    
      $("#loading").animate({
        'opacity':1
      },500)    
    $("#diving").animate({
        'width':'0vw',
        'left':'40vw'
      },1000)
      $("#diving2").animate({
        'width':'0vw',
      },1000)
      $("#diving3").animate({
        'height':'0vh',
        'top':'20vh'
      },1000)
      $("#diving4").animate({
        'height':'0vh'
      },1000)
      if(branch  == 1){
        $("#load").animate({
            'opacity':0
          },2000)    
          setTimeout(()=>{
document.getElementById("load").display = "none";
          },2000)
      }else{
      setTimeout(ani,1000)
      }
}
ki=0;
function ko(){
    ki++;
    $("#p2").css("transform","rotate("+ki+"deg");
}
bcount = 0;
bcheck = '';
function back(){
  bcount++;
  if(bcount == 1){
  $("#back").animate({
    'width':"27.5vw"
  },1000)
  $("#backm").animate({
    'width':"27.5vw"
  },1000)
  document.getElementById("backt").innerHTML = "Back";
  document.getElementById("backt").style.fontSize = "7.5vw";
  document.getElementById("backt").style.marginTop = "1vw";

  setTimeout(()=>{
    bcheck = "ok";
  },1000)
}else if(bcount >= 2 && bcheck == "ok"){{
  document.cookie="message2=back-; Max-Age=10";
  location.href="index.html";
}
}
}
function access(){
  location.href="access.html";
}
function detail(){
  location.href="detail.html";
}
function account(){
  location.href="account.html";
}
function review(){
  location.href="review.html";
}