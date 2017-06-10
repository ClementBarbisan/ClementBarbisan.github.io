function openFrame(obj, string)
{
    console.log("click");
    obj.src = string + ".html";
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}