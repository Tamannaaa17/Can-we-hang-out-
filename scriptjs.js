function yesButtonClicked() {
  var content =
    "<img src=https://media.tenor.com/v9w5MP3vJBsAAAAi/%E9%96%8B%E5%BF%83%E8%B7%B3%E8%88%9E-%E8%B7%B3%E8%88%9E.gif><p style='font-size: 30px; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif';>Okayyy Yaaaayyyy!!! </p>";
  document.getElementById("container").innerHTML = content;
}

var index = 0;
const noButtonText=['Are you Sure?', 'Really sure?', 'Pleaseee', 'Just think about it', 'If you say no, i`ll be very sad','I`ll be very very sad','Okieee finee i`ll stop asking......','Just kidding, PLEASE SAY YES!','I`ll bring you pasta', 'I`m sorryyy, pleaseeee??:('];

function noButtonClicked(){
    document.getElementById("nobutton").innerHTML = noButtonText[index];
    index++;
    if (index>noButtonText.length){
        document.getElementById('nobutton').style.visibility = 'hidden';
    }

    //changing the size of yes button
    var height = document.getElementById('yesbutton').clientHeight;
    var width = document.getElementById('yesbutton').clientWidth;
    var font = parseFloat(window.getComputedStyle(document.getElementById('yesbutton')).fontSize);
    document.getElementById('yesbutton').style.height = height+10+'px';
    document.getElementById('yesbutton').style.width = width+10+'px';
    document.getElementById('yesbutton').style.fontSize = font+4+'px';
}