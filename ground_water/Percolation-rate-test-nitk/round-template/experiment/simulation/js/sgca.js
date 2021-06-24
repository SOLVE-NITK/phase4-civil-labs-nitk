function navNext() {
    document.getElementById('canvas' + (simsubscreennum)).style.display = "none";
    for (temp = 0; temp <= 4; temp++) {
        document.getElementById('canvas' + temp).style.visibility = "hidden";
    }
    // if (simsubscreennum == 2) {
    //     document.getElementById("man").style.display = "none";
    //     document.getElementById("microscope").style.display = "none";
    // }
    if (sample) {
        document.getElementById("canvas0.5").style.visibility = "visible";
        sample = 0;
    }
    else {
        simsubscreennum += 1;
        if (simsubscreennum == 1) {
            var p3radio = document.getElementById('selectp3');
            var p12radio = document.getElementById('selectp12');
            if (p3radio.checked) sampletype = 1;
            else if (p12radio.checked) sampletype = 2;
            //console.log(sampletype);
            document.getElementById("canvas0.5").style.display = "none";
        }
        document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
        document.getElementById('nextButton').style.visibility = "hidden";
        magic();
    }
}


var data1=[
[15,28,28],
[30,54,26],
[45,77,23],
[60,99,22]];

var data2=[[1.866,1.733,1.533,1.466]];

var data3=[
    [15,13.6,13.6],
    [30,23.8,10.2],
    [45,33.4,9.6],
    [60,43,9.6]];
    
    var data4=[[0.9066,0.68,0.64,0.64]];

var ca;
var questions = ["Which instrument is used for putting soil into the cone?",
    "The stopwatch should be started after",
];

var options2 = [
    ["Spatula","Conical flask","Spoon","Pipette"],
    ["first reading", "Inserting cone into cone stand", "Putting water onto the soil", "Putting soil on the cone"],
];

function validateAnswer(qn, ans, left, top) {
    $("#answer").empty();
    document.getElementById("a").innerHTML = "";
    document.getElementById("questDiv").style = "z-index:200;position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
    if (qn == 2) document.getElementById('questDiv').style.width = "250px";
    document.getElementById("q").innerHTML = questions[qn];
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
            }, 2500);
        });
    }
}

var j1 = 0;
function fillTable1(repeat) {
	var tb2 = document.getElementById("table2");
    var row2 = tb2.insertRow();

    var cell2 = document.getElementsByTagName("td");
	for (i = 0; i <= data1[j1].length -1; i++) {
        console.log(data1[j1].length);
		var cell2 = row2.insertCell();
		cell2.innerHTML = data1[j1][i];
	}
	if (j1 < 3) {
		setTimeout(function () {
			j1++;
			fillTable1(j1);
		}, 1400);
	}
}

var jt=0;
var re=0;
function fillt(re)
{

	if (jt <= 3) {
	document.getElementById("r"+jt).style.visibility = "visible";
	setTimeout(function () {
		jt++;
		fillt(jt);
	}, 1400);	
}
}

var j2 = 0;
function fillTable11(repeat) {
	var tb2 = document.getElementById("table3");
    var row2 = tb2.insertRow();
    var cell2 = document.getElementsByTagName("td");
	for (i = 0; i <= data3[j2].length -1; i++) {
        console.log(data3[j2].length);
		var cell2 = row2.insertCell();
		cell2.innerHTML = data3[j2][i];
	}
	if (j2 < 3) {
		setTimeout(function () {
			j2++;
			fillTable11(j2);
		}, 1400);
	}
}

var jt1=0;
var re=0;
function fillt1(re)
{
	if (jt1 <= 3) {
	document.getElementById("q"+jt1).style.visibility = "visible";
	setTimeout(function () {
		jt1++;
		fillt1(jt1);
	}, 1400);	
}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
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

function animateArrowATPosition(left, top, height, degg) {
	document.getElementById('arrow1').style = "visibility:visible ;position:absolute; left:" + left + "px; top: " + top + "px; height:" + height + "px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(" + degg + "deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(" + degg + "deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(" + degg + "deg)";
}

//-------------------------------------function magic starts here----------------------------------------------------
function magic() {

    if (simsubscreennum == 1) {
        myInt = setInterval(function() { animatearrow();}, 500);
        animateArrowATPosition(310, 250, 40, 180);
        document.getElementById('stand').style.visibility = "visible";
        document.getElementById('hand').onclick = function() {
            this.onclick = null;
            step1();
        };
    }

      if (simsubscreennum == 2) {
        myInt = setInterval(function() { animatearrow();}, 500);
        animateArrowATPosition(410, 270, 40, 180);
        document.getElementById('sandysoil').style.visibility = "visible";
        document.getElementById('sph').onclick = function() {
            this.onclick = null;
            step2();
        };
    }

    if (simsubscreennum == 3) {
        myInt = setInterval(function() {animatearrow();}, 500);
        animateArrowATPosition(400, 430, 40, 360);
        document.getElementById('sandysoil').style.visibility = "visible";
        document.getElementById('setup11').style.visibility = "visible";
        document.getElementById('beaker').onclick = function() {
            this.onclick = null;
            step3();
        };
    }

    if (simsubscreennum == 4) {
        myInt = setInterval(function() {animatearrow();}, 500);
        animateArrowATPosition(340, 450, 40, 180);
        document.getElementById('sandysoil').style.visibility = "visible";
        document.getElementById('setup12').style.visibility = "visible";
        document.getElementById('setup11').style.visibility = "hidden";
        document.getElementById('beakerh11').style.visibility = "hidden";
        document.getElementById('beakerh12').style.visibility = "visible";
        document.getElementById('water').onclick = function() {
            this.onclick = null;
            step4();
        };
    }

    if (simsubscreennum == 5) {
        var type=sampletype;
        if(type==1)
        {
         document.getElementById("table2").style.visibility="visible";
         document.getElementById("table21").style.visibility="visible";
         document.getElementById("btn1").style.visibility="visible";
         document.getElementById("swh1").style.visibility="visible";
         document.getElementById("needle").style.visibility="visible";
         document.getElementById('setup21').style.visibility = "visible";
         document.getElementById("drop-1").style.visibility="visible";
         document.getElementById("drop-1").style.animation="drop 1s 4";
         document.getElementById("needle").style.animation = "mover52 4s linear forwards";
         document.getElementById("drop-2").style.visibility="visible";
         document.getElementById("drop-2").style.animation="mover53 4s linear forwards";
         fillTable1(1);
         fillt(1)
         setTimeout(function() {
           
            document.getElementById("drop-1").style.visibility="hidden";

         },4000);

         calc2('btn1', 'o1', 'o1', 'btn1', 'o1', 'btn2', 'btn1', 'wng1', 'wng1', 'rgt1', 'btn2','o1', 'wng1', 'rgt1', 'rgt1','btn1',  0);

			calc2('btn2', 'o2', 'o2', 'btn2', 'o2', 'btn3', 'btn2', 'wng2', 'wng2', 'rgt2', 'btn3', 'o2', 'wng2', 'rgt2', 'rgt2', 'btn2',  1);
	
			calc2('btn3', 'o3', 'o3', 'btn3', 'o3', 'btn4', 'btn3', 'wng3', 'wng3', 'rgt3', 'btn4','o3', 'wng3', 'rgt3', 'rgt3','btn3',  2);
	
            calc2('btn4', 'o4', 'o4', 'btn4', 'o4', 'div1', 'btn4', 'wng4', 'wng4', 'rgt4', 'div1', 'o4', 'wng4', 'rgt4', 'rgt4', 'btn4',  3);
            
            calc5('button1', 'output1', 'output1', 'button1', 'output1', 'nextButton', 'button1', 'wrong1', 'wrong1', 'right1', 'nextButton', 'output1', 'wrong1', 'right1', 'right1', 'button1',  0);
        }
    
        if(type==2)
        {
            document.getElementById("table3").style.visibility="visible";
            document.getElementById("table31").style.visibility="visible";
            document.getElementById("btn11").style.visibility="visible";
            document.getElementById("swh11").style.visibility="visible";
            document.getElementById("needle1").style.visibility="visible";
            document.getElementById('setup22').style.visibility = "visible";
            document.getElementById("drop-12").style.visibility="visible";
            document.getElementById("drop-12").style.animation="drop 1s 4";
            document.getElementById("needle1").style.animation = "mover52 4s linear forwards";
            document.getElementById("drop-22").style.visibility="visible";
            document.getElementById("drop-22").style.animation="mover53 4s linear forwards";
           fillTable11(1);
           fillt1(1)
            setTimeout(function() {
              
               document.getElementById("drop-12").style.visibility="hidden";
    
            },4000);
    
                calc3('btn11', 'o11', 'o11', 'btn11', 'o11', 'btn21', 'btn11', 'wng11', 'wng11', 'rgt11', 'btn21','o11', 'wng11', 'rgt11', 'rgt11','btn11',  0);
    
               calc3('btn21', 'o21', 'o21', 'btn21', 'o21', 'btn31', 'btn21', 'wng21', 'wng21', 'rgt21', 'btn31', 'o21', 'wng21', 'rgt21', 'rgt21', 'btn21',  1);
       
               calc3('btn31', 'o31', 'o31', 'btn31', 'o31', 'btn41', 'btn31', 'wng31', 'wng31', 'rgt31', 'btn41','o31', 'wng31', 'rgt31', 'rgt31','btn31',  2);
       
               calc3('btn41', 'o41', 'o41', 'btn41', 'o41', 'div2', 'btn41', 'wng41', 'wng41', 'rgt41', 'div2', 'o41', 'wng41', 'rgt41', 'rgt41', 'btn41',  3);
               
               calc6('button11', 'output11', 'output11', 'button11', 'output11', 'nextButton', 'button11', 'wrong11', 'wrong11', 'right11', 'nextButton', 'output11', 'wrong11', 'right11', 'right11', 'button11',  0);
           
        }
    }
    if (simsubscreennum == 6)
    {
        var type=sampletype;
        if(type==1)
        {
            document.getElementById("l1").style.visibility="visible";
        }
        if(type==2)
        {
            document.getElementById("l2").style.visibility="visible";
        }
    }
}

function step1() {
    myStopFunction();
    document.getElementById("hand").style.animation = "mover 1s ease-in-out  forwards";
    setTimeout(function() {
        document.getElementById("hand").style.animation = "mover1 1s ease-in-out  forwards";
setTimeout(function() {
        document.getElementById("stand").style.visibility="hidden";
        document.getElementById("hand").style.visibility="hidden";
        document.getElementById("standf").style.visibility="visible";
        validateAnswer(0, 0, "350px", "250px");
    }, 1000);       
    }, 1000);
}

function step2() {
    myStopFunction();
    document.getElementById("sph").style.animation = "mover3 1s ease-in-out  forwards";
    setTimeout(function() {
        document.getElementById("sph").style.visibility="hidden";
        document.getElementById("sph2").style.visibility="visible";
        setTimeout(function() {
        document.getElementById("sph2").style.animation = "mover31 1s ease-in-out  forwards";
        setTimeout(function() { 
        document.getElementById("sph2").style.visibility="hidden";
      document.getElementById("setup10").style.visibility="visible";
        document.getElementById("nextButton").style.visibility="visible";

    }, 1000);
      }, 1000);
    }, 1000);
}

function step3() {
    myStopFunction();
    document.getElementById("beaker").style.visibility="hidden";
    document.getElementById("beakerh").style.visibility="visible";
    document.getElementById("beakerh").style.animation = "mover4 1s ease-in-out  forwards";
    setTimeout(function() {
        document.getElementById("beakerh").style.visibility="hidden";
         document.getElementById("beakerh11").style.visibility="visible";
         validateAnswer(1, 2, "350px", "250px");

    }, 1000);
}

function step4() {
    myStopFunction();
    document.getElementById("water").style.animation = "mover5 1s ease-in-out  forwards";
    setTimeout(function() {
        document.getElementById("water").style.animation = "mover51 1s ease-in-out  forwards";
        setTimeout(function() {
        document.getElementById("water").style.visibility="hidden";
        document.getElementById("water1").style.visibility="visible";
        setTimeout(function() {
            document.getElementById("water1").style.visibility="hidden";
            document.getElementById("setup2").style.visibility="visible";
            document.getElementById("setup12").style.visibility="hidden";
            document.getElementById("beakerh12").style.visibility="hidden";
            document.getElementById("nextButton").style.visibility="visible";
        }, 1000) ;
    }, 1000) ;
   }, 1000) ;
}

var k;
var m=0;
function calc2(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11,
	para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_output1,
	para_wrong1, para_right1, para_right1, para_button1, k) {
	var flag1 = 0;
	document.getElementById(para_button1).onclick = function () {
		n = document.getElementById(para_output1).value;
		if (document.getElementById(para_output1).value === "") {
			if (document.getElementById(para_button1).innerHTML === "Result") {
				document.getElementById(para_output1).value = data2[m][k];
				document.getElementById(para_button11).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = "hidden";
				document.getElementById(para_wrong1).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
            if ((Math.floor(n * 10) === Math.floor(data2[m][k] * 10)) || (Math.floor(n * 100) === Math.floor(data2[m][k] * 100)))
             {
				document.getElementById(para_button1).style.visibility = 'hidden';
				document.getElementById(para_wrong1).style.visibility = "hidden";
				document.getElementById(para_right1).style.visibility = "visible";
				document.getElementById(para_button11).style.visibility = 'visible';
			}
			else {
				flag1 += 1;
				document.getElementById(para_output1).value = "";
				document.getElementById(para_wrong1).style.visibility = "visible";
				document.getElementById(para_right1).style.visibility = "hidden";
				if (flag1 === 2) {
                    if ((Math.floor(n * 10) === Math.floor(data2[m][k] * 10)) || (Math.floor(n * 100) === Math.floor(data2[m][k] * 100))) {
						document.getElementById(para_right1).style.visibility = "visible";
					}
					else
						document.getElementById(para_button1).innerHTML = "Result";
				}
			}
		}
	};
}


var k;
var l=0;
function calc5(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11,
	para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_output1,
	para_wrong1, para_right1, para_right1, para_button1, k) {
	var flag1 = 0;
	document.getElementById(para_button1).onclick = function () {
		n = document.getElementById(para_output1).value;
		if (document.getElementById(para_output1).value === "") {
			if (document.getElementById(para_button1).innerHTML === "Result") {
				document.getElementById(para_output1).value = 1.6495;
				document.getElementById(para_button11).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = "hidden";
				document.getElementById(para_wrong1).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
            if ((Math.floor(n * 10) === Math.floor(1.6495 * 10)) || (Math.floor(n * 100) === Math.floor(1.6495 * 100)))
             {
				document.getElementById(para_button1).style.visibility = 'hidden';
				document.getElementById(para_wrong1).style.visibility = "hidden";
				document.getElementById(para_right1).style.visibility = "visible";
				document.getElementById(para_button11).style.visibility = 'visible';
			}
			else {
				flag1 += 1;
				document.getElementById(para_output1).value = "";
				document.getElementById(para_wrong1).style.visibility = "visible";
				document.getElementById(para_right1).style.visibility = "hidden";
				if (flag1 === 2) {
                    if ((Math.floor(n * 10) === Math.floor(1.6495 * 10)) || (Math.floor(n * 100) === Math.floor(1.6495 * 100)))
                    {
						document.getElementById(para_right1).style.visibility = "visible";
					}
					else
						document.getElementById(para_button1).innerHTML = "Result";
				}
			}
		}
	};
}
var k;
var s=0;
var n;
function calc3(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11,
	para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_output1,
	para_wrong1, para_right1, para_right1, para_button1, k) {
	var flag1 = 0;
	document.getElementById(para_button1).onclick = function () {
		n = document.getElementById(para_output1).value;
		if (document.getElementById(para_output1).value === "") {
			if (document.getElementById(para_button1).innerHTML === "Result") {
				document.getElementById(para_output1).value = data4[s][k];
				document.getElementById(para_button11).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = "hidden";
				document.getElementById(para_wrong1).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
            if ((Math.floor(n * 10) === Math.floor(data4[s][k] * 10)) || (Math.floor(n * 100) === Math.floor(data4[s][k] * 100)))
             {
				document.getElementById(para_button1).style.visibility = 'hidden';
				document.getElementById(para_wrong1).style.visibility = "hidden";
				document.getElementById(para_right1).style.visibility = "visible";
				document.getElementById(para_button11).style.visibility = 'visible';
			}
			else {
				flag1 += 1;
				document.getElementById(para_output1).value = "";
				document.getElementById(para_wrong1).style.visibility = "visible";
				document.getElementById(para_right1).style.visibility = "hidden";
				if (flag1 === 2) {
                    if ((Math.floor(n * 10) === Math.floor(data4[s][k] * 10)) || (Math.floor(n * 100) === Math.floor(data4[s][k] * 100))) {
						document.getElementById(para_right1).style.visibility = "visible";
					}
					else
						document.getElementById(para_button1).innerHTML = "Result";
				}
			}
		}
	};
}


var k;
var l=0;
function calc6(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11,
	para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_output1,
	para_wrong1, para_right1, para_right1, para_button1, k) {
	var flag1 = 0;
	document.getElementById(para_button1).onclick = function () {
		n = document.getElementById(para_output1).value;
		if (document.getElementById(para_output1).value === "") {
			if (document.getElementById(para_button1).innerHTML === "Result") {
				document.getElementById(para_output1).value = 0.7166;
				document.getElementById(para_button11).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = "hidden";
				document.getElementById(para_wrong1).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {
            if ((Math.floor(n * 10) === Math.floor(0.7166 * 10)) || (Math.floor(n * 100) === Math.floor(0.7166 * 100)))
             {
				document.getElementById(para_button1).style.visibility = 'hidden';
				document.getElementById(para_wrong1).style.visibility = "hidden";
				document.getElementById(para_right1).style.visibility = "visible";
				document.getElementById(para_button11).style.visibility = 'visible';
			}
			else {
				flag1 += 1;
				document.getElementById(para_output1).value = "";
				document.getElementById(para_wrong1).style.visibility = "visible";
				document.getElementById(para_right1).style.visibility = "hidden";
				if (flag1 === 2) {
                    if ((Math.floor(n * 10) === Math.floor(0.7166 * 10)) || (Math.floor(n * 100) === Math.floor(0.7166 * 100)))
                    {
						document.getElementById(para_right1).style.visibility = "visible";
					}
					else
						document.getElementById(para_button1).innerHTML = "Result";
				}
			}
		}
	};
}
