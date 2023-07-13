

function Showmessage(message,width,height)
{
    var frame_div = document.getElementById("frame_");
    var frame_dim = document.getElementById("frame_dim");

    frame_div.style.display ='table';
    frame_div.style.width = width;
    frame_div.style.height = height;
    frame_dim.style.display ='block';
}
