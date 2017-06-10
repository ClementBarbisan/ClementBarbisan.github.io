function openFrame(obj, string)
{
    obj.src = string + "html";
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}