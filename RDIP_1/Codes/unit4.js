// DropDown function
var reforms;
var length=0;
var count=0;
var x;
var selectedSentence;
var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10;
var h1,h2,h3,h4,h5,h6,h7;
var all_hin=[];
var all_eng=[];
var arr;
var arra;
var arrs;
var array;
var anslist = "";
var c1=['A‌ ‌mouse‌ ‌was‌ ‌having‌ ‌a‌ ‌very‌ ‌bad‌ ‌time.‌ ‌She‌ ‌could‌ ‌find‌ ‌no‌ ‌food‌ ‌at‌ ‌all.‌ ‌She‌ ‌looked‌ ‌here‌ ‌and‌ ‌there,‌ ‌but‌ ‌there‌ ‌was‌ ‌no‌ ‌food,‌ ‌and‌ ‌she‌ ‌grew‌ ‌very‌ ‌thin.‌ ‌At‌ ‌last‌ ‌the‌ ‌mouse‌ ‌found‌ ‌a‌ ‌basket,‌ ‌full‌ ‌of‌ ‌corn.‌ ‌There‌ ‌was‌ ‌a‌ ‌small‌ ‌hole‌ ‌in‌ ‌the‌ ‌basket,‌ ‌and‌ ‌she‌ ‌crept‌ ‌in.‌ ‌She‌ ‌could‌ ‌just‌ ‌get‌ ‌through‌ ‌the‌ ‌hole.‌ ‌Then‌ ‌she‌ ‌began‌ ‌to‌ ‌eat‌ ‌the‌ ‌corn.‌ ‌Being‌ ‌very‌ ‌hungry,‌ ‌she‌ ‌ate‌ ‌a‌ ‌great‌ ‌deal,‌ ‌and‌ ‌went‌ ‌on‌ ‌eating‌ ‌and‌ ‌eating.‌ ‌She‌ ‌had‌ ‌grown‌ ‌very‌ ‌fat‌ ‌before‌ ‌she‌ ‌felt‌ ‌that‌ ‌she‌ ‌had‌ ‌had‌ ‌enough.‌ ‌When‌ ‌the‌ ‌mouse‌ ‌tried‌ ‌to‌ ‌climb‌ ‌out‌ ‌of‌ ‌the‌ ‌basket,‌ ‌she‌ ‌could‌ ‌not.‌ ‌She‌ ‌was‌ ‌too‌ ‌fat‌ ‌to‌ ‌pass‌ ‌through‌ ‌the‌ ‌hole.‌ ‌"How‌ ‌shall‌ ‌I‌ ‌climb‌ ‌out?"‌ ‌said‌ ‌the‌ ‌mouse.‌ ‌"oh,‌ ‌how‌ ‌shall‌ ‌I‌ ‌climb‌ ‌out?"‌ ‌Just‌ ‌then‌ ‌a‌ ‌rat‌ ‌came‌ ‌along,‌ ‌and‌ ‌he‌ ‌heard‌ ‌the‌ ‌mouse.‌ ‌"Mouse,"‌ ‌said‌ ‌the‌ ‌rat,‌ ‌"if‌ ‌you‌ ‌want‌ ‌to‌ ‌climb‌ ‌out‌ ‌of‌ ‌the‌ ‌basket,‌ ‌you‌ ‌must‌ ‌wait‌ ‌till‌ ‌you‌ ‌have‌ ‌grown‌ ‌as‌ ‌thin‌ ‌as‌ ‌you‌ ‌were‌ ‌when‌ ‌you‌ ‌went‌ ‌in.‌'];
var c2=['A‌ ‌wolf‌ ‌carried‌ ‌off‌ ‌a‌ ‌lamb.‌ ‌The‌ ‌lamb‌ ‌said,‌ ‌"‌ ‌I‌ ‌know‌ ‌you‌ ‌are‌ ‌going‌ ‌to‌ ‌eat‌ ‌me,‌ ‌but‌ ‌before‌ ‌you‌ ‌eat‌ ‌me‌ ‌I‌ ‌would‌ ‌like‌ ‌to‌ ‌hear‌ ‌you‌ ‌play‌ ‌the‌ ‌flute.‌ ‌I‌ ‌have‌ ‌heard‌ ‌that‌ ‌you‌ ‌can‌ ‌play‌ ‌the‌ ‌flute‌ ‌better‌ ‌than‌ ‌anyone‌ ‌else,‌ ‌even‌ ‌the‌ ‌shepherd‌ ‌himself."‌ ‌The‌ ‌wolf‌ ‌was‌ ‌so‌ ‌pleased‌ ‌at‌ ‌this‌ ‌that‌ ‌he‌ ‌took‌ ‌out‌ ‌his‌ ‌flute‌ ‌and‌ ‌began‌ ‌to‌ ‌play.‌ ‌When‌ ‌he‌ ‌had‌ ‌done,‌ ‌the‌ ‌lamb‌ ‌insisted‌ ‌him‌ ‌to‌ ‌play‌ ‌once‌ ‌more‌ ‌and‌ ‌the‌ ‌wolf‌ ‌played‌ ‌again.‌ ‌The‌ ‌shepherd‌ ‌and‌ ‌the‌ ‌dogs‌ ‌heard‌ ‌the‌ ‌sound,‌ ‌and‌ ‌they‌ ‌came‌ ‌running‌ ‌up‌ ‌and‌ ‌fell‌ ‌on‌ ‌the‌ ‌wolf‌ ‌and‌ ‌the‌ ‌lamb‌ ‌was‌ ‌able‌ ‌to‌ ‌get‌ ‌back‌ ‌to‌ ‌the‌ ‌flock.‌'];
var c3=['A‌ ‌man‌ ‌had‌ ‌a‌ ‌little‌ ‌dog,‌ ‌and‌ ‌he‌ ‌was‌ ‌very‌ ‌fond‌ ‌of‌ ‌it.‌ ‌He‌ ‌would‌ ‌pat‌ ‌its‌ ‌head,‌ ‌and‌ ‌take‌ ‌it‌ ‌on‌ ‌his‌ ‌knee,‌ ‌and‌ ‌talk‌ ‌to‌ ‌it.‌ ‌Then‌ ‌he‌ ‌would‌ ‌give‌ ‌it‌ ‌little‌ ‌bits‌ ‌of‌ ‌food‌ ‌from‌ ‌his‌ ‌own‌ ‌plate.‌ ‌A‌ ‌donkey‌ ‌looked‌ ‌in‌ ‌at‌ ‌the‌ ‌window‌ ‌and‌ ‌saw‌ ‌the‌ ‌man‌ ‌and‌ ‌the‌ ‌dog.‌ ‌"Why‌ ‌does‌ ‌he‌ ‌not‌ ‌make‌ ‌a‌ ‌pet‌ ‌of‌ ‌me?"‌ ‌said‌ ‌the‌ ‌donkey.‌ ‌"It‌ ‌is‌ ‌not‌ ‌fair.‌ ‌I‌ ‌work‌ ‌hard,‌ ‌and‌ ‌the‌ ‌dog‌ ‌only‌ ‌wags‌ ‌its‌ ‌tail,‌ ‌and‌ ‌barks,‌ ‌and‌ ‌jumps‌ ‌on‌ ‌its‌ ‌masters‌ ‌knee.‌ ‌It‌ is ‌not‌ ‌fair."‌ ‌Then‌ ‌the‌ ‌donkey‌ ‌said‌ ‌to‌ ‌himself,‌ ‌"If‌ ‌I‌ ‌do‌ ‌what‌ ‌the‌ ‌dog‌ ‌does,‌ ‌he‌ ‌may‌ ‌make‌ ‌a‌ ‌pet‌ ‌of‌ ‌me."‌ ‌So‌ ‌the‌ ‌donkey‌ ‌ran‌ ‌into‌ ‌the‌ ‌room.‌ ‌It‌ ‌brayed‌ ‌as‌ ‌loudly‌ ‌as‌ ‌it‌ ‌could.‌ ‌It‌ ‌wagged‌ ‌its‌ ‌tail‌ ‌so‌ ‌hard‌ ‌that‌ ‌it‌ ‌knocked‌ ‌over‌ ‌a‌ ‌jar‌ ‌on‌ ‌the‌ ‌table.‌ ‌Then‌ ‌it‌ ‌tried‌ ‌to‌ ‌jump‌ ‌on‌ ‌to‌ ‌its‌ ‌masters‌ ‌knee.‌ ‌The‌ ‌master‌ ‌thought‌ ‌the‌ ‌donkey‌ ‌was‌ ‌mad,‌ ‌and‌ ‌he‌ ‌shouted,‌ ‌"Help!‌ ‌Help!"‌ ‌Men‌ ‌came‌ ‌running‌ ‌in‌ ‌with‌ ‌sticks,‌ ‌and‌ ‌they‌ ‌beat‌ ‌the‌ ‌donkey‌ ‌till‌ ‌it‌ ‌ran‌ ‌out‌ ‌of‌ ‌the‌ ‌house,‌ ‌and‌ ‌they‌ ‌drove‌ ‌it‌ ‌back‌ ‌to‌ ‌the‌ ‌field.‌ ‌"I‌ ‌only‌ ‌did‌ ‌what‌ ‌the‌ ‌dog‌ ‌does,"‌ ‌said‌ ‌the‌ ‌donkey,"‌ ‌and‌ ‌yet‌ ‌they‌ ‌make‌ ‌a‌ ‌pet‌ ‌of‌ ‌the‌ ‌dog,‌ ‌and‌ ‌they‌ ‌beat‌ ‌me‌ ‌with‌ ‌sticks.‌ ‌It‌ ‌is‌ ‌not‌ ‌fair.‌'];
function select() {
   x=document.getElementById('select').value;
  if(x=="Corpus_1")
  {
    document.getElementById("Long").innerHTML=c1;
    document.getElementById("subline").innerHTML="Enter the number of tokens and types for the above corpus:";
    document.getElementById("sen").innerHTML="<table id ='tab'><tr><td>#tokens:</td><td><input id='in' type='text'  value=''></td></tr><tr><td>#types:</td><td><input type='text'  value=''></td></tr></table>";
     document.getElementById("but").innerHTML="<button onclick='validate();'>submit</button>";

  }
  else if(x=="Corpus_2"){
    document.getElementById("Long").innerHTML=c2;
    document.getElementById("subline").innerHTML="Enter the number of tokens and types for the above corpus:";
  document.getElementById("but").innerHTML="<button onclick='validate();'>submit</button>";
    document.getElementById("sen").innerHTML="<table id ='tab'><tr><td>#tokens:</td><td><input id='in' type='text'  value=''></td></tr><tr><td>#types:</td><td><input type='text'  value=''></td></tr></table>";
  }
  else if(x=="Corpus_3"){
    document.getElementById("Long").innerHTML=c3;
    document.getElementById("subline").innerHTML="Enter the number of tokens and types for the above corpus:";
    document.getElementById("sen").innerHTML="<table id ='tab'><tr><td>#tokens:</td><td><input type='text' id='in' type='text'  value=''></td></tr><tr><td>#types:</td><td><input type='text'  value=''></td></tr></table>";
    document.getElementById("but").innerHTML="<button onclick='validate();'>submit</button>";
  }
else{
  document.getElementById("Long").innerHTML="";
  document.getElementById("subline").innerHTML="";
  document.getElementById("sen").innerHTML="";
  document.getElementById("but").innerHTML="";
  alert("Please Select a Corpus From The DropDown");
}
}

// function ran()
// {
//   var x=document.getElementById('select').value;
//   if(x=="Corpus_1")
//   {
//
// }
//          if(x=="Hindi")
//         {
//               h1 = ['राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
//                         'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
//                         'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
//                         'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌'];
//               h2 = ['राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
//                         'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
//                         'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
//                         'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌'];
//               h3 = ['मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
//                         'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
//                         'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
//                         'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
//                         'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
//                         'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
//                         'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
//                         'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
//                         'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
//                         'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
//                         'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
//                         'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌'];
//               h4 = ['राम‌ ‌खाकर‌ ‌सोया‌',
//                         'खाकर‌ ‌राम‌ ‌सोया‌',
//                         'राम‌ ‌सोया‌ ‌खाकर‌',
//                         'खाकर‌ ‌सोया‌ ‌राम‌',
//                         'सोया‌ ‌राम‌ ‌खाकर‌',
//                         'सोया‌ ‌खाकर‌ ‌राम‌'];
//               h5 = ['बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
//                         'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
//                         'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
//                         'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
//                         'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
//                         'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
//                         'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
//                         'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌'];
//                h6 = ['एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
//                         'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
//                         'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
//                         'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब'];
//               h7 = ['एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
//                         'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
//                         'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
//                         '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
//                         'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
//                         'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
//                         '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
//                         'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'];
//             all_hin=[h1,h2,h3,h4,h5,h6,h7];
//             arrs  =all_hin[Math.floor(Math.random() * all_hin.length)];
//             array =arrs[Math.floor(Math.random() * arrs.length)];
//           var b2=array.split(" ");
//           for(i=0;i<b2.length;i++)
//             {
//             j = Math.floor(Math.random()*b2.length)
//             array = b2[i];
//             b2[i] = b2[j]
//             b2[j] = array;
//          }
//         document.getElementById("sen").innerHTML=" "
//         count=0;
//         length=b2.length;
//          for(i=0;i<b2.length;i++)
//            {
//              document.getElementById("sen").innerHTML += "<button class='buttons' id='buttons" +i+"' value='"+b2[i]+"' onclick='Display(this.id,this.value);'>"+b2[i]+"</button>";
//              // document.getElementById("sen").innerHTML += "<button id='buttons'>"+b2[i]+"</button>";
//              document.getElementById("msg").innerHTML="";
//              document.getElementById("selected").innerHTML ="";
//              document.getElementById("reform").innerHTML = "";
//              document.getElementById("checkcorrectness").innerHTML="";
//              document.getElementById("correct").innerHTML="";
//              document.getElementById("wrong").innerHTML="";
//              document.getElementById("showAnswer").innerHTML=""
//         }
//         reforms=document.getElementById("sen").innerHTML ;
//       }
//     }
//     function Display(bid,bvalue)
//         {
//
//             document.getElementById("msg").innerHTML="Formed Sentence <span>(after selecting words):</span>";
//             document.getElementById("selected").innerHTML +=" "+bvalue;
//             document.getElementById(bid).style.display="none";
//             document.getElementById("reform").innerHTML = "<button class='reform' id='reform' onclick='reform()'> Re-form the sentence</button>";
//           count++;
//             if(length==count && length>0)
//             {
//                 document.getElementById("checkcorrectness").innerHTML="<button id='check' onclick='check()'>Check Correctness of the Sentence</button>";
//                 selectedSentence = document.getElementById("selected").innerHTML;
//
//             }
//             else{
//                 document.getElementById("checkcorrectness").innerHTML="";
//             }
//
//         }
//         function reform()
//         {
//
//             document.getElementById("sen").innerHTML = reforms;
//             document.getElementById("msg").innerHTML="";
//             document.getElementById("selected").innerHTML ="";
//             document.getElementById("reform").innerHTML = "";
//             count=0;
//             document.getElementById("checkcorrectness").innerHTML="";
//             document.getElementById("correct").innerHTML="";
//             document.getElementById("wrong").innerHTML="";
//             document.getElementById("showAnswer").innerHTML=""
//
//
//         }
//         function check()
//         {
//             var ans= selectedSentence.trim();
//             if(x=='English')
//             {
//                 if (arr.includes(ans))
//                 {
//                 document.getElementById("correct").innerHTML="Correct Answer!!!";
//                 document.getElementById("wrong").innerHTML="";
//                 document.getElementById("showAnswer").innerHTML=""
//
//                 }
//                 else{
//                     document.getElementById("wrong").innerHTML="Wrong Answer !!!";
//                     document.getElementById("correct").innerHTML="";
//                     document.getElementById("showAnswer").innerHTML="<button id='crt' onclick='chk(this.id)'>Get Correct Answer</button>"
//                 }
//             }
//
//             else{
//               if (arrs.includes(ans))
//               {
//               document.getElementById("correct").innerHTML="Correct Answer!!!";
//               document.getElementById("wrong").innerHTML="";
//               document.getElementById("showAnswer").innerHTML=""
//
//               }
//               else{
//                   document.getElementById("wrong").innerHTML="Wrong Answer !!!";
//                   document.getElementById("correct").innerHTML="";
//                   document.getElementById("showAnswer").innerHTML="<button id='crt' onclick='chk(this.id)'>Get Correct Answer</button>"
//               }
//
//             }
//           }
//           function chk()
//           {
//             var i=0;
//             document.getElementById("showAnswer").innerHTML="<button id='hide' onclick='toggle()'>Hide the Correct Sentences</button>";
//             anslist = "";
//             if(x=="English")
//             {
//               for(i=0;i<arr.length;i++)
//               {
//                   document.getElementById("showAnswer").innerHTML+="<p>"+arr[i]+"</p><br>";
//                   anslist+="<p>"+arr[i]+"</p><br>";
//               }
//             }
//             if(x=="Hindi")
//             {
//               for(i=0;i<arrs.length;i++)
//               {
//                   document.getElementById("showAnswer").innerHTML+="<p>"+arrs[i]+"</p><br>";
//                   anslist+="<p>"+arrs[i]+"</p><br>";
//               }
//             }
//           }
//           function toggle()
//           {
//               if(document.getElementById("hide").innerHTML=='Hide the Correct Sentences')
//               {
//                   document.getElementById("showAnswer").innerHTML="";
//                   document.getElementById("showAnswer").innerHTML="<button id='hide' onclick='toggle()'>Get Answers</button>";
//                  // document.getElementById("hide").innerHTML="Get Answers"
//               }
//               else
//               {
//                   document.getElementById("showAnswer").innerHTML+=anslist;
//                   document.getElementById("hide").innerHTML="Hide the Correct Sentences";
//               }
//           }
