num1 = 0;
num2 = 0;
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= '750'){ 
            console.log("NO")
            num2++;
            start1();
        }else{
            console.log("yes")
            num1++;
            start();
        }
    });
});

function start(){
    if(num1 == 1){
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
}else{
  
}
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
            'height':'42vw',
            'top':'-9.5vh'
         },{
           'duration':2000
         })
         $("#d4").animate({
            'height':'42vw'
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
            'duration':2000
           })
           $("#swipe2").animate({
            'opacity':1
         },{
          'duration':2000
         })
         $("#swipe3").animate({
          'opacity':1
       },{
        'duration':2000
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
            'height':'42vw',
            'top':'-9.5vh'
         },{
           'duration':2000
         })
         $("#d44").animate({
            'height':'42vw'
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
function scroll(){
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
},2000)
}
function scroll2(){
  $("#border2").animate({
    'left':'-40vw',
    'opacity':0
},{
    'duration':2000
})
$("#p11").animate({
  'left':'-40vw',
  'opacity':0
},{
    'duration':2000
})
$("#p22").animate({
  'left':'-40vw',
  'opacity':0
},{
    'duration':2000
})
$("#im2").animate({
},{
    'duration':1000
})
$("#swipe22").animate({

},{
    'duration':1000
})
$("#swipe33").animate({

},{
    'duration':1000
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
}
function scrollout(){
   $("#theme11").animate({
     'width':0,
     'left':'80vw',
     'opacity':0
    },{
      'duration':2000
    })
    setTimeout(()=>{
      document.getElementById("theme11").style.display = "none";
      location.href="photos.html";
    },2000)
    
}

function b1(){
  scrollout();
  document.cookie="message=b1;"
}
function b2(){
  scrollout();
  document.cookie="message=b2;"
}
function b3(){
  scrollout();
  document.cookie="message=b3;"
}
function b4(){
  scrollout();
  document.cookie="message=b4;"
}
function b5(){
  scrollout();
  document.cookie="message=b5;"
}
function b7(){
  scrollout();
  document.cookie="message=b7;"
}
function b8(){
  scrollout();
  document.cookie="message=b8;"
}
function b9(){
  scrollout();
  document.cookie="message=b9;"
}
function b10(){
  scrollout();
  document.cookie="message=b10;"
}
function b11(){
  scrollout();
  document.cookie="message=b11;"
}
function b12(){
  scrollout();
  document.cookie="message=b12;"
}
function b13(){
  scrollout();
  document.cookie="message=b13;"
}
function b14(){
  scrollout();
  document.cookie="message=b14;"
}
function b15(){
  scrollout();
  document.cookie="message=b15;"
}