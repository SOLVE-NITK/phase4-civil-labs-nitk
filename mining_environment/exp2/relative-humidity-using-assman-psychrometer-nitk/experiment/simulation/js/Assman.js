function navNext()
{
  for (temp = 0; temp <= 14 ; temp++)
  {
    document.getElementById('canvas'+temp).style.visibility="hidden";
  }
  simsubscreennum+=1;
  document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
  document.getElementById('nextButton').style.visibility="hidden";
  magic();
}
var ca;
var questions=["The thermometer with wet bulb muslin cloth records",
"In Assman psychrometer fan should be run for",
"Assman psychrometer consists of 2 thermometer"];

var options2=[["Dry bulb temperature","Wet bulb temperature","Cold bulb temperature","Hot bulb temperature"],//wet bulb temperature
["4 minutes","3 minutes","2 minutes","5 minutes"],//2 minutes
["True","False"]];//True];

function validateAnswer(qn,ans,left,top)
{
  $("#answer").empty();
  document.getElementById("a").innerHTML="";
  document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
  document.getElementById("q").innerHTML=questions[qn];
   if (qn == 0) document.getElementById('questDiv').style.width = "250px";
  el = document.createElement("option");
  el.textContent = " ";
  el.value = " ";
  answer.appendChild(el);

  for(j=0;j<options2[qn].length;j++)
  {
    opt = options2[qn][j];
    el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    answer.appendChild(el);
    $("#answer").change(function()
    {
      ca=$(this).children("option:selected").val();
      if(options2[qn][ans]==ca)
      {
        document.getElementById("a").innerHTML="Correct Answer!";
      }
      else
      {
        document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
      }
      setTimeout(function()
      {
        document.getElementById("questDiv").style.visibility="hidden";
        document.getElementById("nextButton").style.visibility="visible";
      },1500);
    });
  }
}

function right_condition(para_button,para_wrong,para_right,para_button1){
  document.getElementById(para_button).style.visibility='hidden';
  document.getElementById(para_wrong).style.visibility="hidden";
  document.getElementById(para_right).style.visibility="visible";
  document.getElementById(para_button1).style.visibility='visible';

}

function wrong_condition(para_output,para_wrong,para_right){
  document.getElementById(para_output).value="";
  document.getElementById(para_wrong).style.visibility="visible";
  document.getElementById(para_right).style.visibility="hidden";
}
function button(para_button,para_wrong){
  document.getElementById(para_button).style.visibility="hidden";
  document.getElementById(para_wrong).style.visibility="hidden";
}



var r= Math.floor(Math.random()*3);

var array=[[24,29.5],
[24.5,28.5],
[23.5,29]
];

var arr=[[24.5,30],
[23,29],
[24,29.5]];

var ar=[[24,29],
[25,28.5],
[23.5,30]];

var array1=[[2982.94,0.018,2445236,68134.24,0.0156,2479.09,4121.53,60.14],
[3073.64,0.019,2444043,71059.31,0.0166,2633.87,3890.10,67.70],
[2894.58,0.018,2446429,67653.22,0.0156,2479.09,4004.36,61.90]];


var arr1=[[3073.64,0.019,2444043,71059.31,0.0166,2633.87,4241.67,62.09],
[2808.51,0.017,2447622,64724.57,0.0144,2292.70,4004.36,57.25],
[2982.94,0.018,2445236,68134.24,0.0156,2479.09,4121.53,60.14]];


var ar1=[[2982.94,0.018,2445236,68134.24,0.0158,2510.08,4004.36,62.68],
[3166.74,0.020,2442850,73982,0.0185,2926.63,3890.10,75.23],
[2894.58,0.018,2446429,67653.22,0.0152,2417.04,4241.67,56.8]];

var v1=[[60.14,61],
[67.70,70],
[61.90,61]];
var v2=[[62.09,62],
[57.25,58],
[60.14,61]];
var v3=[[62.68,64],
[75.23,74],
[56.98,56]];
var avg=[[61.63,62.3],
[66.72,67.3],
[59.67,59.33]];
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
  if (document.getElementById('arrow1').style.visibility=="hidden")
  document.getElementById('arrow1').style.visibility="visible";
  else
  document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction()
{
  clearInterval(myInt);
  document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic()
{

  if (simsubscreennum==1)
  {
    
    document.getElementById('c').style.visibility="visible";
    document.getElementById('can10').innerHTML="Length of the Assman psychrometer is= 41.5 cm";
    document.getElementById('can20').innerHTML="Diameter of the Assman psychrometer is= 10 cm";
    myInt = setInterval(function(){ animatearrow(); }, 500);

    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 170px; top: 430px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";

    document.getElementById('11').onclick=function() { step1(); };
  }
  else if (simsubscreennum==2)
  {
    document.getElementById('1').style.visibility="hidden";
    document.getElementById('c').style.visibility="hidden";
    document.getElementById('22-01').style.visibility="hidden";
    document.getElementById('22').style.visibility="hidden";

    myInt = setInterval(function(){ animatearrow(); }, 500);

    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 460px; top: 300px; height: 40px; z-index: 10;";

    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
    document.getElementById('22-1').onclick=function() { step2(); };
  }
  else if (simsubscreennum==3)
  {
    document.getElementById('11-1').style.visibility="hidden";
    //document.getElementById('10').style.visibility="hidden";
    document.getElementById('11-3').style.visibility="hidden";
    document.getElementById('11-4').style.visibility="hidden";
    document.getElementById('22-1').style.visibility="hidden";
    document.getElementById('10-1').style.visibility="hidden";
    document.getElementById('ok-1').style.visibility="hidden";
    setTimeout(function()
    {
    document.getElementById('m1').style.visibility="visible";
    document.getElementById('m2').style.visibility="visible";
    document.getElementById('11-22').style.visibility="visible";
    document.getElementById('11-33').style.visibility="visible";
    document.getElementById('11-01').style.visibility="visible";
    document.getElementById('11-02').style.visibility="visible";
    document.getElementById('11-022').style.visibility="visible";
    document.getElementById('11-10').style.visibility="visible";
    document.getElementById('sco1').style.visibility="visible";
      setTimeout(function()
      {
      document.getElementById('sco1').style.visibility="hidden";
      document.getElementById('11-022').style.animation = "water-6 5s 1 forwards";
      setTimeout(function()
      {
        for(i=0;i<=array[r].length-1;i++)
        document.getElementById('can1').innerHTML="Wet bulb temperature="+array[r][i-1]+" &#8451";
        for(i=0;i<=array[r].length-1;i++)
        document.getElementById('can2').innerHTML="Dry bulb temperature="+array[r][i]+" &#8451";
        setTimeout(function()
        {
          document.getElementById('nextButton').style.visibility="visible";
        },2000);
      },6000);
       },1000);
    },1000);
  }

  else if (simsubscreennum==4)
  {
  //visible("18-1","18-2","18-3","18-4","18-5","18-6","18-7","18-8");
  document.getElementById('c1').style.visibility="visible";
  document.getElementById('11-10').style.visibility="hidden";
  document.getElementById('m1').style.visibility="hidden";
  document.getElementById('m2').style.visibility="hidden";
  document.getElementById('11-22').style.visibility="hidden";
  document.getElementById('11-33').style.visibility="hidden";
  document.getElementById('11-01').style.visibility="hidden";
  document.getElementById('11-02').style.visibility="hidden";
  document.getElementById('11-022').style.visibility="hidden";
    document.getElementById('c1').style.visibility="visible";
    for(i=0;i<=array[r].length-1;i++)
    {
      document.getElementById("row"+i).innerHTML=array[r][i];
    }
    var flag=0;
    var ans_1=array1[r][0];
    document.getElementById('button').onclick=function() {
      if(document.getElementById('output').value=="")
      {
        if(document.getElementById('button').innerHTML==="Result"){
          document.getElementById('output').value=ans_1;
          document.getElementById('button-1').style.visibility="visible";
          button('button','wrong');
        }
        else
          alert("Enter the value to proceed");
      }
      else{
        if(document.getElementById('output').value==ans_1)
          right_condition('button','wrong','right','button-1');
        else{
          flag+=1;
          wrong_condition('output','wrong','right');
          if (flag===2){
            if(document.getElementById('output').value==ans_1)
                document.getElementById('right').style.visibility="visible";
                else
            document.getElementById('button').innerHTML="Result";
          }
        }
      }

    };
    var flag1=0;
    var ans_2=array1[r][1];
    document.getElementById('button-1').onclick=function() {
      if(document.getElementById('output-1').value=="")
      {
        if(document.getElementById('button-1').innerHTML==="Result"){
          document.getElementById('output-1').value=ans_2;
          document.getElementById('button-2').style.visibility="visible";
          button('button-1','wrong-1');
        }
        else
          alert("Enter the value to proceed");
      }
      else {
        if(document.getElementById('output-1').value==ans_2)
          right_condition('button-1','wrong-1','right-1','button-2');
        else{
          flag1+=1;
          wrong_condition('output-1','wrong-1','right-1');
          if (flag1===2){
             if(document.getElementById('output-1').value==ans_2)
                document.getElementById('right-1').style.visibility="visible";
              else
            document.getElementById('button-1').innerHTML="Result";
          }	  		    		}
        }
      };
      var flag2=0;
      var ans_3=array1[r][2];
      document.getElementById('button-2').onclick=function() {
        if(document.getElementById('output-2').value=="")
        {
          if(document.getElementById('button-2').innerHTML==="Result"){
            document.getElementById('output-2').value=ans_3;
            document.getElementById('button-3').style.visibility="visible";
            button('button-2','wrong-2');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output-2').value==ans_3)
            right_condition('button-2','wrong-2','right-2','button-3');
          else{
            flag2+=1;
            wrong_condition('output-2','wrong-2','right-2');
            if (flag2===2){
              if(document.getElementById('output-2').value==ans_3)
                document.getElementById('right-2').style.visibility="visible";
              else
              document.getElementById('button-2').innerHTML="Result";
            }
          }
        }
      };
      var flag3=0;
      var ans_4=array1[r][3];
      document.getElementById('button-3').onclick=function() {
        if(document.getElementById('output-3').value=="")
        {
          if(document.getElementById('button-3').innerHTML==="Result"){
            document.getElementById('output-3').value=ans_4;
            document.getElementById('button-4').style.visibility="visible";
            button('button-3','wrong-3');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output-3').value==ans_4)
            right_condition('button-3','wrong-3','right-3','button-4');
          else{
            flag3+=1;
            wrong_condition('output-3','wrong-3','right-3');
            if (flag3===2){
              if(document.getElementById('output-3').value==ans_4)
                document.getElementById('right-3').style.visibility="visible";
              else
              document.getElementById('button-3').innerHTML="Result";
            }
          }
        }
      };
      var flag4=0;
      var ans_5=array1[r][4];
      //var ans="2.4xMath.pow(10,2)";
      document.getElementById('button-4').onclick=function() {

        if(document.getElementById('output-4').value=="")
        {
          if(document.getElementById('button-4').innerHTML==="Result"){
            document.getElementById('output-4').value=ans_5;
            document.getElementById('button-5').style.visibility="visible";
            button('button-4','wrong-4');
          }
          else{
            alert("Enter the value to proceed");
          }
        }
        else {
          if(document.getElementById('output-4').value==ans_5)
            right_condition('button-4','wrong-4','right-4','button-5');
          else{
            flag4+=1;
            wrong_condition('output-4','wrong-4','right-4');
            if (flag4===2){
              if(document.getElementById('output-4').value==ans_5)
                document.getElementById('right-4').style.visibility="visible";
              else
              document.getElementById('button-4').innerHTML="Result";
            }
          }
        }
      };
      var flag5=0
      var ans_6=array1[r][5];
      //var ans="2.4xMath.pow(10,2)";
      document.getElementById('button-5').onclick=function() {

        if(document.getElementById('output-5').value=="")
        {
          if(document.getElementById('button-5').innerHTML==="Result"){
            document.getElementById('output-5').value=ans_6;
            document.getElementById('button-6').style.visibility="visible";
            button('button-5','wrong-5');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output-5').value==ans_6)
            right_condition('button-5','wrong-5','right-5','button-6');
          else{
            flag5+=1;
            wrong_condition('output-5','wrong-5','right-5');
            if (flag5===2){
              if(document.getElementById('output-5').value==ans_6)
                document.getElementById('right-5').style.visibility="visible";
              else
              document.getElementById('button-5').innerHTML="Result";
            }
          }
        }
      };
      var flag6=0;
      var ans_7=array1[r][6];
      //var ans="2.4xMath.pow(10,2)";
      document.getElementById('button-6').onclick=function() {

        if(document.getElementById('output-6').value=="")
        {
          if(document.getElementById('button-6').innerHTML==="Result"){
            document.getElementById('output-6').value=ans_7;
            document.getElementById('button-7').style.visibility="visible";
            button('button-6','wrong-6');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output-6').value==ans_7)
            right_condition('button-6','wrong-6','right-6','button-7');
          else{
            flag6+=1;
            wrong_condition('output-6','wrong-6','right-6');
            if (flag6===2){
              if(document.getElementById('output-6').value==ans_7)
                document.getElementById('right-6').style.visibility="visible";
              else
              document.getElementById('button-6').innerHTML="Result";
            }
          }
        }
      };
      var flag7=0;
      var ans_8=array1[r][7];
      //var ans="2.4xMath.pow(10,2)";
      document.getElementById('button-7').onclick=function() {

        if(document.getElementById('output-7').value=="")
        {
          if(document.getElementById('button-7').innerHTML==="Result"){
            document.getElementById('output-7').value=ans_8;
            button('button-7','wrong-7');
            document.getElementById('nextButton').style.visibility="visible";
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output-7').value==ans_8)
          {
            right_condition('button-7','wrong-7','right-7','nextButton');
            document.getElementById('nextButton').style.visibility="visible";
          }
          else{
            flag7+=1;
            wrong_condition('output-7','wrong-7','right-7');
            if (flag7===2){
              if(document.getElementById('output-7').value==ans_8)
              {
                document.getElementById('right-7').style.visibility="visible";
                document.getElementById('nextButton').style.visibility="visible";
                }
              else
              document.getElementById('button-7').innerHTML="Result";
            }
          }
        }
      };
    }
    if (simsubscreennum==5)
    {
          document.getElementById('m1').style.visibility="hidden";
          document.getElementById('m2').style.visibility="hidden";

        refresh('wrong','wrong-1','wrong-2','wrong-3','wrong-4','wrong-5','wrong-6','wrong-7','right','right-1','right-2','right-3','right-4','right-5','right-6','right-7');
        document.getElementById('c1').style.visibility="hidden";
        document.getElementById('cc').style.visibility="visible";
        document.getElementById('10-1').style.visibility="visible";
        document.getElementById('ok-1').style.visibility="visible";
        document.getElementById('ok-1').onclick=function() {
        document.getElementById('10-1').style.visibility="hidden";
        document.getElementById('ok-1').style.visibility="hidden";
        document.getElementById('c1').style.visibility="hidden";
        myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 170px; top: 430px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('11-p2').onclick=function() { step12(); };
      };
    }

    else if (simsubscreennum==6)
    {
      document.getElementById('22-02').style.visibility="hidden";
      document.getElementById('22-p2').style.visibility="hidden";
      document.getElementById('cc').style.visibility="hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);
      //document.getElementById('ok').onclick=function() { step10(); };
      document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 460px; top: 300px; height: 40px; z-index: 10;";
      document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
      // Code for IE9
      document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
      // Standard syntax
      document.getElementById("arrow1").style.transform = "rotate(360deg)";
      document.getElementById('22-1q').onclick=function() { step2_2(); };
    }
    else if (simsubscreennum==7)
    {
      
      document.getElementById('11-1q').style.visibility="hidden";
      document.getElementById('11-3q').style.visibility="hidden";
      document.getElementById('11-4q').style.visibility="hidden";
      document.getElementById('22-1q').style.visibility="hidden";
     
      //document.getElementById('ok-1q').style.visibility="hidden";
      setTimeout(function()
      {
      document.getElementById('m1-1').style.visibility="visible";
      document.getElementById('m2-1').style.visibility="visible";
      document.getElementById('111-10').style.visibility="visible";
      document.getElementById('11-01q').style.visibility="visible";
      document.getElementById('11-02q').style.visibility="visible";
      document.getElementById('11-022q').style.visibility="visible";
      document.getElementById('11-22q').style.visibility="visible";
      document.getElementById('11-33q').style.visibility="visible";
      document.getElementById('sco2').style.visibility="visible";

        setTimeout(function()
        {
        document.getElementById('sco2').style.visibility="hidden";
        document.getElementById('11-022q').style.animation = "water-6 5s forwards";
        setTimeout(function()
        {
          for(i=0;i<=arr[r].length-1;i++)
          document.getElementById('can1q').innerHTML="Wet bulb temperature="+arr[r][i-1]+" &#8451";
          for(i=0;i<=arr[r].length-1;i++)
          document.getElementById('can2q').innerHTML="Dry bulb temperature="+arr[r][i]+" &#8451";
          setTimeout(function()
          {
            document.getElementById('nextButton').style.visibility="visible";
          },2000);
        },6000);
        },1000);
      },1000);
    }
    else if (simsubscreennum==8)
    {
      document.getElementById('11-01q').style.visibility="hidden";
      document.getElementById('11-02q').style.visibility="hidden";
      document.getElementById('111-10').style.visibility="hidden";
      document.getElementById('11-22q').style.visibility="hidden";
      document.getElementById('11-33q').style.visibility="hidden";
      document.getElementById('m1-1').style.visibility="hidden";
      document.getElementById('m2-1').style.visibility="hidden";
      document.getElementById('c12').style.visibility="visible";

      for(i=0;i<=arr[r].length-1;i++)
      {
        document.getElementById("rw"+i).innerHTML=arr[r][i];
      }
      var flag_0=0;
      var ans_11=arr1[r][0];
      document.getElementById('button1').onclick=function() {
        if(document.getElementById('output1').value=="")
        {
          if(document.getElementById('button1').innerHTML==="Result"){
            document.getElementById('output1').value=ans_11;
            document.getElementById('button1-1').style.visibility="visible";
            button('button1','wrong1');
          }
          else
            alert("Enter the value to proceed");
        }
        else{
          if(document.getElementById('output1').value==ans_11)
            right_condition('button1','wrong1','right1','button1-1');
          else{
            flag_0+=1;
            wrong_condition('output1','wrong1','right1');
            if (flag_0===2){
                if(document.getElementById('output1').value==ans_11)
                document.getElementById('right1').style.visibility="visible";
              else
              document.getElementById('button1').innerHTML="Result";
            }
          }
        }

      };
      var flag1_1=0;
      var ans_22=arr1[r][1];
      document.getElementById('button1-1').onclick=function() {

        if(document.getElementById('output1-1').value=="")
        {
          if(document.getElementById('button1-1').innerHTML==="Result"){
            document.getElementById('output1-1').value=ans_22
            document.getElementById('button1-2').style.visibility="visible";
            button('button1-1','wrong1-1');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output1-1').value==ans_22)
            right_condition('button1-1','wrong1-1','right1-1','button1-2');
          else{
            flag1_1+=1;
            wrong_condition('output1-1','wrong1-1','right1-1');
            if (flag1_1===2){
              if(document.getElementById('output1-1').value==ans_22)
                document.getElementById('right1-1').style.visibility="visible";
              else
              document.getElementById('button1-1').innerHTML="Result";
            }
          }
        }
      };
      var flag2_2=0;
      var ans_33=arr1[r][2];
      document.getElementById('button1-2').onclick=function() {
        if(document.getElementById('output1-2').value=="")
        {
          if(document.getElementById('button1-2').innerHTML==="Result"){
            document.getElementById('output1-2').value=ans_33;
            document.getElementById('button1-3').style.visibility="visible";
            button('button1-2','wrong1-2');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output1-2').value==ans_33)
            right_condition('button1-2','wrong1-2','right1-2','button1-3');
          else{
            flag2_2+=1;
            wrong_condition('output1-2','wrong1-2','right1-2');
            if (flag2_2===2){
              if(document.getElementById('output1-2').value==ans_33)
                document.getElementById('right1-2').style.visibility="visible";
              else
              document.getElementById('button1-2').innerHTML="Result";
            }
          }
        }
      };
      var flag3_3=0;
      var ans_44=arr1[r][3];
      //var ans="2.4xMath.pow(10,2)";
      document.getElementById('button1-3').onclick=function() {

        if(document.getElementById('output1-3').value=="")
        {
          if(document.getElementById('button1-3').innerHTML==="Result"){
            document.getElementById('output1-3').value=ans_44;
            document.getElementById('button1-4').style.visibility="visible";
            button('button1-3','wrong1-3');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output1-3').value==ans_44)
            right_condition('button1-3','wrong1-3','right1-3','button1-4');
          else{
            flag3_3+=1;
            wrong_condition('output1-3','wrong1-3','right1-3');
            if (flag3_3===2){
              if(document.getElementById('output1-3').value==ans_44)
                document.getElementById('right1-3').style.visibility="visible";
              else
              document.getElementById('button1-3').innerHTML="Result";
            }
          }
        }
      };
      var flag4_4=0;
      var ans_55=arr1[r][4];
      document.getElementById('button1-4').onclick=function() {
        if(document.getElementById('output1-4').value=="")
        {
          if(document.getElementById('button1-4').innerHTML==="Result"){
            document.getElementById('output1-4').value=ans_55;
            document.getElementById('button1-5').style.visibility="visible";
            button('button1-4','wrong1-4');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output1-4').value==ans_55)
            right_condition('button1-4','wrong1-4','right1-4','button1-5');
          else{
            flag4_4+=1;
            wrong_condition('output1-4','wrong1-4','right1-4');
            if (flag4_4===2){
              if(document.getElementById('output1-4').value==ans_55)
                document.getElementById('right1-4').style.visibility="visible";
              else
              document.getElementById('button1-4').innerHTML="Result";
            }
          }
        }
      };
      var flag5_5=0
      var ans_66=arr1[r][5];
      document.getElementById('button1-5').onclick=function() {
        if(document.getElementById('output1-5').value=="")
        {
          if(document.getElementById('button1-5').innerHTML==="Result"){
            document.getElementById('output1-5').value=ans_66;
            document.getElementById('button1-6').style.visibility="visible";
            button('button1-5','wrong1-5');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output1-5').value==ans_66)
            right_condition('button1-5','wrong1-5','right1-5','button1-6');
          else{
            flag5_5+=1;
            wrong_condition('output1-5','wrong1-5','right1-5');
            if (flag5_5===2){
              if(document.getElementById('output1-5').value==ans_66)
                document.getElementById('right1-5').style.visibility="visible";
              else
              document.getElementById('button1-5').innerHTML="Result";
            }
          }
        }
      };
      var flag6_6=0;
      var ans_77=arr1[r][6];
      document.getElementById('button1-6').onclick=function() {
        if(document.getElementById('output1-6').value=="")
        {
          if(document.getElementById('button1-6').innerHTML==="Result"){
            document.getElementById('output1-6').value=ans_77;
            document.getElementById('button1-7').style.visibility="visible";
            button('button1-6','wrong1-6');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output1-6').value==ans_77)
            right_condition('button1-6','wrong1-6','right1-6','button1-7');
          else{
            flag6_6+=1;
            wrong_condition('output1-6','wrong1-6','right1-6');
            if (flag6_6===2){
              if(document.getElementById('output1-6').value==ans_77)
                document.getElementById('right1-6').style.visibility="visible";
              else
              document.getElementById('button1-6').innerHTML="Result";
            }
          }
        }
      };
      var flag7_7=0;
      var ans_88=arr1[r][7];
      document.getElementById('button1-7').onclick=function() {
        if(document.getElementById('output1-7').value=="")
        {
          if(document.getElementById('button1-7').innerHTML==="Result"){
            document.getElementById('output1-7').value=ans_88;
            button('button1-7','wrong1-7');
            document.getElementById('nextButton').style.visibility="visible";
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output1-7').value==ans_88)
          {
            right_condition('button1-7','wrong1-7','right1-7','nextButton');
            document.getElementById('nextButton').style.visibility="visible";
          }
          else{
            flag7_7+=1;
            wrong_condition('output1-7','wrong1-7','right1-7','button1-7');
            if (flag7_7===2){
              if(document.getElementById('output1-7').value==ans_88)
              {
                document.getElementById('right1-7').style.visibility="visible";
               document.getElementById('nextButton').style.visibility="visible";
             }
              else
              document.getElementById('button1-7').innerHTML="Result";
            }
          }
        }
      };
    }

    else if (simsubscreennum==9)
    {
        refresh('wrong1','wrong1-1','wrong1-2','wrong1-3','wrong1-4','wrong1-5','wrong1-6','wrong1-7','right1','right1-1','right1-2','right1-3','right1-4','right1-5','right1-6','right1-7');
        document.getElementById('c12').style.visibility="hidden";
        document.getElementById('ccc').style.visibility="visible";
        document.getElementById('10-1p').style.visibility="visible";
        document.getElementById('ok-1p').style.visibility="visible";
        document.getElementById('ok-1p').onclick=function() {
        document.getElementById('10-1p').style.visibility="hidden";
        document.getElementById('ok-1p').style.visibility="hidden";
        myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 170px; top: 430px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)";
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)";
        // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('11-p22').onclick=function() { step12_p(); };
      };
    }
    else if (simsubscreennum==10)
    {
      document.getElementById('ccc').style.visibility="hidden";
      document.getElementById('22-03').style.visibility="hidden";
      document.getElementById('22-p22').style.visibility="hidden";
      myInt = setInterval(function(){ animatearrow(); }, 500);
      document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 460px; top: 300px; height: 40px; z-index: 10;";
      document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
      // Code for IE9
      document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
      // Standard syntax
      document.getElementById("arrow1").style.transform = "rotate(360deg)";
      document.getElementById('22-1s').onclick=function() { step2_22(); };
    }
    else if (simsubscreennum==11)
    {
      document.getElementById('11-3s').style.visibility="hidden";
      document.getElementById('11-4s').style.visibility="hidden";
      document.getElementById('22-1s').style.visibility="hidden";
      setTimeout(function()
      {
      document.getElementById('m1-2').style.visibility="visible";
      document.getElementById('m2-2').style.visibility="visible";
      document.getElementById('111-1a').style.visibility="visible";

      document.getElementById('11-01s').style.visibility="visible";
      document.getElementById('11-02s').style.visibility="visible";
      document.getElementById('11-022s').style.visibility="visible";
      document.getElementById('11-22s').style.visibility="visible";
      document.getElementById('11-33s').style.visibility="visible";
      document.getElementById('sco3').style.visibility="visible";

        setTimeout(function()
        {
        document.getElementById('sco3').style.visibility="hidden";
        document.getElementById('11-022s').style.animation = "water-6 5s 1 forwards";
        setTimeout(function()
        {
          for(i=0;i<=ar[r].length-1;i++)
          document.getElementById('can1s').innerHTML="Wet bulb temperature="+ar[r][i-1]+" &#8451";
          for(i=0;i<=ar[r].length-1;i++)
          document.getElementById('can2s').innerHTML="Dry bulb temperature="+ar[r][i]+" &#8451";
          setTimeout(function()
          {
            document.getElementById('nextButton').style.visibility="visible";
          },2000);
        },6000);
        },1000);
      },1000);

    }

    else if (simsubscreennum==12)
    {
     // visible("18-111","18-222","18-333","18-444","18-555","18-666","18-777","18-888");
      document.getElementById('11-01s').style.visibility="hidden";
      document.getElementById('11-02s').style.visibility="hidden";
      document.getElementById('111-1a').style.visibility="hidden";
      document.getElementById('11-22s').style.visibility="hidden";
      document.getElementById('11-33s').style.visibility="hidden";
      document.getElementById('m1-2').style.visibility="hidden";
      document.getElementById('m2-2').style.visibility="hidden";
      document.getElementById('cc1').style.visibility="visible";
      for(i=0;i<=ar[r].length-1;i++)
      {
        document.getElementById("r"+i).innerHTML=ar[r][i];
      }
      var flag_21=0;
      var ans_21=ar1[r][0];
      document.getElementById('button11').onclick=function() {
        if(document.getElementById('output11').value=="")
        {
          if(document.getElementById('button11').innerHTML==="Result"){
            document.getElementById('output11').value=ans_21;
            document.getElementById("button11-1").style.visibility="visible";
            button('button11','wrong11');
          }
          else
            alert("Enter the value to proceed");
        }
        else{
          if(document.getElementById('output11').value==ans_21)
            right_condition('button11','wrong11','right11','button11-1');
          else{
            flag_21+=1;
            wrong_condition('output11','wrong11','right11');
            if (flag_21===2){
               if(document.getElementById('output11').value==ans_21)
                document.getElementById('right11').style.visibility="visible";
              else
              document.getElementById('button11').innerHTML="Result";
            }
          }
        }
      };
      var flag1_31=0;
      var ans_31=ar1[r][1];
      document.getElementById('button11-1').onclick=function() {
        if(document.getElementById('output11-1').value=="")
        {
          if(document.getElementById('button11-1').innerHTML==="Result"){
            document.getElementById('output11-1').value=ans_31;
            document.getElementById("button11-2").style.visibility="visible";
            button('button11-1','wrong11-1');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output11-1').value==ans_31)
            right_condition('button11-1','wrong11-1','right11-1','button11-2');
          else{
            flag1_31+=1;
            wrong_condition('output11-1','wrong11-1','right11-1');
            if (flag1_31===2){
               if(document.getElementById('output11-1').value==ans_31)
                document.getElementById('right11-1').style.visibility="visible";
              else
              document.getElementById('button11-1').innerHTML="Result";
            }
          }
        }
      };
      var flag2_41=0;
      var ans_41=ar1[r][2];
      document.getElementById('button11-2').onclick=function() {
        if(document.getElementById('output11-2').value=="")
        {
          if(document.getElementById('button11-2').innerHTML==="Result"){
            document.getElementById('output11-2').value=ans_41;
            document.getElementById("button11-3").style.visibility="visible";
            button('button11-2','wrong11-2');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output11-2').value==ans_41)
            right_condition('button11-2','wrong11-2','right11-2','button11-3');
          else{
            flag2_41+=1;
            wrong_condition('output11-2','wrong11-2','right11-2');
            if (flag2_41===2){
               if(document.getElementById('output11-2').value==ans_41)
                document.getElementById('right11-2').style.visibility="visible";
              else
              document.getElementById('button11-2').innerHTML="Result";
            }
          }
        }
      };
      var flag3_51=0;
      var ans_51=ar1[r][3];
      document.getElementById('button11-3').onclick=function() {
        if(document.getElementById('output11-3').value=="")
        {
          if(document.getElementById('button11-3').innerHTML==="Result"){
            document.getElementById('output11-3').value=ans_51;
            document.getElementById("button11-4").style.visibility="visible";
            button('button11-3','wrong11-3');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output11-3').value==ans_51)
            right_condition('button11-3','wrong11-3','right11-3','button11-4');
          else{
            flag3_51+=1;
            wrong_condition('output11-3','wrong11-3','right11-3');
            if (flag3_51===2){
               if(document.getElementById('output11-3').value==ans_51)
                document.getElementById('right11-3').style.visibility="visible";
              else
              document.getElementById('button11-3').innerHTML="Result";
            }
          }
        }
      };
      var flag4_61=0;
      var ans_61=ar1[r][4];
      //var ans="2.4xMath.pow(10,2)";
      document.getElementById('button11-4').onclick=function() {

        if(document.getElementById('output11-4').value=="")
        {
          if(document.getElementById('button11-4').innerHTML==="Result"){
            document.getElementById('output11-4').value=ans_61;
            document.getElementById("button11-5").style.visibility="visible";
            button('button11-4','wrong11-4');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output11-4').value==ans_61)
            right_condition('button11-4','wrong11-4','right11-4','button11-5');
          else{
            flag4_61+=1;
            wrong_condition('output11-4','wrong11-4','right11-4');
            if (flag4_61===2){
               if(document.getElementById('output11-4').value==ans_61)
                document.getElementById('right11-4').style.visibility="visible";
              else
              document.getElementById('button11-4').innerHTML="Result";
            }
          }
        }
      };
      var flag5_71=0
      var ans_71=ar1[r][5];
      document.getElementById('button11-5').onclick=function() {
        if(document.getElementById('output11-5').value=="")
        {
          if(document.getElementById('button11-5').innerHTML==="Result"){
            document.getElementById('output11-5').value=ans_71;
            document.getElementById("button11-6").style.visibility="visible";
            button('button11-5','wrong11-5');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output11-5').value==ans_71)
            right_condition('button11-5','wrong11-5','right11-5','button11-6');
          else{
            flag5_71+=1;
            wrong_condition('output11-5','wrong11-5','right11-5');
            if (flag5_71===2){
               if(document.getElementById('output11-5').value==ans_71)
                document.getElementById('right11-5').style.visibility="visible";
              else
              document.getElementById('button11-5').innerHTML="Result";
            }
          }
        }
      };
      var flag6_81=0;
      var ans_81=ar1[r][6];
      document.getElementById('button11-6').onclick=function() {
        if(document.getElementById('output11-6').value=="")
        {
          if(document.getElementById('button11-6').innerHTML==="Result"){
            document.getElementById('output11-6').value=ans_81;
            document.getElementById("button11-7").style.visibility="visible";
            button('button11-6','wrong11-6');
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output11-6').value==ans_81)
            right_condition('button11-6','wrong11-6','right11-6','button11-7');
          else{
            flag6_81+=1;
            wrong_condition('output11-6','wrong11-6','right11-6');
            if (flag6_81===2){
               if(document.getElementById('output11-6').value==ans_81)
                document.getElementById('right11-6').style.visibility="visible";
              else
              document.getElementById('button11-6').innerHTML="Result";
            }
          }
        }
      };
      var flag7_91=0;
      var ans_91=ar1[r][7];
      document.getElementById('button11-7').onclick=function() {
        if(document.getElementById('output11-7').value=="")
        {
          if(document.getElementById('button11-7').innerHTML==="Result"){
            document.getElementById('output11-7').value=ans_91;
            button('button11-7','wrong11-7');
            document.getElementById('nextButton').style.visibility="visible";
          }
          else
            alert("Enter the value to proceed");
        }
        else {
          if(document.getElementById('output11-7').value==ans_91)
          {
            right_condition('button11-7','wrong11-7','right11-7','nextButton');
            document.getElementById('nextButton').style.visibility="visible";
          }
          else{
            flag7_91+=1;
            wrong_condition('output11-7','wrong11-7','right11-7');
            if (flag7_91===2){
               if(document.getElementById('output11-7').value==ans_77)
               {
                document.getElementById('right11-7').style.visibility="visible";
                document.getElementById('nextButton').style.visibility="visible";
                }
              else
              document.getElementById('button11-7').innerHTML="Result";
            }
          }
        }
      };
    }

    else if (simsubscreennum==13)
    {
    //  refresh_11();
    refresh('wrong11','wrong11-1','wrong11-2','wrong11-3','wrong11-4','wrong11-5','wrong11-6','wrong11-7','right11','right11-1','right11-2','right11-3','right11-4','right11-5','right11-6','right11-7');
      document.getElementById('cc1').style.visibility="hidden";

      document.getElementById('ob1').style.visibility="hidden";
      document.getElementById('table1').style.visibility="hidden";

      for(i=1;i<=v1[r].length-1;i++)
      for(i=1;i<=v2[r].length-1;i++)
      for(i=1;i<=v3[r].length-1;i++)
      document.getElementById('can-42').innerHTML="Relative humidity in Place 1="+v1[r][i]+"%, Place 2="+v2[r][i]+"%, Place 3="+v3[r][i]+"%";
      document.getElementById('nextButton').style.visibility="visible";

         var slider = document.getElementById("mag");
              var output = document.getElementById("final");
              var contain = document.getElementById("magcontainer");
              var x = document.getElementById("maglevel");
              var w=output.width;
              slider.oninput = function() {
                var fw=w+(w*2*(this.value/100));
                  output.width=fw;
              }


    }
    else if (simsubscreennum==14)
    {
      for(i=0;i<=v1[r].length-1;i++)
      document.getElementById("k"+i).innerHTML=v1[r][i];
      for(i=0;i<=v2[r].length-1;i++)
      document.getElementById("f"+i).innerHTML=v2[r][i];
      for(i=0;i<=v3[r].length-1;i++)
      document.getElementById("d"+i).innerHTML=v3[r][i];
      for(i=0;i<=avg[r].length-1;i++)
      document.getElementById("t"+i).innerHTML=avg[r][i];
      setTimeout(function()
      {
        for(i=0;i<=avg[r].length-1;i++)
        document.getElementById('l'+i).innerHTML="1.Using Whirling Hygrometer(By calculations)Relative humidity in a given area in mine is="+avg[r][i]+"%";
        for(i=1;i<=avg[r].length-1;i++)
        document.getElementById('l'+i).innerHTML="2.Using Psychrometric chart Relative humidity in a given area in mine is="+avg[r][i]+"%";
      },1000);
    }
  }

  function step11()
  {
    document.getElementById('12').style.visibility="hidden";
    document.getElementById('okk').style.visibility="hidden";
    document.getElementById('nextButton').style.visibility="visible";
  }

  function step1()
  {
    myStopFunction();
    document.getElementById('11').onclick="";
    document.getElementById("11").style.animation = "mover 5s forwards";
    setTimeout(function()
    {

     document.getElementById('n1').style.visibility="visible";
     document.getElementById('n2').style.visibility="visible";

      myInt = setInterval(function(){ animatearrow(); }, 500);

      document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 610px; top: 260px; height: 40px; z-index: 10;";

      document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
      // Code for IE9
      document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
      // Standard syntax
      document.getElementById("arrow1").style.transform = "rotate(360deg)";
    },6000);
    document.getElementById('22').onclick=function() { step1_1(); };
  }

  function step1_1()
  {
    myStopFunction();
    document.getElementById('22').onclick="";

    setTimeout(function()
    {
    document.getElementById('n1').style.visibility="hidden";
     document.getElementById('n2').style.visibility="hidden";

      document.getElementById("22").style.animation = "moveb 1s forwards";
      setTimeout(function()
      {
        document.getElementById('22').style.visibility="hidden";
        document.getElementById('22-01').style.visibility="visible";
        document.getElementById("drop-1").style.visibility="visible";
        document.getElementById("drop-1").style.animation="drop1 1s 3";

        setTimeout(function()
        {
          document.getElementById('22').style.visibility="visible";
          document.getElementById('22-01').style.visibility="hidden";
          document.getElementById("drop-1").style.visibility="hidden";
            setTimeout(function()
            {
              validateAnswer(0,1,"450px","400px");
            },2000);
        },3500);
      },2000);
    },1000);
  }

  function step2()
  {
    myStopFunction();

    document.getElementById('22-1').onclick="";
    setTimeout(function()
    {
      document.getElementById('22-1').style.visibility="hidden";
      setTimeout(function()
      {
        document.getElementById("11-4").style.animation = "rotate 7s linear forwards";
        setTimeout(function()
        {
          document.getElementById('can12').innerHTML="Time=120 s";
          setTimeout(function()
          {
            document.getElementById('221').style.visibility="visible";
            document.getElementById("221").style.animation = "moveh 1s forwards";
            setTimeout(function()
           {
            document.getElementById('221').style.visibility="hidden";
            document.getElementById('nextButton').style.visibility="visible";
            },2000);
          },1000);
        },7000);
      },1000);
    },2000);
    document.getElementById("22-1").style.animation = "moveh 1s forwards";
  }

  function step10_1()
  {
    document.getElementById('10-1').style.visibility="hidden";
    document.getElementById('ok-1').style.visibility="hidden";
    setTimeout(function()
    {
      document.getElementById('11-011').style.animation = "water-5 5s 1 forwards";
      document.getElementById('11-022').style.animation = "water-6 5s 1 forwards";
      setTimeout(function()
      {
        document.getElementById('can1').innerHTML="Dry bulb temperature=30 &#8451";
        document.getElementById('can2').innerHTML="Wet bulb temperature=24.3 &#8451";
        setTimeout(function()
        {
          document.getElementById('nextButton').style.visibility="visible";
        },2000);
      },6000);
    },1000);
  }
  //place2 step1
  function step12()
  {
    myStopFunction();
    document.getElementById('11-p2').onclick="";

    document.getElementById("11-p2").style.animation = "mover 5s forwards";
    setTimeout(function()
    {
    document.getElementById('n1-1').style.visibility="visible";
     document.getElementById('n2-1').style.visibility="visible";

      myInt = setInterval(function(){ animatearrow(); }, 500);

      document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 610px; top: 260px; height: 40px; z-index: 10;";

      document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
      // Code for IE9
      document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
      // Standard syntax
      document.getElementById("arrow1").style.transform = "rotate(360deg)";
    },6000);
    document.getElementById('22-p2').onclick=function() { step1_121(); };
  }

  function step1_121()
  {
    myStopFunction();
    document.getElementById('22-p2').onclick="";
     document.getElementById('n1-1').style.visibility="hidden";
     document.getElementById('n2-1').style.visibility="hidden";

    setTimeout(function()
    {
      document.getElementById("22-p2").style.animation = "moveb 1s forwards";
      setTimeout(function()
      {
        document.getElementById('22-p2').style.visibility="hidden";
        document.getElementById('22-02').style.visibility="visible";
        document.getElementById("drop-2").style.visibility="visible";
        document.getElementById("drop-2").style.animation="drop 1s 3";

      setTimeout(function()
      {
        document.getElementById('22-p2').style.visibility="visible";
        document.getElementById('22-02').style.visibility="hidden";
        document.getElementById("drop-2").style.visibility="hidden";
        setTimeout(function()
        {
          document.getElementById('nextButton').style.visibility="visible";
        },1000);

      },3500);
    },2000);
    },1000);
  }

  //place2 step2
  function step2_2()
  {
    myStopFunction();
    document.getElementById('22-1q').onclick="";
    setTimeout(function()
    {
      document.getElementById('22-1q').style.visibility="hidden";
      setTimeout(function()
      {
        document.getElementById("11-4q").style.animation = "rotate 7s linear forwards";
        setTimeout(function()
        {
          document.getElementById('can12q').innerHTML="Time=120 s";
          setTimeout(function()
          {
            setTimeout(function()
            {
            document.getElementById('222').style.visibility="visible";
            document.getElementById("222").style.animation = "moveh 1s forwards";
              setTimeout(function()
              {
              document.getElementById('222').style.visibility="hidden";
              validateAnswer(1,2,"370px","400px");
            },2000);
            },1000);
          },1000);
        },7000);
      },1000);
    },2000);
    document.getElementById("22-1q").style.animation = "moveh 1s forwards";
  }

  function step12_p()
  {
    myStopFunction();
    document.getElementById('11-p22').onclick="";
    
    document.getElementById("11-p22").style.animation = "mover 5s forwards";
    setTimeout(function()
    {
       document.getElementById('n1-3').style.visibility="visible";
     document.getElementById('n2-3').style.visibility="visible";

      myInt = setInterval(function(){ animatearrow(); }, 500);
      document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 610px; top: 260px; height: 40px; z-index: 10;";
      document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)";
      // Code for IE9
      document.getElementById("arrow1").style.msTransform = "rotate(360deg)";
      // Standard syntax
      document.getElementById("arrow1").style.transform = "rotate(360deg)";
    },6000);
    document.getElementById('22-p22').onclick=function() { step1_1p(); };
  }

  function step1_1p()
  {
    myStopFunction();
    document.getElementById('22-p22').onclick="";
     document.getElementById('n1-3').style.visibility="hidden";
     document.getElementById('n2-3').style.visibility="hidden";

    setTimeout(function()
    {
      document.getElementById("22-p22").style.animation = "moveb 1s forwards";
      setTimeout(function()
      {
        document.getElementById('22-p22').style.visibility="hidden";
        document.getElementById('22-03').style.visibility="visible";
        document.getElementById("drop-3").style.visibility="visible";
        document.getElementById("drop-3").style.animation="drop 1s 3";

        setTimeout(function()
        {
          document.getElementById('22-p22').style.visibility="visible";
          document.getElementById('22-03').style.visibility="hidden";
          document.getElementById("drop-3").style.visibility="hidden";
          setTimeout(function()
          {
          validateAnswer(2,0,"370px","400px");
        },1000);
        },3500);
      },2000);
    },1000);
  }

  function step2_22()
  {
    myStopFunction();
    document.getElementById('22-1s').onclick="";
    setTimeout(function()
    {
      document.getElementById('22-1s').style.visibility="hidden";
      setTimeout(function()
      {
        document.getElementById("11-4s").style.animation = "rotate 7s linear forwards";
        setTimeout(function()
        {
          document.getElementById('can12s').innerHTML="Time=120 s";
          setTimeout(function()
          {
            document.getElementById('223').style.visibility="visible";
             document.getElementById("223").style.animation = "moveh 1s forwards";
            setTimeout(function()
             {
              document.getElementById('223').style.visibility="hidden";
             document.getElementById('nextButton').style.visibility="visible";
             },2000);
          },1000);
        },7000);
      },1000);
    },2000);
    document.getElementById("22-1s").style.animation = "moveh 1s forwards";
  }

  function refresh(w1,w2,w3,w4,
  w5,w6,w7,w8,r1,r2,r3,r4,r5,r6,r7,r8)
  {
    document.getElementById(w1).style.visibility="hidden";
    document.getElementById(w2).style.visibility="hidden";
    document.getElementById(w3).style.visibility="hidden";
    document.getElementById(w4).style.visibility="hidden";
    document.getElementById(w5).style.visibility="hidden";
    document.getElementById(w6).style.visibility="hidden";
    document.getElementById(w7).style.visibility="hidden";
    document.getElementById(w8).style.visibility="hidden";

    document.getElementById(r1).style.visibility="hidden";
    document.getElementById(r2).style.visibility="hidden";
    document.getElementById(r3).style.visibility="hidden";
    document.getElementById(r4).style.visibility="hidden";
    document.getElementById(r5).style.visibility="hidden";
    document.getElementById(r6).style.visibility="hidden";
    document.getElementById(r7).style.visibility="hidden";
    document.getElementById(r8).style.visibility="hidden";
  }
