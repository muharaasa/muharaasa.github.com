function chat_workload(){
    alert(" Welcome Home!... ");
    let nanami = JSON.parse(localStorage.getItem('daftar_nama')); 
   if(nanami===null || nanami == "" || nanami === []) {alert("you have nothing to get arid now, take your time")}
   if(nanami.length === undefined){nanami = JSON.stringify(nanami); alert("well, the only thing stored here is just... \n\n"+nanami+"\n\n I dunno what it's mean... :/"); }
   else{ alert("there are "+nanami.length+" things to accomplished,  \n hope you the bst ^_^"); }
  }
function chat_workloadX(){
    let nanami_1 = JSON.parse(localStorage.getItem('my_agenda')); //index.html /Deichtperspecti 
    let nanami_2 = JSON.parse(localStorage.getItem('my_ins_akan')); //index.htm / Naichtfascha
    let nanami_3 = JSON.parse(localStorage.getItem('val_endity')); //aindex.html /grey Evenote
    let nanami_4= JSON.parse(localStorage.getItem('i_kaata_na')); //aindex.htm / Kosa kata

   alert(" so you have "+nanami_1.todo.length+" from the 1st Archieve to be completed \n\n\n you have finished "+nanami_1.completed.length+" already");
   alert(" and you have "+nanami_2.todo.length+" from the 2nd Archieve to be completed \n\n\n you have finished "+nanami_2.completed.length+" already");
   alert(" also you have "+nanami_3.todo.length+" from the 3rd Archieve to be completed \n\n\n you have finished "+nanami_3.completed.length+" already");
   alert(" and the last, you have "+nanami_4.todo.length+" from the 4th Archieve to be completed \n\n\n you have finished "+nanami_4.completed.length+" already");





   if(nanami===null || nanami == "") {alert("you have nothing to get arid now, take your time")}
  if(nanami === []){alert(" see what in there "+nanami);}
   if(nanami === undefined){nanami = JSON.stringify(nanami); alert("well, the only thing stored here is just... \n\n"+nanami+"\n\n I dunno what it's mean... :/"); }

   else{ alert("there are "+nanami.length+" things to accomplished,  \n hope you the bst ^_^"); }
  }

