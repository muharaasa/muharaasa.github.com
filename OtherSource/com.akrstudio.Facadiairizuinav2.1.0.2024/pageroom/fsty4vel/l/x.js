new TypingText(document.getElementById("message"), 100, function(i){ var ar

= new Array("0", "1", "00" ,"1","..."); return " " + ar[i.length % ar.length]; });

//Type out examples:
TypingText.runAll();
