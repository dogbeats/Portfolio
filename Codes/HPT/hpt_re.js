var playBtn1 = document.getElementById('playBtn1');
playBtn1.addEventListener('click', play_video1, false);

var playBtn2 = document.getElementById('playBtn2');
playBtn2.addEventListener('click', play_video2, false);

var playBtn3 = document.getElementById('playBtn3');
playBtn3.addEventListener('click', play_video3, false);

var playBtn4 = document.getElementById('playBtn4');
playBtn4.addEventListener('click', play_video4, false);

var playBtn5 = document.getElementById('playBtn5');
playBtn5.addEventListener('click', play_video5, false);

var playBtn6 = document.getElementById('playBtn6');
playBtn6.addEventListener('click', play_video6, false);

var playBtn7 = document.getElementById('playBtn7');
playBtn7.addEventListener('click', play_video7, false);

var playBtn8 = document.getElementById('playBtn8');
playBtn8.addEventListener('click', play_video8, false);

var playBtn9 = document.getElementById('playBtn9');
playBtn9.addEventListener('click', play_video9, false);

var playBtn10 = document.getElementById('playBtn10');
playBtn10.addEventListener('click', play_video10, false);

var playBtn11 = document.getElementById('playBtn11');
playBtn11.addEventListener('click', play_video11, false);

var playBtn12 = document.getElementById('playBtn12');
playBtn12.addEventListener('click', play_video12, false);

var playBtn13 = document.getElementById('playBtn13');
playBtn13.addEventListener('click', play_video13, false);

var playBtn14 = document.getElementById('playBtn14');
playBtn14.addEventListener('click', play_video14, false);

var playBtn15 = document.getElementById('playBtn15');
playBtn15.addEventListener('click', play_video15, false);

var playBtn16 = document.getElementById('playBtn16');
playBtn16.addEventListener('click', play_video16, false);

//------------------------------------------------------------------------//

var cgiBtn1 = document.getElementById('cgiBtn1');
cgiBtn1.addEventListener('click', play_video17, false);

var cgiBtn2 = document.getElementById('cgiBtn2');
cgiBtn2.addEventListener('click', play_video18, false);

var cgiBtn3 = document.getElementById('cgiBtn3');
cgiBtn3.addEventListener('click', play_video19, false);

var cgiBtn4 = document.getElementById('cgiBtn4');
cgiBtn4.addEventListener('click', play_video20, false);

var cgiBtn5 = document.getElementById('cgiBtn5');
cgiBtn5.addEventListener('click', play_video21, false);

var cgiBtn6 = document.getElementById('cgiBtn6');
cgiBtn6.addEventListener('click', play_video22, false);

var cgiBtn7 = document.getElementById('cgiBtn7');
cgiBtn7.addEventListener('click', play_video23, false);

var cgiBtn8 = document.getElementById('cgiBtn8');
cgiBtn8.addEventListener('click', play_video24, false);

var cgiBtn9 = document.getElementById('cgiBtn9');
cgiBtn9.addEventListener('click', play_video25, false);

var cgiBtn10 = document.getElementById('cgiBtn10');
cgiBtn10.addEventListener('click', play_video26, false);

//------------------------------------------------------------------------//

//video.addEventListener("loadeddata", playVideo, false);

//------------------------------------------------------------------------//

var hazardBtn = document.getElementById('video');
hazardBtn.addEventListener('click', hazardBtnClick, false);

var mainMenuBtn = document.getElementById('homeButton');
mainMenuBtn.addEventListener('click', mainMenu, false);

var practiceButton = document.getElementById('practiceButton');
practiceButton.addEventListener('click', practiceVideos, false);

var testButton = document.getElementById('testButton');
testButton.addEventListener('click', mockTestBegin, false);

var page1 = document.getElementById('changePage1');
page1.addEventListener('click', toPage1, false);

var page2 = document.getElementById('changePage2');
page2.addEventListener('click', toPage2, false);

var page3 = document.getElementById('changePage3');
page3.addEventListener('click', toPage3, false);

//var afullScreen = document.getElementById('fullScreen');
//afullScreen.addEventListener('click', goFullScreen, false);

//-------------------------------------------------------------------------//

document.getElementById('sliderBar').ondragstart = function() { return false; };
document.getElementById('sliderDongle').ondragstart = function() { return false; };

var clicks = 0;

var time = 0;

var score;

var testScore;

var videoVal = 0;

var displayValuesX = 0;

var test;

var testClicked;

var testVideoNumber;

var testOrder = [];

var playVideoInterval;

var loadVideoInterval;

var testFunctionInterval;

var intendedUse2;

var mouse = {x: 0, y: 0};

var sizeUpdated;

var multiplierX;

var oneCallOnly = 0;

//-------------------------------------------------------------------------//
function testFunction(video)
{
	/*var video = document.getElementById('video');
	var length = video.duration;
	var currentBuffer = video.buffered.end(0);
	var percentage = 100 * 1/length;
	document.getElementById('total').innerHTML= 'network state..........' + percentage;*/
	/*var test = video.buffered.end(0);
	var percentage = (video.duration / test) * 100;
	document.getElementById('percentage').innerHTML = percentage + '%';
	if (percentage == 100)
	{
		clearInterval(testFunctioninterval);
	}
	
	var video = document.getElementById('video');
	var pBar = document.getElementById('p');
	var percent = Math.floor((video.length/video.duration) * 100);
	pBar.value = percent;
	pBar.getElementsByTagName('span')[0].innerHTML = percent;
	document.getElementById('total').innerHTML = video.buffered.length;*/
}

//-------------------------------------------------------------------------//
//Changing pages start

/*function goFullScreen()
{
	var elem = document.getElementById('video');
	if (elem.requestFullscreen) {
	  elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
	  elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
	  elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
	  elem.webkitRequestFullscreen();
	}	
}

function exitFullscreen()
{
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}*/

function mainMenu()
{
	document.getElementById('optionmenu').style.left = "44px";
	document.getElementById('changepagebuttons').style.left = "-5000px";
	document.getElementById('page1').style.left = "-5000px";
	document.getElementById('page2').style.left = "-50000px";
	document.getElementById('page3').style.left = "-50000px";
}

function practiceVideos()
{
	document.getElementById('optionmenu').style.left = "-5000px";
	document.getElementById('changepagebuttons').style.left = "20px";
	document.getElementById('page1').style.left = "20px";
}

function toPage1()
{
	document.getElementById('page1').style.left = "20px";
	document.getElementById('page2').style.left = "-50000px";
	document.getElementById('page3').style.left = "-50000px";
}

function toPage2()
{
	document.getElementById('page2').style.left = "20px";
	document.getElementById('page1').style.left = "-50000px";
	document.getElementById('page3').style.left = "-50000px";
}

function toPage3()
{
	document.getElementById('page3').style.left = "20px";
	document.getElementById('page2').style.left = "-50000px";
	document.getElementById('page1').style.left = "-50000px";
}

function mockTestBegin()
{
	randomise();
	document.getElementById('optionmenu').style.left = "-5000px";
	test = true;
	testVideoNumber = 0;
	testScore = 0;
	clearInterval(playVideoInterval);
	clearInterval(loadVideoInterval);
	video.poster = 'images/ajax-loader.gif';
	document.getElementById('percentage').style.left = 145 + document.getElementById("video").width/2 + 'px';//'382px';
	document.getElementById('percentage').style.top = document.getElementById("video").height/2 + 20 + 'px';
	setTimeout(function() { loadVideo('video/video' + testOrder[testVideoNumber] + '.mp4', 1); }, 100);
}

//-------------------------------------------------------------------------//

function randomise() 
{
	var limit = 15, //10
		amount = 15, //10
		lower_bound = 1,
		upper_bound = 26; //10

	if (amount > limit) 
	{
		limit = amount; 
	}
	
	while (testOrder.length < limit) 
	{
		var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
		
		if (testOrder.indexOf(random_number) == -1) 
		{ 
			testOrder.push( random_number );
		}
	}
}

function timeBegin() 
{
	time = video.currentTime;
}

function video_duration()
{
	var video = document.getElementById('video');
	alert(video.duration);
}

function reset()
{
	test = false;
	testVideoNumber = 0;
	intendedUse2 = 1;
	clicks = 0;
	document.getElementById('flag').innerHTML='';
	video.poster = 'images/ajax-loader.gif';
	document.getElementById('percentage').style.left = 145 + document.getElementById("video").width/2 + 'px';//'382px';
	document.getElementById('percentage').style.top = document.getElementById("video").height/2 + 20 + 'px';
}

//-------------------------------------------------------------------------//

function play_video1()
{
	reset();
	videoVal = 1;
	loadVideo('video/video1.mp4', 1);
}

function play_video2()
{
	reset();
	videoVal = 2;
	loadVideo('video/video2.mp4', 1);
}

function play_video3()
{
	reset();
	videoVal = 3;
	loadVideo('video/video3.mp4', 1);
}


function play_video4()
{
	reset();
	videoVal = 4;
	loadVideo('video/video4.mp4', 1);
}


function play_video5()
{
	reset();
	videoVal = 5;
	loadVideo('video/video5.mp4', 1);
}


function play_video6()
{
	reset();
	videoVal = 6;
	loadVideo('video/video6.mp4', 1);
}


function play_video7()
{
	reset();
	videoVal = 7;
	loadVideo('video/video7.mp4', 1);
}


function play_video8()
{
	reset();
	videoVal = 8;
	loadVideo('video/video8.mp4', 1);
}


function play_video9()
{
	reset();
	videoVal = 9;
	loadVideo('video/video9.mp4', 1);
}


function play_video10()
{
	reset();
	videoVal = 10;
	loadVideo('video/video10.mp4', 1);
}


function play_video11()
{
	reset();
	videoVal = 11;
	loadVideo('video/video11.mp4', 1);
}


function play_video12()
{
	reset();
	videoVal = 12;
	loadVideo('video/video12.mp4', 1);
}


function play_video13()
{
	reset();
	videoVal = 13;
	loadVideo('video/video13.mp4', 1);
}


function play_video14()
{
	reset();
	videoVal = 14;
	loadVideo('video/video14.mp4', 1);
}


function play_video15()
{
	reset();
	videoVal = 15;
	loadVideo('video/video15.mp4', 1);
}


function play_video16()
{
	reset();
	videoVal = 16;
	loadVideo('video/video16.mp4', 1);
}

function play_video17()
{
	reset();
	videoVal = 17;
	loadVideo('video/video17.mp4', 1);
}

function play_video18()
{
	reset();
	videoVal = 18;
	loadVideo('video/video18.mp4', 1);
}

function play_video19()
{
	reset();
	videoVal = 19;
	loadVideo('video/video19.mp4', 1);
}

function play_video20()
{
	reset();
	videoVal = 20;
	loadVideo('video/video20.mp4', 1);
}

function play_video21()
{
	reset();
	videoVal = 21;
	loadVideo('video/video21.mp4', 1);
}

function play_video22()
{
	reset();
	videoVal = 22;
	loadVideo('video/video22.mp4', 1);
}

function play_video23()
{
	reset();
	videoVal = 23;
	loadVideo('video/video23.mp4', 1);
}

function play_video24()
{
	reset();
	videoVal = 24;
	loadVideo('video/video24.mp4', 1);
}

function play_video25()
{
	reset();
	videoVal = 25;
	loadVideo('video/video25.mp4', 1);
}

function play_video26()
{
	reset();
	videoVal = 26;
	loadVideo('video/video26.mp4', 1);
}

//-------------------------------------------------------------------------//

function displayValues(video, intendedUse)
{
	displayValuesX = 0;
	intendedUse = intendedUse;
	
	/*
	document.getElementById('total').innerHTML= 'network state..........' + video.networkState;
	document.getElementById('total3').innerHTML= 'score..........' + score;
	document.getElementById('total4').innerHTML= 'duration..........' + video.duration;
	document.getElementById('total5').innerHTML= 'current time..........' + video.currentTime;
	document.getElementById('total6').innerHTML= 'displayvaluesx..........' + displayValuesX;
	document.getElementById('total7').innerHTML= 'video value..........' + videoVal;
	document.getElementById('total8').innerHTML= 'intended use..........' + intendedUse2;
	document.getElementById('total9').innerHTML= 'test video number..........' + testVideoNumber;
	document.getElementById('clicks').innerHTML= 'clicks..........' + clicks;
	*/
	
	if((video.duration <= video.currentTime + 1) && intendedUse2 == 1 && test == false) //1 == test, 0 == review
	{
		if (displayValuesX == 0)
		{
			clearInterval(playVideoInterval);
			clearInterval(loadVideoInterval);
			video.src = 'video/video' + videoVal + 'review.mp4';
			videoReviewScore(video);
			displayValuesX = 1;
		}
		
		clearInterval(playVideoInterval);
		clearInterval(loadVideoInterval);
	}
	else if ((video.duration <= video.currentTime + 3) && intendedUse2 == 0 && test == false)
	{
		video.src = ' ';
	}
	else if ((video.duration <= video.currentTime + 2) && (test == true) && (testVideoNumber < testOrder.length))
	{
		testVideoNumber = testVideoNumber + 1;
		clearInterval(playVideoInterval);
		clearInterval(loadVideoInterval);
		testScore = testScore + score;
		if(testOrder[testVideoNumber] <=16)
		{
			video.src = 'video/video' + testOrder[testVideoNumber] + '.mp4';
			loadVideo('video/video' + testOrder[testVideoNumber] + '.mp4');
		}
		else if(testOrder[testVideoNumber] > 16 && testOrder[testVideoNumber] <= 26)
		{
			video.src = 'video/video' + testOrder[testVideoNumber] + '.mp4';
			loadVideo('video/video' + testOrder[testVideoNumber] + '.mp4');
		}
	}
	else if((test == true) && (testVideoNumber >= testOrder.length))
	{
		clearInterval(playVideoInterval);
		clearInterval(loadVideoInterval);
		setTimeout(function(){ videoReviewMock();}, 2000);
	}
}

function moveIndividual()
{
	document.getElementById('individualResult').style.left = '-5000px';
	document.getElementById('testscale').style.left = '-5000px';
}

function videoReviewMock()
{
	//exitFullscreen();
	clearInterval(playVideoInterval);
	clearInterval(loadVideoInterval);
	test = false;
	document.getElementById('individualResult').innerHTML='<p style="font-size:22px; font-family:Arial;">You scored</p><p style="font-size:38px; font-family:Arial;">' + testScore + ' out of 75</p><p style="font-size:19px; font-family:Arial;"></p><br><br><br><br><p style="font-size:19px; font-family:Arial;">Want tips to improve? See our help section below...</p>';
	document.getElementById('individualResult').style.left = '156px';
	document.getElementById('testscale').style.left = '156px';
	video.src = ' ';
	setTimeout(function(){ moveIndividual(); }, 5000);
}

function videoReviewScore(video) 
{
	//exitFullscreen();
	video = video;
	clearInterval(playVideoInterval);
	clearInterval(loadVideoInterval);
	document.getElementById('individualResult').innerHTML='<p style="font-size:22px; font-family:Arial;">You scored</p><p style="font-size:38px; font-family:Arial;">' + score + ' out of 5</p><p style="font-size:19px; font-family:Arial;"> The review clip that shows you where the hazard was will start shortly. </p><br><br><br><br><p style="font-size:19px; font-family:Arial;">Want tips to improve? See our help section below...</p>';
	document.getElementById('individualResult').style.left = '156px';
	document.getElementById('testscale').style.left = '156px';
	setTimeout(function(){ moveIndividual(); }, 5000);
	if(!test)
	{
		intendedUse2 = 0;
		video.poster = 'images/ajax-loader.gif';
		document.getElementById('percentage').style.left = 145 + document.getElementById("video").width/2 + 'px';//'382px';
		document.getElementById('percentage').style.top = document.getElementById("video").height/2 + 20 + 'px';
		setTimeout(function(){ playVideoReview(video); }, 1000);
	}
}

function playVideoReview(video)
{
	/*
	document.getElementById('total').innerHTML= video.networkState;
	document.getElementById('total2').innerHTML= video.readyState;
	*/	
	video.load();
	playVideoInterval = setInterval(function(){playVideo(video, 0);}, 500); 
}

function playVideo(video, intendedUse)
{
	intendedUse = intendedUse;
	networkState = video.networkState;
	readyState = video.readyState;
	displayValuesX = 0;
	if (networkState == 1)
	{
		/*
		document.getElementById('total').innerHTML= video.networkState;
		document.getElementById('total3').innerHTML= video.readyState;
		*/
		video.play();
		document.getElementById('percentage').style.left = '-1000px';
		playVideoInterval = setInterval(function(){displayValues(video, intendedUse);}, 500); 
	}
	else
	{
		//var test = video.buffered.end(0);
		//document.getElementById('total').innerHTML= 'video seekable..........' + test;
		clearInterval();
		/*
		document.getElementById('total').innerHTML= video.networkState;
		document.getElementById('total2').innerHTML= video.readyState;
		*/
		//document.getElementById('video').poster = 'images/loading.png';	
	}
}
	
function loadVideo(videoUrl, intendedUse)
{
	intendedUse = intendedUse;
	clicks = 0;
	score = 0;
	var video = document.getElementById('video');
	video.src = ' ';
	video.src = videoUrl;
	video.load();
	
	if(test == true)
	{
		video.poster = 'images/ajax-loader.gif';
		document.getElementById('percentage').style.left = 145 + document.getElementById("video").width/2 + 'px';//'382px';
		document.getElementById('percentage').style.top = document.getElementById("video").height/2 + 20 + 'px';
	}	
	
	loadVideoInterval = setInterval(function(){playVideo(video, intendedUse);}, 2000); 
}

function hazardBtnClick()
{	
	time = video.currentTime;
	if(clicks < 25)
	{
		clicks++;
		
		if((videoVal == 1) || ((testOrder[testVideoNumber] == 1) && (test==true)))
		{
			if (video.currentTime >= 41 && video.currentTime < 42)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 42 && video.currentTime < 43)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 43 && video.currentTime < 44)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
			}
			else if (video.currentTime >= 44 && video.currentTime < 45)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 45 && video.currentTime < 46)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		if((videoVal == 2) || ((testOrder[testVideoNumber] == 2) && (test==true)))
		{
			/*if (time < 29)
			{
				score = 0;
			}*/
			if (video.currentTime >= 29 && video.currentTime < 30)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 30 && video.currentTime < 31)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 31 && video.currentTime < 32)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 32 && video.currentTime < 33)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 33 && video.currentTime < 34)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 34)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 3) || ((testOrder[testVideoNumber] == 3) && (test==true)))
		{
			/*if (time < 15)
			{
				score = 0;
			}*/
			if (video.currentTime >= 15 && video.currentTime < 16)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 16 && video.currentTime < 17)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 17 && video.currentTime < 18)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 18 && video.currentTime < 19)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 19 && video.currentTime < 20)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 20)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 4) || ((testOrder[testVideoNumber] == 4) && (test==true)))
		{
			/*if (time < 20) 
			{
				score = 0;
			}*/
			if (video.currentTime >= 20 && video.currentTime < 21)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 21 && video.currentTime < 22)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 22 && video.currentTime < 23)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 23 && video.currentTime < 24)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 24 && video.currentTime < 25)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 25)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 5) || ((testOrder[testVideoNumber] == 5) && (test==true)))
		{
			/*if (time < 13) 
			{
				score = 0;
			}*/
			if (video.currentTime >= 13 && video.currentTime < 14)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 14 && video.currentTime < 15)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 15 && video.currentTime < 16)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 16 && video.currentTime < 17)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 17 && video.currentTime < 18)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 18)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 6) || ((testOrder[testVideoNumber] == 6) && (test==true)))
		{
			/*if (time < 26) 
			{
				score = 0;
			}*/
			if (video.currentTime >= 26 && video.currentTime < 27)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 27 && video.currentTime < 28)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 28 && video.currentTime < 29)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 29 && video.currentTime < 30)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 30 && video.currentTime < 31)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 31)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 7) || ((testOrder[testVideoNumber] == 7) && (test==true)))
		{
			/*if (time < 21) 
			{
				score = 0;
			}*/
			if (video.currentTime >= 21 && video.currentTime < 22)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 22 && video.currentTime < 23)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 23 && video.currentTime < 24)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 24 && video.currentTime < 25)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 25 && video.currentTime < 26)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 26)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 8) || ((testOrder[testVideoNumber] == 8) && (test==true)))
		{
			/*if (time < 10) 
			{
				score = 0;
			}*/
			if (video.currentTime >= 10 && video.currentTime < 11)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 11 && video.currentTime < 12)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4;
					testClicked = true;
				}
			}
			else if (video.currentTime >= 12 && video.currentTime < 13)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 13 && video.currentTime < 14)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 14 && video.currentTime < 15)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 15)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 9) || ((testOrder[testVideoNumber] == 9) && (test==true)))
		{
			/*if (time < 51) 
			{
				score = 0;
			}*/
			if (video.currentTime >= 51 && video.currentTime < 52)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 52 && video.currentTime < 53)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 53 && video.currentTime < 54)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 54 && video.currentTime < 55)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 55 && video.currentTime < 56)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 56)
			{
				score = 0;
			}*/
		}
		
		if((videoVal == 10) || ((testOrder[testVideoNumber] == 10) && (test==true)))
		{
			/*if (time < 9) 
			{
				score = 0;
			}*/
			if (video.currentTime >= 9 && video.currentTime < 10)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 10 && video.currentTime < 11)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 11 && video.currentTime < 12)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 12 && video.currentTime < 13)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 13 && video.currentTime < 14)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
			/*else if (time > 14)
			{
				score = 0;
			}*/
		}	
		
		if((videoVal == 11) || ((testOrder[testVideoNumber] == 11) && (test==true)))
		{
			if (video.currentTime >= 33 && video.currentTime < 35)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 35 && video.currentTime < 37)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 37 && video.currentTime < 39)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 39 && video.currentTime < 41)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 41 && video.currentTime < 42)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}	
		
		if((videoVal == 12) || ((testOrder[testVideoNumber] == 12) && (test==true)))
		{
			if (video.currentTime >= 42 && video.currentTime < 44)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 44 && video.currentTime < 46)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 46 && video.currentTime < 48)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 48 && video.currentTime < 50)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 50 && video.currentTime < 52)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}	
		
		if((videoVal == 13) || ((testOrder[testVideoNumber] == 13) && (test==true)))
		{
			if (video.currentTime >= 18 && video.currentTime < 21)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 21 && video.currentTime < 23)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 23 && video.currentTime < 25)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 25 && video.currentTime < 27)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 27 && video.currentTime < 29)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}	
		
		if((videoVal == 14) || ((testOrder[testVideoNumber] == 14) && (test==true)))
		{
			if (video.currentTime >= 21 && video.currentTime < 23)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 23 && video.currentTime < 25)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 25 && video.currentTime < 27)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 27 && video.currentTime < 29)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 29 && video.currentTime < 31)
			{
				score = 1;
				testClicked = true;
			}
		}	
		
		if((videoVal == 15) || ((testOrder[testVideoNumber] == 15) && (test==true)))
		{
			if (video.currentTime >= 27 && video.currentTime < 29)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 29 && video.currentTime < 30)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 30 && video.currentTime < 31)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 31 && video.currentTime < 32)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 32 && video.currentTime < 33)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}	
		
		if((videoVal == 16) || ((testOrder[testVideoNumber] == 16) && (test==true)))
		{
			if (video.currentTime >= 13 && video.currentTime < 15)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 15 && video.currentTime < 17)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 17 && video.currentTime < 19)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 19 && video.currentTime < 21)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 21 && video.currentTime < 22)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}	
		
		if((videoVal == 17) || ((testOrder[testVideoNumber] == 17) && (test==true)))
		{
			if (video.currentTime >= 18.33 && video.currentTime < 19.33)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 19.33 && video.currentTime < 20.33)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 20.33 && video.currentTime < 21.33)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 21.33 && video.currentTime < 22.33)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 22.33 && video.currentTime < 23.33)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}	
		
		if((videoVal == 18) || ((testOrder[testVideoNumber] == 18) && (test==true)))
		{
			if (video.currentTime >= 32.1 && video.currentTime < 33)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 33 && video.currentTime < 33.34)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 33.34 && video.currentTime < 34.26)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 34.26 && video.currentTime < 35.17)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 35.17 && video.currentTime < 36.83)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		
		if((videoVal == 19) || ((testOrder[testVideoNumber] == 19) && (test==true)))
		{
			if (video.currentTime >= 28.21 && video.currentTime < 29.12)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 29.12 && video.currentTime < 30.03)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 30.03 && video.currentTime < 30.37)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 30.37 && video.currentTime < 31.29)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 31.29 && video.currentTime < 32.20)
			{
				score = 1;
				testClicked = true;
			}
		}
		
		if((videoVal == 20) || ((testOrder[testVideoNumber] == 20) && (test==true)))
		{
			if (video.currentTime >= 31 && video.currentTime < 31.41)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 31.41 && video.currentTime < 32.41)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 32.41 && video.currentTime < 33.41)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 33.41 && video.currentTime < 34.41)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 34.41 && video.currentTime < 35.41)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		
		if((videoVal == 21) || ((testOrder[testVideoNumber] == 21) && (test==true)))
		{
			if (video.currentTime >= 32.15 && video.currentTime < 33.4)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 33.4 && video.currentTime < 35.23)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 35.23 && video.currentTime < 37.06)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 37.06 && video.currentTime < 38.32)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 38.32 && video.currentTime < 40.13)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		
		if((videoVal == 22) || ((testOrder[testVideoNumber] == 22) && (test==true)))
		{
			if (video.currentTime >= 14.32 && video.currentTime < 16.38)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 16.38 && video.currentTime < 19.04)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 19.04 && video.currentTime < 21.12)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 21.12 && video.currentTime < 23.21)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 23.21 && video.currentTime < 25.28)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		
		if((videoVal == 23) || ((testOrder[testVideoNumber] == 23) && (test==true)))
		{
			if (video.currentTime >= 44.03 && video.currentTime < 45.23)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 44.23 && video.currentTime < 47.01)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 47.01 && video.currentTime < 48.21)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 48.21 && video.currentTime < 49.41)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 50.00 && video.currentTime < 51.2)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		
		if((videoVal == 24) || ((testOrder[testVideoNumber] == 24) && (test==true)))
		{
			if (video.currentTime >= 30.00 && video.currentTime < 31.34)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 31.34 && video.currentTime < 33.34)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 33.34 && video.currentTime < 35.34)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 35.34 && video.currentTime < 37.34)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 37.34 && video.currentTime < 39.34)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		
		if((videoVal == 25) || ((testOrder[testVideoNumber] == 25) && (test==true)))
		{
			if (video.currentTime >= 34 && video.currentTime < 34.34)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 34.34 && video.currentTime < 35.27)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 35.27 && video.currentTime < 36.21)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 36.21 && video.currentTime < 37.14)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 37.14 && video.currentTime < 38.07)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}
		
		if((videoVal == 26) || ((testOrder[testVideoNumber] == 26) && (test==true)))
		{
			if (video.currentTime >= 15.00 && video.currentTime < 16.16)
			{
				score = 5;
				testClicked = true;
			}
			else if (video.currentTime >= 16.16 && video.currentTime < 17.32)
			{
				if(score >=5)
				{
				}
				else
				{
					score = 4
					testClicked = true;
				}
			}
			else if (video.currentTime >= 17.32 && video.currentTime < 19.07)
			{
				if(score >=4)
				{
				}
				else
				{
					score = 3;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 19.07 && video.currentTime < 20.24)
			{
				if(score >=3)
				{
				}
				else
				{
					score = 2;
					testClicked = true;
				}
				testClicked = true;
			}
			else if (video.currentTime >= 20.24 && video.currentTime < 21.34)
			{
				if(score >=2)
				{
				}
				else
				{
					score = 1;
					testClicked = true;
				}
			}
		}		
	}
	
	if(clicks == 0)
	{
		document.getElementById('flag').innerHTML='';
	}
	else if(clicks == 1)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 2)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 3)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 4)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 5)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 6)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 7)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 8)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 9)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 10)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 11)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks == 12)
	{
		document.getElementById('flag').innerHTML='<img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png">';
	}
	else if(clicks > 12)
	{
		document.getElementById('flag').innerHTML='<div style="font-family:Arial; font-size:26px; font-weight:bold;"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"><img src="images/Action-flag-icon.png"> + ' + (clicks-12) + '</div>';
	}
		

}

//-------------------VIDEO BUFFERED----------------------

function cpearce_log(msg) {
	document.getElementById('percentage_buffered').innerHTML = msg + "%";
}

function updateBuffered() {
	var v = document.getElementById('video');
	var r = v.buffered;
	var log = ((v.buffered.end(0)/v.duration)*100 - 1).toFixed(0)
			+ "%" 
	document.getElementById("percentage_buffered").innerHTML = log;
}

function buffered_loaded(event) {
	var v = document.getElementById('video');
	if (!v.buffered) {
		document.getElementById('percentage').style.left = '-1000px';
		cpearce_log('Buffered attribute not supported by your browser. Try viewing this page in the latest <a href="http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-mozilla-central/">firefox nightly</a>.\n');
	} else {
		//cpearce_log("Buffered attribute is supported, click on the black progress bar to seek.");
		window.setInterval(updateBuffered, 1000)
	}
}

//----------------------MOUSE/SLIDER-----------------------

var mouseDown = 0;
var cider = document.getElementById("cider");
cider.onmousedown = function() { 
    mouseDown = 1;
	//document.getElementById("total2").innerHTML = sizeUpdated;
	//document.getElementById("total3").innerHTML = mouseDown;
}
document.body.onmouseup = function() {
    mouseDown = 0;
	//document.getElementById("total2").innerHTML = sizeUpdated;
	//document.getElementById("total3").innerHTML = mouseDown;
}


document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY;
	var w = window.innerWidth;
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	var dongle = document.getElementById("sliderDongle");
	var sliderBarLeft = document.getElementById('sliderBar');
	var documentTest = document.getElementById('total2');
	
	//documentTest.innerHTML = sliderBarLeft.style.left;		
	
	c=navigator.userAgent.search("Chrome");
	s=navigator.userAgent.search("Safari");
    f=navigator.userAgent.search("Firefox");
    m10=navigator.userAgent.search("MSIE 10.0");
    m11=navigator.userAgent.search("MSIE");
    if (c>-1){
		var mouseCalibration = 0;
		//document.getElementById("total4").innerHTML = "chrome";
    }
    else if(f>-1){
		var mouseCalibration = 0; //+70 due to moving the slider bar left
		//document.getElementById("total4").innerHTML = "firefox";
    }else if (m10>-1){
		var mouseCalibration = 0; //+70 due to moving the slider bar left
		//document.getElementById("total4").innerHTML = "IE 9";
    }else if (m11>-1){
		var mouseCalibration = 0; //+70 due to moving the slider bar left
		//document.getElementById("total4").innerHTML = "IE 8";
    }else if (s>-1){
        var mouseCalibration = 0; //+70 due to moving the slider bar left
		//document.getElementById("total4").innerHTML = "saf";
    }else
	{
		var mouseCalibration = 0; //150-??-750-750-375-327
	}
	
	if (mouseDown == 1)
	{
		var barWidth = document.getElementById("sliderBar").width;
		var barLeft = parseInt(document.getElementById("sliderBar").style.left);
		var barRight = parseFloat(barLeft) + barWidth;
		var imageLeft = parseFloat(document.getElementById("sliderDongle").style.left);
		//document.getElementById("total4").innerHTML = barRight;
		
		/*if (mouse.x - mouseCalibration + 8 > barRight)
		{
			document.getElementById("sliderDongle").style.left = barRight - 8 + 'px';
		}
		else if (mouse.x - mouseCalibration < barLeft)
		{
			document.getElementById("sliderDongle").style.left = barLeft + 'px';
		}
		else
		{
			document.getElementById("sliderDongle").style.left = mouse.x - mouseCalibration  + 'px';
		}
		sizeUpdated = false;*/
		
		if (mouse.x > barRight)
		{
			document.getElementById("sliderDongle").style.left = barRight - 8 + 'px';
		}
		else if (mouse.x < barLeft)
		{
			document.getElementById("sliderDongle").style.left = barLeft + 'px';
		}
		else
		{
			document.getElementById("sliderDongle").style.left = mouse.x + 'px';
		}
		sizeUpdated = false;
	}
	
	if (mouseDown != 1)
	{
		document.getElementById("sliderBar").style.left = document.getElementById("sliderBar").style.left;
	}
	
	if (sizeUpdated == false)
	{
		var barLeft = parseInt(document.getElementById("sliderBar").style.left);
		var barWidth = document.getElementById("sliderBar").width;
		var imageLeft = parseFloat(document.getElementById("sliderDongle").style.left);
		var multiplier = (imageLeft - barLeft)/100 + 1;
		if (multiplier < 2)
		{
			multiplier = 2;
		}
		updateElementScale(Math.sqrt(multiplier/2));
	}
	
	
}, false);

$(window).resize(function() {
	var w = window.innerWidth;
	var sliderBarLeft = document.getElementById('sliderBar');
	var dongle = document.getElementById("sliderDongle");
	
	sliderBarLeft.style.left = (w/2) -(sliderBarLeft.width/2) + 'px';
	dongle.style.left = (w/2) -(sliderBarLeft.width/2) + 'px';
	
});

function updateElementScale(multiplier)
{
	multiplierX = multiplier;
	
	//ONCE ONLY - SLIDER BAR CENTRE
	if (oneCallOnly == 0)
	{
		var w = window.innerWidth;
		var sliderBarLeft = document.getElementById('sliderBar');
		var dongle = document.getElementById("sliderDongle");
		
		sliderBarLeft.style.left = (w/2) -(sliderBarLeft.width/2) + 'px';
		dongle.style.left = (w/2) -(sliderBarLeft.width/2) + 'px';
		oneCallOnly = 1;
	}
	//
	
	document.getElementById("containerX").style.left = 100 + (100 * -multiplier*(multiplier/2)) + 'px'	;
	
	//RESULTS BG
	document.getElementById("testscale").width = 480 * multiplier;
	document.getElementById("testscale").height = 360 * multiplier;
	
	//VIDEO	
	document.getElementById("video").width = 480 * multiplier;
	document.getElementById("video").height = 360 * multiplier;
	
	//FULL SCREEN BUTTON
	//document.getElementById('fullScreen').style.top = document.getElementById("video").height - 32 + 'px'; //32 = full screen icon height - cannot call height directly?
	//document.getElementById('fullScreen').style.left = document.getElementById("video").width + 32 + 92 + 'px'; //32 = full screen icon width - cannot call width directly?

	//BACKGROUND
	document.getElementById("canvasBg").width = document.getElementById("video").width + 180;
	document.getElementById("canvasBg").height = document.getElementById("video").height + 50;
	
	//FLAGS
	document.getElementById("flag").style.top = document.getElementById("video").height + 0 + 'px';
	
	//RESULTS
	//document.getElementById("resultsBackground").height = 480 * multiplier;
	//document.getElementById("resultsBackground").width = 360 * multiplier;
		
	document.getElementById("").innerHTML = multiplier;
	//var elementWidth = document.getElementById("testscale").width;
	//document.getElementById("testscale").width = 100 * multiplier;
	//document.getElementById("demo5").innerHTML = multiplier;
}