function navNext() {
  for (temp = 0; temp <= 9; temp++) {
    document.getElementById('canvas' + temp).style.visibility = "hidden";
  }

  simsubscreennum += 1;

  document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
  document.getElementById('nextButton').style.visibility = "hidden";
  magic();
}

var ca;
var questions = ["In general, which connection offer more resistance if number of individual resistance is same",
  "What’s remain same in series connected roadways",
];

var options2 = [
  ["Series", "Parallel", "Both offer same equivalent resistance", "None of the above"], //300rpm
  ["Pressure", "Quantity of air", "Resistance", "None of the above"], //7.74
];

function validateAnswer(qn, ans, left, top) {
  $("#answer").empty();
  document.getElementById("a").innerHTML = "";
  document.getElementById("questDiv").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
  document.getElementById("q").innerHTML = questions[qn];
  if (qn === 0) document.getElementById('questDiv').style.width = "370px";
  if (qn === 1) document.getElementById('questDiv').style.width = "230px";
  el = document.createElement("option");
  el.textContent = " ";
  el.value = " ";
  answer.appendChild(el);

  for (j = 0; j < options2[qn].length; j++) {
    opt = options2[qn][j];

    el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    answer.appendChild(el);
    $("#answer").change(function () {
      ca = $(this).children("option:selected").val();
      if (options2[qn][ans] === ca) {
        document.getElementById("a").innerHTML = "Correct Answer!";
      }
      else {
        document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
      }
      setTimeout(function () {
        document.getElementById("questDiv").style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "visible";
      }, 1500);
    });
  }
}

var p = Math.floor(Math.random() * (5));

var data = [[12, 1.7, 8.06],
[24, 3.2, 7.59],
[30, 4.0, 7.59],
];

var n;
//for 300rpm at point 1
var data1 = [[6.4, 8.4, 2.0, 7.2, 7.8, 0.6, 6.8, 8.3, 1.5],
[6.1, 8.3, 2.2, 7.3, 7.7, 0.4, 6.7, 8.4, 1.7],
[6.5, 8.5, 2.0, 7.5, 7.6, 0.1, 6.4, 8.2, 1.8],
[6.2, 8.5, 2.3, 7.2, 7.5, 0.3, 6.2, 8.1, 1.9],
[6.6, 8.7, 2.1, 7.5, 7.3, 0.2, 6.5, 8.2, 1.7]];

//for 300rpm at point 2
var data2 = [[6.2, 8.6, 2.4, 6.9, 8.1, 1.2, 6.7, 8.1, 1.4],
[6.3, 8.8, 2.5, 6.8, 8.2, 1.4, 6.6, 8.2, 1.6],
[6.4, 8.7, 2.3, 6.9, 8.5, 1.6, 6.3, 8.5, 2.2],
[6.7, 8.7, 2.0, 6.5, 8.4, 1.9, 6.2, 8.6, 2.4],
[6.1, 8.6, 2.5, 6.7, 8.3, 1.6, 6.5, 8.3, 1.8]];

var data5 = [[2.086, 0.626, 1.565, 1.615, 0.159, 0.257],
[2.295, 0.417, 1.773, 1.719, 0.159, 0.273],
[2.086, 0.104, 1.878, 1.769, 0.159, 0.281],
[2.399, 0.313, 1.982, 1.818, 0.159, 0.289],
[2.191, 0.209, 1.773, 1.719, 0.159, 0.273]];

var data6 = [[2.504, 1.252, 1.461, 1.560, 1.588, 0.626, 0.248, 0.252, 2.480],
[2.608, 1.461, 1.461, 1.560, 1.640, 1.043, 0.248, 0.261, 4.002],
[2.399, 1.669, 2.295, 1.956, 1.862, 1.565, 0.311, 0.296, 5.286],
[2.086, 1.982, 2.504, 2.043, 1.930, 1.669, 0.325, 0.307, 5.440],
[2.608, 1.669, 1.878, 1.769, 1.744, 1.461, 0.281, 0.277, 5.268]];
//-----------------------------------------blink arrow on the next step---------------------------------------------

function animatearrow() {
  if (document.getElementById('arrow1').style.visibility === "hidden")
    document.getElementById('arrow1').style.visibility = "visible";
  else
    document.getElementById('arrow1').style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
  clearInterval(myInt);
  document.getElementById('arrow1').style.visibility = "hidden";
}
var j0 = 0;
function fillTable(repeat) {
  var tb1 = document.getElementById("table1");
  var row = tb1.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = (repeat + 1);
  for (i = 0; i <= data[j0].length - 1; i++) {
    var cell = row.insertCell();
    cell.innerHTML = data[j0][i];
  }
  j0++;
}


//-------------------------------------function magic starts here----------------------------------------------------
function animateArrowATPosition(left, top, height, degg) {
  document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:" + left + "px; top: " + top + "px; height:" + height + "px; z-index: 10;";
  document.getElementById("arrow1").style.WebkitTransform = "rotate(" + degg + "deg)";
  // Code for IE9
  document.getElementById("arrow1").style.msTransform = "rotate(" + degg + "deg)";
  // Standard syntax
  document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
}
function magic() {
  if (simsubscreennum === 1) {
  //  document.getElementById('x').style.visibility = "visible";
    myInt = setInterval(function () { animatearrow(); }, 500);
    animateArrowATPosition(245, 220, 20, 270);
    document.getElementById("slider2").onclick = function () { step1(); };
  }
  if (simsubscreennum === 2) {
  //  document.getElementById('x').style.visibility = "hidden";
    document.getElementById('switch2').style.visibility = "hidden";
    document.getElementById('Sample01').style.visibility = "hidden";
    document.getElementById('m11').style.display = "none";
    document.getElementById('click1').style.visibility = "hidden";
    document.getElementById('circle2').style.visibility = "hidden";
    document.getElementById('arrow2').style.visibility = "hidden";
    document.getElementById('wind').style.visibility = "hidden";
    document.getElementById('speed').style.visibility = "hidden";
    document.getElementById('ndswh').style.visibility = "hidden";
    myInt = setInterval(function () { animatearrow(); }, 500);
    animateArrowATPosition(580, 340, 30, -90);
    document.getElementById('manometer1').onclick = function () { step2(); };
  }

  if (simsubscreennum === 3) {
    

    document.getElementById('table1').style.display = "none";
    document.getElementById('ca-1').style.visibility = "hidden";
    document.getElementById('ca-2').style.visibility = "hidden";
    document.getElementById('ca-3').style.visibility = "hidden";
    document.getElementById('scale').style.display = "none";
    document.getElementById('30cm').style.visibility = "hidden";
    document.getElementById('10').style.visibility = "visible";
    document.getElementById('ok').onclick = function () {
      document.getElementById('10').style.visibility = "hidden";
      document.getElementById('ok').style.visibility = "hidden";
      document.getElementById('R1').style.visibility = "visible";
    document.getElementById('R2').style.visibility = "visible";
    document.getElementById('R3').style.visibility = "visible";
    document.getElementById('R4').style.visibility = "visible";
      document.getElementById('a23').style.visibility = "visible";
      document.getElementById('a22').style.visibility = "visible";
      document.getElementById('scale').style.visibility = "visible";
      myInt = setInterval(function () { animatearrow(); }, 500);
      animateArrowATPosition(485, 290, 30, -90);
      document.getElementById('a22').onclick = function () {
        myStopFunction();
        document.getElementById('a22').onclick = "";
        document.getElementById('a24').style.visibility = "visible";
        myInt = setInterval(function () { animatearrow(); }, 500);
        animateArrowATPosition(540, 370, 30, -90);
        document.getElementById('a24').onclick = function () {
          myStopFunction();
          document.getElementById('a24').onclick = "";
          document.getElementById('R1').style.visibility = "hidden";
          document.getElementById('R2').style.visibility = "hidden";
          document.getElementById('R3').style.visibility = "hidden";
          document.getElementById('R4').style.visibility = "hidden";
          document.getElementById('a24').style.visibility = "hidden";
          document.getElementById('a22').style.visibility = "hidden";
          document.getElementById('a23').style.visibility = "hidden";
          document.getElementById('can1').style.visibility = "visible";
          document.getElementById('can2').style.visibility = "visible";
          document.getElementById('can3').style.visibility = "visible";
          document.getElementById('m-1').style.visibility = "visible";
          document.getElementById('m-2').style.visibility = "visible";
          document.getElementById('m-5').style.visibility = "visible";
          document.getElementById('white1').style.visibility = "visible";
          document.getElementById('white2').style.visibility = "visible";
          document.getElementById('pipe1').style.visibility = "visible";
          document.getElementById('ax1').style.visibility = "visible";
          document.getElementById('ax2').style.visibility = "visible";
          myInt = setInterval(function () { animatearrow(); }, 500);
          animateArrowATPosition(490, 160, 30, 360);
          document.getElementById('ax2').onclick = function () {
            myStopFunction();
            document.getElementById('ax2').onclick = "";
            document.getElementById('ab1').style.visibility = "visible";
            myInt = setInterval(function () { animatearrow(); }, 500);
            animateArrowATPosition(640, 200, 30, -90);
            document.getElementById('ab1').onclick = function () {
              myStopFunction();
              document.getElementById('ab1').onclick = "";
              document.getElementById('m-1').style.visibility = "hidden";
              document.getElementById('m-2').style.visibility = "hidden";
              document.getElementById('m-5').style.visibility = "hidden";
              document.getElementById('can1').style.visibility = "hidden";
              document.getElementById('can2').style.visibility = "hidden";
              document.getElementById('can3').style.visibility = "hidden";
              document.getElementById('ab1').style.visibility = "hidden";
              document.getElementById('samp1').style.visibility = "visible";
              document.getElementById('samp2').style.visibility = "visible";
              document.getElementById('manotop').style.visibility = "visible";
              document.getElementById('img').style.visibility = "visible";
              document.getElementById('mover1').style.visibility = "visible";
              setTimeout(function () {
                document.getElementById('c1').style.visibility = "visible";
                document.getElementById('m-6').style.visibility = "visible";
                document.getElementById('hand1').style.visibility = "visible";
                document.getElementById('p1').style.visibility = "visible";
                myInt = setInterval(function () { animatearrow(); }, 500);
                animateArrowATPosition(150, 200, 20, 180);
                document.getElementById('hand1').onclick = function () { step3(); };
              }, 500);
            };
          };
        };
      };
    };
  }
  if (simsubscreennum === 4) {
    document.getElementById('R1').style.visibility = "hidden";
    document.getElementById('R2').style.visibility = "hidden";
    document.getElementById('R3').style.visibility = "hidden";
    document.getElementById('R4').style.visibility = "hidden";

    document.getElementById('ax1').style.visibility = "hidden";
    document.getElementById('ax2').style.visibility = "hidden";
    document.getElementById('pipe1').style.visibility = "hidden";
    document.getElementById('samp1').style.visibility = "hidden";
    document.getElementById('samp2').style.visibility = "hidden";
    document.getElementById('manotop').style.visibility = "hidden";
    document.getElementById('img').style.visibility = "hidden";
    document.getElementById('mover1').style.visibility = "hidden";
    document.getElementById('p1').style.visibility = "hidden";
    document.getElementById('mover6').style.display = "none";
    document.getElementById('p2').style.visibility = "hidden";
    for (i = 0; i <= data1[p].length - 1; i++) {
      document.getElementById("ro" + i).innerHTML = data1[p][i];
    }
    calc1('button', 'output', 'output', 'button', 'output', 'button1', 'button', 'wrong', 'wrong', 'right', 'button1', 'h1', 'h1', 'output', 'wrong', 'right', 'right', 'h1', 'h1', 'button', 0);
    calc1('button1', 'output1', 'output1', 'button1', 'output1', 'button2', 'button1', 'wrong1', 'wrong1', 'right1', 'button2', 'h2', 'h2', 'output1', 'wrong1', 'right1', 'right1', 'h2', 'h2', 'button1', 1);
    calc1('button2', 'output2', 'output2', 'button2', 'output2', 'button3', 'button2', 'wrong2', 'wrong2', 'right2', 'button3', 'h3', 'h3', 'output2', 'wrong2', 'right2', 'right2', 'h3', 'h3', 'button2', 2);
    calc1('button3', 'output3', 'output3', 'button3', 'output3', 'button4', 'button3', 'wrong3', 'wrong3', 'right3', 'button4', 'h4', 'h4', 'output3', 'wrong3', 'right3', 'right3', 'h4', 'h4', 'button3', 3);
    calc1('button4', 'output4', 'output4', 'button4', 'output4', 'button5', 'button4', 'wrong4', 'wrong4', 'right4', 'button5', 'h5', 'h5', 'output4', 'wrong4', 'right4', 'right4', 'h5', 'h5', 'button4', 4);
    calc1('button5', 'output5', 'output5', 'button5', 'output5', 'nextButton', 'button5', 'wrong5', 'wrong5', 'right5', 'nextButton', 'h6', 'h6', 'output5', 'wrong5', 'right5', 'right5', 'h6', 'h6', 'button5', 5);
  }
  if (simsubscreennum === 5) {
    refresh('right', 'right1', 'right2', 'right3');
    refresh1('h1', 'h2', 'h3', 'h4');
    document.getElementById('c2').style.visibility = "visible";
    document.getElementById('m-7').style.visibility = "visible";
    document.getElementById('a1-5').style.visibility = "visible";
    document.getElementById('img1').style.visibility = "visible";
    document.getElementById('a13-2').style.visibility = "visible";
    document.getElementById('a30-2').style.visibility = "visible";
    document.getElementById('a30-22').style.visibility = "visible";
    document.getElementById('a51-11').style.visibility = "visible";
    document.getElementById('a-21').style.visibility = "visible";
    myInt = setInterval(function () { animatearrow(); }, 500);
    animateArrowATPosition(150, 200, 20, 180);
    document.getElementById('a-21').onclick = function () { step4(); };
  }
  if (simsubscreennum === 6) {
    document.getElementById('a6-12').style.display = "none";
    document.getElementById('a1-5').style.visibility = "hidden";
    document.getElementById('img1').style.visibility = "hidden";
    document.getElementById('a51-111').style.visibility = "hidden";
    // document.getElementById('a5-2').style.visibility="hidden";
    document.getElementById('a13-2').style.visibility = "hidden";
    document.getElementById('a-22').style.visibility = "hidden";
    for (i = 0; i <= data2[p].length - 1; i++) {
      document.getElementById("row" + i).innerHTML = data2[p][i];
    }
    document.getElementById("v1").innerHTML = data5[p][3];
    calc2('button-1', 'output-1', 'output-1', 'button-1', 'output-1', 'button1-1', 'button-1', 'wrong-1', 'wrong-1', 'right-1', 'button1-1', 'h1-1', 'h1-1', 'output-1', 'wrong-1', 'right-1', 'right-1', 'h1-1', 'h1-1', 'button-1', 0);
    calc2('button1-1', 'output1-1', 'output1-1', 'button1-11', 'output1-1', 'button2-1', 'button1-1', 'wrong1-1', 'wrong1-1', 'right1-1', 'button2-1', 'h2-1', 'h2-1', 'output1-1', 'wrong1-1', 'right1-1', 'right1-1', 'h2-1', 'h2-1', 'button1-1', 1);
    calc2('button2-1', 'output2-1', 'output2-1', 'button2-1', 'output2-1', 'button3-1', 'button2-1', 'wrong2-1', 'wrong2-1', 'right2-1', 'button3-1', 'h3-1', 'h3-1', 'output2-1', 'wrong2-1', 'right2-1', 'right2-1', 'h3-1', 'h3-1', 'button2-1', 2);
    calc2('button3-1', 'output3-1', 'output3-1', 'button3-1', 'output3-1', 'button4-1', 'button3-1', 'wrong3-1', 'wrong3-1', 'right3-1', 'button4-1', 'h4-1', 'h4-1', 'output3-1', 'wrong3-1', 'right3-1', 'right3-1', 'h4-1', 'h4-1', 'button3-1', 3);
    calc2('button4-1', 'output4-1', 'output4-1', 'button4-1', 'output4-1', 'nextButton', 'button4-1', 'wrong4-1', 'wrong4-1', 'right4-1', 'nextButton', 'h5-1', 'h5-1', 'output4-1', 'wrong4-1', 'right4-1', 'right4-1', 'h5-1', 'h5-1', 'button4-1', 4);
  }
  //canvas1
  // if (simsubscreennum === 7) {
  //   document.getElementById('x1').style.visibility = "visible";
  //   document.getElementById('h5-1').style.visibility = "hidden";
  //   document.getElementById('right4-1').style.visibility = "hidden";
  //   refresh('right-1', 'right1-1', 'right2-1', 'right3-1');
  //   refresh1('h1-1', 'h2-1', 'h3-1', 'h4-1');
  //   myInt = setInterval(function () { animatearrow(); }, 500);
  //   animateArrowATPosition(245, 220, 20, 270);
  //   // document.getElementById('m').style.visibility = "visible";
  //   document.getElementById("slider22").onclick = function () { step11(); };
  // }

  // if (simsubscreennum === 8) {
  //   document.getElementById('x1').style.visibility = "hidden";
  //   document.getElementById('switch22').style.visibility = "hidden";
  //   document.getElementById('Sample011').style.visibility = "hidden";
  //   document.getElementById('c11').style.display = "none";
  //   // document.getElementById('m').style.visibility = "hidden";
  //   document.getElementById('click11').style.visibility = "hidden";
  //   document.getElementById('circle22').style.visibility = "hidden";
  //   document.getElementById('arrow3').style.visibility = "hidden";
  //   document.getElementById('wind1').style.visibility = "hidden";
  //   document.getElementById('speed0').style.visibility = "hidden";
  //   document.getElementById('ndswh1').style.visibility = "hidden";

  //   document.getElementById('can11').style.visibility = "visible";
  //   document.getElementById('can22').style.visibility = "visible";
  //   document.getElementById('can33').style.visibility = "visible";
  //   document.getElementById('m-11').style.visibility = "visible";
  //   document.getElementById('m-22').style.visibility = "visible";
  //   document.getElementById('m-55').style.visibility = "visible";
  //   document.getElementById('white11').style.visibility = "visible";
  //   document.getElementById('white22').style.visibility = "visible";
  //   document.getElementById('pipe11').style.visibility = "visible";
  //   document.getElementById('ax11').style.visibility = "visible";
  //   document.getElementById('ax22').style.visibility = "visible";
  //   myInt = setInterval(function () { animatearrow(); }, 500);
  //   animateArrowATPosition(490, 160, 30, 360);
  //   document.getElementById('ax22').onclick = function () {
  //     myStopFunction();
  //     document.getElementById('ax22').onclick = "";
  //     document.getElementById('ab11').style.visibility = "visible";
  //     myInt = setInterval(function () { animatearrow(); }, 500);
  //     animateArrowATPosition(640, 200, 30, -90);
  //     document.getElementById('ab11').onclick = function () {
  //       myStopFunction();
  //       document.getElementById('ab11').onclick = "";
  //       document.getElementById('m-11').style.visibility = "hidden";
  //       document.getElementById('m-22').style.visibility = "hidden";
  //       document.getElementById('m-55').style.visibility = "hidden";
  //       document.getElementById('can11').style.visibility = "hidden";
  //       document.getElementById('can22').style.visibility = "hidden";
  //       document.getElementById('can33').style.visibility = "hidden";
  //       document.getElementById('ab11').style.visibility = "hidden";
  //       document.getElementById('samp11').style.visibility = "visible";
  //       document.getElementById('samp22').style.visibility = "visible";
  //       document.getElementById('manotop1').style.visibility = "visible";
  //       document.getElementById('img1').style.visibility = "visible";
  //       document.getElementById('mover11').style.visibility = "visible";
  //       setTimeout(function () {
  //         document.getElementById('d1').style.visibility = "visible";
  //         document.getElementById('m-66').style.visibility = "visible";
  //         document.getElementById('hand11').style.visibility = "visible";
  //         document.getElementById('p11').style.visibility = "visible";
  //         myInt = setInterval(function () { animatearrow(); }, 500);
  //         animateArrowATPosition(150, 200, 20, 180);
  //         document.getElementById('hand11').onclick = function () { step33(); };
  //       }, 500);
  //     };
  //   };
  // }

  // if (simsubscreennum === 9) {
  //   document.getElementById('manotop1').style.visibility = "hidden";
  //   document.getElementById('mover66').style.display = "none";
  //   document.getElementById('p11').style.visibility = "hidden";
  //   document.getElementById('p22').style.visibility = "hidden";
  //   document.getElementById('img1').style.visibility = "hidden";
  //   document.getElementById('para11-15').style.visibility = "hidden";
  //   document.getElementById('para22-15').style.visibility = "hidden";
  //   document.getElementById('para33-15').style.visibility = "hidden";
  //   document.getElementById('pipe11').style.visibility = "hidden";
  //   document.getElementById('ax11').style.visibility = "hidden";
  //   document.getElementById('ax22').style.visibility = "hidden";
  //   document.getElementById('samp11').style.visibility = "hidden";
  //   document.getElementById('samp22').style.visibility = "hidden";

  //   for (i = 0; i <= data3[p].length - 1; i++) {
  //     document.getElementById("r" + i).innerHTML = data3[p][i];
  //   }

  //   calc3('button-11', 'output-11', 'output-11', 'button-11', 'output-11', 'button1-11', 'button-11', 'wrong-11', 'wrong-11', 'right-11', 'button1-11', 'h1-2', 'h1-2', 'output-11', 'wrong-11', 'right-11', 'right-11', 'h1-2', 'h1-2', 'button-11', 0);

  //   calc3('button1-11', 'output1-11', 'output1-11', 'button1-11', 'output1-11', 'button2-11', 'button1-11', 'wrong1-11', 'wrong1-11', 'right1-11', 'button2-11', 'h2-2', 'h2-2', 'output1-11', 'wrong1-11', 'right1-11', 'right1-11', 'h2-2', 'h2-2', 'button1-11', 1);

  //   calc3('button2-11', 'output2-11', 'output2-11', 'button2-11', 'output2-11', 'button3-11', 'button2-11', 'wrong2-11', 'wrong2-11', 'right2-11', 'button3-11', 'h3-2', 'h3-2', 'output2-11', 'wrong2-11', 'right2-11', 'right2-11', 'h3-2', 'h3-2', 'button2-11', 2);

  //   calc3('button3-11', 'output3-11', 'output3-11', 'button3-11', 'output3-11', 'nextButton', 'button3-11', 'wrong3-11', 'wrong3-11', 'right3-11', 'nextButton', 'h4-2', 'h4-2', 'output3-11', 'wrong3-11', 'right3-11', 'right3-11', 'h4-2', 'h4-2', 'button3-11', 3);
  // }

  // if (simsubscreennum === 10) {
  //   refresh('right-11', 'right1-11', 'right2-11', 'right3-11');
  //   refresh1('h1-2', 'h2-2', 'h3-2', 'h4-2');
  //   document.getElementById('e2').style.visibility = "visible";
  //   document.getElementById('m-77').style.visibility = "visible";
  //   document.getElementById('b1-5').style.visibility = "visible";
  //   document.getElementById('img11').style.visibility = "visible";
  //   document.getElementById('b13-2').style.visibility = "visible";
  //   document.getElementById('b30-2').style.visibility = "visible";
  //   document.getElementById('b30-22').style.visibility = "visible";
  //   document.getElementById('b51-11').style.visibility = "visible";
  //   document.getElementById('b-21').style.visibility = "visible";
  //   myInt = setInterval(function () { animatearrow(); }, 500);
  //   animateArrowATPosition(150, 200, 20, 180);
  //   document.getElementById('b-21').onclick = function () { step44(); };
  // }

  // if (simsubscreennum === 11) {
  //   document.getElementById('b6-12').style.display = "none";
  //   document.getElementById('b1-5').style.visibility = "hidden";
  //   document.getElementById('img11').style.visibility = "hidden";
  //   document.getElementById('b51-111').style.visibility = "hidden";
  //   document.getElementById('b13-2').style.visibility = "hidden";
  //   document.getElementById('b-22').style.visibility = "hidden";
  //   document.getElementById('b1-1').style.visibility = "hidden";
  //   document.getElementById('b1-11').style.visibility = "hidden";
  //   document.getElementById('samp11').style.visibility = "hidden";
  //   document.getElementById('samp22').style.visibility = "hidden";
  //   document.getElementById('img11').style.visibility = "hidden";
  //   document.getElementById('para0-12').style.visibility = "hidden";
  //   document.getElementById('para11-22').style.visibility = "hidden";
  //   document.getElementById('para22-22').style.visibility = "hidden";
  //   document.getElementById('para33-22').style.visibility = "hidden";

  //   for (i = 0; i <= data4[p].length - 1; i++) {
  //     document.getElementById("rw" + i).innerHTML = data4[p][i];
  //   }
  //   document.getElementById("v2").innerHTML = data7[p][3];

  //   calc4('button-12', 'output-12', 'output-12', 'button-12', 'output-12', 'button1-12', 'button-12', 'wrong-12', 'wrong-12', 'right-12', 'button1-12', 'h1-3', 'h1-3', 'output-12', 'wrong-12', 'right-12', 'right-12', 'h1-3', 'h1-3', 'button-12', 0);

  //   calc4('button1-12', 'output1-12', 'output1-12', 'button1-12', 'output1-12', 'button2-12', 'button1-12', 'wrong1-12', 'wrong1-12', 'right1-12', 'button2-12', 'h2-3', 'h2-3', 'output1-12', 'wrong1-12', 'right1-12', 'right1-12', 'h2-3', 'h2-3', 'button1-12', 1);

  //   calc4('button2-12', 'output2-12', 'output2-12', 'button2-12', 'output2-12', 'button3-12', 'button2-12', 'wrong2-12', 'wrong2-12', 'right2-12', 'button3-12', 'h3-3', 'h3-3', 'output2-12', 'wrong2-12', 'right2-12', 'right2-12', 'h3-3', 'h3-3', 'button2-12', 2);

  //   calc4('button3-12', 'output3-12', 'output3-12', 'button3-12', 'output3-12', 'button4-12', 'button3-12', 'wrong3-12', 'wrong3-12', 'right3-12', 'button4-12', 'h4-3', 'h4-3', 'output3-12', 'wrong3-12', 'right3-12', 'right3-12', 'h4-3', 'h4-3', 'button3-12', 3);

  //   calc4('button4-12', 'output4-12', 'output4-12', 'button4-12', 'output4-12', 'nextButton', 'button4-12', 'wrong4-12', 'wrong4-12', 'right4-12', 'nextButton', 'h5-3', 'h5-3', 'output4-12', 'wrong4-12', 'right4-12', 'right4-12', 'h5-3', 'h5-3', 'button4-12', 4);

  // }
  if (simsubscreennum === 7) {
    //  document.getElementById('x1').style.visibility = "visible";
    document.getElementById('h5-1').style.visibility = "hidden";
    document.getElementById('right4-1').style.visibility = "hidden";
    refresh('right-1', 'right1-1', 'right2-1', 'right3-1');
    refresh1('h1-1', 'h2-1', 'h3-1', 'h4-1');
    document.getElementById("v2").innerHTML = data6[p][6];

    calc2('button11', 'output11', 'output11', 'button11', 'output11', 'button22', 'button11', 'wrong11', 'wrong11', 'right11', 'button22', 'h11', 'h11', 'output11', 'wrong11', 'right11', 'right11', 'h11', 'h11', 'button11', 5);
    calc2('button22', 'output22', 'output22', 'button22', 'output22', 'button33', 'button22', 'wrong22', 'wrong22', 'right22', 'button33', 'h22', 'h22', 'output22', 'wrong22', 'right22', 'right22', 'h22', 'h22', 'button22', 6);
    calc2('button33', 'output33', 'output33', 'button33', 'output33', 'button44', 'button33', 'wrong33', 'wrong33', 'right33', 'button44', 'h33', 'h33', 'output33', 'wrong33', 'right33', 'right33', 'h33', 'h33', 'button33', 7);
    calc2('button44', 'output44', 'output44', 'button44', 'output44', 'nextButton', 'button44', 'wrong44', 'wrong44', 'right44', 'nextButton', 'h44', 'h44', 'output44', 'wrong44', 'right44', 'right44', 'h44', 'h44', 'button44', 8);

    // calc2( 'button44','output44','output44','button44','output44','button55','button44','wrong44','wrong44','right44','button55','h44','h44','output44','wrong44','right44','right44','h44','h44','button44',8);
    // calc2( 'button55','output55','output55','button55','output55','button66','button55','wrong55','wrong55','right55','button66','h55','h55','output55','wrong55','right55','right55','h55','h55','button55',9);
    // calc2( 'button66','output66','output66','button66','output66','button77','button66','wrong66','wrong66','right66','button77','h66','h66','output66','wrong66','right66','right66','h66','h66','button66',10);
    // calc2( 'button77','output77','output77','button77','output77','nextButton','button77','wrong77','wrong77','right77','nextButton','h77','h77','output77','wrong77','right77','right77','h77','h77','button77',11);

  }
  if (simsubscreennum === 8) {
    refresh('right11', 'right22', 'right33', 'right44');
    refresh1('h11', 'h22', 'h33', 'h44');
    var stepSkip = document.getElementById("can8-1");
    stepSkip.classList.toggle('fade');
    setTimeout(function () {
      document.getElementById("nextButton").style.visibility = "visible";
    }, 500);
  }
  if (simsubscreennum === 9) {
  
    document.getElementById('can8-1').style.visibility = "hidden";
    document.getElementById('k1').style.visibility = "visible";
    //document.getElementById('k2').innerHTML = "2.The velocity of air at 400 rpm is="+data8[p][4]+"m/s.";

  }
}

function step1() {
  myStopFunction();
  document.getElementById("slider2").onclick = "";
  document.getElementById("slider2").style.animation = "mover 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById('click1').style.visibility = "visible";
    myInt = setInterval(function () { animatearrow(); }, 500);
    animateArrowATPosition(208, 177, 20, 180);
  }, 1000);
  document.getElementById("switch1").onclick = function () { step1_11(); };
}

function step1_11() {
  myStopFunction();
  document.getElementById("switch1").onclick = "";
  document.getElementById('switch1').style.visibility = "hidden";
  document.getElementById('switch2').style.visibility = "visible";

  // var rt = 200;
  document.getElementById('wind').style.visibility = "visible";
  document.getElementById('arrow2').style.visibility = "visible";
  myInt = setInterval(function () { animatearrow(); }, 500);
  animateArrowATPosition(545, 265, 20, -90);
  document.getElementById("cfan1").onclick = function () {
    myStopFunction();
    document.getElementById("cfan1").onclick = "";
    document.getElementById('m11').style.visibility = "visible";
    initiate();
    setInterval("rt(1)", 500);
    setTimeout(function () {
      myInt = setInterval(function () { animatearrow(); }, 500);
      animateArrowATPosition(267, 175, 20, 720);
      document.getElementById("circle4").onclick = function () {
        myStopFunction();
        this.onclick = null;
        document.getElementById('a01').style.visibility = "visible";
        document.getElementById('a01').style.transform = "rotate(380deg)";
        document.getElementById("a01").style.WebkitTransform = "rotate(380deg)";
        document.getElementById("a01").style.msTransform = "rotate(380deg)";
        document.getElementById('Sample0').style.visibility = "visible";
        setTimeout(function () {
          document.getElementById('Sample0').style.visibility = "hidden";
          document.getElementById('a01').style.display = "none";
          myInt = setInterval(function () { animatearrow(); }, 500);
          animateArrowATPosition(267, 150, 20, 720);
          document.getElementById("speed2").onclick = function () {
            myStopFunction();
            this.onclick = null;
            document.getElementById('speed').style.visibility = "visible";
            document.getElementById('ndswh').style.visibility = "visible";
            document.getElementById("ndswh").style.animation = "moven 1s ease-in-out forwards";
            setTimeout(function () {
              document.getElementById('Sample01').style.visibility = "visible";
              document.getElementById('speed').style.visibility = "hidden";
              document.getElementById('ndswh').style.visibility = "hidden";
              document.getElementById('nextButton').style.visibility = "visible";
            }, 2000);
          };
        }, 1000);
      };
    }, 1200);
  };
}

function step11() {
  myStopFunction();
  document.getElementById("slider22").onclick = "";
  document.getElementById("slider22").style.animation = "mover 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById('click11').style.visibility = "visible";
    myInt = setInterval(function () { animatearrow(); }, 500);
    animateArrowATPosition(208, 177, 20, 180);
  }, 1000);
  document.getElementById("switch11").onclick = function () { step11_11(); };
}

function step11_11() {
  myStopFunction();
  document.getElementById("switch11").onclick = "";
  document.getElementById('switch11').style.visibility = "hidden";
  document.getElementById('switch22').style.visibility = "visible";

  // var rt = 200;
  document.getElementById('wind1').style.visibility = "visible";
  document.getElementById('arrow3').style.visibility = "visible";
  myInt = setInterval(function () { animatearrow(); }, 500);
  animateArrowATPosition(545, 265, 20, -90);
  document.getElementById("cfan11").onclick = function () {
    myStopFunction();
    document.getElementById("cfan11").onclick = "";
    document.getElementById('c11').style.visibility = "visible";
    initiate1();
    setInterval("rt1(1)", 500);
    setTimeout(function () {
      myInt = setInterval(function () { animatearrow(); }, 500);
      animateArrowATPosition(267, 175, 20, 720);
      document.getElementById("circle44").onclick = function () {
        myStopFunction();
        this.onclick = null;
        document.getElementById('a012').style.visibility = "visible";
        document.getElementById('a012').style.transform = "rotate(380deg)";
        document.getElementById("a012").style.WebkitTransform = "rotate(380deg)";
        document.getElementById("a012").style.msTransform = "rotate(380deg)";
        document.getElementById('Sample00').style.visibility = "visible";
        setTimeout(function () {
          document.getElementById('Sample00').style.visibility = "hidden";
          document.getElementById('a012').style.display = "none";
          myInt = setInterval(function () { animatearrow(); }, 500);
          animateArrowATPosition(267, 150, 20, 720);
          document.getElementById("speed22").onclick = function () {
            myStopFunction();
            this.onclick = null;
            document.getElementById('speed0').style.visibility = "visible";
            document.getElementById('ndswh1').style.visibility = "visible";
            document.getElementById("ndswh1").style.animation = "movenn 1s ease-in-out forwards";
            setTimeout(function () {
              document.getElementById('Sample011').style.visibility = "visible";
              document.getElementById('speed0').style.visibility = "hidden";
              document.getElementById('ndswh1').style.visibility = "hidden";
              document.getElementById('nextButton').style.visibility = "visible";
            }, 2000);
          };
        }, 1000);
      };
    }, 1200);
  };
}

function step2() {
  myStopFunction();
  document.getElementById('manometer1').onclick = "";
  document.getElementById('ventilationduct2').style.visibility = "hidden";
  document.getElementById('ta').style.visibility = "hidden";
  document.getElementById('manometer1').style.visibility = "hidden";
  document.getElementById('mano').style.visibility = "visible";
  document.getElementById('scale').style.visibility = "visible";
  document.getElementById('table1').style.visibility = "visible";
  myInt = setInterval(function () { animatearrow(); }, 500);
  animateArrowATPosition(30, 120, 30, -90);
  document.getElementById('scale').onclick = function () {
    myStopFunction();
    document.getElementById('scale').onclick = "";
    document.getElementById("scale").style.animation = "moves 1s ease-in-out forwards";

    setTimeout(function () {
      document.getElementById('12cm').style.visibility = "visible";
      document.getElementById('1.7cm').style.visibility = "visible";
      setTimeout(function () {
        fillTable(0);
        setTimeout(function () {
          document.getElementById('12cm').style.visibility = "hidden";
          document.getElementById('1.7cm').style.visibility = "hidden";
          document.getElementById("scale").style.animation = "movess 1s ease-in-out forwards";
          setTimeout(function () {
            document.getElementById('24cm').style.visibility = "visible";
            document.getElementById('3.2cm').style.visibility = "visible";
            setTimeout(function () {
              fillTable(1);
              setTimeout(function () {
                document.getElementById('24cm').style.visibility = "hidden";
                document.getElementById('3.2cm').style.visibility = "hidden";

                document.getElementById("scale").style.animation = "movese 1s ease-in-out forwards";
                setTimeout(function () {
                  document.getElementById('30cm').style.visibility = "visible";
                  document.getElementById('4cm').style.visibility = "visible";

                  setTimeout(function () {
                    fillTable(2);
                    setTimeout(function () {
                      document.getElementById('ca-1').style.visibility = "visible";
                      document.getElementById('ca-2').style.visibility = "visible";
                      document.getElementById('ca-3').style.visibility = "visible";

                      setTimeout(function () {
                        document.getElementById('4cm').style.visibility = "hidden";
                        document.getElementById('mano').style.visibility = "hidden";
                        document.getElementById('scale').style.visibility = "hidden";
                        document.getElementById('30cm').style.visibility = "hidden";
                        validateAnswer(0, 0, "150px", "120px");
                      }, 800);
                    }, 800);
                  }, 800);
                }, 2000);
              }, 2000);
            }, 800);
          }, 2000);
        }, 2000);
      }, 800);
    }, 2000);
  };
}


function step3() {
  myStopFunction();
  document.getElementById('hand1').onclick = "";
  document.getElementById('c1').style.visibility = "hidden";
  document.getElementById('m-6').style.visibility = "hidden";
  document.getElementById("hand1").style.animation = "movehand1 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById("p1").style.animation = "movep 1s ease-in-out  forwards";
    document.getElementById("hand1").style.animation = "movehand11 1s ease-in-out forwards";
    setTimeout(function () {
      document.getElementById('Sample1').style.visibility = "visible";
      setTimeout(function () {
        document.getElementById('Sample1').style.visibility = "hidden";
        document.getElementById('hand1').style.visibility = "hidden";
        var leftLimbMargin = (data1[p][0] - 15) * 14.6;
        var rightLimbMargin = (data1[p][1] - 15) * 14.6;
        document.getElementById('white1').style.marginLeft = leftLimbMargin + 'px';
        document.getElementById('white2').style.marginLeft = rightLimbMargin + 'px';
        setTimeout(function () {
          myInt = setInterval(function () { animatearrow(); }, 500);
          animateArrowATPosition(210, 385, 30, 180);
          document.getElementById("mover1").onclick = function () {
            myStopFunction();
            document.getElementById("mover1").onclick = "";
            var boxHandMargin = (data1[p][0] - 5) * 14.6;
            //document.getElementById("a3-2").style.marginLeft = boxHandMargin + 'px';
            document.getElementById("mover1").style.marginLeft = boxHandMargin + 'px';

            setTimeout(function () {
              // document.getElementById('a3-2').style.visibility="hidden";
              document.getElementById('para').innerHTML = "Static Head:";
              document.getElementById('para1').innerHTML = "Left Limb Reading=" + data1[p][0] + " cm";
              setTimeout(function () {
                document.getElementById('mover1').style.display = "none";
                document.getElementById('mover4').style.visibility = "visible";
                setTimeout(function () {
                  // document.getElementById('a41-22').style.visibility="visible";
                  myInt = setInterval(function () { animatearrow(); }, 500);
                  animateArrowATPosition(210, 385, 30, 180);
                  document.getElementById("mover4").onclick = function () {
                    myStopFunction();
                    document.getElementById("mover4").onclick = "";
                    var boxHandMargin = (data1[p][1] - 5) * 14.6;
                    //document.getElementById("a41-22").style.marginLeft = boxHandMargin + 'px';
                    document.getElementById("mover4").style.marginLeft = boxHandMargin + 'px';

                    setTimeout(function () {
                      //document.getElementById('a41-22').style.visibility="hidden";
                      document.getElementById('para2').innerHTML = "Right Limb Reading=" + data1[p][1] + " cm";
                      document.getElementById('para3').innerHTML = "Difference=" + data1[p][2] + " cm";
                      setTimeout(function () {
                        document.getElementById('mover4').style.display = "none";
                        display('para', 'para1', 'para2', 'para3', 'white1', 'white2', 'p1', 'white3', 'white4', 'p2', 'mover2');
                        document.getElementById('hand2').style.visibility = "visible";
                        document.getElementById('p2').style.visibility = "visible";
                        document.getElementById('mover2').style.visibility = "visible";

                        myInt = setInterval(function () { animatearrow(); }, 500);
                        animateArrowATPosition(340, 170, 20, -90);
                        document.getElementById("hand2").onclick = function () {
                          myStopFunction();
                          document.getElementById("hand2").onclick = "";
                          document.getElementById("hand2").style.animation = "movehand2 1s ease-in-out forwards";
                          setTimeout(function () {
                            document.getElementById("p2").style.animation = "movepp 1s ease-in-out forwards";
                            document.getElementById("hand2").style.animation = "movehand22 1s ease-in-out forwards";

                            setTimeout(function () {
                              document.getElementById('Sample2').style.visibility = "visible";
                              setTimeout(function () {
                                document.getElementById('Sample2').style.visibility = "hidden";
                                document.getElementById('hand2').style.visibility = "hidden";
                                var leftLimbMargin = (data1[p][3] - 15) * 14.6;
                                var rightLimbMargin = (data1[p][4] - 15) * 14.6;
                                document.getElementById('white3').style.marginLeft = leftLimbMargin + 'px';
                                document.getElementById('white4').style.marginLeft = rightLimbMargin + 'px';

                                setTimeout(function () {
                                  myInt = setInterval(function () { animatearrow(); }, 500);
                                  animateArrowATPosition(210, 385, 30, 180);
                                  document.getElementById("mover2").onclick = function () {
                                    myStopFunction();
                                    var boxHandMargin = (data1[p][3] - 5) * 14.6;
                                    document.getElementById("mover2").style.marginLeft = boxHandMargin + 'px';
                                    setTimeout(function () {
                                      document.getElementById('paraa').innerHTML = "Total Head:";
                                      document.getElementById('para11').innerHTML = "Left Limb Reading=" + data1[p][3] + " cm";
                                      setTimeout(function () {
                                        document.getElementById('mover2').style.display = "none";
                                        document.getElementById('mover5').style.visibility = "visible";
                                        setTimeout(function () {
                                          myInt = setInterval(function () { animatearrow(); }, 500);
                                          animateArrowATPosition(210, 385, 30, 180);
                                          document.getElementById("mover5").onclick = function () {
                                            myStopFunction();
                                            document.getElementById("mover5").onclick = "";
                                            var boxHandMargin = (data1[p][4] - 5) * 14.6;
                                            document.getElementById("mover5").style.marginLeft = boxHandMargin + 'px';
                                            setTimeout(function () {
                                              document.getElementById('para22').innerHTML = "Right Limb Reading=" + data1[p][4] + " cm";
                                              document.getElementById('para33').innerHTML = "Difference=" + data1[p][5] + " cm";
                                              setTimeout(function () {
                                                document.getElementById('mover5').style.display = "none";
                                                display('paraa', 'para11', 'para22', 'para33', 'white3', 'white4', 'mover2', 'p1', 'white5', 'white6', 'mover3');
                                                setTimeout(function () {
                                                  document.getElementById('Sample3').style.visibility = "visible";
                                                  setTimeout(function () {
                                                    document.getElementById('Sample3').style.visibility = "hidden";
                                                    document.getElementById('mover3').style.visibility = "visible";

                                                    var leftLimbMargin = (data1[p][6] - 15) * 14.6;
                                                    var rightLimbMargin = (data1[p][7] - 15) * 14.6;
                                                    document.getElementById('white5').style.marginLeft = leftLimbMargin + 'px';
                                                    document.getElementById('white6').style.marginLeft = rightLimbMargin + 'px';
                                                    setTimeout(function () {
                                                      myInt = setInterval(function () { animatearrow(); }, 500);
                                                      animateArrowATPosition(210, 385, 30, 180);
                                                      document.getElementById("mover3").onclick = function () {
                                                        myStopFunction();
                                                        document.getElementById("mover3").onclick = "";
                                                        boxHandMargin = (data1[p][6] - 5) * 14.6;
                                                        document.getElementById("mover3").style.marginLeft = boxHandMargin + 'px';
                                                        setTimeout(function () {
                                                          document.getElementById('para0').innerHTML = "Velocity Head:";
                                                          document.getElementById('para11-1').innerHTML = "Left Limb Reading=" + data1[p][6] + " cm";
                                                          setTimeout(function () {
                                                            document.getElementById('mover3').style.display = "none";
                                                            document.getElementById('mover6').style.visibility = "visible";
                                                            setTimeout(function () {
                                                              myInt = setInterval(function () { animatearrow(); }, 500);
                                                              animateArrowATPosition(210, 385, 30, 180);
                                                              document.getElementById("mover6").onclick = function () {
                                                                myStopFunction();
                                                                document.getElementById("mover6").onclick = "";
                                                                var boxHandMargin = (data1[p][7] - 5) * 14.6;
                                                                document.getElementById("mover6").style.marginLeft = boxHandMargin + 'px';
                                                                setTimeout(function () {
                                                                  document.getElementById('para22-1').innerHTML = "Right Limb Reading=" + data1[p][7] + " cm";
                                                                  document.getElementById('para33-1').innerHTML = "Difference=" + data1[p][8] + " cm";
                                                                  document.getElementById('nextButton').style.visibility = "visible";

                                                                }, 2000);
                                                              }
                                                            }, 2000);
                                                          }, 2000);
                                                        }, 2000);
                                                      }
                                                    }, 5000);
                                                  }, 3500);
                                                }, 1000);
                                              }, 3000);
                                            }, 2000);
                                          }
                                        }, 2000);
                                      }, 2000);
                                    }, 2000);
                                  }
                                }, 6000);
                              }, 3500);
                            }, 1000);
                          }, 1000);
                        };
                      }, 2000);
                    }, 2000);
                  }
                }, 2000);
              }, 2000);
            }, 2000);
          }
        }, 6000);
      }, 3500);
    }, 2000);
  }, 1000);
}

function step33() {
  myStopFunction();
  document.getElementById('hand11').onclick = "";
  document.getElementById('d1').style.visibility = "hidden";
  document.getElementById('m-66').style.visibility = "hidden";
  document.getElementById("hand11").style.animation = "movehand1 1s ease-in-out  forwards";
  setTimeout(function () {
    document.getElementById("p11").style.animation = "movep 1s ease-in-out  forwards";
    document.getElementById("hand11").style.animation = "movehand11 1s ease-in-out forwards";
    setTimeout(function () {
      document.getElementById('Sample11').style.visibility = "visible";
      setTimeout(function () {
        document.getElementById('Sample11').style.visibility = "hidden";
        document.getElementById('hand11').style.visibility = "hidden";
        var leftLimbMargin = (data3[p][0] - 15) * 14.6;
        var rightLimbMargin = (data3[p][1] - 15) * 14.6;
        document.getElementById('white11').style.marginLeft = leftLimbMargin + 'px';
        document.getElementById('white22').style.marginLeft = rightLimbMargin + 'px';
        setTimeout(function () {
          myInt = setInterval(function () { animatearrow(); }, 500);
          animateArrowATPosition(210, 385, 30, 180);
          document.getElementById("mover11").onclick = function () {
            myStopFunction();
            document.getElementById("mover11").onclick = "";
            var boxHandMargin = (data3[p][0] - 5) * 14.6;
            //document.getElementById("a3-2").style.marginLeft = boxHandMargin + 'px';
            document.getElementById("mover11").style.marginLeft = boxHandMargin + 'px';

            setTimeout(function () {
              // document.getElementById('a3-2').style.visibility="hidden";
              document.getElementById('para5').innerHTML = "Static Head:";
              document.getElementById('para15').innerHTML = "Left Limb Reading=" + data3[p][0] + " cm";
              setTimeout(function () {
                document.getElementById('mover11').style.display = "none";
                document.getElementById('mover44').style.visibility = "visible";
                setTimeout(function () {
                  // document.getElementById('a41-22').style.visibility="visible";
                  myInt = setInterval(function () { animatearrow(); }, 500);
                  animateArrowATPosition(210, 385, 30, 180);
                  document.getElementById("mover44").onclick = function () {
                    myStopFunction();
                    document.getElementById("mover44").onclick = "";
                    var boxHandMargin = (data3[p][1] - 5) * 14.6;
                    //document.getElementById("a41-22").style.marginLeft = boxHandMargin + 'px';
                    document.getElementById("mover44").style.marginLeft = boxHandMargin + 'px';

                    setTimeout(function () {
                      //document.getElementById('a41-22').style.visibility="hidden";
                      document.getElementById('para25').innerHTML = "Right Limb Reading=" + data3[p][1] + " cm";
                      document.getElementById('para35').innerHTML = "Difference=" + data3[p][2] + " cm";
                      setTimeout(function () {
                        document.getElementById('mover44').style.display = "none";
                        display('para5', 'para15', 'para25', 'para35', 'white11', 'white22', 'p11', 'white33', 'white44', 'p22', 'mover22');
                        document.getElementById('hand22').style.visibility = "visible";
                        document.getElementById('p22').style.visibility = "visible";
                        document.getElementById('mover22').style.visibility = "visible";

                        myInt = setInterval(function () { animatearrow(); }, 500);
                        animateArrowATPosition(340, 170, 20, -90);
                        document.getElementById("hand22").onclick = function () {
                          myStopFunction();
                          document.getElementById("hand22").onclick = "";
                          document.getElementById("hand22").style.animation = "movehand2 1s ease-in-out forwards";
                          setTimeout(function () {
                            document.getElementById("p22").style.animation = "movepp 1s ease-in-out forwards";
                            document.getElementById("hand22").style.animation = "movehand22 1s ease-in-out forwards";

                            setTimeout(function () {
                              document.getElementById('Sample22').style.visibility = "visible";
                              setTimeout(function () {
                                document.getElementById('Sample22').style.visibility = "hidden";
                                document.getElementById('hand22').style.visibility = "hidden";
                                var leftLimbMargin = (data3[p][3] - 15) * 14.6;
                                var rightLimbMargin = (data3[p][4] - 15) * 14.6;
                                document.getElementById('white33').style.marginLeft = leftLimbMargin + 'px';
                                document.getElementById('white44').style.marginLeft = rightLimbMargin + 'px';

                                setTimeout(function () {
                                  myInt = setInterval(function () { animatearrow(); }, 500);
                                  animateArrowATPosition(210, 385, 30, 180);
                                  document.getElementById("mover22").onclick = function () {
                                    myStopFunction();
                                    var boxHandMargin = (data3[p][3] - 5) * 14.6;
                                    document.getElementById("mover22").style.marginLeft = boxHandMargin + 'px';
                                    setTimeout(function () {
                                      document.getElementById('paraa5').innerHTML = "Total Head:";
                                      document.getElementById('para115').innerHTML = "Left Limb Reading=" + data3[p][3] + " cm";
                                      setTimeout(function () {
                                        document.getElementById('mover22').style.display = "none";
                                        document.getElementById('mover55').style.visibility = "visible";
                                        setTimeout(function () {
                                          myInt = setInterval(function () { animatearrow(); }, 500);
                                          animateArrowATPosition(210, 385, 30, 180);
                                          document.getElementById("mover55").onclick = function () {
                                            myStopFunction();
                                            document.getElementById("mover55").onclick = "";
                                            var boxHandMargin = (data3[p][4] - 5) * 14.6;
                                            document.getElementById("mover55").style.marginLeft = boxHandMargin + 'px';
                                            setTimeout(function () {
                                              document.getElementById('para225').innerHTML = "Right Limb Reading=" + data3[p][4] + " cm";
                                              document.getElementById('para335').innerHTML = "Difference=" + data3[p][5] + " cm";
                                              setTimeout(function () {
                                                document.getElementById('mover55').style.display = "none";
                                                display('paraa5', 'para115', 'para225', 'para335', 'white33', 'white44', 'mover22', 'p11', 'white55', 'white66', 'mover33');
                                                setTimeout(function () {
                                                  document.getElementById('Sample33').style.visibility = "visible";
                                                  setTimeout(function () {
                                                    document.getElementById('Sample33').style.visibility = "hidden";
                                                    document.getElementById('mover33').style.visibility = "visible";

                                                    var leftLimbMargin = (data3[p][6] - 15) * 14.6;
                                                    var rightLimbMargin = (data3[p][7] - 15) * 14.6;
                                                    document.getElementById('white55').style.marginLeft = leftLimbMargin + 'px';
                                                    document.getElementById('white66').style.marginLeft = rightLimbMargin + 'px';
                                                    setTimeout(function () {
                                                      myInt = setInterval(function () { animatearrow(); }, 500);
                                                      animateArrowATPosition(210, 385, 30, 180);
                                                      document.getElementById("mover33").onclick = function () {
                                                        myStopFunction();
                                                        document.getElementById("mover33").onclick = "";
                                                        boxHandMargin = (data3[p][6] - 5) * 14.6;
                                                        document.getElementById("mover33").style.marginLeft = boxHandMargin + 'px';
                                                        setTimeout(function () {
                                                          document.getElementById('para05').innerHTML = "Velocity Head:";
                                                          document.getElementById('para11-15').innerHTML = "Left Limb Reading=" + data3[p][6] + " cm";
                                                          setTimeout(function () {
                                                            document.getElementById('mover33').style.display = "none";
                                                            document.getElementById('mover66').style.visibility = "visible";
                                                            setTimeout(function () {
                                                              myInt = setInterval(function () { animatearrow(); }, 500);
                                                              animateArrowATPosition(210, 385, 30, 180);
                                                              document.getElementById("mover66").onclick = function () {
                                                                myStopFunction();
                                                                document.getElementById("mover66").onclick = "";
                                                                var boxHandMargin = (data3[p][7] - 5) * 14.6;
                                                                document.getElementById("mover66").style.marginLeft = boxHandMargin + 'px';
                                                                setTimeout(function () {
                                                                  document.getElementById('para22-15').innerHTML = "Right Limb Reading=" + data3[p][7] + " cm";
                                                                  document.getElementById('para33-15').innerHTML = "Difference=" + data3[p][8] + " cm";
                                                                  validateAnswer(1, 1, "528px", "90px");
                                                                }, 2000);
                                                              }
                                                            }, 2000);
                                                          }, 2000);
                                                        }, 2000);
                                                      }
                                                    }, 5000);
                                                  }, 3500);
                                                }, 1000);
                                              }, 3000);
                                            }, 2000);
                                          }
                                        }, 2000);
                                      }, 2000);
                                    }, 2000);
                                  }
                                }, 6000);
                              }, 3500);
                            }, 1000);
                          }, 1000);
                        };
                      }, 2000);
                    }, 2000);
                  }
                }, 2000);
              }, 2000);
            }, 2000);
          }
        }, 6000);
      }, 3500);
    }, 2000);
  }, 1000);
}


function step4() {
  myStopFunction();
  document.getElementById('a-21').onclick = "";
  document.getElementById('c2').style.visibility = "hidden";
  document.getElementById('m-7').style.visibility = "hidden";
  document.getElementById('a-21').style.visibility = "visible";
  document.getElementById("a-21").style.animation = "movehand011 1s ease-in-out forwards";
  setTimeout(function () {
    document.getElementById("a13-2").style.animation = "movep1 1s ease-in-out forwards";
    document.getElementById("a-21").style.animation = "movehand01 1s ease-in-out forwards";
    setTimeout(function () {
      document.getElementById('Sample1').style.visibility = "visible";
      setTimeout(function () {
        document.getElementById('Sample1').style.visibility = "hidden";
        document.getElementById('a-21').style.visibility = "hidden";
        var leftLimbMargin = (data2[p][0] - 15) * 14.6;
        var rightLimbMargin = (data2[p][1] - 15) * 14.6;
        document.getElementById('a30-2').style.marginLeft = leftLimbMargin + 'px';
        document.getElementById('a30-22').style.marginLeft = rightLimbMargin + 'px';
        setTimeout(function () {
          document.getElementById('a51-11').style.visibility = "visible";
          //document.getElementById('a51-22').style.visibility="visible";
          myInt = setInterval(function () { animatearrow(); }, 500);
          animateArrowATPosition(210, 385, 30, 180);
          document.getElementById("a51-11").onclick = function () {
            myStopFunction();
            document.getElementById("a51-11").onclick = "";
            var boxHandMargin = (data2[p][0] - 5) * 14.6;
            //document.getElementById("a51-22").style.marginLeft = boxHandMargin + 'px';
            document.getElementById("a51-11").style.marginLeft = boxHandMargin + 'px';
            setTimeout(function () {
              // document.getElementById('a51-22').style.visibility="hidden";
              document.getElementById('para-1').innerHTML = "Static Head:";
              document.getElementById('para1-1').innerHTML = "Left Limb Reading=" + data2[p][0] + " cm";
              setTimeout(function () {
                document.getElementById('a51-11').style.display = "none";
                document.getElementById('a5-11').style.visibility = "hidden";
                document.getElementById('a6-11').style.visibility = "visible";
                setTimeout(function () {
                  //document.getElementById('a61-22').style.visibility="visible";
                  myInt = setInterval(function () { animatearrow(); }, 500);
                  animateArrowATPosition(210, 385, 30, 180);
                  document.getElementById("a6-11").onclick = function () {
                    myStopFunction();
                    document.getElementById("a6-11").onclick = "";
                    var boxHandMargin = (data2[p][1] - 5) * 14.6;
                    //document.getElementById("a61-22").style.marginLeft = boxHandMargin + 'px';
                    document.getElementById("a6-11").style.marginLeft = boxHandMargin + 'px';

                    setTimeout(function () {
                      // document.getElementById('a61-22').style.visibility="hidden";
                      document.getElementById('para2-1').innerHTML = "Right Limb Reading=" + data2[p][1] + " cm";
                      document.getElementById('para3-1').innerHTML = "Difference=" + data2[p][2] + " cm";
                      setTimeout(function () {
                        document.getElementById('a6-11').style.display = "none";
                        display('a13-2', 'a30-22', 'a30-2', 'a30-2', 'para-1', 'para1-1', 'para2-1', 'a51-11', 'a34-22', 'a34-2', 'a5-11');
                        document.getElementById('para3-1').style.visibility = "hidden";
                        setTimeout(function () {
                          document.getElementById('a30-22').style.visibility = "hidden";
                          document.getElementById('a30-2').style.visibility = "hidden";
                          document.getElementById('a-22').style.visibility = "visible";
                          document.getElementById('a-23').style.visibility = "visible";



                          myInt = setInterval(function () { animatearrow(); }, 500);
                          animateArrowATPosition(370, 80, 20, 360);
                          document.getElementById("a-23").onclick = function () {
                            myStopFunction();
                            document.getElementById("a-23").onclick = "";
                            document.getElementById("a-22").style.animation = "movep2 1s ease-in-out forwards";
                            document.getElementById("a-23").style.animation = "movehand02 1s ease-in-out forwards";
                            setTimeout(function () {
                              document.getElementById('Sample2').style.visibility = "visible";

                              setTimeout(function () {
                                document.getElementById('Sample2').style.visibility = "hidden";
                                var leftLimbMargin = (data2[p][3] - 15) * 14.6;
                                var rightLimbMargin = (data2[p][4] - 15) * 14.6;
                                document.getElementById('a34-2').style.marginLeft = leftLimbMargin + 'px';
                                document.getElementById('a34-22').style.marginLeft = rightLimbMargin + 'px';

                                document.getElementById('a-23').style.visibility = "hidden";
                                setTimeout(function () {
                                  myInt = setInterval(function () { animatearrow(); }, 500);
                                  animateArrowATPosition(210, 385, 30, 180);
                                  document.getElementById("a5-11").onclick = function () {
                                    myStopFunction();
                                    document.getElementById("a5-11").onclick = "";
                                    var boxHandMargin = (data2[p][3] - 5) * 14.6;
                                    document.getElementById("a5-11").style.marginLeft = boxHandMargin + 'px';
                                    setTimeout(function () {
                                      document.getElementById('a5-11').style.display = "none";
                                      document.getElementById('a51-111').style.visibility = "visible";
                                      document.getElementById('paraa-1').innerHTML = "Total Head:";
                                      document.getElementById('para10-1').innerHTML = "Left Limb Reading=" + data2[p][3] + " cm";
                                      setTimeout(function () {
                                        myInt = setInterval(function () { animatearrow(); }, 500);
                                        animateArrowATPosition(210, 385, 30, 180);
                                        document.getElementById("a51-111").onclick = function () {
                                          myStopFunction();
                                          document.getElementById("a51-111").onclick = "";
                                          var boxHandMargin = (data2[p][4] - 5) * 14.6;
                                          document.getElementById("a51-111").style.marginLeft = boxHandMargin + 'px';

                                          setTimeout(function () {
                                            document.getElementById('para20-1').innerHTML = "Right Limb Reading=" + data2[p][4] + " cm";
                                            document.getElementById('para30-1').innerHTML = "Difference=" + data2[p][5] + " cm";

                                            setTimeout(function () {
                                              document.getElementById('a51-111').style.display = "none";
                                              display('paraa-1', 'para10-1', 'para20-1', 'para30-1', 'a5-11', 'a5-11', 'a34-2', 'a35-2', 'a35-22', 'a61-12', 'a13-2');
                                              document.getElementById('a34-22').style.visibility = "hidden";
                                              document.getElementById('a30-2').style.visibility = "hidden";
                                              setTimeout(function () {
                                                document.getElementById('Sample3').style.visibility = "visible";
                                                setTimeout(function () {
                                                  document.getElementById('Sample3').style.visibility = "hidden";
                                                  var leftLimbMargin = (data2[p][6] - 15) * 14.6;
                                                  var rightLimbMargin = (data2[p][7] - 15) * 14.6;
                                                  document.getElementById('a35-2').style.marginLeft = leftLimbMargin + 'px';
                                                  document.getElementById('a35-22').style.marginLeft = rightLimbMargin + 'px';
                                                  setTimeout(function () {
                                                    myInt = setInterval(function () { animatearrow(); }, 500);
                                                    animateArrowATPosition(210, 385, 30, 180);
                                                    document.getElementById("a61-12").onclick = function () {
                                                      myStopFunction();
                                                      document.getElementById("a61-12").onclick = "";
                                                      var boxHandMargin = (data2[p][6] - 5) * 14.6;
                                                      document.getElementById("a61-12").style.marginLeft = boxHandMargin + 'px';

                                                      setTimeout(function () {
                                                        document.getElementById('para0-1').innerHTML = "Velocity Head:";
                                                        document.getElementById('para11-2').innerHTML = "Left Limb Reading=" + data2[p][6] + " cm";
                                                        setTimeout(function () {
                                                          document.getElementById('a6-12').style.visibility = "visible";
                                                          document.getElementById('a61-12').style.display = "none";

                                                          setTimeout(function () {
                                                            myInt = setInterval(function () { animatearrow(); }, 500);
                                                            animateArrowATPosition(210, 385, 30, 180);
                                                            document.getElementById("a6-12").onclick = function () {
                                                              myStopFunction();
                                                              document.getElementById("a6-12").onclick = "";
                                                              var boxHandMargin = (data2[p][7] - 5) * 14.6;
                                                              document.getElementById("a6-12").style.marginLeft = boxHandMargin + 'px';
                                                              setTimeout(function () {
                                                                document.getElementById('para22-2').innerHTML = "Right Limb Reading=" + data2[p][7] + " cm";
                                                                document.getElementById('para33-2').innerHTML = "Difference=" + data2[p][8] + " cm";
                                                                document.getElementById('nextButton').style.visibility = "visible";
                                                              }, 1500);
                                                            }
                                                          }, 2500);
                                                        }, 3000);
                                                      }, 10);
                                                    }
                                                  }, 3000);
                                                }, 5500);
                                              }, 500);
                                            }, 1500);
                                          }, 3500);
                                        }
                                      }, 2500);
                                    }, 2500);
                                  }
                                }, 4500);
                              }, 3000);
                            }, 500);
                          };
                        }, 1000);
                      }, 2500);
                    }, 1500);
                  }
                }, 2500);
              }, 1500);
            }, 1500);
          }
        }, 5500);
      }, 2500);
    }, 500);
  }, 1500);
}

function step44() {
  myStopFunction();
  document.getElementById('b-21').onclick = "";
  document.getElementById('e2').style.visibility = "hidden";
  document.getElementById('m-77').style.visibility = "hidden";
  document.getElementById('b-21').style.visibility = "visible";
  document.getElementById("b-21").style.animation = "movehand011 1s ease-in-out forwards";
  setTimeout(function () {
    document.getElementById("b13-2").style.animation = "movep1 1s ease-in-out forwards";
    document.getElementById("b-21").style.animation = "movehand01 1s ease-in-out forwards";
    setTimeout(function () {
      document.getElementById('Sample1').style.visibility = "visible";
      setTimeout(function () {
        document.getElementById('Sample1').style.visibility = "hidden";
        document.getElementById('b-21').style.visibility = "hidden";
        var leftLimbMargin = (data4[p][0] - 15) * 14.6;
        var rightLimbMargin = (data4[p][1] - 15) * 14.6;
        document.getElementById('b30-2').style.marginLeft = leftLimbMargin + 'px';
        document.getElementById('b30-22').style.marginLeft = rightLimbMargin + 'px';
        setTimeout(function () {
          document.getElementById('b51-11').style.visibility = "visible";
          //document.getElementById('a51-22').style.visibility="visible";
          myInt = setInterval(function () { animatearrow(); }, 500);
          animateArrowATPosition(210, 385, 30, 180);
          document.getElementById("b51-11").onclick = function () {
            myStopFunction();
            document.getElementById("b51-11").onclick = "";
            var boxHandMargin = (data4[p][0] - 5) * 14.6;
            //document.getElementById("a51-22").style.marginLeft = boxHandMargin + 'px';
            document.getElementById("b51-11").style.marginLeft = boxHandMargin + 'px';
            setTimeout(function () {
              // document.getElementById('a51-22').style.visibility="hidden";
              document.getElementById('para-12').innerHTML = "Static Head:";
              document.getElementById('para1-12').innerHTML = "Left Limb Reading=" + data4[p][0] + " cm";
              setTimeout(function () {
                document.getElementById('b51-11').style.display = "none";
                document.getElementById('b5-11').style.visibility = "hidden";
                document.getElementById('b6-11').style.visibility = "visible";
                setTimeout(function () {
                  //document.getElementById('a61-22').style.visibility="visible";
                  myInt = setInterval(function () { animatearrow(); }, 500);
                  animateArrowATPosition(210, 385, 30, 180);
                  document.getElementById("b6-11").onclick = function () {
                    myStopFunction();
                    document.getElementById("b6-11").onclick = "";
                    var boxHandMargin = (data4[p][1] - 5) * 14.6;
                    //document.getElementById("a61-22").style.marginLeft = boxHandMargin + 'px';
                    document.getElementById("b6-11").style.marginLeft = boxHandMargin + 'px';

                    setTimeout(function () {
                      // document.getElementById('a61-22').style.visibility="hidden";
                      document.getElementById('para2-12').innerHTML = "Right Limb Reading=" + data4[p][1] + " cm";
                      document.getElementById('para3-12').innerHTML = "Difference=" + data4[p][2] + " cm";
                      setTimeout(function () {
                        document.getElementById('b6-11').style.display = "none";
                        display('b13-2', 'b30-22', 'b30-2', 'b30-2', 'para-12', 'para1-12', 'para2-12', 'b51-11', 'b34-22', 'b34-2', 'b5-11');
                        document.getElementById('para3-12').style.visibility = "hidden";
                        setTimeout(function () {
                          document.getElementById('b30-22').style.visibility = "hidden";
                          document.getElementById('b30-2').style.visibility = "hidden";
                          document.getElementById('b-22').style.visibility = "visible";
                          document.getElementById('b-23').style.visibility = "visible";
                          myInt = setInterval(function () { animatearrow(); }, 500);
                          animateArrowATPosition(370, 80, 20, 360);
                          document.getElementById("b-23").onclick = function () {
                            myStopFunction();
                            document.getElementById("b-23").onclick = "";
                            document.getElementById("b-22").style.animation = "movep2 1s ease-in-out forwards";
                            document.getElementById("b-23").style.animation = "movehand02 1s ease-in-out forwards";
                            setTimeout(function () {
                              document.getElementById('Sample2').style.visibility = "visible";

                              setTimeout(function () {
                                document.getElementById('Sample2').style.visibility = "hidden";
                                var leftLimbMargin = (data4[p][3] - 15) * 14.6;
                                var rightLimbMargin = (data4[p][4] - 15) * 14.6;
                                document.getElementById('b34-2').style.marginLeft = leftLimbMargin + 'px';
                                document.getElementById('b34-22').style.marginLeft = rightLimbMargin + 'px';

                                document.getElementById('b-23').style.visibility = "hidden";
                                setTimeout(function () {
                                  myInt = setInterval(function () { animatearrow(); }, 500);
                                  animateArrowATPosition(210, 385, 30, 180);
                                  document.getElementById("b5-11").onclick = function () {
                                    myStopFunction();
                                    document.getElementById("b5-11").onclick = "";
                                    var boxHandMargin = (data4[p][3] - 5) * 14.6;
                                    document.getElementById("b5-11").style.marginLeft = boxHandMargin + 'px';
                                    setTimeout(function () {
                                      document.getElementById('b5-11').style.display = "none";
                                      document.getElementById('b51-111').style.visibility = "visible";
                                      document.getElementById('paraa-12').innerHTML = "Total Head:";
                                      document.getElementById('para10-12').innerHTML = "Left Limb Reading=" + data4[p][3] + " cm";
                                      setTimeout(function () {
                                        myInt = setInterval(function () { animatearrow(); }, 500);
                                        animateArrowATPosition(210, 385, 30, 180);
                                        document.getElementById("b51-111").onclick = function () {
                                          myStopFunction();
                                          document.getElementById("b51-111").onclick = "";
                                          var boxHandMargin = (data4[p][4] - 5) * 14.6;
                                          document.getElementById("b51-111").style.marginLeft = boxHandMargin + 'px';

                                          setTimeout(function () {
                                            document.getElementById('para20-12').innerHTML = "Right Limb Reading=" + data4[p][4] + " cm";
                                            document.getElementById('para30-12').innerHTML = "Difference=" + data4[p][5] + " cm";

                                            setTimeout(function () {
                                              document.getElementById('b51-111').style.display = "none";
                                              display('paraa-12', 'para10-12', 'para20-12', 'para30-12', 'b5-11', 'b5-11', 'b34-2', 'b35-2', 'b35-22', 'b61-12', 'b13-2');
                                              document.getElementById('b34-22').style.visibility = "hidden";
                                              document.getElementById('b30-2').style.visibility = "hidden";
                                              setTimeout(function () {
                                                document.getElementById('Sample3').style.visibility = "visible";
                                                setTimeout(function () {
                                                  document.getElementById('Sample3').style.visibility = "hidden";
                                                  var leftLimbMargin = (data4[p][6] - 15) * 14.6;
                                                  var rightLimbMargin = (data4[p][7] - 15) * 14.6;
                                                  document.getElementById('b35-2').style.marginLeft = leftLimbMargin + 'px';
                                                  document.getElementById('b35-22').style.marginLeft = rightLimbMargin + 'px';
                                                  setTimeout(function () {
                                                    myInt = setInterval(function () { animatearrow(); }, 500);
                                                    animateArrowATPosition(210, 385, 30, 180);
                                                    document.getElementById("b61-12").onclick = function () {
                                                      myStopFunction();
                                                      document.getElementById("b61-12").onclick = "";
                                                      var boxHandMargin = (data4[p][6] - 5) * 14.6;
                                                      document.getElementById("b61-12").style.marginLeft = boxHandMargin + 'px';

                                                      setTimeout(function () {
                                                        document.getElementById('para0-12').innerHTML = "Velocity Head:";
                                                        document.getElementById('para11-22').innerHTML = "Left Limb Reading=" + data4[p][6] + " cm";
                                                        setTimeout(function () {
                                                          document.getElementById('b6-12').style.visibility = "visible";
                                                          document.getElementById('b61-12').style.display = "none";

                                                          setTimeout(function () {
                                                            myInt = setInterval(function () { animatearrow(); }, 500);
                                                            animateArrowATPosition(210, 385, 30, 180);
                                                            document.getElementById("b6-12").onclick = function () {
                                                              myStopFunction();
                                                              document.getElementById("b6-12").onclick = "";
                                                              var boxHandMargin = (data4[p][7] - 5) * 14.6;
                                                              document.getElementById("b6-12").style.marginLeft = boxHandMargin + 'px';
                                                              setTimeout(function () {
                                                                document.getElementById('para22-22').innerHTML = "Right Limb Reading=" + data4[p][7] + " cm";
                                                                document.getElementById('para33-22').innerHTML = "Difference=" + data4[p][8] + " cm";
                                                                document.getElementById('nextButton').style.visibility = "visible";
                                                              }, 1500);
                                                            }
                                                          }, 2500);
                                                        }, 3000);
                                                      }, 10);
                                                    }
                                                  }, 3000);
                                                }, 5500);
                                              }, 500);
                                            }, 1500);
                                          }, 3500);
                                        }
                                      }, 2500);
                                    }, 2500);
                                  }
                                }, 4500);
                              }, 3000);
                            }, 500);
                          };
                        }, 1000);
                      }, 2500);
                    }, 1500);
                  }
                }, 2500);
              }, 1500);
            }, 1500);
          }
        }, 5500);
      }, 2500);
    }, 500);
  }, 1500);
}


function refresh(r1, r2, r3, r4) {
  document.getElementById(r1).style.visibility = "hidden";
  document.getElementById(r2).style.visibility = "hidden";
  document.getElementById(r3).style.visibility = "hidden";
  document.getElementById(r4).style.visibility = "hidden";
}
function refresh1(n1, n2, n3, n4) {
  document.getElementById(n1).style.display = "none";
  document.getElementById(n2).style.display = "none";
  document.getElementById(n3).style.display = "none";
  document.getElementById(n4).style.display = "none";
}
function display(para_1, para_2, para_3, para_4, para_5, para_6, para_7, para_8, para_9, para_10, para_11) {
  document.getElementById(para_1).style.visibility = "hidden";
  document.getElementById(para_2).style.visibility = "hidden";
  document.getElementById(para_3).style.visibility = "hidden";
  document.getElementById(para_4).style.visibility = "hidden";
  document.getElementById(para_5).style.visibility = "hidden";
  document.getElementById(para_6).style.visibility = "hidden";
  document.getElementById(para_7).style.visibility = "hidden";
  document.getElementById(para_8).style.visibility = "visible";
  document.getElementById(para_9).style.visibility = "visible";
  document.getElementById(para_10).style.visibility = "visible";
  document.getElementById(para_11).style.visibility = "visible";
}
var k;
function calc1(para_button, para_output, para_output, para_button, para_output, para_button1, para_button, para_wrong, para_wrong, para_right, para_button1, para_h1, para_h1, para_output, para_wrong, para_right, para_right, para_h1, para_h1, para_button, k) {
  var flag1 = 0;
  document.getElementById(para_button).onclick = function () {
    n = document.getElementById(para_output).value;
    if (document.getElementById(para_output).value === "") {
      if (document.getElementById(para_button).innerHTML === "Result") {
        document.getElementById(para_output).value = data5[p][k];
        document.getElementById(para_button1).style.visibility = "visible";
        document.getElementById(para_button).style.visibility = "hidden";
        document.getElementById(para_wrong).style.visibility = "hidden";
      }
      else
        alert("Enter the value to proceed");
    }
    else {
      if ((Math.floor(n * 10) === Math.floor(data5[p][k] * 10)) || (Math.floor(n * 100) === Math.floor(data5[p][k] * 100)))
      //  if((Math.floor(n*10) ===Math.floor(data5[p][k]*10))&&[((Math.floor(n*10) ===Math.floor(data5[p][k]*10))&&(!(Math.floor(n*100) ===Math.floor(data5[p][k]*100))))])
      // if((Math.floor(n*10) ===Math.floor(data5[p][k]*10))||((Math.floor(n*100) ===Math.floor(data5[p][k]*100))&&(!(Math.floor(n*100) ===Math.floor(data5[p][k]*100)))))
      // if(Math.floor(n*10) ===Math.floor(data5[p][k]*10)&&Math.floor(n*100) ===Math.floor(data5[p][k]*100)||Math.floor(n*10) ===Math.floor(data5[p][k]*10))
      // if (((Math.floor(n*10) ===Math.floor(data5[p][k]*10))&&(Math.floor(n*100) ===Math.floor(data5[p][k]*100)))||((Math.floor(n*10) ===Math.floor(data5[p][k]*10))))
      //  if(Math.floor(n*0.5)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100))
      {
        document.getElementById(para_button).style.visibility = 'hidden';
        document.getElementById(para_wrong).style.visibility = "hidden";
        document.getElementById(para_right).style.visibility = "visible";
        document.getElementById(para_button1).style.visibility = 'visible';
        document.getElementById(para_h1).style.visibility = "visible";
        document.getElementById(para_h1).innerHTML = data5[p][k];
      }
      else {
        flag1 += 1;
        document.getElementById(para_output).value = "";
        document.getElementById(para_wrong).style.visibility = "visible";
        document.getElementById(para_right).style.visibility = "hidden";
        if (flag1 === 2) {
          if ((Math.floor(n * 10) === Math.floor(data5[p][k] * 10)) || (Math.floor(n * 100) === Math.floor(data5[p][k] * 100)))

          // if((Math.floor(n*10) ===Math.floor(data5[p][k]*10))&&((Math.floor(n*10) ===Math.floor(data5[p][k]*10))&&(!(Math.floor(n*100) ===Math.floor(data5[p][k]*100)))))
          // if((Math.floor(n*10) ===Math.floor(data5[p][k]*10))||((Math.floor(n*100) ===Math.floor(data5[p][k]*100))&&(!(Math.floor(n*100) ===Math.floor(data5[p][k]*100)))))
          // if(Math.floor(n*10) ===Math.floor(data5[p][k]*10)&&Math.floor(n*100) ===Math.floor(data5[p][k]*100)||Math.floor(n*10) ===Math.floor(data5[p][k]*10))
          //  if(Math.floor(n*0.5)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100))
          {
            document.getElementById(para_right).style.visibility = "visible";
            document.getElementById(para_h1).style.visibility = "visible";
            document.getElementById(para_h1).innerHTML = data5[p][k];
          }
          else
            document.getElementById(para_button).innerHTML = "Result";
        }
      }
    }
    console.log(n * 10);
    console.log(data5[p][k] * 10);
  };
}
var k;
function calc2(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11, para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_h11, para_h11, para_output1, para_wrong1, para_right1, para_right1, para_h11, para_h11, para_button1, k) {
  var flag1 = 0;
  document.getElementById(para_button1).onclick = function () {
    n = document.getElementById(para_output1).value;
    if (document.getElementById(para_output1).value === "") {
      if (document.getElementById(para_button1).innerHTML === "Result") {
        document.getElementById(para_output1).value = data6[p][k];
        document.getElementById(para_button11).style.visibility = "visible";
        document.getElementById(para_button1).style.visibility = "hidden";
        document.getElementById(para_wrong1).style.visibility = "hidden";
      }
      else
        alert("Enter the value to proceed");
    }
    else {

      if (Math.round(n * 10) === Math.round(data6[p][k] * 10) || Math.round(n * 100) === Math.round(data6[p][k] * 100))
      //  if(Math.floor(n*0.5)===Math.floor(data6[p][k])||Math.floor(n*10)===Math.floor(data6[p][k]*10)||Math.floor(n*100)===Math.floor(data6[p][k]*100))
      {
        document.getElementById(para_button1).style.visibility = 'hidden';
        document.getElementById(para_wrong1).style.visibility = "hidden";
        document.getElementById(para_right1).style.visibility = "visible";
        document.getElementById(para_button11).style.visibility = 'visible';
        document.getElementById(para_h11).style.visibility = "visible";
        document.getElementById(para_h11).innerHTML = data6[p][k];
      }
      else {
        flag1 += 1;
        document.getElementById(para_output1).value = "";
        document.getElementById(para_wrong1).style.visibility = "visible";
        document.getElementById(para_right1).style.visibility = "hidden";
        if (flag1 === 2) {
          if (Math.round(n * 10) === Math.round(data6[p][k] * 10) || Math.round(n * 100) === Math.round(data6[p][k] * 100))

          //  if(Math.floor(n*0.5)===Math.floor(data6[p][k])||Math.floor(n*10)===Math.floor(data6[p][k]*10)||Math.floor(n*100)===Math.floor(data6[p][k]*100))
          {
            document.getElementById(para_right1).style.visibility = "visible";
            document.getElementById(para_h11).style.visibility = "visible";
            document.getElementById(para_h11).innerHTML = data6[p][k];
          }
          else
            document.getElementById(para_button1).innerHTML = "Result";
        }
      }
    }
  };
}
var k;
function calc3(para_button2, para_output2, para_output2, para_button2, para_output2, para_button12, para_button2, para_wrong2, para_wrong2, para_right2, para_button12, para_h2, para_h2, para_output2, para_wrong2, para_right2, para_right2, para_h2, para_h2, para_button2, k) {
  var flag1 = 0;
  document.getElementById(para_button2).onclick = function () {
    n = document.getElementById(para_output2).value;
    if (document.getElementById(para_output2).value === "") {
      if (document.getElementById(para_button2).innerHTML === "Result") {
        document.getElementById(para_output2).value = data7[p][k];
        document.getElementById(para_button12).style.visibility = "visible";
        document.getElementById(para_button2).style.visibility = "hidden";
        document.getElementById(para_wrong2).style.visibility = "hidden";
      }
      else
        alert("Enter the value to proceed");
    }
    else {
      if (Math.round(n * 10) === Math.round(data7[p][k] * 10) || Math.round(n * 100) === Math.round(data7[p][k] * 100)) {
        document.getElementById(para_button2).style.visibility = 'hidden';
        document.getElementById(para_wrong2).style.visibility = "hidden";
        document.getElementById(para_right2).style.visibility = "visible";
        document.getElementById(para_button12).style.visibility = 'visible';
        document.getElementById(para_h2).style.visibility = "visible";
        document.getElementById(para_h2).innerHTML = data7[p][k];
      }
      else {
        flag1 += 1;
        document.getElementById(para_output2).value = "";
        document.getElementById(para_wrong2).style.visibility = "visible";
        document.getElementById(para_right2).style.visibility = "hidden";
        if (flag1 === 2) {
          if (Math.round(n * 10) === Math.round(data7[p][k] * 10) || Math.round(n * 100) === Math.round(data7[p][k] * 100)) {
            document.getElementById(para_right2).style.visibility = "visible";
            document.getElementById(para_h2).style.visibility = "visible";
            document.getElementById(para_h2).innerHTML = data7[p][k];
          }
          else
            document.getElementById(para_button2).innerHTML = "Result";
        }
      }
    }
  };
}

var k;
function calc4(para_button3, para_output3, para_output3, para_button3, para_output3, para_button13, para_button3, para_wrong3, para_wrong3, para_right3, para_button13, para_h3, para_h3, para_output3, para_wrong3, para_right3, para_right3, para_h3, para_h3, para_button3, k) {
  var flag1 = 0;
  document.getElementById(para_button3).onclick = function () {
    n = document.getElementById(para_output3).value;
    if (document.getElementById(para_output3).value === "") {
      if (document.getElementById(para_button3).innerHTML === "Result") {
        document.getElementById(para_output3).value = data8[p][k];
        document.getElementById(para_button13).style.visibility = "visible";
        document.getElementById(para_button3).style.visibility = "hidden";
        document.getElementById(para_wrong3).style.visibility = "hidden";
      }
      else
        alert("Enter the value to proceed");
    }
    else {
      if (Math.round(n * 10) === Math.round(data8[p][k] * 10) || Math.round(n * 100) === Math.round(data8[p][k] * 100)) {
        document.getElementById(para_button3).style.visibility = 'hidden';
        document.getElementById(para_wrong3).style.visibility = "hidden";
        document.getElementById(para_right3).style.visibility = "visible";
        document.getElementById(para_button13).style.visibility = 'visible';
        document.getElementById(para_h3).style.visibility = "visible";
        document.getElementById(para_h3).innerHTML = data8[p][k];
      }
      else {
        flag1 += 1;
        document.getElementById(para_output3).value = "";
        document.getElementById(para_wrong3).style.visibility = "visible";
        document.getElementById(para_right3).style.visibility = "hidden";
        if (flag1 === 2) {
          if (Math.round(n * 10) === Math.round(data8[p][k] * 10) || Math.round(n * 100) === Math.round(data8[p][k] * 100)) {
            document.getElementById(para_right3).style.visibility = "visible";
            document.getElementById(para_h3).style.visibility = "visible";
            document.getElementById(para_h3).innerHTML = data8[p][k];
          }
          else
            document.getElementById(para_button3).innerHTML = "Result";
        }
      }
    }
  };
}

function initiate() {
  var l = 667;
  var t = 70;
  var m1 = document.getElementById('m1');
  m1.style.top = (t + 39) + 'px'; m1.style.left = (l + 4) + 'px';
  document.getElementById('m2').style.top = (t + 58) + 'px';
  document.getElementById('m2').style.left = (l + 5) + 'px';
  document.getElementById('m3').style.top = (t + 73) + 'px';
  document.getElementById('m3').style.left = (l + 6) + 'px';
  document.getElementById('m4').style.top = (t + 88) + 'px';
  document.getElementById('m4').style.left = (l + 7) + 'px';
  document.getElementById('m5').style.top = (t + 105) + 'px';
  document.getElementById('m5').style.left = (l + 7) + 'px';
  // document.getElementById('m6').style.top=(t+110)+'px';
  // document.getElementById('m6').style.left=(l+8)+'px';
}
function rt(n) {
  var t = 200;
  while (n) {
    for (let i = 5; i > 0; i--) {
      blink(i, t);
      t += 200;
    }
    n--;
  }
}
function blink(i, t) {
  setTimeout(function () { document.getElementById('m' + i).style.opacity = '1'; }, t);
  setTimeout(function () { document.getElementById('m' + i).style.opacity = '0'; }, t + 200);
}

function initiate1() {
  var l1 = 667;
  var t1 = 70;
  var n1 = document.getElementById('n1');
  n1.style.top = (t1 + 39) + 'px'; n1.style.left = (l1 + 4) + 'px';
  document.getElementById('n2').style.top = (t1 + 58) + 'px';
  document.getElementById('n2').style.left = (l1 + 5) + 'px';
  document.getElementById('n3').style.top = (t1 + 73) + 'px';
  document.getElementById('n3').style.left = (l1 + 6) + 'px';
  document.getElementById('n4').style.top = (t1 + 88) + 'px';
  document.getElementById('n4').style.left = (l1 + 7) + 'px';
  document.getElementById('n5').style.top = (t1 + 105) + 'px';
  document.getElementById('n5').style.left = (l1 + 7) + 'px';
  // document.getElementById('m6').style.top=(t+110)+'px';
  // document.getElementById('m6').style.left=(l+8)+'px';
}
function rt1(n) {
  var t = 200;
  while (n) {
    for (let i = 5; i > 0; i--) {
      blink1(i, t);
      t += 200;
    }
    n--;
  }
}
function blink1(i, tx) {
  setTimeout(function () { document.getElementById('n' + i).style.opacity = '1'; }, tx);
  setTimeout(function () { document.getElementById('n' + i).style.opacity = '0'; }, tx + 150);
}

