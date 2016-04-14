var headers = '';

var padding = $(window).height()/4;

var index = 0;

var next = function()
{
    if(index >= (headers.length-1))
    {
        index = 0
    }
    var header = headers[index];

    $('html,body').animate({scrollTop: (header.offsetTop - 8)},'slow');

    index++;
};
var scrollToNextHeader = function()
{
    setInterval(function()
    {
        next();
    }, 7000);

};

var initHeaders = function()
{
    headers = $('.jumbotron');

    headers.splice(0, 0, $('img')[0]);

    scrollToNextHeader();
};