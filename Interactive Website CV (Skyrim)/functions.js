function displayInfo(name)
{
    var parent = document.getElementById(name);
    parent.style.display="block";
    document.getElementById('player').style.display = "none";
    document.getElementById('Alduin').style.display = "none";
    var children = parent.children;
    for(i=0;i<children.length;i++)
    {
    	if(children[i].className == "detailContent")
    	{
    		if (children[i].offsetHeight < children[i].scrollHeight)
    		{
    			for(j=0;j<children.length;j++)
    			{
    				if(children[j].className == "detailScroller")
    				{
    					children[j].style.display="block";
    				}
    			}
    		}
    	}
    }
}
function hideInfo(name)
{
    document.getElementById(name).removeAttribute("style");
    document.getElementById('player').style.display = "block";
    document.getElementById('Alduin').style.display = "block";
    document.getElementById('Alduin').style.top = "";
}
function lunch()
{
    window.alert("Alduin got you!");
}
function startGame(){
	document.getElementsByClassName('printer')[0].style.display="block";
    document.getElementById('howToBG').style.display ="none";
    init();
};

function init() {
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;
	document.click = getCursorXY;
}

function getCursorXY(e) {
	if($(window).innerWidth() >= 500)
	{
	    var player = document.getElementById('playerMover');
	    var halfheight = ($('#playerMover').height())/2;
	    var halfwidth = ($('#playerMover').width()) / 2;
	    var mouseX = ((window.Event) ? e.pageX : event.clientX);
		var mouseY = ((window.Event) ? e.pageY : event.clientY);
		var PlayerX = $('#playerMover').position().left + halfwidth;
		var PlayerY = $('#playerMover').position().top + halfheight;
		var deltaY = mouseY - PlayerY;
		var deltaX = mouseX - PlayerX;
		var radians = Math.atan2(deltaX,deltaY);
	    var degree = (radians * (180 / Math.PI) * -1) + 90;
	    document.getElementById('playerRotator').style.transform = "rotate(" + degree + "deg)";
		player.style.left = (((window.Event) ? e.pageX : event.clientX) - halfwidth) +'px';
		player.style.top = (((window.Event) ? e.pageY : event.clientY) - halfheight) +'px';
		var Alduin = document.getElementById('AlduinMover');
	    var halfheight = ($('#AlduinMover').height())/2;
	    var halfwidth = ($('#AlduinMover').width()) / 2;
	    var AlduinX = $('#AlduinMover').position().left + halfwidth;
	    var AlduinY = $('#AlduinMover').position().top + halfheight;
	    var deltaY = mouseY - AlduinY;
	    var deltaX = mouseX - AlduinX;
	    var radians = Math.atan2(deltaX,deltaY);
	    var degree = (radians * (180 / Math.PI) * -1) + 90;
	    document.getElementById('AlduinRotator').style.transform = "rotate(" + degree + "deg)";
	    Alduin.style.left = (((window.Event) ? e.pageX : event.clientX) - halfwidth) +'px';
	    Alduin.style.top = (((window.Event) ? e.pageY : event.clientY) - halfheight) +'px';
	}
};

function flashReturnToSkyrim(){
	var element = document.getElementsByClassName('returnToSkyrim');
	for(i=0;i<element.length;i++)
	{
		if(element[i].style.backgroundColor == "blue")
		{
			element[i].style.backgroundColor = "";
		}
		else
		{
			element[i].style.backgroundColor = "blue"
		}
	}
}

function snackbar(detail,timeout){
	var container = document.getElementById('snackbarContainer');
	var snackbar = document.getElementById('snackbar');
	if(container.style.display == "none")
	{
		container.style.display = "block";
		setTimeout(function(){container.style.display = "none";},timeout);
	}
	else
	{
		container.style.display = "none";
	}
	snackbar.innerText = detail;
}
