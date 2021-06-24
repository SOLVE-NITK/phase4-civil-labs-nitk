function navNext() {
	for (temp = 0; temp <= 7; temp++) {
		document.getElementById('canvas' + temp).style.visibility = "hidden";
	}
	simsubscreennum += 1;
	document.getElementById('canvas' + (simsubscreennum)).style.visibility = "visible";
	document.getElementById('nextButton').style.visibility = "hidden";
	magic();
}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow() {
	if (document.getElementById('arrow1').style.visibility == "hidden")
		document.getElementById('arrow1').style.visibility = "visible";
	else
		document.getElementById('arrow1').style.visibility = "hidden";
}

var r = Math.floor(Math.random() * 3);
var array = [[60, 132, 300]];
var repeat = 0;
var flag = 0;
//var n = 0;
var array = [[16.8, 7.3, 41.832, 60, 775.6, 75, 27, 1],
[10, 9.83, 75.85, 132, 500, 7.04, 27, 1],
[10, 10, 78.5, 300, 500, 5, 27, 1]];


var arr = [[41.832, 75.85, 78.5]];

var arr1 = [[0.069, 0.07, 0.042]];
//    [0.07,],
//    [0.042,]]
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
		repeat += 1;
		if (flag == 1) {
			//Trial2
			console.log(repeat);
			document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML = "Trial : " + repeat;
			document.getElementById('result1').style.visibility = "hidden";
			document.getElementById('res1').style.visibility = "hidden";
			document.getElementById('scale1').style.visibility = "visible";
			calc1('button21', 'output21', 'output21', 'button21', 'output21', 'nextButton', 'button21', 'wrong21', 'wrong21', 'right21',
				'nextButton', 'output21', 'wrong21', 'right21', 'right21', 'button21', 1);
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(50, 140, 40, 180);
			document.getElementById('scale1').onclick = function () { step11(); };
		}
		else {
			if (flag == 2) {
				//Trial3
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				document.getElementById('result2').style.visibility = "hidden";
				document.getElementById('res1').style.visibility = "hidden";
				document.getElementById('scale11').style.visibility = "visible";
				calc1('button22', 'output22', 'output22', 'button22', 'output22', 'nextButton', 'button22', 'wrong22', 'wrong22', 'right22',
					'nextButton', 'output22', 'wrong22', 'right22', 'right22', 'button22', 2);
				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(50, 140, 40, 180);
				document.getElementById('scale11').onclick = function () { step111(); };
			}
			else {
				//Trial1
				document.getElementById('trial').style = "visibility:visible;left: 700px; top: 70px;position: absolute;font-weight: bold;text-transform: uppercase;";
				document.getElementById('trial').innerHTML = "Trial : " + repeat;
				calc1('button2', 'output2', 'output2', 'button2', 'output2', 'nextButton', 'button2', 'wrong2', 'wrong2', 'right2',
					'nextButton', 'output2', 'wrong2', 'right2', 'right2', 'button2', 0);
				document.getElementById('scale').style.visibility = "visible";

				myInt = setInterval(function () { animatearrow(); }, 500);
				animateArrowATPosition(50, 140, 40, 180);
				document.getElementById('scale').onclick = function () { step1(); };
			}
		}
	}

	if (simsubscreennum == 2) {
		if (flag == 0 || flag == 1 || flag == 2) {
			document.getElementById('Dia').style.visibility = "hidden";
			document.getElementById('Area').style.visibility = "hidden";
			document.getElementById('Dia1').style.visibility = "hidden";
			document.getElementById('Area1').style.visibility = "hidden";
			document.getElementById('Dia2').style.visibility = "hidden";
			document.getElementById('Area2').style.visibility = "hidden";
			document.getElementById('trowel1').style.visibility = "visible";
			document.getElementById('b2').style.visibility = "visible";
			document.getElementById('soil').style.visibility = "visible";
			document.getElementById('trowel_2').style.visibility = "hidden";
			document.getElementById('trowel_3').style.visibility = "hidden";
			document.getElementById('trowel1_3').style.visibility = "hidden";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(630, 330, 40, 180);
			document.getElementById('trowel1').onclick = function () { step3(); };
		}
	}
	if (simsubscreennum == 3) {
		if (flag == 0 || flag == 1 || flag == 2) {
			document.getElementById('b4').style.visibility = "hidden";
			document.getElementById('soil2').style.visibility = "hidden";
			document.getElementById('b22').style.visibility = "hidden";
			document.getElementById('cylinder41').style.visibility = "visible";
			document.getElementById('tamp1').style.visibility = "visible";
			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(200, 130, 40, 180);
			document.getElementById('tamp1').onclick = function () { step31(); };
		}
	}
	if (simsubscreennum == 4) {
		if (flag == 0 || flag == 1 || flag == 2) {
			document.getElementById('white').style.visibility = "hidden";
			document.getElementById('cylinder43').style.visibility = "hidden";
			document.getElementById('tamp2').style.visibility = "hidden";
			document.getElementById('tamp22').style.visibility = "hidden";
			document.getElementById('tamp02').style.visibility = "hidden";

			document.getElementById('disk1').style = "visibility:visible ;position:absolute;left: 250px; top: 424px;width:160px; ";
			document.getElementById('disk2').style = "visibility:visible ;position:absolute; left: 250px; top: 45px;width:160px;";
					//document.getElementById('disk2').style.visibility = "visible";

			myInt = setInterval(function () { animatearrow(); }, 500);
			animateArrowATPosition(200, 120, 40, 180);
			document.getElementById('disk2').onclick = function () { step2(); };
		}
	}
	if (simsubscreennum == 5) {
		document.getElementById('white').style.visibility = "hidden";
		document.getElementById('disk10').style.visibility = "hidden";
		document.getElementById('disk1').style.visibility = "hidden";
		document.getElementById('disk2').style.visibility = "hidden";
		document.getElementById('disk11').style.visibility = "hidden";
		document.getElementById('disk22').style.visibility = "hidden";
		document.getElementById('disk02').style.visibility = "hidden";
		document.getElementById('disk01').style.visibility = "hidden";
		document.getElementById('line1').style.visibility = "hidden";
		document.getElementById('line2').style.visibility = "hidden";
		document.getElementById('line3').style.visibility = "hidden";
		document.getElementById('line4').style.visibility = "hidden";
		document.getElementById('line5').style.visibility = "hidden";
		document.getElementById('font1').style.visibility = "hidden";
		document.getElementById('font2').style.visibility = "hidden";
		document.getElementById('font3').style.visibility = "hidden";
		document.getElementById('font4').style.visibility = "hidden";
		document.getElementById('tap1').style.visibility = "visible";
		document.getElementById('tap2').style.visibility = "visible";
		document.getElementById('c6').style.visibility = "visible";
		document.getElementById('jar').style.visibility = "visible";
		console.log(r);
		myInt = setInterval(function () { animatearrow(); }, 500);
		animateArrowATPosition(320, 92, 40, 360);
		document.getElementById('tap2').onclick = function () { step4(); };
	}
	
	if (simsubscreennum == 6) {
		document.getElementById('font11').style.visibility = "hidden";
		document.getElementById('c4').style.visibility = "hidden";
		document.getElementById('c7').style.visibility = "hidden";
		document.getElementById('jar1').style.visibility = "hidden";
		//document.getElementById('Q').style.visibility = "hidden";
		document.getElementById('swh').style.visibility = "hidden";
		document.getElementById('needle').style.visibility = "hidden";
		document.getElementById('drop-2').style.visibility = "hidden";
		document.getElementById('L1').innerHTML = array[flag][0];
		document.getElementById('L2').innerHTML = array[flag][1];
		document.getElementById('L3').innerHTML = array[flag][2];
		document.getElementById('L4').innerHTML = array[flag][3];
		document.getElementById('L5').innerHTML = array[flag][4];
		document.getElementById('L6').innerHTML = array[flag][5];
		document.getElementById('L7').innerHTML = array[flag][6];
		document.getElementById('L8').innerHTML = array[flag][7];
		console.log(flag);
		
		if (flag == 0) {
			document.getElementById('tr_1').style.visibility = "visible";
			document.getElementById('tr_2').style.visibility = "visible";

			calc2('button', 'output', 'output', 'button', 'output', 'button1', 'button', 'wrong', 'wrong', 'right',
				'button1', 'output', 'wrong', 'right', 'right', 'button', 0);
			calc2('button1', 'output1', 'output1', 'button1', 'output1', 'nextButton', 'button1', 'wrong1', 'wrong1', 'right1',
				'nextButton', 'output1', 'wrong1', 'right1', 'right1', 'button1', 0);
		}
		if (flag == 1) {
			//n++;
			document.getElementById('tr1_1').style.visibility = "visible";
			document.getElementById('tr1_2').style.visibility = "visible";
			document.getElementById('font12').style.visibility = "hidden";
			document.getElementById('drop-22').style.visibility = "hidden";
			document.getElementById('needle1').style.visibility = "hidden";
			document.getElementById('d1').style.visibility = "visible";

			calc2('button_1', 'output_1', 'output_1', 'button_1', 'output_1', 'button1_1', 'button_1', 'wrong_1', 'wrong_1', 'right_1',
				'button1_1', 'output_1', 'wrong_1', 'right_1', 'right_1', 'button_1', 1);
			calc2('button1_1', 'output1_1', 'output1_1', 'button1_1', 'output1_1', 'nextButton', 'button1_1', 'wrong1_1', 'wrong1_1', 'right1_1',
				'nextButton', 'output1_1', 'wrong1_1', 'right1_1', 'right1_1', 'button1_1', 1);
		}
		if (flag == 2) {
			//n++;
			document.getElementById('tr2_1').style.visibility = "visible";
			document.getElementById('tr2_2').style.visibility = "visible";
			document.getElementById('font13').style.visibility = "hidden";
			document.getElementById('drop-02').style.visibility = "hidden";
			document.getElementById('needle2').style.visibility = "hidden";
			document.getElementById('d2').style.visibility = "visible";

			calc2('button_0', 'output_0', 'output_0', 'button_0', 'output_0', 'button1_0', 'button_0', 'wrong_0', 'wrong_0', 'right_0',
				'button1_0', 'output_0', 'wrong_0', 'right_0', 'right_0', 'button_0', 2);
			calc2('button1_0', 'output1_0', 'output1_0', 'button1_0', 'output1_0', 'nextButton', 'button1_0', 'wrong1_0', 'wrong1_0', 'right1_0',
				'nextButton', 'output1_0', 'wrong1_0', 'right1_0', 'right1_0', 'button1_0', 2);
		}
		
	} 
	if (simsubscreennum == 7) {
		document.getElementById('tr_1').style.visibility = "hidden";
		document.getElementById('tr_2').style.visibility = "hidden";
		document.getElementById('nextButton').style.visibility = "visible";
		if (repeat >= 3)
		{
			document.getElementById('tr2_1').style.visibility = "hidden";
			document.getElementById('tr2_2').style.visibility = "hidden";
			document.getElementById('d2').style.visibility = "hidden";

			document.getElementById('res1').style.visibility = "visible";
			document.getElementById('result3').style.visibility = "visible";
			document.getElementById('nextButton').style.visibility = "hidden";
			}
		if (repeat < 2 && repeat > 0) {
			flag = 1;
			simsubscreennum = 0;
			document.getElementById('result1').style.visibility = "visible";
		}
		else {
			if (repeat == 2) {
				flag = 2;
				simsubscreennum = 0;
				document.getElementById('tr1_1').style.visibility = "hidden";
				document.getElementById('tr1_2').style.visibility = "hidden";
				document.getElementById('d1').style.visibility = "hidden";
				document.getElementById('res1').style.visibility = "visible";
				document.getElementById('result2').style.visibility = "visible";
			}
		}
	}
	
}

function step1() {
	myStopFunction();
	document.getElementById("scale").style.animation = "movek 0.5s linear  forwards";
	setTimeout(function () {
		document.getElementById('scale').style.visibility = "hidden";
		document.getElementById('Dia').style.visibility = "visible";
		setTimeout(function () {
			document.getElementById('Area').style.visibility = "visible";
		}, 500);
	}, 2000);
}

function step11() {
	myStopFunction();
	document.getElementById("scale1").style.animation = "movek 0.5s linear  forwards";
	setTimeout(function () {
		document.getElementById('scale1').style.visibility = "hidden";
		document.getElementById('Dia1').style.visibility = "visible";
		setTimeout(function () {
			document.getElementById('Area1').style.visibility = "visible";
		}, 500);
	}, 2000);
}

function step111() {
	myStopFunction();
	document.getElementById("scale11").style.animation = "movek 0.5s linear  forwards";
	setTimeout(function () {
		document.getElementById('scale11').style.visibility = "hidden";
		document.getElementById('Dia2').style.visibility = "visible";
		setTimeout(function () {
			document.getElementById('Area2').style.visibility = "visible";
		}, 500);
	}, 2000);
}

function step2() {
	myStopFunction();
	if (flag == 0) {
		document.getElementById("disk2").style.animation = "movek1 0.5s linear  forwards";
	}
	if (flag == 1) {
		document.getElementById('disk2').style.visibility = "hidden";
		document.getElementById('disk22').style.visibility = "visible";
		document.getElementById("disk22").style.animation = "movek1 0.5s linear  forwards";
	}
	if (flag == 2) {
		document.getElementById('disk2').style.visibility = "hidden";
		document.getElementById('disk22').style.visibility = "hidden";
		document.getElementById('disk02').style.visibility = "visible";
		document.getElementById("disk02").style.animation = "movek1 0.5s linear  forwards";
	}
	setTimeout(function () {
		myInt = setInterval(function () { animatearrow(); }, 500);
		animateArrowATPosition(200, 490, 40, 180);
		document.getElementById('disk1').onclick = function () {
			myStopFunction();
			if (flag == 0) {
				document.getElementById("disk1").style.animation = "movek2 0.5s linear  forwards";
			}
			if (flag == 1) {
				document.getElementById('disk1').style.visibility = "hidden";
				document.getElementById('disk11').style.visibility = "visible";
				document.getElementById("disk11").style.animation = "movek2 0.5s linear  forwards";
			}
			if (flag == 2) {
				document.getElementById('disk1').style.visibility = "hidden";
				document.getElementById('disk11').style.visibility = "hidden";
				document.getElementById('disk01').style.visibility = "visible";
				document.getElementById("disk01").style.animation = "movek2 0.5s linear  forwards";
			}
			setTimeout(function () {
				document.getElementById('disk11').style.visibility = "hidden";
				document.getElementById('disk01').style.visibility = "hidden";
				document.getElementById('disk1').style.visibility = "hidden";
				document.getElementById('disk10').style.visibility = "visible";
				document.getElementById('line1').style.visibility = "visible";
				setTimeout(function () {
					document.getElementById('font1').style.visibility = "visible";
					setTimeout(function () {
						document.getElementById('line2').style.visibility = "visible";
						setTimeout(function () {
							document.getElementById('font2').style.visibility = "visible";
							setTimeout(function () {
								document.getElementById('line3').style.visibility = "visible";
								document.getElementById('line4').style.visibility = "visible";
								setTimeout(function () {
									document.getElementById('font3').style.visibility = "visible";
									setTimeout(function () {
										document.getElementById('line5').style.visibility = "visible";
										setTimeout(function () {
											document.getElementById('font4').style.visibility = "visible";
											document.getElementById('nextButton').style.visibility = "visible";
										}, 500);
									}, 500);
								}, 500);
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 700);
		};
	}, 2000);
}

function step3() {
	myStopFunction();
	if (flag == 0) {
		document.getElementById("trowel1").style.animation = "movet 0.5s linear  2";
	}
	if (flag == 1) {
		document.getElementById('trowel1').style.visibility = "hidden";
		document.getElementById('trowel_2').style.visibility = "visible";
		document.getElementById("trowel_2").style.animation = "movet 0.5s linear  2";
	}
	if (flag == 2) {
		document.getElementById('trowel1').style.visibility = "hidden";
		document.getElementById('trowel1_2').style.visibility = "hidden";
		document.getElementById('trowel_3').style.visibility = "visible";
		document.getElementById("trowel_3").style.animation = "movet 0.5s linear  2";
	}
	setTimeout(function () {
		document.getElementById('trowel_2').style.visibility = "hidden";
		document.getElementById('trowel_3').style.visibility = "hidden";
		document.getElementById('trowel1').style.visibility = "hidden";
		document.getElementById('soil1').style.visibility = "visible";
		document.getElementById('soil').style.visibility = "hidden";
		if (flag == 0)
			document.getElementById('trowel2').style.visibility = "visible";
		if (flag == 1)
			document.getElementById('trowel2_1').style.visibility = "visible";
		if (flag == 2)
			document.getElementById('trowel2_2').style.visibility = "visible";
		setTimeout(function () {
			if (flag == 0)
				document.getElementById("trowel2").style.animation = "movet1 0.5s linear  forwards";
			if (flag == 1)
				document.getElementById("trowel2_1").style.animation = "movet1 0.5s linear  forwards";
			if (flag == 2)
				document.getElementById("trowel2_2").style.animation = "movet1 0.5s linear  forwards";
			setTimeout(function () {
				document.getElementById('b22').style.visibility = "visible";
				document.getElementById('b2').style.visibility = "hidden";
				document.getElementById('trowel2').style.visibility = "hidden";
				document.getElementById('trowel2_1').style.visibility = "hidden";
				document.getElementById('trowel2_2').style.visibility = "hidden";
				document.getElementById('trowel11').style.visibility = "visible";
				setTimeout(function () {
					myInt = setInterval(function () { animatearrow(); }, 500);
					animateArrowATPosition(630, 330, 40, 180);
					document.getElementById('trowel11').onclick = function () {
						myStopFunction();
						if (flag == 0)
							document.getElementById("trowel11").style.animation = "movet2 0.5s linear  2";
						if (flag == 1) {
							document.getElementById('trowel11').style.visibility = "hidden";
							document.getElementById('trowel1_2').style.visibility = "visible";
							document.getElementById("trowel1_2").style.animation = "movet2 0.5s linear  2";
						}
						if (flag == 2) {
							document.getElementById('trowel11').style.visibility = "hidden";
							document.getElementById('trowel1_2').style.visibility = "hidden";
							document.getElementById('trowel1_3').style.visibility = "visible";
							document.getElementById("trowel1_3").style.animation = "movet2 0.5s linear  2";
						}
						setTimeout(function () {
							document.getElementById('trowel11').style.visibility = "hidden";
							document.getElementById('trowel1_2').style.visibility = "hidden";
							document.getElementById('trowel1_3').style.visibility = "hidden";

							document.getElementById('soil1').style.visibility = "hidden";
							if (flag == 0)
								document.getElementById('trowel21').style.visibility = "visible";
							if (flag == 1)
								document.getElementById('trowel_0').style.visibility = "visible";
							if (flag == 2)
								document.getElementById('trowel1_0').style.visibility = "visible";
							document.getElementById('soil2').style.visibility = "visible";
							setTimeout(function () {
								if (flag == 0) {
									document.getElementById("trowel21").style.animation = "movet1 0.5s linear  forwards";
								}
								if (flag == 1) {
									document.getElementById("trowel_0").style.animation = "movet1 0.5s linear  forwards";
								}
								if (flag == 2) {
									document.getElementById("trowel1_0").style.animation = "movet1 0.5s linear  forwards";
								}
								setTimeout(function () {
									document.getElementById('trowel21').style.visibility = "hidden";
									document.getElementById('trowel_0').style.visibility = "hidden";
									document.getElementById('trowel1_0').style.visibility = "hidden";
									document.getElementById('b22').style.visibility = "hidden";
									document.getElementById('b4').style.visibility = "visible";
									document.getElementById('nextButton').style.visibility = "visible";
								}, 1000);
							}, 1000);
						}, 1000);
					};
				}, 1000);
			}, 1000);
		}, 500);
	}, 1500);
}

function step4() {
	myStopFunction();
	
	document.getElementById('pipe').style.visibility = "visible";
	document.getElementById('hand').style.visibility = "visible";
	myInt = setInterval(function () { animatearrow(); }, 500);
	animateArrowATPosition(640, 205, 40, 360);
	document.getElementById('hand').onclick = function () {
	myStopFunction();
  	document.getElementById("hand").style.transformOrigin = "14% 15%";
  	document.getElementById("hand").style.transform = "rotate(-15deg)";
  	document.getElementById('tap1').style.visibility = "hidden";
	document.getElementById('tap2').style.visibility = "hidden";
  	document.getElementById('c6').style.visibility = "hidden";
	document.getElementById('c1').style.visibility = "visible";
	setTimeout(function () {
	document.getElementById('hand').style.visibility = "hidden";
	document.getElementById('pipe').style.visibility = "hidden";

		document.getElementById('c1').style.visibility = "hidden";
		document.getElementById('c2').style.visibility = "visible";
		setTimeout(function () {
			document.getElementById('c2').style.visibility = "hidden";
			document.getElementById('c3').style.visibility = "visible";
			setTimeout(function () {
				document.getElementById('c3').style.visibility = "hidden";
				document.getElementById('c4').style.visibility = "visible";
				setTimeout(function () {
					document.getElementById('H1').style.visibility = "visible";
					document.getElementById('H2').style.visibility = "visible";
					document.getElementById('c5').style.visibility = "visible";
					document.getElementById('jar').style.visibility = "hidden";
					document.getElementById('jar1').style.visibility = "visible";
					document.getElementById('swh').style.visibility = "visible";
					if (flag == 0) {
						document.getElementById('needle').style.visibility = "visible";
						document.getElementById('drop-2').style.visibility = "visible";
						document.getElementById("needle").style.animation = "mover52 4s linear forwards";
						document.getElementById("drop-2").style.animation = "mover53 4s linear forwards";
					}
					if (flag == 1) {
						document.getElementById('needle1').style.visibility = "visible";
						document.getElementById('drop-22').style.visibility = "visible";
						document.getElementById("needle1").style.animation = "mover54 4s linear forwards";
						document.getElementById("drop-22").style.animation = "mover53 4s linear forwards";
					}
					if (flag == 2) {
						document.getElementById('needle2').style.visibility = "visible";
						document.getElementById('drop-02').style.visibility = "visible";
						document.getElementById("needle2").style.animation = "mover55 4s linear forwards";
						document.getElementById("drop-02").style.animation = "mover53 4s linear forwards";
					}
					setTimeout(function () {
						document.getElementById('H1').style.visibility = "hidden";
						document.getElementById('H2').style.visibility = "hidden";
						document.getElementById('c5').style.visibility = "hidden";
						document.getElementById('c7').style.visibility = "visible";
						document.getElementById('white').style.visibility = "visible";
						if (flag == 0) {
							document.getElementById('font11').style.visibility = "visible";
						}
						if (flag == 1) {
							document.getElementById('font12').style.visibility = "visible";
						}
						if (flag == 2) {
							document.getElementById('font13').style.visibility = "visible";
						}
						document.getElementById('nextButton').style.visibility = "visible";
					}, 4000);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
};
}

function step31() {
	myStopFunction();
	if (flag == 0)
		document.getElementById("tamp1").style.animation = "movetamp 0.5s linear  2";
	if (flag == 1) {
		document.getElementById('tamp1').style.visibility = "hidden";
		document.getElementById('tamp11').style.visibility = "visible";
		document.getElementById("tamp11").style.animation = "movetamp 0.5s linear  2";
	}
	if (flag == 2) {
		document.getElementById('tamp1').style.visibility = "hidden";
		document.getElementById('tamp11').style.visibility = "hidden";
		document.getElementById('tamp01').style.visibility = "visible";
		document.getElementById("tamp01").style.animation = "movetamp 0.5s linear  2";
	}
	setTimeout(function () {
		document.getElementById('cylinder41').style.visibility = "hidden";
		document.getElementById('tamp1').style.visibility = "hidden";
		document.getElementById('tamp11').style.visibility = "hidden";
		document.getElementById('tamp01').style.visibility = "hidden";
		document.getElementById('cylinder42').style.visibility = "visible";
		document.getElementById('tamp2').style.visibility = "visible";
		myInt = setInterval(function () { animatearrow(); }, 500);
		animateArrowATPosition(270, 130, 40, 180);
		document.getElementById('tamp2').onclick = function () {
			myStopFunction();
			if (flag == 0)
				document.getElementById("tamp2").style.animation = "movetamp1 0.5s linear  2";
			if (flag == 1) {
				document.getElementById('tamp2').style.visibility = "hidden";
				document.getElementById('tamp22').style.visibility = "visible";
				document.getElementById("tamp22").style.animation = "movetamp1 0.5s linear  2";
			}
			if (flag == 2) {
				document.getElementById('tamp2').style.visibility = "hidden";
				document.getElementById('tamp22').style.visibility = "hidden";
				document.getElementById('tamp02').style.visibility = "visible";
				document.getElementById("tamp02").style.animation = "movetamp1 0.5s linear  2";
			}
			setTimeout(function () {
				document.getElementById('cylinder42').style.visibility = "hidden";
				document.getElementById('cylinder43').style.visibility = "visible";
				document.getElementById('nextButton').style.visibility = "visible";
			}, 1000);
		};
	}, 2000);
}

var k;
function calc2(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11, para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_output1, para_wrong1, para_right1, para_right1, para_button1, k) {
	var flag1 = 0;
	document.getElementById(para_button1).onclick = function () {
		n = document.getElementById(para_output1).value;
		if (document.getElementById(para_output1).value === "") {
			if (document.getElementById(para_button1).innerHTML === "Result") {
				document.getElementById(para_output1).value = arr1[0][k];
				document.getElementById(para_button11).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = "hidden";
				document.getElementById(para_wrong1).style.visibility = "hidden";
			}
			else
				alert("Enter the value to proceed");
		}
		else {

			if (Math.round(n * 10) === Math.round(arr1[0][k] * 10) || Math.round(n * 100) === Math.round(arr1[0][k] * 100)) {
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
					if (Math.round(n * 10) === Math.round(arr1[0][k] * 10) || Math.round(n * 100) === Math.round(arr1[0][k] * 100)) {
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
function calc1(para_button1, para_output1, para_output1, para_button1, para_output1, para_button11, para_button1, para_wrong1, para_wrong1, para_right1, para_button11, para_output1, para_wrong1, para_right1, para_right1, para_button1, k) {
	var flag1 = 0;
	var m = 0;
	document.getElementById(para_button1).onclick = function () {
		n = document.getElementById(para_output1).value;
		if (document.getElementById(para_output1).value === "") {
			if (document.getElementById(para_button1).innerHTML === "Result") {
				document.getElementById(para_output1).value = arr[m][k];
				document.getElementById(para_button11).style.visibility = "visible";
				document.getElementById(para_button1).style.visibility = "hidden";
				document.getElementById(para_wrong1).style.visibility = "hidden";
				console.log(arr[m][k]);
			}
			else
				alert("Enter the value to proceed");
		}
		else {

			if (Math.round(n * 10) === Math.round(arr[m][k] * 10) || Math.round(n * 100) === Math.round(arr[m][k] * 100)) {
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
					if (Math.round(n * 10) === Math.round(arr[m][k] * 10) || Math.round(n * 100) === Math.round(arr[m][k] * 100)) {
						document.getElementById(para_right1).style.visibility = "visible";

					}
					else
						document.getElementById(para_button1).innerHTML = "Result";
				}
			}
		}
	};
}
