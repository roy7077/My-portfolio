var navmenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navmenuAnchorTags.length-1;i++)
{
    navmenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection);



           interval=setInterval(function(){
            scrollVertically(targetSection);
        },20);
    });
}


function scrollVertically(targetSection)
{
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0)
    {
        clearInterval(interval);
        return ;
    }
    window.scrollBy(0,50);
}
