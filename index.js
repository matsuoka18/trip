num1 = 0;
num2 = 0;
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= '850'){ 
            console.log("NO")
            num2++;
            place = 'nara';
            start1();
        }else{
            console.log("yes")
            place = 'kyoto';
           /* num1++;
            start();*/
        }
    });
});

function start(){
    //if(num1 == 1){
        $("#border").animate({
        'left':'10vw'
    },{
        'duration':0
    })
    $("#p1").animate({
        'top':'5vh'
    },{
        'duration':0
    })
    $("#p2").animate({
        'top':'4vh'
    },{
        'duration':0
    })
    $("#border").animate({
        'opacity':1,
        'width':'40vw',
        'left':'-10vw'
    },{
        'duration':2000
    })
    $("#p1").animate({
        'opacity':1,
        'top':0
    },{
        'duration':2000
    })
    $("#p2").animate({
        'opacity':1,
        'top':'7vh'
    },{
        'duration':2000
    })
    setTimeout(start2,2000)
  /*}else{
  
}*/
}
function start2(){
    setTimeout(()=>{
        $("#d2").animate({
            'left':'90vw'
         },{
           'duration':0
         })
         $("#d3").animate({
            'top':'9vh'
         },{
           'duration':0
         })
        $("#d1").animate({
           'width':'80vw'
        },{
          'duration':2000
        })
        $("#d2").animate({
            'width':'80vw',
            'left':'10vw'
         },{
           'duration':2000
         })
         $("#d3").animate({
            'height':'37.5vw',
            'top':'-9.5vh'
         },{
           'duration':2000
         })
         $("#d4").animate({
            'height':'37.5vw'
         },{
           'duration':2000
        })
           setTimeout(()=>{
            $("#d1").animate({
                'width':'0vw',
                'left':'90vw'
             },{
               'duration':2000
             })
             $("#d2").animate({
                 'width':'0vw',
                 'left':'10vw'
              },{
                'duration':2000
              })
              $("#d3").animate({
                 'height':'0vw',
                 'top':'-9.5vh'
              },{
                'duration':2000
              })
              $("#d4").animate({
                 'height':'0vw',
                 'top':'9.5vh'
              },{
                'duration':2000
             })
             $("#im").animate({
              'width':'60vw'
           },{
            'duration':3000
           })
           $("#swipe2").animate({
            'opacity':1
         },{
          'duration':3000
         })
         $("#swipe3").animate({
          'opacity':1
       },{
        'duration':3000
       })
           },2000)
         },2000)
}
function start1(){

    if(num2 == 1){
        $("#border2").animate({
        'left':'10vw'
    },{
        'duration':0
    })
    $("#p11").animate({
        'top':'5vh'
    },{
        'duration':0
    })
    $("#p22").animate({
        'top':'4vh'
    },{
        'duration':0
    })
    $("#border2").animate({
        'opacity':1,
        'width':'40vw',
        'left':'-10vw'
    },{
        'duration':2000
    })
    $("#p11").animate({
        'opacity':1,
        'top':0
    },{
        'duration':2000
    })
    $("#p22").animate({
        'opacity':1,
        'top':'7vh'
    },{
        'duration':2000
    })
    setTimeout(start22,2000)
}else{
  
}
}
function start22(){
    setTimeout(()=>{
        $("#d22").animate({
            'left':'90vw'
         },{
           'duration':0
         })
         $("#d33").animate({
            'top':'9vh'
         },{
           'duration':0
         })
        $("#d11").animate({
           'width':'80vw'
        },{
          'duration':2000
        })
        $("#d22").animate({
            'width':'80vw',
            'left':'10vw'
         },{
           'duration':2000
         })
         $("#d33").animate({
            'height':'37.5vw',
            'top':'-9.5vh'
         },{
           'duration':2000
         })
         $("#d44").animate({
            'height':'37.5vw'
         },{
           'duration':2000
        })
           setTimeout(()=>{
            $("#d11").animate({
                'width':'0vw',
                'left':'90vw'
             },{
               'duration':2000
             })
             $("#d22").animate({
                 'width':'0vw',
                 'left':'10vw'
              },{
                'duration':2000
              })
              $("#d33").animate({
                 'height':'0vw',
                 'top':'-9.5vh'
              },{
                'duration':2000
              })
              $("#d44").animate({
                 'height':'0vw',
                 'top':'9.5vh'
              },{
                'duration':2000
             })
             $("#im2").animate({
              'width':'60vw'
           },{
            'duration':1000
           })
           $("#swipe22").animate({
            'opacity':1
         },{
          'duration':1500
         })
         $("#swipe33").animate({
          'opacity':1
       },{
        'duration':1500
       })
           },2000)
         },2000)
}

document.getElementById("swipe").addEventListener('touchmove',logswipe);
document.getElementById("swipe").addEventListener('touchstart',logswipestart);
document.getElementById("swipe").addEventListener('touchend',logswipeend);
document.getElementById("swipee").addEventListener('touchmove',logswipe2);
document.getElementById("swipee").addEventListener('touchstart',logswipestart2);
document.getElementById("swipee").addEventListener('touchend',logswipeend2);

function logswipestart(event){
  event.preventDefault();
  startx = event.touches[0].pageX;
}
function logswipe(event){
event.preventDefault();
endx = event.touches[0].pageX;
}
function logswipeend(event){
event.preventDefault();
if(0 < endx-startx){
  scroll();
}else{
  console.log("2")
}
}
function logswipestart2(event){
  event.preventDefault();
  startx = event.touches[0].pageX;
}
function logswipe2(event){
event.preventDefault();
endx = event.touches[0].pageX;
}
function logswipeend2(event){
event.preventDefault();
if(0 < endx-startx){
  scroll2();
}else{
  console.log("2")
}
}
place = '';
scount = 0
function scroll(){
  scount++;
  if(scount == 1){
  place = "kyoto";
  $("#border").animate({
    'left':'40vw',
    'width':0,
    'opacity':0
},{
    'duration':2000
})
$("#p1").animate({
  'left':'40vw',
  
  'opacity':0
},{
    'duration':2000
})
$("#p2").animate({
  'left':'40vw',
  
  'opacity':0
},{
    'duration':2000
})
$("#im").animate({
  'left':'40vw',
  'opacity':0
},{
    'duration':2000
})
$("#swipe2").animate({
  'opacity':0
},{
    'duration':2000
})
$("#swipe3").animate({
  'opacity':0
},{
    'duration':2000
})
setTimeout(()=>{
$("#theme11").animate({
 'width':0
},{
  'duration':0
})
$("#theme11").animate({
  'width':'80vw',
  'opacity':1
 },{
   'duration':2000
 })
},1000)
  }else{

  }
}
scount2=0;
function scroll2(){
  scount2++;
  if(scount2 ==1){
  place = "nara";
  $("#border2").animate({
    'left':'40vw',
    'width':0,
    'opacity':0
},{
    'duration':2000
})
$("#p11").animate({
  'left':'40vw',
  'opacity':0
},{
    'duration':2000
})
$("#p22").animate({
  'left':'40vw',
  'opacity':0
},{
    'duration':2000
})
$("#im2").animate({
  'left':'40vw',
  'opacity':0
},{
    'duration':1000
})
$("#swipe22").animate({
  'opacity':0
},{
    'duration':1000
})
$("#swipe33").animate({
  'opacity':0
},{
    'duration':1000
})
setTimeout(()=>{
  $("#theme22").animate({
   'width':0
  },{
    'duration':0
  })
  $("#theme22").animate({
    'width':'80vw',
    'opacity':1
   },{
     'duration':2000
   })
  },1000)
}else{

}
}
function scrollout(){
  scount = 0;
  scount2 = 0;
   $("#theme11").animate({
     'width':0,
     'left':'80vw',
     'opacity':0
    },{
      'duration':2000
    })
    $("#theme22").animate({
      'width':0,
      'left':'80vw',
      'opacity':0
     },{
       'duration':2000
     })
    setTimeout(()=>{
      document.getElementById("theme11").style.display = "none";
      document.getElementById("theme22").style.display = "none";
      location.href="photos.html";
    },2000)
    
}

function b1(){
  if(place == 'kyoto'){
  document.cookie="message=b1-"
  }else{
    document.cookie="message=b16-"
  }
  scrollout(); 
}
function b2(){
  if(place == 'kyoto'){
  document.cookie="message=b2-"
  }else{
    document.cookie="message=b17-"
  }
  scrollout();
}
function b3(){
  if(place == 'kyoto'){
  document.cookie="message=b3-"
  }else{
    document.cookie="message=b18-"
  }
  scrollout();
}
function b4(){
  if(place == 'kyoto'){
  document.cookie="message=b4-"
  }else{
    document.cookie="message=b19-"
  }
  scrollout();
}
function b5(){
  if(place == 'kyoto'){
  document.cookie="message=b5-"
  }else{
    document.cookie="message=b20-"
  }
  scrollout();
}
function b7(){
  if(place == 'kyoto'){
  document.cookie="message=b7-"
  }else{
    document.cookie="message=b22-"
  }
  scrollout();
}
function b8(){
  if(place == 'kyoto'){
  document.cookie="message=b8-"
  }else{
    document.cookie="message=b23-"
  }
  scrollout();
}
function b9(){
  if(place == 'kyoto'){
  document.cookie="message=b9-"
  }else{
    document.cookie="message=b24-"
  }
  scrollout();
}
function b10(){
 if(place == 'kyoto'){
  document.cookie="message=b10-"
 }else{
  document.cookie="message=b21-"
 }
  scrollout();
}
function b11(){
  
  document.cookie="message=b11-"
  scrollout();
}
function b12(){
  
  document.cookie="message=b12-"
  scrollout();
}
function b13(){
  
  document.cookie="message=b13-"
  scrollout();
}
function b14(){
  
  document.cookie="message=b14-"
  scrollout();
}
function b15(){
  
  document.cookie="message=b15-"
  scrollout();
}
function bcheck(){
  cookie = document.cookie;
  //cookie = 'message=b1-,message2=back-';
  c1 = cookie.indexOf("message2=");
  if(c1 == -1){
    place= 'kyoto';
    console.log("New");
    start();
  }else{
    scount =2;
    scount2 =2;
    place= 'kyoto';
    c2 = cookie.indexOf("-",c1);
    data = cookie.substring(c1+9,c2);
    console.log("back:"+data);
    document.getElementById("theme11").style.display = "block";
    document.getElementById("theme11").style.opacity = "1";
    document.getElementById("theme1").style.display = "none";
    document.getElementById("theme1").style.opacity = "0";
    document.getElementById("theme2").style.display = "none";
    document.getElementById("theme2").style.opacity = "0";
    document.getElementById("swipe").style.opacity = "0";
    document.getElementById("swipe").style.display = "none";
    document.getElementById("theme12").style.display = "none";
    document.getElementById("theme12").style.opacity = "0";
    document.getElementById("theme21").style.display = "none";
    document.getElementById("theme21").style.opacity = "0";
    document.getElementById("theme22").style.display = "block";
    document.getElementById("theme22").style.opacity = "1";
    document.getElementById("swipee").style.opacity = "0";
    document.getElementById("swipee").style.display = "none";
  }
}

function sct(){
  location.href="sct.html";
}