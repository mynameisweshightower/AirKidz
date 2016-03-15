window.onload = function()
{
	var slideshowTimer = setInterval(slideIt, 2000);
}

var slideLeft = 0;

function slideIt()
{
	if (slideLeft == 0)
	{
		slideLeft++;
		$(".slides").css('left', '-100%');
	}
	else if (slideLeft == 1)
	{
		slideLeft++;
		$(".slides").css('left', '-200%');
	}
	else if (slideLeft == 2)
	{
		slideLeft = 0;
		$(".slides").css('left', '0%');
	}
}