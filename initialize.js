function openFrame(container, string)
{
    console.log("click");
    var obj = document.getElementById(string);
    obj.src = string + ".html";
    setTimeout(function()
    {
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
        obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
        container.style.height = obj.style.height;
        container.style.width = obj.style.width;
    }, 500);
}