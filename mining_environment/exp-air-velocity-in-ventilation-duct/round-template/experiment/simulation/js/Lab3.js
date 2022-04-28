	function navNext()
	{
	for (temp = 0; temp <= 11 ; temp++)
	{
	document.getElementById('canvas'+temp).style.visibility="hidden";
	}

	simsubscreennum+=1;

	document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
	}

	var ca;
	var questions = ["Pitot Satic Tube contain________concentric tube.",
	"Pitot static pressure is directly used for"
	];

	var options2 = [
	["Two", "Three", "Four", "None of these"], //Two
	["Average air velocity across crossectional area", "Air Velocity at a point", "Pressure at a point", "Average position"], //Meter of air
	]; 

	function validateAnswer(qn, ans, left, top) {
	$("#answer").empty();
	document.getElementById("a").innerHTML = "";
	document.getElementById("questDiv").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
	document.getElementById("q").innerHTML = questions[qn];
	if (qn === 0) document.getElementById('questDiv').style.width = "370px";
	if (qn === 1) document.getElementById('questDiv').style.width = "370px";

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
	if (options2[qn][ans] === ca) {
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

	var p=Math.floor(Math.random()*(8));

	var data = [[12, 1.7, 8.06],
	[24, 3.2, 7.59],
	[30, 4.0, 7.59],
	];
  
    var n;
	//for 300rpm at point 1
 	var data1=[[18.1,19.6,1.5,18.6,19.2,0.6,18.4,19.3,0.9],
	           [18.0,19.7,1.7,18.3,19.9,1.6,18.6,19.9,1.3],
			   [18.2,19.9,1.7,17.9,20.1,2.2,18.5,19.4,0.9],
			   [18.1,19.7,1.6,17.9,20.3,2.4,18.3,19.8,1.5],
			   [17.8,20.2,2.4,17.5,19.8,2.3,18,19.4,1.4],
			   [17.8,19.8,2.0,18.2,20.5,2.3,18.4,20.0,1.6],
			   [17.9,20.1,2.2,18,20.2,2.2,18,19.8,1.8]];

	//for 300rpm at point 2
	var data2=[[17.4,20.3,2.9,17.4,20.9,3.5,18.2,19.6,1.4],
	           [17.5,20.3,2.8,17.8,19.8,2.0,18.4,19.2,0.8],
			   [17.7,19.9,2.2,17.6,20.0,2.4,18.2,19.6,1.4],
			   [17.4,19.6,2.2,17.4,19.8,2.4,18.1,19.5,1.4],
			   [17.6,20.2,2.6,18.1,20.7,2.6,18.6,19.7,1.1],
			   [17.5,20.0,2.5,17.,20.2,2.5,18.7,19.7,1.0],
			   [17.7,20.4,2.7,17.5,20.0,2.5,18.3,20.0,1.7]];
	
	//for 400rpm at point 1
	var data3=[[16.4,21.3,4.9,19.2,21.6,2.4,18,20.5,2.5],
	           [16.5,21.3,4.8,17.2,20.4,3.2,18,19.5,1.5],
			   [163,21.2,4.9,17.7,20.1,2.4,17.9,2.5,2.6],
			   [16.4,21.0,4.6,17.6,19.8,2.2,18.0,20.7,2.7],
			   [16.5,20.5,4.0,18.4,20.9,2.5,18,19.9,1.9],
			   [16.5,20.7,4.2,17.9,20.5,2.6,17.8,20.3,2.5],
			   [16.4,20.3,3.9,17.4,19.5,2.1,18.2,20.3,2.1]];
	
	//for 400rpm at point 2
	var data4=[[16.8,20.4,3.6,18.3,19.2,0.9,17.6,19.8,2.2],
	           [17.0,21.5,4.5,19.1,21.5,2.4,18.1,20.6,2.5],
			   [16.8,21,4.2,18.5,20.8,2.3,18.4,19.9,1.5],
			   [17,20.9,3.9,19,21.8,2.8,17.9,20.4,2.5],
			   [16.9,21.4,4.5,18.8,21.9,3.1,18.3,20.6,2.3],
			   [16.7,20.8,4.1,19,21.6,2.6,18.3,20.4,2.1],
			   [16.9,21.4,4.5,17.9,19.9,2.0,18.2,20.5,2.3]];

    var data5=[[1.564,0.625,0.938,1.251],
	           [1.773,1.669,1.356,1.503],
			   [1.773,2.295,0.938,1.251],
			   [1.669,2.503,1.564,1.614],
			   [2.503,2.399,1.461,1.560],
			   [2.086,2.399,1.669,1.667],
			   [2.295,2.295,1877,1.769]];
	
	var data6=[[3.025,3.651,1.461,1.559,1.405],
	           [2.921,2.086,0.834,1.179,1.341],
			   [2.295,2.503,1.461,1.560,1.405],
			   [2.295,2.503,1.461,1.560,1.587],
			   [2.712,2.712,1.147,1.382,1.471],
			   [2.608,2.608,1.043,1.318,1.493],
			   [2.816,2.608,1.773,1.719,1.744]];
	
	var data7=[[5.111,2.503,2.608,2.084],
	           [5.007,3.338,1.564,1.614],
			   [5.111,2.503,2.712,2.126],
			   [4.798,2.295,2.816,2.166],
			   [4.172,2.608,1.982,1.817],
			   [4.381,2.712,2.608,2.084],
			   [4.068,2.191,2.191,1.911]];
	
	var data8=[[3.755,0.938,2.295,1.955,2.020],
	           [4.694,2.503,2.608,2.084,1.849],
			   [4.381,2.399,1.564,1.614,1.871],
			   [4.068,2.921,2.608,2.084,2.125],
			   [4.694,3.233,2.399,1.999,1.908],
			   [4.277,2.712,2.190,1.911,1.997],
			   [4.694,2.086,2.399,1.999,1.955]];
	
	//-----------------------------------------blink arrow on the next step---------------------------------------------
	//blink arrow on the next step
	function animatearrow()
	{
	if (document.getElementById('arrow1').style.visibility==="hidden")
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
	var j0=0;
	function fillTable(repeat)
	{
	var tb1 = document.getElementById("table1");
	var row = tb1.insertRow();
	var cell = row.insertCell();
	cell.innerHTML =(repeat+1);
	for (i = 0; i <= data[j0].length-1; i++)
	{
	var cell = row.insertCell();
	cell.innerHTML = data[j0][i];
	}
	j0++;
	}

	//-------------------------------------function magic starts here----------------------------------------------------
	function animateArrowATPosition(left,top,height,degg)
	{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height:"+height+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
	}
	function magic()
	{

	if (simsubscreennum===1)
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(60,85,20,270);
	document.getElementById('a3').onclick=function() { step1(); };
	}
	if (simsubscreennum===2)
	{
	document.getElementById('a03').style.visibility = "hidden";
	document.getElementById('a44').style.visibility = "hidden";

	document.getElementById('arrow2').style.visibility="hidden";
	document.getElementById('wind').style.visibility="hidden";
	document.getElementById('a2').style.visibility="hidden";
	document.getElementById('a5').style.visibility="hidden";
	document.getElementById('a6').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(50,105,30,-90);
	document.getElementById('a12').onclick=function() { step2(); };
	}
	if (simsubscreennum===3)
	{
	document.getElementById('ca-1').style.visibility="hidden";
	document.getElementById('ca-2').style.visibility="hidden";
	document.getElementById('ca-3').style.visibility="hidden";
	document.getElementById('a15').style.visibility="hidden";
	document.getElementById('10').style.visibility = "visible";
	document.getElementById('ok').onclick = function() {
	document.getElementById('10').style.visibility = "hidden";
	document.getElementById('ok').style.visibility = "hidden";
	document.getElementById('can1').style.visibility="visible";
	document.getElementById('can2').style.visibility="visible";
	document.getElementById('can3').style.visibility="visible";

	document.getElementById('m-1').style.visibility="visible";
	document.getElementById('m-2').style.visibility="visible";
	document.getElementById('m-5').style.visibility="visible";
	document.getElementById('a1-1').style.visibility="visible";
	document.getElementById('a1-11').style.visibility="visible";

	setTimeout(function()
	{
	document.getElementById('a2-1').style.visibility="visible";
	document.getElementById('a2-11').style.visibility="visible";
	document.getElementById('m-3').style.visibility="visible";
	document.getElementById('m-4').style.visibility="visible";
	document.getElementById('a1-4').style.visibility="visible";
	document.getElementById('a3-1').style.visibility="visible";
	setTimeout(function()
	{ 
	display('m-1','m-2','m-5','can1','can2','can3','m-3','c1','ab1','m-8','m-9');
	document.getElementById('m-6').style.visibility="visible";
	document.getElementById('a1-21').style.visibility="visible";
	document.getElementById('a1-2').style.visibility="visible";
	document.getElementById('m-4').style.visibility="hidden";

	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(150,200,20,180);
	document.getElementById('a1-21').onclick=function() { step3(); };
	},3000);
	},4000);
	};
	}
	if (simsubscreennum===4)
	{
	document.getElementById('a1-1').style.visibility="hidden";
	document.getElementById('a1-11').style.visibility="hidden";
	document.getElementById('a2-1').style.visibility="hidden";
	document.getElementById('a2-11').style.visibility="hidden";
	document.getElementById('a1-4').style.visibility="hidden";
	document.getElementById('a3-1').style.visibility="hidden";
	document.getElementById('a1-2').style.visibility="hidden";
	document.getElementById('a41-11').style.display="none";
	document.getElementById('a1-22').style.visibility="hidden";
	for(i=0;i<=data1[p].length-1;i++)
	{
	document.getElementById("ro"+i).innerHTML=data1[p][i];
	}
	
	calc1( 'button','output','output','button','output','button1','button','wrong','wrong','right','button1','h1','h1','output','wrong','right','right','h1','h1','button',0); 
	
    calc1( 'button1','output1','output1','button1','output1','button2','button1','wrong1','wrong1','right1','button2','h2','h2','output1','wrong1','right1','right1','h2','h2','button1',1); 
	
	calc1( 'button2','output2','output2','button2','output2','button3','button2','wrong2','wrong2','right2','button3','h3','h3','output2','wrong2','right2','right2','h3','h3','button2',2); 
	
	calc1( 'button3','output3','output3','button3','output3','nextButton','button3','wrong3','wrong3','right3','nextButton','h4','h4','output3','wrong3','right3','right3','h4','h4','button3',3); 
	}

	if (simsubscreennum===5)
	{
    refresh('right','right1','right2','right3');
	refresh1('h1','h2','h3','h4');
	document.getElementById('c2').style.visibility="visible";
	document.getElementById('m-7').style.visibility="visible";
	document.getElementById('a1-4').style.visibility="hidden";
	document.getElementById('a1-5').style.visibility="visible";
	document.getElementById('a1-22').style.visibility="hidden";
	document.getElementById('a1-2').style.visibility="hidden";
	document.getElementById('a31-11').style.visibility="hidden";
	document.getElementById('a13-2').style.visibility="visible";
	document.getElementById('a31-22').style.visibility="hidden";
	document.getElementById('a30-2').style.visibility="visible";
	document.getElementById('a30-22').style.visibility="visible";
	document.getElementById('a51-11').style.visibility="visible";
	document.getElementById('a-21').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(150,200,20,180);
	document.getElementById('a-21').onclick=function() { step4(); };
	}
	
	if (simsubscreennum===6)
	{
	document.getElementById('a6-12').style.display="none";
	document.getElementById('a1-5').style.visibility="hidden";
	document.getElementById('a51-111').style.visibility="hidden";
	document.getElementById('a5-2').style.visibility="hidden";
	document.getElementById('a13-2').style.visibility="hidden";
	document.getElementById('a-22').style.visibility="hidden";
	for(i=0;i<=data2[p].length-1;i++)
	{
	document.getElementById("row"+i).innerHTML=data2[p][i];
	}
	document.getElementById("v1").innerHTML=data5[p][3];

    calc2( 'button-1','output-1','output-1','button-1','output-1','button1-1','button-1','wrong-1','wrong-1','right-1','button1-1','h1-1','h1-1','output-1','wrong-1','right-1','right-1','h1-1','h1-1','button-1',0); 
	
    calc2( 'button1-1','output1-1','output1-1','button1-11','output1-1','button2-1','button1-1','wrong1-1','wrong1-1','right1-1','button2-1','h2-1','h2-1','output1-1','wrong1-1','right1-1','right1-1','h2-1','h2-1','button1-1',1); 
	
	calc2( 'button2-1','output2-1','output2-1','button2-1','output2-1','button3-1','button2-1','wrong2-1','wrong2-1','right2-1','button3-1','h3-1','h3-1','output2-1','wrong2-1','right2-1','right2-1','h3-1','h3-1','button2-1',2); 
	
	calc2( 'button3-1','output3-1','output3-1','button3-1','output3-1','button4-1','button3-1','wrong3-1','wrong3-1','right3-1','button4-1','h4-1','h4-1','output3-1','wrong3-1','right3-1','right3-1','h4-1','h4-1','button3-1',3); 

    calc2( 'button4-1','output4-1','output4-1','button4-1','output4-1','nextButton','button4-1','wrong4-1','wrong4-1','right4-1','nextButton','h5-1','h5-1','output4-1','wrong4-1','right4-1','right4-1','h5-1','h5-1','button4-1',4); 

	}

	if (simsubscreennum===7)
	{
    refresh('right-1','right1-1','right2-1','right3-1');
	refresh1('h1-1','h2-1','h3-1','h4-1');
	document.getElementById('h5-1').style.visibility = "hidden";
	document.getElementById('right4-1').style.visibility = "hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(60,85,20,270);
	document.getElementById('b3').onclick=function() { stepp1(); };
	}
	
	if (simsubscreennum===8)
	{
	display('b03','b44','b2','b5','b6','arrow2','wind','can-1','can-2','can-3','n-1');
	document.getElementById('n-2').style.visibility="visible";
	document.getElementById('n-5').style.visibility="visible";
	document.getElementById('b1-1').style.visibility="visible";
	document.getElementById('b1-11').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('b2-1').style.visibility="visible";
	document.getElementById('b2-11').style.visibility="visible";
	document.getElementById('n-3').style.visibility="visible";
	document.getElementById('n-4').style.visibility="visible";
	document.getElementById('b1-4').style.visibility="visible";
	document.getElementById('b3-1').style.visibility="visible";
	setTimeout(function()
	{ 
    display('n-1','n-2','n-5','can-1','can-2','can-3','n-3','c1','ab1','m-8','m-9');
	document.getElementById('m-6').style.visibility="visible";
	document.getElementById('b1-21').style.visibility="visible";
	document.getElementById('b1-2').style.visibility="visible";
    document.getElementById('n-4').style.visibility="hidden";

	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(150,200,20,180);
	document.getElementById('b1-21').onclick=function() { step33(); };
	},3000);
	},4000);
	/* }; */
	}
	if (simsubscreennum===9)
	{
	document.getElementById('b1-1').style.visibility="hidden";
	document.getElementById('b1-11').style.visibility="hidden";
	document.getElementById('b2-1').style.visibility="hidden";
	document.getElementById('b2-11').style.visibility="hidden";
	document.getElementById('b1-4').style.visibility="hidden";
	document.getElementById('b3-1').style.visibility="hidden";
	document.getElementById('b1-2').style.visibility="hidden";
	document.getElementById('b41-11').style.display="none";
	document.getElementById('b1-22').style.visibility="hidden";
	for(i=0;i<=data3[p].length-1;i++)
	{
	document.getElementById("r"+i).innerHTML=data3[p][i];
	}
	
	calc3( 'button-11','output-11','output-11','button-11','output-11','button1-11','button-11','wrong-11','wrong-11','right-11','button1-11','h1-2','h1-2','output-11','wrong-11','right-11','right-11','h1-2','h1-2','button-11',0); 
	
    calc3( 'button1-11','output1-11','output1-11','button1-11','output1-11','button2-11','button1-11','wrong1-11','wrong1-11','right1-11','button2-11','h2-2','h2-2','output1-11','wrong1-11','right1-11','right1-11','h2-2','h2-2','button1-11',1); 
	
	calc3( 'button2-11','output2-11','output2-11','button2-11','output2-11','button3-11','button2-11','wrong2-11','wrong2-11','right2-11','button3-11','h3-2','h3-2','output2-11','wrong2-11','right2-11','right2-11','h3-2','h3-2','button2-11',2); 
	
	calc3( 'button3-11','output3-11','output3-11','button3-11','output3-11','nextButton','button3-11','wrong3-11','wrong3-11','right3-11','nextButton','h4-2','h4-2','output3-11','wrong3-11','right3-11','right3-11','h4-2','h4-2','button3-11',3); 

	}

	if (simsubscreennum===10)
	{
    refresh('right-11','right1-11','right2-11','right3-11');
    refresh1('h1-2','h2-2','h3-2','h4-2');
	document.getElementById('b31-22').style.visibility="hidden";
	document.getElementById('b1-22').style.visibility="hidden";
	document.getElementById('b1-2').style.visibility="hidden";
	document.getElementById('b31-11').style.visibility="hidden";
	document.getElementById('b1-4').style.visibility="hidden";
	document.getElementById('c2').style.visibility="visible";
	document.getElementById('m-7').style.visibility="visible";
	document.getElementById('b1-5').style.visibility="visible";
	document.getElementById('b13-2').style.visibility="visible";
	document.getElementById('b30-2').style.visibility="visible";
	document.getElementById('b30-22').style.visibility="visible";
	document.getElementById('b51-11').style.visibility="visible";
	document.getElementById('b-21').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(150,200,20,180);
	document.getElementById('b-21').onclick=function() { step44(); };
	}
	if (simsubscreennum===11)
	{
	document.getElementById('b6-12').style.display="none";
	document.getElementById('b1-5').style.visibility="hidden";
	document.getElementById('b51-111').style.visibility="hidden";
	document.getElementById('b5-2').style.visibility="hidden";
	document.getElementById('b13-2').style.visibility="hidden";
	document.getElementById('b-22').style.visibility="hidden";
	for(i=0;i<=data4[p].length-1;i++)
	{
	document.getElementById("rw"+i).innerHTML=data4[p][i];
	}
    document.getElementById("v2").innerHTML=data7[p][3];
	
	calc4( 'button-12','output-12','output-12','button-12','output-12','button1-12','button-12','wrong-12','wrong-12','right-12','button1-12','h1-3','h1-3','output-12','wrong-12','right-12','right-12','h1-3','h1-3','button-12',0); 
	
    calc4( 'button1-12','output1-12','output1-12','button1-12','output1-12','button2-12','button1-12','wrong1-12','wrong1-12','right1-12','button2-12','h2-3','h2-3','output1-12','wrong1-12','right1-12','right1-12','h2-3','h2-3','button1-12',1); 
	
	calc4( 'button2-12','output2-12','output2-12','button2-12','output2-12','button3-12','button2-12','wrong2-12','wrong2-12','right2-12','button3-12','h3-3','h3-3','output2-12','wrong2-12','right2-12','right2-12','h3-3','h3-3','button2-12',2); 
	
	calc4( 'button3-12','output3-12','output3-12','button3-12','output3-12','button4-12','button3-12','wrong3-12','wrong3-12','right3-12','button4-12','h4-3','h4-3','output3-12','wrong3-12','right3-12','right3-12','h4-3','h4-3','button3-12',3); 

    calc4( 'button4-12','output4-12','output4-12','button4-12','output4-12','nextButton','button4-12','wrong4-12','wrong4-12','right4-12','nextButton','h5-3','h5-3','output4-12','wrong4-12','right4-12','right4-12','h5-3','h5-3','button4-12',4); 

	}
    if (simsubscreennum===12)
	{
    refresh('right-12','right1-12','right2-12','right3-12');
	refresh1('h1-3','h2-3','h3-3','h4-3');
	document.getElementById('h5-3').style.visibility="hidden";
	document.getElementById('right4-12').style.visibility="hidden";
	setTimeout(function()
	{
	document.getElementById('k1').innerHTML = "1.The velocity of air at 300 rpm is="+data6[p][4]+"m/s.";
	document.getElementById('k2').innerHTML = "2.The velocity of air at 400 rpm is="+data8[p][4]+"m/s.";
    },500);
	}
	}

	function step1()
	{
	myStopFunction();
	document.getElementById('a3').onclick="";

	document.getElementById("a3").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById('a03').style.visibility = "visible";

	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(198,280,20,720);
	},1000);
	document.getElementById("a4").onclick=function() {step1_11();};
	}

	function step1_11()
	{
	myStopFunction();
	document.getElementById("a4").onclick="";
	document.getElementById('a44').style.visibility = "visible";
    document.getElementById('m9').style.opacity='1';
	document.getElementById('m10').style.opacity='1';
	document.getElementById('a2').style.visibility="visible";
	document.getElementById('arrow2').style.visibility="visible";
	document.getElementById('wind').style.visibility="visible";
	initiate(); 
    setInterval("rt(1)", 500);
	
	setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(182,257,20,720);
	document.getElementById("a0").onclick=function() { 
	myStopFunction();
	this.onclick = null;

	document.getElementById('a01').style.visibility = "visible";
	document.getElementById('a01').style.transform = "rotate(380deg)";
	document.getElementById("a01").style.WebkitTransform = "rotate(380deg)";
	document.getElementById("a01").style.msTransform = "rotate(380deg)";	  
	document.getElementById('Sample0').style.visibility="visible";
	document.getElementById('m7').style.opacity='1';
	document.getElementById('m8').style.opacity='1';
	document.getElementById('a5').style.visibility="visible";
	document.getElementById('a6').style.visibility="visible";
	document.getElementById("a6").style.animation = "moven 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('a01').style.visibility="hidden";
	document.getElementById('Sample0').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible"; 
	},1000);
	};
	},1200);
	}

	function step2()
	{
	myStopFunction();
	document.getElementById('a12').onclick="";

	document.getElementById("a12").style.animation = "moves 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('a13').style.visibility="visible";
	document.getElementById('c13').style.visibility="visible";
	setTimeout(function()
	{
	fillTable(0);
	setTimeout(function()
	{
	document.getElementById('a13').style.visibility="hidden";
	document.getElementById('c13').style.visibility="hidden";
	document.getElementById("a12").style.animation = "movess 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('a14').style.visibility="visible";
	document.getElementById('c14').style.visibility="visible";
	setTimeout(function()
	{
	fillTable(1);
	setTimeout(function()
	{
	document.getElementById('a14').style.visibility="hidden";
	document.getElementById('c14').style.visibility="hidden";

	document.getElementById("a12").style.animation = "movese 1s ease-in-out forwards";
	setTimeout(function()
	{
		document.getElementById('a15').style.visibility="visible";
		document.getElementById('c15').style.visibility="visible";

		setTimeout(function()
		{
			fillTable(2);
			setTimeout(function()
		{
		document.getElementById('ca-1').style.visibility="visible";
		document.getElementById('ca-2').style.visibility="visible";
		document.getElementById('ca-3').style.visibility="visible";

		setTimeout(function()
		 {
			document.getElementById('c15').style.visibility="hidden";
			document.getElementById('a11').style.visibility="hidden";
			document.getElementById('a12').style.visibility="hidden";
			document.getElementById('a15').style.visibility="hidden";
			validateAnswer(0, 0, "150px", "150px");
		 },800);
		 },800);
		},800);
	},2000);
	},2000);
	},800);
	},2000);
	},2000);
	},800);
	},2000);
	}
	
	
	function step3()
	{
	myStopFunction();
	document.getElementById('a1-21').onclick="";
	document.getElementById('c1').style.visibility="hidden";
	document.getElementById('ab1').style.visibility="hidden";
	document.getElementById('m-8').style.visibility="hidden";
	document.getElementById('m-9').style.visibility="hidden";
	document.getElementById('m-6').style.visibility="hidden";
	document.getElementById("a1-21").style.animation = "movehand1 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById("a1-2").style.animation = "movep 1s ease-in-out  forwards";
	document.getElementById("a1-21").style.animation = "movehand11 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="hidden";
	document.getElementById('a1-21').style.visibility="hidden";
	  var leftLimbMargin = (data1[p][0]-15)*14.6;			
      var rightLimbMargin = (data1[p][1]-15)*14.6;		
      document.getElementById('a2-2').style.marginLeft = leftLimbMargin + 'px'; 	
      document.getElementById('a2-22').style.marginLeft = rightLimbMargin + 'px';	
	setTimeout(function()
	{
	document.getElementById('a3-2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("a3-2").onclick=function() { 
	myStopFunction();
	document.getElementById("a3-2").onclick="";
	  var boxHandMargin = (data1[p][0]-5)*14.6;		
      document.getElementById("a3-2").style.marginLeft = boxHandMargin + 'px'; 
      document.getElementById("a3-1").style.marginLeft = boxHandMargin + 'px'; 

	setTimeout(function()
	{
	document.getElementById('a3-2').style.visibility="hidden";
	document.getElementById('para').innerHTML="Static Head:";
	document.getElementById('para1').innerHTML="Left Limb Reading="+data1[p][0]+" cm";
	setTimeout(function()
	{
	document.getElementById('a3-1').style.display="none"; 
	document.getElementById('a4-1').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('a41-22').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("a41-22").onclick=function() { 
	myStopFunction();
	document.getElementById("a41-22").onclick="";
    var boxHandMargin = (data1[p][1]-5)*14.6;
    document.getElementById("a41-22").style.marginLeft = boxHandMargin + 'px'; 
    document.getElementById("a4-1").style.marginLeft = boxHandMargin + 'px'; 

	setTimeout(function()
	{
	document.getElementById('a41-22').style.visibility="hidden";
	document.getElementById('para2').innerHTML="Right Limb Reading="+data1[p][1]+" cm";
	document.getElementById('para3').innerHTML="Difference="+data1[p][2]+" cm";
	setTimeout(function()
	{
	 document.getElementById('a4-1').style.display="none";
	 display('para','para1','para2','para3','a2-2','a2-22','a1-2','a22-2','a22-22','a1-22','a3-11');
	 document.getElementById('a1-23').style.visibility="visible";
	 myInt = setInterval(function(){ animatearrow(); }, 500);
	 animateArrowATPosition(340,170,20,-90);
	 document.getElementById("a1-23").onclick=function() {
		myStopFunction();
		document.getElementById("a1-23").onclick="";
		document.getElementById("a1-23").style.animation = "movehand2 1s ease-in-out forwards";
		setTimeout(function()
		{
			document.getElementById("a1-22").style.animation = "movepp 1s ease-in-out forwards";
			document.getElementById("a1-23").style.animation = "movehand22 1s ease-in-out forwards";
			setTimeout(function()
			{
			document.getElementById('Sample2').style.visibility="visible";
				setTimeout(function()
			   {
				document.getElementById('Sample2').style.visibility="hidden";
				document.getElementById('a1-23').style.visibility="hidden";
				  var leftLimbMargin = (data1[p][3]-15)*14.6;	
                  var rightLimbMargin = (data1[p][4]-15)*14.6;
                  document.getElementById('a22-2').style.marginLeft = leftLimbMargin + 'px';
                  document.getElementById('a22-22').style.marginLeft = rightLimbMargin + 'px';
				  setTimeout(function()
				  {
					document.getElementById('a3-22').style.visibility="visible";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(45,370,30,180);
					document.getElementById("a3-22").onclick=function() { 
					myStopFunction();
				   var boxHandMargin = (data1[p][3]-5)*14.6;
                   document.getElementById("a3-22").style.marginLeft = boxHandMargin + 'px';
                   document.getElementById("a3-11").style.marginLeft = boxHandMargin + 'px';
					setTimeout(function()
					{
					document.getElementById('a3-22').style.visibility="hidden";
					document.getElementById('paraa').innerHTML="Total Head:";
					document.getElementById('para11').innerHTML="Left Limb Reading="+data1[p][3]+" cm";
					setTimeout(function()
					{
					 document.getElementById('a3-11').style.display="none";
					 document.getElementById('a4-11').style.visibility="visible";
					 setTimeout(function()
					 {
					 document.getElementById('a4-22').style.visibility="visible";
					 myInt = setInterval(function(){ animatearrow(); }, 500);
					 animateArrowATPosition(45,370,30,180);
					 document.getElementById("a4-22").onclick=function() { 
					 myStopFunction();
					 document.getElementById("a4-22").onclick=""; 
						 var boxHandMargin = (data1[p][4]-5)*14.6;
                         document.getElementById("a4-22").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("a4-11").style.marginLeft = boxHandMargin + 'px';
						setTimeout(function()
						{
						document.getElementById('a4-22').style.visibility="hidden";
						document.getElementById('para22').innerHTML="Right Limb Reading="+data1[p][4]+" cm";
						document.getElementById('para33').innerHTML="Difference="+data1[p][5]+" cm";
						setTimeout(function()
						{
						document.getElementById('a4-11').style.display="none";
					    display('paraa','para11','para22','para33','a22-2','a22-22','a3-11','a1-2','a21-2','a21-22','a31-11');
						setTimeout(function()
						{
						document.getElementById('Sample3').style.visibility="visible";
						setTimeout(function()
						{
						document.getElementById('Sample3').style.visibility="hidden";

						 var leftLimbMargin = (data1[p][6]-15)*14.6;	
                         var rightLimbMargin = (data1[p][7]-15)*14.6;
                         document.getElementById('a21-2').style.marginLeft = leftLimbMargin + 'px';
                         document.getElementById('a21-22').style.marginLeft = rightLimbMargin + 'px';
						setTimeout(function()
						{
						document.getElementById('a31-22').style.visibility="visible";

						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(45,370,30,180);
						document.getElementById("a31-22").onclick=function() { 
						myStopFunction();
						document.getElementById("a31-22").onclick="";
						boxHandMargin = (data1[p][6]-5)*14.6;
                        document.getElementById("a31-22").style.marginLeft = boxHandMargin + 'px';
                        document.getElementById("a31-11").style.marginLeft = boxHandMargin + 'px';
						setTimeout(function()
						{               
						document.getElementById('a31-22').style.visibility="hidden";
						document.getElementById('para0').innerHTML="Velocity Head:";
						document.getElementById('para11-1').innerHTML="Left Limb Reading="+data1[p][6]+" cm";
						setTimeout(function()
						{
						document.getElementById('a31-11').style.display="none";
						document.getElementById('a41-11').style.visibility="visible";
						setTimeout(function()
						{
						document.getElementById('a4-2').style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(45,370,30,180);
						document.getElementById("a4-2").onclick=function() { 
						myStopFunction();
						document.getElementById("a4-2").onclick="";
						 var boxHandMargin = (data1[p][7]-5)*14.6;
                         document.getElementById("a4-2").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("a41-11").style.marginLeft = boxHandMargin + 'px';
						setTimeout(function()
						{
						document.getElementById('a4-2').style.visibility="hidden";
						document.getElementById('para22-1').innerHTML="Right Limb Reading="+data1[p][7]+" cm";
						document.getElementById('para33-1').innerHTML="Difference="+data1[p][8]+" cm";
						document.getElementById('nextButton').style.visibility="visible";
						},2000);
					   }
					 },2000);
					},2000);
				  },2000);
				 }
				},5000)
			   },3500);
			  },1000);							 
			},3000); 
		  },2000);
		 }
		},2000);
	  },2000);
	},2000);
	}        
	},6000);
	},3500);
	},1000);
	},1000);
	};
	},2000);
	},2000);
	}
	},2000);
	},2000); 
	},2000); 
	}

	},6000);
	},3500);
	},2000);
	},1000);
	}

	function step4()
	{
	myStopFunction();
	document.getElementById('a-21').onclick="";
	document.getElementById('c2').style.visibility="hidden";
	document.getElementById('m-7').style.visibility="hidden";
	document.getElementById('a-21').style.visibility="visible";
	document.getElementById("a-21").style.animation = "movehand011 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById("a13-2").style.animation = "movep1 1s ease-in-out forwards";
	document.getElementById("a-21").style.animation = "movehand01 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="hidden";
	document.getElementById('a-21').style.visibility="hidden";
	 var leftLimbMargin = (data2[p][0]-15)*14.6;			
     var rightLimbMargin = (data2[p][1]-15)*14.6;		
     document.getElementById('a30-2').style.marginLeft = leftLimbMargin + 'px'; 	
     document.getElementById('a30-22').style.marginLeft = rightLimbMargin + 'px';	
	setTimeout(function()
	{
	document.getElementById('a51-11').style.visibility="visible";
	document.getElementById('a51-22').style.visibility="visible"; 
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("a51-22").onclick=function() { 
	myStopFunction();
	document.getElementById("a51-22").onclick="";
	  var boxHandMargin = (data2[p][0]-5)*14.6;		
      document.getElementById("a51-22").style.marginLeft = boxHandMargin + 'px'; 
      document.getElementById("a51-11").style.marginLeft = boxHandMargin + 'px'; 
	setTimeout(function()
	{
	document.getElementById('a51-22').style.visibility="hidden";
	document.getElementById('para-1').innerHTML="Static Head:";
	document.getElementById('para1-1').innerHTML="Left Limb Reading="+data2[p][0]+" cm";
	setTimeout(function()
	{
	document.getElementById('a51-11').style.display="none"; 
	document.getElementById('a5-11').style.visibility="hidden"; 
	document.getElementById('a6-11').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('a61-22').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("a61-22").onclick=function() { 
	myStopFunction();
	document.getElementById("a61-22").onclick="";
	 var boxHandMargin = (data2[p][1]-5)*14.6;
     document.getElementById("a61-22").style.marginLeft = boxHandMargin + 'px'; 
     document.getElementById("a6-11").style.marginLeft = boxHandMargin + 'px'; 

	setTimeout(function()
	{
	document.getElementById('a61-22').style.visibility="hidden";
	document.getElementById('para2-1').innerHTML="Right Limb Reading="+data2[p][1]+" cm";
	document.getElementById('para3-1').innerHTML="Difference="+data2[p][2]+" cm";
	setTimeout(function()
	{
	 document.getElementById('a6-11').style.display="none";
	 display('a13-2','a30-22','a30-2','a51-22','para-1','para1-1','para2-1','a51-11','a34-22','a34-2','a5-11');
	 document.getElementById('para3-1').style.visibility="hidden";
	 setTimeout(function()
	 {
		 document.getElementById('a30-22').style.visibility="hidden";
		 document.getElementById('a30-2').style.visibility="hidden";
		 setTimeout(function()
		 {
			document.getElementById('a-22').style.visibility="visible";
			document.getElementById('a-23').style.visibility="visible";

			myInt = setInterval(function(){ animatearrow(); }, 500);
			animateArrowATPosition(370,80,20,360);
			document.getElementById("a-23").onclick=function() {
				myStopFunction();
				document.getElementById("a-23").onclick="";
				document.getElementById("a-22").style.animation = "movep2 1s ease-in-out forwards";
				document.getElementById("a-23").style.animation = "movehand02 1s ease-in-out forwards";
				setTimeout(function()
				{
				 document.getElementById('Sample2').style.visibility="visible";
				   
				 setTimeout(function()
				{
					document.getElementById('Sample2').style.visibility="hidden";
					 var leftLimbMargin = (data2[p][3]-15)*14.6;			
                     var rightLimbMargin = (data2[p][4]-15)*14.6;		
                     document.getElementById('a34-2').style.marginLeft = leftLimbMargin + 'px'; 	
                     document.getElementById('a34-22').style.marginLeft = rightLimbMargin + 'px';	
					
					document.getElementById('a-23').style.visibility="hidden";
					setTimeout(function()
					{
						document.getElementById('a5-22').style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(45,370,30,180);
						document.getElementById("a5-22").onclick=function() { 
						myStopFunction();
						document.getElementById("a5-22").onclick=""; 
                        var boxHandMargin = (data2[p][3]-5)*14.6;
                        document.getElementById("a5-22").style.marginLeft = boxHandMargin + 'px'; 
                        document.getElementById("a5-11").style.marginLeft = boxHandMargin + 'px'; 
						setTimeout(function()
						{
						 document.getElementById('a5-22').style.display="none";
					     document.getElementById('a5-11').style.display="none";
						 document.getElementById('a51-111').style.visibility="visible";
						 document.getElementById('paraa-1').innerHTML="Total Head:";
						 document.getElementById('para10-1').innerHTML="Left Limb Reading="+data2[p][3]+" cm";
						 setTimeout(function()
						 {
							 document.getElementById('a5-2').style.visibility="visible";
							 myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(45,370,30,180);
							 document.getElementById("a5-2").onclick=function() { 
							 myStopFunction();
							 document.getElementById("a5-2").onclick=""; 
                             var boxHandMargin = (data2[p][4]-5)*14.6;
                             document.getElementById("a5-2").style.marginLeft = boxHandMargin + 'px'; 
                             document.getElementById("a51-111").style.marginLeft = boxHandMargin + 'px'; 
							
							 setTimeout(function()
							 {
							 document.getElementById('a5-2').style.visibility="hidden";
							 document.getElementById('para20-1').innerHTML="Right Limb Reading="+data2[p][4]+" cm";
							 document.getElementById('para30-1').innerHTML="Difference="+data2[p][5]+" cm";

							 setTimeout(function()
							 {
							 document.getElementById('a51-111').style.display="none";
							 display('paraa-1','para10-1','para20-1','para30-1','a5-2','a5-11','a34-2','a35-2','a35-22','a61-12','a13-2');
						     document.getElementById('a34-22').style.visibility="hidden";
							 document.getElementById('a30-2').style.visibility="hidden";
							 setTimeout(function()
							{
							document.getElementById('Sample3').style.visibility="visible";
							setTimeout(function()
							{
							document.getElementById('Sample3').style.visibility="hidden";
                            var leftLimbMargin = (data2[p][6]-15)*14.6;			
                            var rightLimbMargin = (data2[p][7]-15)*14.6;		
                            document.getElementById('a35-2').style.marginLeft = leftLimbMargin + 'px'; 	
                            document.getElementById('a35-22').style.marginLeft = rightLimbMargin + 'px';	
							 setTimeout(function()
							 {
							 document.getElementById('a6-2').style.visibility="visible";
							  myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(45,370,30,180);
							 document.getElementById("a6-2").onclick=function() { 
							 myStopFunction();
							 document.getElementById("a6-2").onclick="";
							  var boxHandMargin = (data2[p][6]-5)*14.6;
                              document.getElementById("a6-2").style.marginLeft = boxHandMargin + 'px'; 
                              document.getElementById("a61-12").style.marginLeft = boxHandMargin + 'px'; 
							
							 setTimeout(function()
							 {    
							 document.getElementById('para0-1').innerHTML="Velocity Head:";
							 document.getElementById('para11-2').innerHTML="Left Limb Reading="+data2[p][6]+" cm";
							 setTimeout(function()
							 {
							 document.getElementById('a6-12').style.visibility="visible";
							 document.getElementById('a61-12').style.display="none";

							 document.getElementById('a6-2').style.display="none";
							 setTimeout(function()
							 {
							document.getElementById('a6-22').style.visibility="visible";
							 myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(45,370,30,180);
							 document.getElementById("a6-22").onclick=function() { 
							 myStopFunction();
							 document.getElementById("a6-22").onclick="";
                              var boxHandMargin = (data2[p][7]-5)*14.6;
                              document.getElementById("a6-22").style.marginLeft = boxHandMargin + 'px'; 
                              document.getElementById("a6-12").style.marginLeft = boxHandMargin + 'px'; 
							 setTimeout(function()
							 {
							 document.getElementById('a6-22').style.visibility="hidden";
							 document.getElementById('para22-2').innerHTML="Right Limb Reading="+data2[p][7]+" cm";
							 document.getElementById('para33-2').innerHTML="Difference="+data2[p][8]+" cm";
							 document.getElementById('nextButton').style.visibility="visible";
							 },3000);
							 }
							},3000);
						 },3500);
						},5500);
				       }
					 },7000);
					},6000); 
					},1000); 
					},2000); 
				 },4000);
				}
				},3000); 
			 },3000);
			 }
			},5000);
		  },3500);
	   },1000);
	   };
	 },3500);
	},1500);
	},3000); 
	},2000);
	}
	},3000);

	},2000);
	},2000);
	}
	},6000);
	},3000);
	},1000);
	},3000);
	}

	function initiate() {
	var img=document.getElementById('a2'); 
	var l=685;
	var t=80;
	var m1=document.getElementById('m1');
	m1.style.top=(t+1)+'px'; m1.style.left=(l+2)+'px';
	document.getElementById('m2').style.top=(t+41)+'px';
	document.getElementById('m2').style.left=(l+5)+'px';
	document.getElementById('m3').style.top=(t+70)+'px';
	document.getElementById('m3').style.left=(l+6)+'px';
	document.getElementById('m4').style.top=(t+105)+'px';
	document.getElementById('m4').style.left=(l+7)+'px';
	document.getElementById('m5').style.top=(t+132)+'px';
	document.getElementById('m5').style.left=(l+7.5)+'px';
	document.getElementById('m6').style.top=(t+147)+'px';
	document.getElementById('m6').style.left=(l+8)+'px';
	}
	function rt(n){
	var t=200;
	while(n){
	for(let i=6;i>0;i--){
	blink(i,t);
	t+=100;
	}
	n--;
	}
	}
	function blink(i,t){
	setTimeout(function(){document.getElementById('m'+i).style.opacity='1';},t);
	setTimeout(function(){document.getElementById('m'+i).style.opacity='0';},t+200);
	}

    function initiate1() {
	var img=document.getElementById('a2'); 
	var l1=685;
	var t1=80;
	var n1=document.getElementById('n1');
	n1.style.top=(t1+1)+'px'; n1.style.left=(l1+2)+'px';
	document.getElementById('n2').style.top=(t1+41)+'px';
	document.getElementById('n2').style.left=(l1+5)+'px';
	document.getElementById('n3').style.top=(t1+70)+'px';
	document.getElementById('n3').style.left=(l1+6)+'px';
	document.getElementById('n4').style.top=(t1+105)+'px';
	document.getElementById('n4').style.left=(l1+7)+'px';
	document.getElementById('n5').style.top=(t1+132)+'px';
	document.getElementById('n5').style.left=(l1+7.5)+'px';
	document.getElementById('n6').style.top=(t1+147)+'px';
	document.getElementById('n6').style.left=(l1+8)+'px';
	}
	function rt1(n){
	var tx=200;
	while(n){
	for(let i=6;i>0;i--){
	blink1(i,tx);
	tx+=100;
	}
	n--;
	}
	}
	function blink1(i,tx){
	setTimeout(function(){document.getElementById('n'+i).style.opacity='1';},tx);
	setTimeout(function(){document.getElementById('n'+i).style.opacity='0';},tx+200);
	}


	function stepp1()
	{
	myStopFunction();
	document.getElementById('b3').onclick="";

	document.getElementById("b3").style.animation = "mover 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById('b03').style.visibility = "visible";

	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(198,280,20,720);
	},1000);
	document.getElementById("b4").onclick=function() {stepp1_11();};
	}

	function stepp1_11()
	{
	myStopFunction();
	document.getElementById("b4").onclick="";
	document.getElementById('b44').style.visibility = "visible";
    document.getElementById('n9').style.opacity='1';
	document.getElementById('n10').style.opacity='1';
	document.getElementById('b2').style.visibility="visible";
	document.getElementById('arrow2').style.visibility="visible";
	document.getElementById('wind').style.visibility="visible";
	initiate1(); 
    setInterval("rt1(1)", 500);
	
	setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(182,257,20,720);
	document.getElementById("b0").onclick=function() { 
	myStopFunction();
	this.onclick = null;

	document.getElementById('b01').style.visibility = "visible";
	document.getElementById('b01').style.transform = "rotate(380deg)";
	document.getElementById("b01").style.WebkitTransform = "rotate(380deg)";
	document.getElementById("b01").style.msTransform = "rotate(380deg)";	  
	document.getElementById('Sample0').style.visibility="visible";
	document.getElementById('n7').style.opacity='1';
	document.getElementById('n8').style.opacity='1';
	document.getElementById('b5').style.visibility="visible";
	document.getElementById('b6').style.visibility="visible";
	document.getElementById("b6").style.animation = "movenn 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('b01').style.visibility="hidden";
	document.getElementById('Sample0').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible"; 
	},1000);
	};
	},1200);

	}

function step33()
	{
	myStopFunction();
	document.getElementById('b1-21').onclick="";
	document.getElementById('c1').style.visibility="hidden";
	document.getElementById('ab1').style.visibility="hidden";
	document.getElementById('m-8').style.visibility="hidden";
	document.getElementById('m-9').style.visibility="hidden";
	document.getElementById('m-6').style.visibility="hidden";
	document.getElementById("b1-21").style.animation = "movehand1 1s ease-in-out  forwards";
	setTimeout(function()
	{
	document.getElementById("b1-2").style.animation = "movep 1s ease-in-out  forwards";
	document.getElementById("b1-21").style.animation = "movehand11 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="hidden";
	document.getElementById('b1-21').style.visibility="hidden";
	  var leftLimbMargin = (data3[p][0]-15)*14.6;			
      var rightLimbMargin = (data3[p][1]-15)*14.6;		
      document.getElementById('b2-2').style.marginLeft = leftLimbMargin + 'px'; 	
      document.getElementById('b2-22').style.marginLeft = rightLimbMargin + 'px';	
	setTimeout(function()
	{
	document.getElementById('b3-2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("b3-2").onclick=function() { 
	myStopFunction();
	document.getElementById("b3-2").onclick="";
	  var boxHandMargin = (data3[p][0]-5)*14.6;		
      document.getElementById("b3-2").style.marginLeft = boxHandMargin + 'px'; 
      document.getElementById("b3-1").style.marginLeft = boxHandMargin + 'px'; 

	setTimeout(function()
	{
	document.getElementById('b3-2').style.visibility="hidden";
	document.getElementById('par').innerHTML="Static Head:";
	document.getElementById('par1').innerHTML="Left Limb Reading="+data3[p][0]+" cm";
	setTimeout(function()
	{
	document.getElementById('b3-1').style.display="none"; 
	document.getElementById('b4-1').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('b41-22').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("b41-22").onclick=function() { 
	myStopFunction();
	document.getElementById("b41-22").onclick="";
    var boxHandMargin = (data3[p][1]-5)*14.6;
    document.getElementById("b41-22").style.marginLeft = boxHandMargin + 'px'; 
    document.getElementById("b4-1").style.marginLeft = boxHandMargin + 'px'; 

	setTimeout(function()
	{
	document.getElementById('b41-22').style.visibility="hidden";
	document.getElementById('par2').innerHTML="Right Limb Reading="+data3[p][1]+" cm";
	document.getElementById('par3').innerHTML="Difference="+data3[p][2]+" cm";
	setTimeout(function()
	{

	 document.getElementById('b4-1').style.display="none";
	 display('par','par1','par2','par3','b2-2','b2-22','b1-2','b22-2','b22-22','b1-22','b3-11');
	 document.getElementById('b1-23').style.visibility="visible";
	 myInt = setInterval(function(){ animatearrow(); }, 500);
	 animateArrowATPosition(340,170,20,-90);
	 document.getElementById("b1-23").onclick=function() {
		myStopFunction();
		document.getElementById("b1-23").onclick="";
		document.getElementById("b1-23").style.animation = "movehand2 1s ease-in-out forwards";
		setTimeout(function()
		{
			document.getElementById("b1-22").style.animation = "movepp 1s ease-in-out forwards";
			document.getElementById("b1-23").style.animation = "movehand22 1s ease-in-out forwards";
			setTimeout(function()
			{
			document.getElementById('Sample2').style.visibility="visible";
				setTimeout(function()
			   {
				document.getElementById('Sample2').style.visibility="hidden";
				document.getElementById('b1-23').style.visibility="hidden";
				  var leftLimbMargin = (data3[p][3]-15)*14.6;	
                  var rightLimbMargin = (data3[p][4]-15)*14.6;
                  document.getElementById('b22-2').style.marginLeft = leftLimbMargin + 'px';
                  document.getElementById('b22-22').style.marginLeft = rightLimbMargin + 'px';
				  setTimeout(function()
				  {
					document.getElementById('b3-22').style.visibility="visible";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(45,370,30,180);
					document.getElementById("b3-22").onclick=function() { 
					myStopFunction();
				    var boxHandMargin = (data1[p][3]-5)*14.6;
                    document.getElementById("b3-22").style.marginLeft = boxHandMargin + 'px';
                   document.getElementById("b3-11").style.marginLeft = boxHandMargin + 'px';
					setTimeout(function()
					{
					document.getElementById('b3-22').style.visibility="hidden";
					document.getElementById('parr').innerHTML="Total Head:";
					document.getElementById('par11').innerHTML="Left Limb Reading="+data3[p][3]+" cm";
					setTimeout(function()
					{
					 document.getElementById('b3-11').style.display="none";
					 document.getElementById('b4-11').style.visibility="visible";
					 setTimeout(function()
					 {
					 document.getElementById('b4-22').style.visibility="visible";
					 myInt = setInterval(function(){ animatearrow(); }, 500);
					 animateArrowATPosition(45,370,30,180);
					 document.getElementById("b4-22").onclick=function() { 
					 myStopFunction();
					 document.getElementById("b4-22").onclick=""; 
						 var boxHandMargin = (data3[p][4]-5)*14.6;
                         document.getElementById("b4-22").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("b4-11").style.marginLeft = boxHandMargin + 'px';
						setTimeout(function()
						{
						document.getElementById('b4-22').style.visibility="hidden";
						document.getElementById('par22').innerHTML="Right Limb Reading="+data3[p][4]+" cm";
						document.getElementById('par33').innerHTML="Difference="+data3[p][5]+" cm";
						setTimeout(function()
						{
						document.getElementById('b4-11').style.display="none";
						 display('parr','par11','par22','par33','b22-2','b22-22','b3-11','b1-2','b21-2','b21-22','b31-11');
						setTimeout(function()
						{
						document.getElementById('Sample3').style.visibility="visible";
						setTimeout(function()
						{
						document.getElementById('Sample3').style.visibility="hidden";

						 var leftLimbMargin = (data3[p][6]-15)*14.6;	
                         var rightLimbMargin = (data3[p][7]-15)*14.6;
                         document.getElementById('b21-2').style.marginLeft = leftLimbMargin + 'px';
                         document.getElementById('b21-22').style.marginLeft = rightLimbMargin + 'px';
						setTimeout(function()
						{
						document.getElementById('b31-22').style.visibility="visible";

						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(45,370,30,180);
						document.getElementById("b31-22").onclick=function() { 
						myStopFunction();
						document.getElementById("b31-22").onclick="";
						boxHandMargin = (data3[p][6]-5)*14.6;
                        document.getElementById("b31-22").style.marginLeft = boxHandMargin + 'px';
                        document.getElementById("b31-11").style.marginLeft = boxHandMargin + 'px';
						setTimeout(function()
						{               
						document.getElementById('b31-22').style.visibility="hidden";
						document.getElementById('par0').innerHTML="Velocity Head:";
						document.getElementById('par12-2').innerHTML="Left Limb Reading="+data3[p][6]+" cm";
						setTimeout(function()
						{
						document.getElementById('b31-11').style.display="none";
						document.getElementById('b41-11').style.visibility="visible";
						setTimeout(function()
						{
						document.getElementById('b4-2').style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(45,370,30,180);
						document.getElementById("b4-2").onclick=function() { 
						myStopFunction();
						document.getElementById("b4-2").onclick="";
						 var boxHandMargin = (data3[p][7]-5)*14.6;
                         document.getElementById("b4-2").style.marginLeft = boxHandMargin + 'px';
                         document.getElementById("b41-11").style.marginLeft = boxHandMargin + 'px';
						setTimeout(function()
						{
						document.getElementById('b4-2').style.visibility="hidden";
						document.getElementById('par22-2').innerHTML="Right Limb Reading="+data3[p][7]+" cm";
						document.getElementById('par33-2').innerHTML="Difference="+data3[p][8]+" cm";
						document.getElementById('nextButton').style.visibility="visible";
						},2000);
					   }
					 },2000);
					},2000);
				  },2000);
				 }
				},5000)
			   },3500);
			  },1000);							 
			},3000); 
		  },2000);
		 }
		},2000);
	  },2000);
	},2000);
	}        
	},6000);
	},3500);
	},1000);
	},1000);
	};
	},2000);
	},2000);
	}
	},2000);
	},2000); 
	},2000); 
	}

	},6000);
	},3500);
	},2000);
	},1000);
	}

    function step44()
	{
	myStopFunction();
	document.getElementById('b-21').onclick="";
	document.getElementById('c2').style.visibility="hidden";
	document.getElementById('m-7').style.visibility="hidden";
	document.getElementById('b-21').style.visibility="visible";
	document.getElementById("b-21").style.animation = "movehand011 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById("b13-2").style.animation = "movep1 1s ease-in-out forwards";
	document.getElementById("b-21").style.animation = "movehand01 1s ease-in-out forwards";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('Sample1').style.visibility="hidden";
	document.getElementById('b-21').style.visibility="hidden";
	 var leftLimbMargin = (data4[p][0]-15)*14.6;			
     var rightLimbMargin = (data4[p][1]-15)*14.6;		
     document.getElementById('b30-2').style.marginLeft = leftLimbMargin + 'px'; 	
     document.getElementById('b30-22').style.marginLeft = rightLimbMargin + 'px';	
	setTimeout(function()
	{
	document.getElementById('b51-11').style.visibility="visible";
	document.getElementById('b51-22').style.visibility="visible"; 
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("b51-22").onclick=function() { 
	myStopFunction();
	document.getElementById("b51-22").onclick="";
	  var boxHandMargin = (data4[p][0]-5)*14.6;		
      document.getElementById("b51-22").style.marginLeft = boxHandMargin + 'px'; 
      document.getElementById("b51-11").style.marginLeft = boxHandMargin + 'px'; 
	setTimeout(function()
	{
	document.getElementById('b51-22').style.visibility="hidden";
	document.getElementById('pa-1').innerHTML="Static Head:";
	document.getElementById('pa1-1').innerHTML="Left Limb Reading="+data4[p][0]+" cm";
	setTimeout(function()
	{
	document.getElementById('b51-11').style.display="none"; 
	document.getElementById('b5-11').style.visibility="hidden"; 
	document.getElementById('b6-11').style.visibility="visible";
	setTimeout(function()
	{
	document.getElementById('b61-22').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(45,370,30,180);
	document.getElementById("b61-22").onclick=function() { 
	myStopFunction();
	document.getElementById("b61-22").onclick="";
	 var boxHandMargin = (data4[p][1]-5)*14.6;
     document.getElementById("b61-22").style.marginLeft = boxHandMargin + 'px'; 
     document.getElementById("b6-11").style.marginLeft = boxHandMargin + 'px'; 
	setTimeout(function()
	{
	document.getElementById('b61-22').style.visibility="hidden";
	document.getElementById('pa2-1').innerHTML="Right Limb Reading="+data4[p][1]+" cm";
	document.getElementById('pa3-1').innerHTML="Difference="+data4[p][2]+" cm";
	setTimeout(function()
	{
	 document.getElementById('b6-11').style.display="none";
	 display('pa-1','pa1-1','pa2-1','pa3-1','b13-2','b30-22','b30-2','b51-11','b34-22','b34-2','b5-11');
	 document.getElementById('b51-22').style.visibility="hidden";
	 setTimeout(function()
	 {
		 document.getElementById('b30-22').style.visibility="hidden";
		 document.getElementById('b30-2').style.visibility="hidden";
		 setTimeout(function()
		 {
			document.getElementById('b-22').style.visibility="visible";
			document.getElementById('b-23').style.visibility="visible";

			myInt = setInterval(function(){ animatearrow(); }, 500);
			animateArrowATPosition(370,80,20,360);
			document.getElementById("b-23").onclick=function() {
				myStopFunction();
				document.getElementById("b-23").onclick="";
				document.getElementById("b-22").style.animation = "movep2 1s ease-in-out forwards";
				document.getElementById("b-23").style.animation = "movehand02 1s ease-in-out forwards";
				setTimeout(function()
				{
				 document.getElementById('Sample2').style.visibility="visible";
				   
				setTimeout(function()
				{
					document.getElementById('Sample2').style.visibility="hidden";
					 var leftLimbMargin = (data4[p][3]-15)*14.6;			
                     var rightLimbMargin = (data4[p][4]-15)*14.6;		
                     document.getElementById('b34-2').style.marginLeft = leftLimbMargin + 'px'; 	
                     document.getElementById('b34-22').style.marginLeft = rightLimbMargin + 'px';	
					 document.getElementById('b-23').style.visibility="hidden";
					 setTimeout(function()
					 {
						document.getElementById('b5-22').style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(45,370,30,180);
						document.getElementById("b5-22").onclick=function() { 
						myStopFunction();
						document.getElementById("b5-22").onclick=""; 
                        var boxHandMargin = (data4[p][3]-5)*14.6;
                        document.getElementById("b5-22").style.marginLeft = boxHandMargin + 'px'; 
                        document.getElementById("b5-11").style.marginLeft = boxHandMargin + 'px'; 
						setTimeout(function()
						{
						 document.getElementById('b5-22').style.display="none";
					     document.getElementById('b5-11').style.display="none";
						 document.getElementById('b51-111').style.visibility="visible";
						 document.getElementById('paa-1').innerHTML="Total Head:";
						 document.getElementById('pa10-1').innerHTML="Left Limb Reading="+data4[p][3]+" cm";
						 setTimeout(function()
						 {
							 document.getElementById('b5-2').style.visibility="visible";
							 myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(45,370,30,180);
							 document.getElementById("b5-2").onclick=function() { 
							 myStopFunction();
							 document.getElementById("b5-2").onclick=""; 
                             var boxHandMargin = (data4[p][4]-5)*14.6;
                             document.getElementById("b5-2").style.marginLeft = boxHandMargin + 'px'; 
                             document.getElementById("b51-111").style.marginLeft = boxHandMargin + 'px'; 
							
							 setTimeout(function()
							 {
							 document.getElementById('b5-2').style.visibility="hidden";
							 document.getElementById('pa20-1').innerHTML="Right Limb Reading="+data4[p][4]+" cm";
							 document.getElementById('pa30-1').innerHTML="Difference="+data4[p][5]+" cm";

							 setTimeout(function()
							 {
							 document.getElementById('b51-111').style.display="none";
							 display('paa-1','pa10-1','pa20-1','pa30-1','b5-2','b5-11','b34-2','b35-2','b35-22','b61-12','b13-2');
							 document.getElementById('b30-2').style.visibility="hidden";

							 setTimeout(function()
							 {
							document.getElementById('Sample3').style.visibility="visible";
							setTimeout(function()
							{
							document.getElementById('Sample3').style.visibility="hidden";
                            var leftLimbMargin = (data4[p][6]-15)*14.6;			
                            var rightLimbMargin = (data4[p][7]-15)*14.6;		
                            document.getElementById('b35-2').style.marginLeft = leftLimbMargin + 'px'; 	
                            document.getElementById('b35-22').style.marginLeft = rightLimbMargin + 'px';	
							 setTimeout(function()
							 {
							 document.getElementById('b6-2').style.visibility="visible";
							  myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(45,370,30,180);
							 document.getElementById("b6-2").onclick=function() { 
							 myStopFunction();
							 document.getElementById("b6-2").onclick="";
							  var boxHandMargin = (data4[p][6]-5)*14.6;
                              document.getElementById("b6-2").style.marginLeft = boxHandMargin + 'px'; 
                              document.getElementById("b61-12").style.marginLeft = boxHandMargin + 'px'; 
							
							 setTimeout(function()
							 {    
							 document.getElementById('pa0-1').innerHTML="Velocity Head:";
							 document.getElementById('pa11-2').innerHTML="Left Limb Reading="+data4[p][6]+" cm";
							 setTimeout(function()
							 {
							 document.getElementById('b6-12').style.visibility="visible";
							 document.getElementById('b61-12').style.display="none";

							 document.getElementById('b6-2').style.display="none";
							 setTimeout(function()
							 {
							 document.getElementById('b6-22').style.visibility="visible";
							 myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(45,370,30,180);
							 document.getElementById("b6-22").onclick=function() { 
							 myStopFunction();
							 document.getElementById("b6-22").onclick="";
                              var boxHandMargin = (data4[p][7]-5)*14.6;
                              document.getElementById("b6-22").style.marginLeft = boxHandMargin + 'px'; 
                              document.getElementById("b6-12").style.marginLeft = boxHandMargin + 'px'; 
							 setTimeout(function()
							 {
							 document.getElementById('b6-22').style.visibility="hidden";
							 document.getElementById('pa22-2').innerHTML="Right Limb Reading="+data4[p][7]+" cm";
							 document.getElementById('pa33-2').innerHTML="Difference="+data4[p][8]+" cm";
							 document.getElementById('nextButton').style.visibility="visible";
							 },3000);
							 }
							},3000);
						 },3500);
						},5500);
					  }
					 },7000);
					},6000); 
					},1000); 
					},1000); 
				 },4000);
				 }
				},3000); 
			 },3000);
			 }
			},5000);
		 },3500);
	   },1000);
	   };
	 },3500);
	},1500);
	},3000); 
	},2000);
	}
	},3000);
	},2000);
	},2000);
	}
	},6000);
	},3000);
	},1000);
	},3000);
	}

 function refresh(r1,r2,r3,r4)
  {
    document.getElementById(r1).style.visibility="hidden";
    document.getElementById(r2).style.visibility="hidden";
    document.getElementById(r3).style.visibility="hidden";
    document.getElementById(r4).style.visibility="hidden";
  }
function refresh1(n1,n2,n3,n4)
  {
    document.getElementById(n1).style.display="none";
    document.getElementById(n2).style.display="none";
    document.getElementById(n3).style.display="none";
    document.getElementById(n4).style.display="none";
   
  }
 function display(para_1,para_2,para_3,para_4,para_5,para_6,para_7,para_8,para_9,para_10,para_11)
  {
    document.getElementById(para_1).style.visibility="hidden";
    document.getElementById(para_2).style.visibility="hidden";
    document.getElementById(para_3).style.visibility="hidden";
    document.getElementById(para_4).style.visibility="hidden";
	document.getElementById(para_5).style.visibility="hidden";
    document.getElementById(para_6).style.visibility="hidden";
    document.getElementById(para_7).style.visibility="hidden";
    document.getElementById(para_8).style.visibility="visible";
	document.getElementById(para_9).style.visibility="visible";
    document.getElementById(para_10).style.visibility="visible";
    document.getElementById(para_11).style.visibility="visible";
  }
  
  var k;
    function calc1(para_button,para_output,para_output,para_button,para_output,para_button1,para_button,para_wrong,para_wrong,para_right,para_button1,para_h1,para_h1,para_output,para_wrong,para_right,para_right,para_h1,para_h1,para_button,k ) 
    {
 	var	flag1=0;
	document.getElementById(para_button).onclick=function() {
	n= document.getElementById(para_output).value;
	if(document.getElementById(para_output).value==="")
	{
	if(document.getElementById(para_button).innerHTML==="Result"){
	document.getElementById(para_output).value=data5[p][k];
	document.getElementById(para_button1).style.visibility="visible";
    document.getElementById(para_button).style.visibility = "hidden";
    document.getElementById(para_wrong).style.visibility = "hidden";
	}
	else
	alert("Enter the value to proceed");
	}
	else {
    if(Math.floor(n)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100)){
    document.getElementById(para_button).style.visibility = 'hidden';
    document.getElementById(para_wrong).style.visibility = "hidden";
    document.getElementById(para_right).style.visibility = "visible";
    document.getElementById(para_button1).style.visibility = 'visible';
    document.getElementById(para_h1).style.visibility="visible";
	document.getElementById(para_h1).innerHTML=data5[p][k];}
	else{
 	flag1+=1;
    document.getElementById(para_output).value = "";
    document.getElementById(para_wrong).style.visibility = "visible";
    document.getElementById(para_right).style.visibility = "hidden";	
	if (flag1===2){
    if(Math.floor(n)===Math.floor(data5[p][k])||Math.floor(n*10)===Math.floor(data5[p][k]*10)||Math.floor(n*100)===Math.floor(data5[p][k]*100)){
	document.getElementById(para_right).style.visibility="visible";
    document.getElementById(para_h1).style.visibility="visible";
	document.getElementById(para_h1).innerHTML=data5[p][k];
    }
	else
	document.getElementById(para_button).innerHTML="Result";
	}               
	}
	}
	};
   }

    var k;
    function calc2(para_button1,para_output1,para_output1,para_button1,para_output1,para_button11,para_button1,para_wrong1,para_wrong1,para_right1,para_button11,para_h11,para_h11,para_output1,para_wrong1,para_right1,para_right1,para_h11,para_h11,para_button1,k ) 
    {
 	var	flag1=0;
	document.getElementById(para_button1).onclick=function() {
	n= document.getElementById(para_output1).value;
	if(document.getElementById(para_output1).value==="")
	{
	if(document.getElementById(para_button1).innerHTML==="Result"){
	document.getElementById(para_output1).value=data6[p][k];
	document.getElementById(para_button11).style.visibility="visible";
    document.getElementById(para_button1).style.visibility = "hidden";
    document.getElementById(para_wrong1).style.visibility = "hidden";
	}
	else
	alert("Enter the value to proceed");
	}
	else {
    if(Math.floor(n)===Math.floor(data6[p][k])||Math.floor(n*10)===Math.floor(data6[p][k]*10)||Math.floor(n*100)===Math.floor(data6[p][k]*100)){
    document.getElementById(para_button1).style.visibility = 'hidden';
    document.getElementById(para_wrong1).style.visibility = "hidden";
    document.getElementById(para_right1).style.visibility = "visible";
    document.getElementById(para_button11).style.visibility = 'visible';
    document.getElementById(para_h11).style.visibility="visible";
	document.getElementById(para_h11).innerHTML=data6[p][k];}
	else{
 	flag1+=1;
    document.getElementById(para_output1).value = "";
    document.getElementById(para_wrong1).style.visibility = "visible";
    document.getElementById(para_right1).style.visibility = "hidden";	
	if (flag1===2){
    if(Math.floor(n)===Math.floor(data6[p][k])||Math.floor(n*10)===Math.floor(data6[p][k]*10)||Math.floor(n*100)===Math.floor(data6[p][k]*100)){
	document.getElementById(para_right1).style.visibility="visible";
    document.getElementById(para_h11).style.visibility="visible";
	document.getElementById(para_h11).innerHTML=data6[p][k];
    }
	else
	document.getElementById(para_button1).innerHTML="Result";
	}               
	}
	}
	};
    }

    var k;
    function calc3(para_button2,para_output2,para_output2,para_button2,para_output2,para_button12,para_button2,para_wrong2,para_wrong2,para_right2,para_button12,para_h2,para_h2,para_output2,para_wrong2,para_right2,para_right2,para_h2,para_h2,para_button2,k ) 
    {
 	var	flag1=0;
	document.getElementById(para_button2).onclick=function() {
	n= document.getElementById(para_output2).value;
	if(document.getElementById(para_output2).value==="")
	{
	if(document.getElementById(para_button2).innerHTML==="Result"){
	document.getElementById(para_output2).value=data7[p][k];
	document.getElementById(para_button12).style.visibility="visible";
    document.getElementById(para_button2).style.visibility = "hidden";
    document.getElementById(para_wrong2).style.visibility = "hidden";
	}
	else
	alert("Enter the value to proceed");
	}
	else {
    if(Math.floor(n)===Math.floor(data7[p][k])||Math.floor(n*10)===Math.floor(data7[p][k]*10)||Math.floor(n*100)===Math.floor(data7[p][k]*100)){
    document.getElementById(para_button2).style.visibility = 'hidden';
    document.getElementById(para_wrong2).style.visibility = "hidden";
    document.getElementById(para_right2).style.visibility = "visible";
    document.getElementById(para_button12).style.visibility = 'visible';
    document.getElementById(para_h2).style.visibility="visible";
	document.getElementById(para_h2).innerHTML=data7[p][k];}
	else{
 	flag1+=1;
    document.getElementById(para_output2).value = "";
    document.getElementById(para_wrong2).style.visibility = "visible";
    document.getElementById(para_right2).style.visibility = "hidden";	
	if (flag1===2){
    if(Math.floor(n)===Math.floor(data7[p][k])||Math.floor(n*10)===Math.floor(data7[p][k]*10)||Math.floor(n*100)===Math.floor(data7[p][k]*100)){
	document.getElementById(para_right2).style.visibility="visible";
    document.getElementById(para_h2).style.visibility="visible";
	document.getElementById(para_h2).innerHTML=data7[p][k];
    }
	else
	document.getElementById(para_button2).innerHTML="Result";
	}               
	}
	}
	};
   }

    var k;
    function calc4(para_button3,para_output3,para_output3,para_button3,para_output3,para_button13,para_button3,para_wrong3,para_wrong3,para_right3,para_button13,para_h3,para_h3,para_output3,para_wrong3,para_right3,para_right3,para_h3,para_h3,para_button3,k ) 
    {
 	var	flag1=0;
	document.getElementById(para_button3).onclick=function() {
	n= document.getElementById(para_output3).value;
	if(document.getElementById(para_output3).value==="")
	{
	if(document.getElementById(para_button3).innerHTML==="Result"){
	document.getElementById(para_output3).value=data8[p][k];
	document.getElementById(para_button13).style.visibility="visible";
    document.getElementById(para_button3).style.visibility = "hidden";
    document.getElementById(para_wrong3).style.visibility = "hidden";
	}
	else
	alert("Enter the value to proceed");
	}
	else {
    if(Math.floor(n)===Math.floor(data8[p][k])||Math.floor(n*10)===Math.floor(data8[p][k]*10)||Math.floor(n*100)===Math.floor(data8[p][k]*100)){
    document.getElementById(para_button3).style.visibility = 'hidden';
    document.getElementById(para_wrong3).style.visibility = "hidden";
    document.getElementById(para_right3).style.visibility = "visible";
    document.getElementById(para_button13).style.visibility = 'visible';
    document.getElementById(para_h3).style.visibility="visible";
	document.getElementById(para_h3).innerHTML=data8[p][k];}
	else{
 	flag1+=1;
    document.getElementById(para_output3).value = "";
    document.getElementById(para_wrong3).style.visibility = "visible";
    document.getElementById(para_right3).style.visibility = "hidden";	
	if (flag1===2){
    if(Math.floor(n)===Math.floor(data8[p][k])||Math.floor(n*10)===Math.floor(data8[p][k]*10)||Math.floor(n*100)===Math.floor(data8[p][k]*100)){
	document.getElementById(para_right3).style.visibility="visible";
    document.getElementById(para_h3).style.visibility="visible";
	document.getElementById(para_h3).innerHTML=data8[p][k];
    }
	else
	document.getElementById(para_button3).innerHTML="Result";
	}               
	}
	}
	};
    }