var oldValue = null;
var oldHeight = 0;
var oldWidth = 0;

window.onload = function() {
    document.getElementById("keyStrikeEvent").addEventListener("mouseup", openFrame("keyStrikeEvent", "keyStrike"));
};

function openFrame(container, string)
{
    if (oldValue !== null) {
        document.getElementById(string).src = oldValue+"Preview.html";
        document.getElementById(string).style.height = oldHeight;
        document.getElementById(string).style.width = oldWidth;
    }
    oldValue = string;
    var obj = document.getElementById(string);
    console.log("click");
    obj.src = string + ".html";
    setTimeout(function()
    {
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
        obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
        document.getElementById(container).style.height = obj.style.height;
        document.getElementById(container).style.width = obj.style.width;
    }, 1000);
}

// function openIFrame(obj, string)
// {
//     if (oldValue !== null)
//         document.getElementById(oldValue).style.display = 'block';
//     oldValue = string + "Preview";
//     document.getElementById(oldValue).style.display = 'none';
//     obj.src = string + ".html";
//     setTimeout(function()
//     {
//         obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
//         obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
//         obj.parent.style.height = obj.style.height;
//         obj.parent.style.width = obj.style.width;
//     }, 1000);
// }