function navNext() {
    for (temp = 0; temp <= 7; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    document.getElementById('canvas'+simsubscreennum).style.display='none';
    simsubscreennum += 1;
    document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
    document.getElementById('nextButton').style.visibility = "hidden";
    magic();
}

var ca;
var questions = ["Vane Anemometer is also known as",
"The instrument indicates the number of",
"Vane Anemometer have its axis parllel to the direction of the wind"
];

var options2 = [
    ["Proper Anemometer", "Propeller Anemometer", "Proportional Anemometer", "Pointer Anemometer"], //Propeller Anemometer
    ["Meter of water", "Meter of rod", "Meter of air", "Meter of fan"], //Meter of air
    ["True", "False"]
]; //True];

function validateAnswer(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("a").innerHTML = "";
    document.getElementById("questDiv").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    document.getElementById("q").innerHTML = questions[qn];
    if (qn == 0) document.getElementById('questDiv').style.width = "180px";
    if (qn == 1) document.getElementById('questDiv').style.width = "180px";
    if (qn == 2) document.getElementById('questDiv').style.width = "200px";

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
        $("#answer").change(function() {
            ca = $(this).children("option:selected").val();
            if (options2[qn][ans] == ca) {
                document.getElementById("a").innerHTML = "Correct Answer!";
            }
            else {
                document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
            }
            setTimeout(function() {
                document.getElementById("questDiv").style.visibility = "hidden";
                document.getElementById("nextButton").style.visibility = "visible";
            }, 1500);
        });
    }
}

var r = Math.floor(Math.random() * 3);
var ar1 = [
[231, 231, 120],
[234, 234, 120],
[230, 230, 120],
[228, 228, 120]
];

var ar2 = [
[241, 241, 120],
[239, 239, 120],
[238, 238, 120],
[240, 240, 120]
];

var ar3 = [
[220, 220, 120],
[225, 225, 120],
[222, 222, 120],
[220, 220, 120]
];

var arr1 = [
[1.93, 27.79],
[1.95, 28.08],
[1.91, 27.5],
[1.85, 26.64]
];

var arr2 = [
[2.008, 28.91],
[1.99, 28.65],
[1.98, 28.51],
[2.0, 28.8]
];

var arr3 = [
[1.83, 26.35],
[1.875, 27],
[1.85, 26.64],
[1.85, 26.64]
];

var a1 = [
[231, 231, 120, 1.93, 27.79],
[234, 234, 120, 1.95, 28.08],
[230, 230, 120, 1.91, 27.5],
[228, 228, 120, 1.85, 26.64]
];

var a2 = [
[241, 241, 120, 2.008, 28.91],
[239, 239, 120, 1.99, 28.65],
[238, 238, 120, 1.98, 28.5],
[240, 240, 120, 2.0, 28.8]
];

var a3 = [
[220, 220, 120, 1.83, 26.35],
[225, 225, 120, 1.875, 27],
[222, 222, 120, 1.85, 26.64],
[220, 220, 120, 1.83, 26.35]
];

//-----blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animateArrowATPosition(left,top,height,degg)
{
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height:"+height+"px; z-index: 10;";
    document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
     // Code for IE9
     document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
     // Standard syntax
     document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
 }
 function animatearrow() {
    if (document.getElementById('arrow1').style.visibility == "hidden")
        document.getElementById('arrow1').style.visibility = "visible";
    else
        document.getElementById('arrow1').style.visibility = "hidden";
}

//stop blinking arrow
function myStopFunction() {
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility = "hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic() {

    if (simsubscreennum == 1) {
        document.getElementById('arrow2').style.visibility = "hidden";
        document.getElementById('m9').style.visibility = "visible";
        document.getElementById('m10').style.visibility = "visible";
        setTimeout(function() {
           document.getElementById('m9').style.visibility = "hidden";
           document.getElementById('m10').style.visibility = "hidden";
           document.getElementById("a1").style.animation = "movefan 1s forwards";
           document.getElementById("a3").style.animation = "movevm 1s forwards";
           setTimeout(function() {
            document.getElementById('a2').style.visibility = "visible";
            myInt = setInterval(function() {
                animatearrow();
            }, 500);
            animateArrowATPosition(600,420,30,720);

            document.getElementById('a2').onclick = function() {
                step1();
            };
        }, 2000);
       }, 3000);
    }
    else if (simsubscreennum == 2) {
        document.getElementById('trial').style.visibility = "visible";
        document.getElementById('a2').style.visibility = "hidden";
        document.getElementById('10').style.visibility = "hidden";
        document.getElementById('cann').style.visibility = "hidden";

        document.getElementById('arrow2').style.visibility = "hidden";
        document.getElementById('01').style.visibility = "visible";
        document.getElementById('ok1').onclick = function() {
            step01();
        };
    }
    else if (simsubscreennum == 3) {
        document.getElementById('trial1').style.visibility = "visible";
        for (i = 0; i <= ar3[r].length - 1; i++) {
            document.getElementById("row" + i).innerHTML = ar3[r][i];
        }
        document.getElementById('arroww').style.visibility = "hidden";
        document.getElementById('check11').onclick = function() {
            step90();
        };
        function step90() {
            if (document.getElementById('output11').value == "") {
                alert("Enter the value to proceed");
            }
            else {

                if (document.getElementById('output11').value == arr3[r][0]) {
                    document.getElementById('check11').onclick = "";
                    document.getElementById('wf2').style.visibility = "hidden";
                    document.getElementById('rf2').style.visibility = "visible";
                    document.getElementById("row3").innerHTML = arr3[r][0];
                    document.getElementById('check11').style.visibility = "hidden";
                    document.getElementById('rt11').style.visibility = "hidden";
                }
                else {
                    document.getElementById('rf2').style.visibility = "hidden";
                    document.getElementById('check11').style.visibility = "visible";
                    document.getElementById('rt11').style.visibility = "visible";
                    document.getElementById('wf2').style.visibility = "visible";
                    document.getElementById('check11').onclick = "";
                    document.getElementById('rt11').onclick = function() {
                        step91();
                    };
                }
            }
            function step91() {
                document.getElementById('rt11').style.visibility = "hidden";
                document.getElementById('check11').style.visibility = "hidden";
                document.getElementById("row3").innerHTML = arr3[r][0];
                document.getElementById("output11").value = arr3[r][0];
                document.getElementById('wf2').style.visibility = "hidden";
            }
        }
        document.getElementById('check12').onclick = function() {
            step900();
        };
        function step900() {
            if (document.getElementById('output12').value == "") {
                alert("Enter the value to proceed");
            }
            else {

                if (document.getElementById('output12').value == arr3[r][1]) {
                    document.getElementById('wf12').style.visibility = "hidden";
                    document.getElementById('rf12').style.visibility = "visible";
                    document.getElementById("row4").innerHTML = arr3[r][1];
                    document.getElementById('check12').style.visibility = "hidden";
                    document.getElementById('rt12').style.visibility = "hidden";
                    document.getElementById('nextButton').style.visibility = "visible";
                }
                else {
                    document.getElementById('rf12').style.visibility = "hidden";
                    document.getElementById('check12').style.visibility = "visible";
                    document.getElementById('rt12').style.visibility = "visible";
                    document.getElementById('wf12').style.visibility = "visible";
                    document.getElementById('check12').onclick = "";
                    document.getElementById('rt12').onclick = function() {
                        step911();
                    };

                }
            }
            function step911() {
                document.getElementById('rt12').style.visibility = "hidden";
                document.getElementById('check12').style.visibility = "hidden";
                document.getElementById("row4").innerHTML = arr3[r][1];
                document.getElementById("output12").value = arr3[r][1];
                document.getElementById('wf12').style.visibility = "hidden";
                document.getElementById('nextButton').style.visibility = "visible";
            }
        }
    }
    else if (simsubscreennum == 4) {
        document.getElementById('trial').style.visibility = "hidden";
        document.getElementById('trial2').style.visibility = "visible";
        document.getElementById('check11').style.visibility = "hidden";
        document.getElementById('rt11').style.visibility = "hidden";
        document.getElementById('wf2').style.visibility = "hidden";
        document.getElementById('rf2').style.visibility = "hidden";
        document.getElementById('check12').style.visibility = "hidden";
        document.getElementById('rt12').style.visibility = "hidden";
        document.getElementById('wf12').style.visibility = "hidden";
        document.getElementById('rf12').style.visibility = "hidden";
        document.getElementById('10').style.visibility = "hidden";
        document.getElementById('cann').style.visibility = "hidden";
        document.getElementById('arrow2').style.visibility = "hidden";
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        animateArrowATPosition(670,330,25,270);
        document.getElementById('a13-2').onclick = function() {
            document.getElementById('a13-2').onclick = "";
            step21();
        };
    }
    else if (simsubscreennum == 5) {
        document.getElementById('trial3').style.visibility = "visible";

        for (i = 0; i <= ar2[r].length - 1; i++) {

            document.getElementById("rw" + i).innerHTML = ar2[r][i];
        }
        document.getElementById('arroww').style.visibility = "hidden";
        document.getElementById('check111').onclick = function() {
            step98();
        };

        function step98() {
            if (document.getElementById('output111').value == "") {
                alert("Enter the value to proceed");
            }
            else {

                if (document.getElementById('output111').value == arr2[r][0]) {
                    document.getElementById('wf22').style.visibility = "hidden";
                    document.getElementById('rf22').style.visibility = "visible";
                    document.getElementById("rw3").innerHTML = arr2[r][0];
                    document.getElementById('check111').style.visibility = "hidden";
                    document.getElementById('rt111').style.visibility = "hidden";
                }
                else {
                    document.getElementById('rf22').style.visibility = "hidden";
                    document.getElementById('check111').style.visibility = "visible";
                    document.getElementById('rt111').style.visibility = "visible";
                    document.getElementById('wf22').style.visibility = "visible";
                    document.getElementById('check111').onclick="";
                    document.getElementById('rt111').onclick = function() {
                        step981();
                    };
                }
            }
            function step981() {
                document.getElementById('rt111').style.visibility = "hidden";
                document.getElementById('check111').style.visibility = "hidden";
                document.getElementById("rw3").innerHTML = arr2[r][0];
                document.getElementById("output111").value = arr2[r][0];
                document.getElementById('wf22').style.visibility = "hidden";
            }
        }
        document.getElementById('check122').onclick = function() {
            step901();
        };
        function step901() {
            if (document.getElementById('output122').value == "") {
                alert("Enter the value to proceed");
            }
            else {

                if (document.getElementById('output122').value == arr2[r][1]) {
                    document.getElementById('wf122').style.visibility = "hidden";
                    document.getElementById('rf122').style.visibility = "visible";
                    document.getElementById("rw4").innerHTML = arr2[r][1];
                    document.getElementById("output122").innerHTML = arr2[r][1];
                    document.getElementById('check122').style.visibility = "hidden";
                    document.getElementById('rt122').style.visibility = "hidden";
                    document.getElementById('nextButton').style.visibility = "visible";
                }
                else {
                    document.getElementById('rf122').style.visibility = "hidden";
                    document.getElementById('check122').style.visibility = "visible";
                    document.getElementById('rt122').style.visibility = "visible";
                    document.getElementById('wf122').style.visibility = "visible";
                    document.getElementById('check122').onclick = "";
                    document.getElementById('rt122').onclick = function() {
                        step910();
                    };

                }
            }

            function step910() {
                document.getElementById('rt122').style.visibility = "hidden";
                document.getElementById('check122').style.visibility = "hidden";
                document.getElementById("rw4").innerHTML = arr2[r][1];
                document.getElementById("output122").value = arr2[r][1];
                document.getElementById('wf122').style.visibility = "hidden";
                document.getElementById('nextButton').style.visibility = "visible";
            }
        }
    }

    else if (simsubscreennum == 6) {
        document.getElementById('trial3').style.visibility = "hidden";
        document.getElementById('trial4').style.visibility = "visible";

        document.getElementById('a44-1').style.visibility = "hidden";
        document.getElementById('a41-1').style.visibility = "hidden";
        document.getElementById('can12-1').style.visibility = "hidden";
        document.getElementById('can22-1').style.visibility = "hidden";
        document.getElementById('check111').style.visibility = "hidden";
        document.getElementById('rt111').style.visibility = "hidden";
        document.getElementById('wf22').style.visibility = "hidden";
        document.getElementById('rf22').style.visibility = "hidden";
        document.getElementById('check122').style.visibility = "hidden";
        document.getElementById('rt122').style.visibility = "hidden";
        document.getElementById('wf122').style.visibility = "hidden";
        document.getElementById('rf122').style.visibility = "hidden";
        document.getElementById('cann').style.visibility = "hidden";

        document.getElementById('arrow2').style.visibility = "hidden";

        myInt = setInterval(function() {
            animatearrow();
        }, 500);

        animateArrowATPosition(670,330,25,270);
        document.getElementById('a13-3').onclick = function() {
            document.getElementById('a13-3').onclick = "";

            step22();

        };
    }
    else if (simsubscreennum == 7) {
        document.getElementById('trial5').style.visibility = "visible";

        for (i = 0; i <= ar1[r].length - 1; i++) {

            document.getElementById("r" + i).innerHTML = ar1[r][i];
        }
        document.getElementById('arroww').style.visibility = "hidden";
        //document.getElementById('nextButton').style.visibility="visible";
        document.getElementById('checkq').onclick = function() {
            stepr();
        };
        function stepr() {
            if (document.getElementById('outputq').value == "") {
                alert("Enter the value to proceed");
            }
            else {

                if (document.getElementById('outputq').value == arr1[r][0]) {
                    document.getElementById('wfq').style.visibility = "hidden";
                    document.getElementById('rfq').style.visibility = "visible";
                    document.getElementById("r3").innerHTML = arr1[r][0];
                    document.getElementById('checkq').style.visibility = "hidden";
                    document.getElementById('rtq').style.visibility = "hidden";
                }
                else {
                    document.getElementById('rfq').style.visibility = "hidden";
                    document.getElementById('checkq').style.visibility = "visible";
                    document.getElementById('rtq').style.visibility = "visible";
                    document.getElementById('wfq').style.visibility = "visible";
                    document.getElementById('checkq').onclick = "";
                    document.getElementById('rtq').onclick = function() {
                        stepq();
                    };

                }
            }

            function stepq() {
                document.getElementById('rtq').style.visibility = "hidden";
                document.getElementById('checkq').style.visibility = "hidden";
                document.getElementById("r3").innerHTML = arr1[r][0];
                document.getElementById("outputq").value = arr1[r][0];
                document.getElementById('wfq').style.visibility = "hidden";
            }
        }
        document.getElementById('checkp').onclick = function() {
            step901();
        };
        function step901() {

            if (document.getElementById('outputp').value == "") {
                alert("Enter the value to proceed");
            }
            else {

                if (document.getElementById('outputp').value == arr1[r][1]) {
                    document.getElementById('wfp').style.visibility = "hidden";
                    document.getElementById('rfp').style.visibility = "visible";
                    document.getElementById("r4").innerHTML = arr1[r][1];
                    document.getElementById('checkp').style.visibility = "hidden";
                    document.getElementById('rtp').style.visibility = "hidden";
                    document.getElementById('nextButton').style.visibility = "visible";
                }
                else {
                    document.getElementById('rfp').style.visibility = "hidden";
                    document.getElementById('checkp').style.visibility = "visible";
                    document.getElementById('rtp').style.visibility = "visible";
                    document.getElementById('wfp').style.visibility = "visible";
                    document.getElementById('checkp').onclick = "";
                    document.getElementById('rtp').onclick = function() {
                        step910();
                    };
                }
            }
            function step910() {
                document.getElementById('rtp').style.visibility = "hidden";
                document.getElementById('checkp').style.visibility = "hidden";
                document.getElementById("r4").innerHTML = arr3[r][1];
                document.getElementById("outputp").value = arr3[r][1];
                document.getElementById('wfp').style.visibility = "hidden";
                document.getElementById('nextButton').style.visibility = "visible";
            }
        }

    }

    else if (simsubscreennum == 8) {
        document.getElementById('trial5').style.visibility = "hidden";
        document.getElementById('wfp').style.visibility = "hidden";
        document.getElementById('rfp').style.visibility = "hidden";
        for (i = 0; i <= a3[r].length - 1; i++) {
            document.getElementById("ro" + i).innerHTML = a3[r][i];
        }
        for (i1 = 0; i1 <= a2[r].length - 1; i1++) {
            document.getElementById("rr" + i1).innerHTML = a2[r][i1];
        }
        for (i11 = 0; i11 <= a1[r].length - 1; i11++) {
            document.getElementById("re" + i11).innerHTML = a1[r][i11];
        }
        document.getElementById('arroww').style.visibility = "hidden";
        document.getElementById('checkp').style.visibility = "hidden";
        document.getElementById('rtq').style.visibility = "hidden";
        document.getElementById('wfq').style.visibility = "hidden";
        document.getElementById('rfq').style.visibility = "hidden";
        document.getElementById('checkq').style.visibility = "hidden";
        document.getElementById('rtq').style.visibility = "hidden";
        document.getElementById('wfq').style.visibility = "hidden";
        document.getElementById('rfq').style.visibility = "hidden";
        document.getElementById('18').style.visibility = "visible";
        document.getElementById('check1').onclick = function() {
            step90();
        };

        function step90() {
            if (document.getElementById('output1').value == "") {
                alert("Enter the value to proceed");
            }
            else {

                if (document.getElementById('output1').value == 1.531) {
                    document.getElementById('w2').style.visibility = "hidden";
                    document.getElementById('rt').style.visibility = "visible";
                    document.getElementById('check1').style.visibility = "hidden";
                    document.getElementById('rs').style.visibility = "hidden";
                    document.getElementById('nextButton').style.visibility = "visible";
                }
                else {
                    document.getElementById('rt').style.visibility = "hidden";
                    document.getElementById('check1').style.visibility = "visible";
                    document.getElementById('rs').style.visibility = "visible";
                    document.getElementById('w2').style.visibility = "visible";
                    document.getElementById('check1').onclick = "";
                    document.getElementById('rs').onclick = function() {
                        step91();
                    };
                }
            }

            function step91() {
                document.getElementById('check1').onclick = "";
                document.getElementById('rs').style.visibility = "hidden";
                document.getElementById('18').style.visibility = "hidden";
                document.getElementById('w2').style.visibility = "hidden";
                document.getElementById('can331').style.visibility = "visible";
                document.getElementById('nextButton').style.visibility = "visible";
            }
        }
    }
    else if (simsubscreennum == 8) {
        document.getElementById('check1').style.visibility = "hidden";
        document.getElementById('can331').style.visibility = "hidden";
    }
}


function step1() {
    myStopFunction();
    document.getElementById('a2').onclick = "";
    document.getElementById("a2").style.animation = "movescale 1s forwards";
    setTimeout(function() {
        document.getElementById('arrow2').style = "visibility:visible ;position:absolute; left:510px; top: 225px; height: 25px; z-index: 5;";
        document.getElementById("arrow2").style.transform = "rotate(16deg)";

        document.getElementById('cann').style.visibility = "visible";
        document.getElementById("a2").onload = setInterval("rott()", 10);
        myInt = setInterval(function() {
            animatearrow();
        }, 500);
        animateArrowATPosition(280,160,30,270);
        document.getElementById('a8').onclick = function() {
            step11();
        };
    }, 1000);
}

function step11() {
    myStopFunction();
    document.getElementById('a8').onclick = "";

    document.getElementById("a8").style.animation = "moves 1s forwards";
    document.getElementById("a8").style.animation = "movess 1s forwards";
    setTimeout(function() {
        document.getElementById('10').style.visibility = "visible";
        document.getElementById('ok').onclick = function() {
            step10();
        };
    }, 1000);
    document.getElementById("a5").style.animation = "rot 1s linear forwards";
}

function step10() {

    document.getElementById('10').style.visibility = "hidden";
    document.getElementById('ok').style.visibility = "hidden";
    document.getElementById('nextButton').style.visibility = "visible";
}
function step01() {

    document.getElementById('01').style.visibility = "hidden";
    document.getElementById('ok1').style.visibility = "hidden";
    document.getElementById('a44').style.visibility = "visible";
    document.getElementById('a41').style.visibility = "visible";
    document.getElementById('a22').style.visibility = "visible";
    myInt = setInterval(function() {animatearrow();}, 500);
    animateArrowATPosition(670,330,25,270);
    document.getElementById('a13-1').onclick = function() {
     document.getElementById('a13-1').onclick = "";

     step2();
 }; 
}

function step2() {
    myStopFunction();
    document.getElementById('a88').onclick = "";
    setTimeout(function() {
        setTimeout(function() {

            document.getElementById("a55").style.animation = "rotate2 8s linear forwards";
            document.getElementById("a77").style.animation = "rotat 11s linear forwards";
            document.getElementById("a99").style.animation = "rotate 8s linear forwards";
            setTimeout(function() {
              myInt = setInterval(function() {
                  animatearrow();
              }, 500);
              animateArrowATPosition(668,85,25,270);
              document.getElementById('a14-1').onclick = function(){
                myStopFunction();
                document.getElementById('a14-1').onclick = "";

                document.getElementById("a14-1").style.animation = "mos 1s forwards";
                document.getElementById("a14-1").style.animation = "moss 1s forwards";
                setTimeout(function() {
                    document.getElementById('can22').innerHTML = "Time=120 s.";

                    document.getElementById('can12').innerHTML = "Reading=" + ar3[r][1]+".";
                    console.log(ar3[r][1]);
                    setTimeout(function() {
                        document.getElementById('a13-1').style.visibility = "hidden";
                        document.getElementById('a14-1').style.visibility = "hidden";
                        document.getElementById('a33').style.visibility = "hidden";
                        document.getElementById('a55').style.visibility = "hidden";
                        document.getElementById('a88').style.visibility = "hidden";
                        document.getElementById('a66').style.visibility = "hidden";
                        document.getElementById('a77').style.visibility = "hidden";
                        document.getElementById('a99').style.visibility = "hidden";
                        document.getElementById('a11').style.visibility = "hidden";
                        document.getElementById('can12').style.visibility = "hidden";
                        document.getElementById('can22').style.visibility = "hidden";
                        validateAnswer(0, 1, "570px", "120px");
                    }, 3200);
                }, 1500);
            };
        }, 9500);
            moveAF1();
            document.getElementById("a99").onload = start('1',7);
            document.getElementById('arroww').style.visibility = "hidden";
            document.getElementById('cann1').style.visibility = "hidden";
        }, 500);
        document.getElementById("a41").onload = setInterval("rott11()", 10);
        document.getElementById('arroww').style.visibility = "visible";
        document.getElementById('cann1').style.visibility = "visible";
        document.getElementById("a13-1").style.animation = "movv 1s forwards";
        document.getElementById("a13-1").style.animation = "movw 1s forwards";
    }, 200);
}


function step21() {
    myStopFunction();
    document.getElementById('a88-1').onclick = "";

    setTimeout(function() {
        setTimeout(function() {
            document.getElementById("a55-1").style.animation = "rotate1 11s linear forwards";
            document.getElementById("a77-1").style.animation = "rotat 11s linear forwards";
            document.getElementById("a99-1").style.animation = "rotate 11s linear forwards";
            setTimeout(function() {
              myInt = setInterval(function() {
                  animatearrow();
              }, 500);

              animateArrowATPosition(668,85,25,270);
              document.getElementById('a14-2').onclick = function(){
                myStopFunction();
                document.getElementById('a14-2').onclick = "";
                document.getElementById("a14-2").style.animation = "mos 1s forwards";
                document.getElementById("a14-2").style.animation = "moss 1s forwards";
                setTimeout(function() {
                    document.getElementById('can22-1').innerHTML = "Time=120 s.";
                    document.getElementById('can12-1').innerHTML = "Reading=" + ar2[r][1]+".";
                    setTimeout(function() {
                        document.getElementById('a13-2').style.visibility = "hidden";
                        document.getElementById('a14-2').style.visibility = "hidden";
                        document.getElementById('a33-1').style.visibility = "hidden";
                        document.getElementById('a55-1').style.visibility = "hidden";
                        document.getElementById('a88-1').style.visibility = "hidden";
                        document.getElementById('a66-1').style.visibility = "hidden";
                        document.getElementById('a77-1').style.visibility = "hidden";
                        document.getElementById('can12-1').style.visibility = "hidden";
                        document.getElementById('can22-1').style.visibility = "hidden";
                        document.getElementById('a99-1').style.visibility = "hidden";
                        document.getElementById('a11-1').style.visibility = "hidden";
                        validateAnswer(1, 2, "570px", "120px");
                    }, 3200);
                }, 1500);
            };
        }, 13000);
            moveAF2();
            document.getElementById('arroww-1').style.visibility = "hidden";
            document.getElementById("a99-1").onclick = start('2',10);
        }, 1200);
        document.getElementById("a41-1").onload = setInterval("rott12()", 10);
        document.getElementById('arroww-1').style.visibility = "visible";
        document.getElementById("a13-2").style.animation = "movv 1s forwards";
        document.getElementById("a13-2").style.animation = "movw 1s forwards";
    }, 800);
}

function step22() {
    myStopFunction();
    document.getElementById('a88-2').onclick = "";
    setTimeout(function() {
        setTimeout(function() {
            document.getElementById("a55-2").style.animation = "rotates 8.2s linear forwards";
            document.getElementById("a77-2").style.animation = "rotat 9s linear forwards";
            document.getElementById("a99-2").style.animation = "rotate 8s linear forwards";
            setTimeout(function() {
              myInt = setInterval(function() {
                  animatearrow();
              }, 500);
              animateArrowATPosition(668,85,25,270);
              document.getElementById('a14-3').onclick = function(){
                myStopFunction();
                document.getElementById('a14-3').onclick = "";
                document.getElementById("a14-3").style.animation = "mos 1s forwards";
                document.getElementById("a14-3").style.animation = "moss 1s forwards";
                setTimeout(function() {
                    document.getElementById('can22-2').innerHTML = "Time=120 s.";
                    document.getElementById('can12-2').innerHTML = "Reading=" + ar1[r][1]+".";
                    setTimeout(function() {
                        document.getElementById('a13-3').style.visibility = "hidden";
                        document.getElementById('a14-3').style.visibility = "hidden";
                        document.getElementById('a33-2').style.visibility = "hidden";
                        document.getElementById('a55-2').style.visibility = "hidden";
                        document.getElementById('a88-2').style.visibility = "hidden";
                        document.getElementById('a66-2').style.visibility = "hidden";
                        document.getElementById('a77-2').style.visibility = "hidden";
                        document.getElementById('can12-2').style.visibility = "hidden";
                        document.getElementById('can22-2').style.visibility = "hidden";
                        document.getElementById('a99-2').style.visibility = "hidden";
                        document.getElementById('a11-2').style.visibility = "hidden";
                        validateAnswer(2, 0, "570px", "120px");
                    }, 2800);
                }, 1500);
            };
        }, 13000);
            moveAF3();
            document.getElementById("a99-2").onclick = start('3',8);
            document.getElementById('arroww-2').style.visibility = "hidden";

        }, 1000);
        document.getElementById("a41-2").onload = setInterval("rott22()", 10);
        document.getElementById('arroww-2').style.visibility = "visible";
        document.getElementById("a13-3").style.animation = "movv 1s forwards";
        document.getElementById("a13-3").style.animation = "movw 1s forwards";
    }, 800);
}



var val = 1;

function rott() {
    val = val + 1;
    document.getElementById('a3').style.webkitTransform = "rotate(" + val + "deg)";
    document.getElementById('a3').style.mozTransform = "rotate(" + val + "deg)";
}

var v1 = 1;

function rott11() {
    v1 = v1 + 1;
    document.getElementById('a41').style.webkitTransform = "rotate(" + v1 + "deg)";
    document.getElementById('a41').style.mozTransform = "rotate(" + v1 + "deg)";
}

var v11 = 1;

function rott12() {
    v11 = v11 + 1;
    document.getElementById('a41-1').style.webkitTransform = "rotate(" + v11 + "deg)";
    document.getElementById('a41-1').style.mozTransform = "rotate(" + v11 + "deg)";
}

var v21 = 1;

function rott22() {
    v21 = v21 + 1;
    document.getElementById('a41-2').style.webkitTransform = "rotate(" + v21 + "deg)";
    document.getElementById('a41-2').style.mozTransform = "rotate(" + v21 + "deg)";
}


//lines to draw the traversing path
function start(sn,ln) {
    draw_1();
    function draw_1() {
        var l1=document.getElementById('line1'+sn);
        l1.style.height='130px';
        ln--;
        setTimeout(function(){
            draw_2();
        },1000);
    }

    function draw_2() {
        var sm1=document.getElementById('sc1mask'+sn);
        sm1.style.marginLeft='113px';
        ln--;
        setTimeout(function(){
            sm1.style.display='none';
            draw_3();
        },1200) ;    
    }

    function draw_3() {
        var l2=document.getElementById('line2'+sn);
        l2.style.height='130px';
        l2.style.top='200px';
        ln--;
        setTimeout(function(){
            draw_4();
        },1000);
    }


    function draw_4() {
        var sm2=document.getElementById('sc2mask'+sn);
        sm2.style.marginLeft='113px';
        sm2.style.width='10px';

        ln--;
        setTimeout(function(){
            sm2.style.display='none';
            draw_5();
        },1200)      
    }

    function draw_5() {        
        var l3=document.getElementById('line3'+sn);
        l3.style.height='130px';
        ln--;
        if(ln!=0)
            setTimeout(function(){
                draw_6();
            },1000);
    }

    function draw_6() {
        var sm3=document.getElementById('sc3mask'+sn);
        sm3.style.marginLeft='113px';
        sm3.style.width='10px';
        ln--;
        setTimeout(function(){
            sm3.style.display='none';
            draw_7();
        },1200) 
    }

    function draw_7() {
        var l4=document.getElementById('line4'+sn);
        l4.style.height='130px';
        l4.style.top='200px';
        ln--;
        if(ln!=0)
            setTimeout(function(){
                draw_8();
            },800);
    }

    function draw_8() {
        var l5=document.getElementById('line5'+sn);
        l5.style.height='130px';
        ln--;
        if(ln!=0)
        	setTimeout(function(){
            	draw_9();
        	},1000);
    }

    function draw_9() {
        document.getElementById('sc32cont').style.width='0px';
        ln--;
        if(ln!=0)
        	setTimeout(function(){
            	draw_10();
        	},1200);
    }

    function draw_10() {
        var l6=document.getElementById('line6'+sn);
        l6.style.height='130px';
        l6.style.top='200px';
        ln--;
    }
}

var ElementRevolver = (function() {

    function getPosition(settings, ellapsedTime) {
        var angle = getAngle(settings, ellapsedTime);
        return {
            x: Math.round(settings.center.x + settings.radius * Math.cos(angle)),
            y: Math.round(settings.center.y + settings.radius * Math.sin(angle))
        };
    }
    
    function getAngle(settings, ellapsedTime) {
        return ellapsedTime / settings.interval * 2 * Math.PI * settings.direction - settings.startPositionRad;
    }
    
    function start(id, settings) {
        var el = document.getElementById(id),
        startTime = (new Date()).getTime(),
        width = el.offsetWidth,
        height = el.offsetHeight;
        if(el['#rev:tm'] !== null) stop(id);
        el.style.position = settings.cssPosition || 'absolute';
        if(!settings.startPositionRad) settings.startPositionRad = settings.startPositionDeg / 180 * Math.PI;
        el['#rev:tm'] = setInterval(function() {
            var pos = getPosition(settings, (new Date()).getTime() - startTime);
            el.style.left = (pos.x - Math.round(width / 2)) + 'px';
            el.style.top = (pos.y - Math.round(height / 2)) + 'px';
        }, settings.updateInterval);
        if(settings.iterations > -1) setTimeout(function() {
            stop(id);
        }, settings.iterations * settings.interval);
    }
    
    function stop(id) {
        var el = document.getElementById(id);
        if(el['#rev:tm'] === null) return;
        clearInterval(el['#rev:tm']);
        el['#rev:tm'] = null;
    }
    
    return {
        start: start,
        stop: stop
    };
    
})();

function moveAF1(){
	var amtr=document.getElementById('a44');
	var fan=document.getElementById('a41');
	amtr.style.transition='margin 1s linear';
	fan.style.transition='margin 1s linear';
	amtr.style.marginTop='130px';
	fan.style.marginTop='130px';
	setTimeout(function(){
		ElementRevolver.start('a44', {
          radius: 55,
          center: { x: 170, y: 243 },
          interval: 2400,
          direction: -1,
          iterations: 0.5,
          startPositionDeg: 180,
          updateInterval: 10
      });
		ElementRevolver.start('a41', {
          radius: 55,
          center: { x: 138, y: 199 },
          interval: 2400,
          direction: -1,
          iterations: 0.5,
          startPositionDeg: 180,
          updateInterval: 10
      });
	},1000);
	setTimeout(function(){
		amtr.style.marginTop='-15px';
		fan.style.marginTop='-15px';
		setTimeout(function(){
			ElementRevolver.start('a44', {
               radius: 55,
               center: { x: 280, y: 243 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
			ElementRevolver.start('a41', {
               radius: 55,
               center: { x: 248, y: 199 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
		},1000)
	},2200)
	setTimeout(function(){
		amtr.style.marginTop='120px';
		fan.style.marginTop='120px';
		setTimeout(function(){
			ElementRevolver.start('a44', {
               radius: 55,
               center: { x: 390, y: 243 },
               interval: 2400,
               direction: -1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
			ElementRevolver.start('a41', {
               radius: 55,
               center: { x: 358, y: 199 },
               interval: 2400,
               direction: -1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
		},1000)
	},4400)
	setTimeout(function(){
		amtr.style.marginTop='0px';
		fan.style.marginTop='0px';
	},6600)
}

function moveAF2(){
	var amtr=document.getElementById('a44-1');
	var fan=document.getElementById('a41-1');
	amtr.style.transition='margin 1s linear';
	fan.style.transition='margin 1s linear';
	amtr.style.marginTop='130px';
	fan.style.marginTop='130px';
	setTimeout(function(){
		ElementRevolver.start('a44-1', {
          radius: 55,
          center: { x: 170, y: 243 },
          interval: 2400,
          direction: -1,
          iterations: 0.5,
          startPositionDeg: 180,
          updateInterval: 10
      });
		ElementRevolver.start('a41-1', {
          radius: 55,
          center: { x: 138, y: 199 },
          interval: 2400,
          direction: -1,
          iterations: 0.5,
          startPositionDeg: 180,
          updateInterval: 10
      });
	},1000);
	setTimeout(function(){
		amtr.style.marginTop='-15px';
		fan.style.marginTop='-15px';
		setTimeout(function(){
			ElementRevolver.start('a44-1', {
               radius: 55,
               center: { x: 280, y: 243 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
			ElementRevolver.start('a41-1', {
               radius: 55,
               center: { x: 248, y: 199 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
		},1000)
	},2200)
	setTimeout(function(){
		amtr.style.marginTop='120px';
		fan.style.marginTop='120px';
		setTimeout(function(){
			ElementRevolver.start('a44-1', {
               radius: 55,
               center: { x: 390, y: 243 },
               interval: 2400,
               direction: -1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
			ElementRevolver.start('a41-1', {
               radius: 55,
               center: { x: 358, y: 199 },
               interval: 2400,
               direction: -1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
		},1000)
	},4400)
	setTimeout(function(){
		amtr.style.marginTop='0px';
		fan.style.marginTop='0px';
	},6600)
	setTimeout(function(){
		amtr.style.marginTop='120px';
		fan.style.marginTop='120px';
		setTimeout(function(){
			ElementRevolver.start('a44-1', {
               radius: 55,
               center: { x: 390, y: 243 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 0,
               updateInterval: 10
           });
			ElementRevolver.start('a41-1', {
               radius: 55,
               center: { x: 358, y: 199 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 0,
               updateInterval: 10
           });
		},1000)
	},7600)
	setTimeout(function(){
		amtr.style.marginTop='-10px';
		fan.style.marginTop='-10px';
	},9800)
}

function moveAF3(){
	var amtr=document.getElementById('a44-2');
	var fan=document.getElementById('a41-2');
	amtr.style.transition='margin 1s linear';
	fan.style.transition='margin 1s linear';
	amtr.style.marginTop='130px';
	fan.style.marginTop='130px';
	setTimeout(function(){
		ElementRevolver.start('a44-2', {
          radius: 55,
          center: { x: 170, y: 243 },
          interval: 2400,
          direction: -1,
          iterations: 0.5,
          startPositionDeg: 180,
          updateInterval: 10
      });
		ElementRevolver.start('a41-2', {
          radius: 55,
          center: { x: 138, y: 199 },
          interval: 2400,
          direction: -1,
          iterations: 0.5,
          startPositionDeg: 180,
          updateInterval: 10
      });
	},1000);
	setTimeout(function(){
		amtr.style.marginTop='-15px';
		fan.style.marginTop='-15px';
		setTimeout(function(){
			ElementRevolver.start('a44-2', {
               radius: 55,
               center: { x: 280, y: 243 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
			ElementRevolver.start('a41-2', {
               radius: 55,
               center: { x: 248, y: 199 },
               interval: 2400,
               direction: 1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
		},1000)
	},2200)
	setTimeout(function(){
		amtr.style.marginTop='120px';
		fan.style.marginTop='120px';
        setTimeout(function(){
            ElementRevolver.start('a44-2', {
               radius: 55,
               center: { x: 390, y: 243 },
               interval: 2400,
               direction: -1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
            ElementRevolver.start('a41-2', {
               radius: 55,
               center: { x: 358, y: 199 },
               interval: 2400,
               direction: -1,
               iterations: 0.5,
               startPositionDeg: 180,
               updateInterval: 10
           });
        },1000)
    },4400)
    setTimeout(function(){
        amtr.style.marginTop='0px';
        fan.style.marginTop='0px';
    },6600)
    setTimeout(function(){
        amtr.style.marginTop='130px';
        fan.style.marginTop='130px';
    },7400)
}