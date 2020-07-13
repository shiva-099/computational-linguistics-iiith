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
function select() {
   x=document.getElementById('select').value;
  if(x=="English"||x=="Hindi")
  {
    document.getElementById("Long").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
    document.getElementById("subline").innerHTML="(select the buttons in correct order)";
    document.getElementById("Long").style.color="Green";

            document.getElementById("subline").style.color="blue";
  }
else{
  document.getElementById("Long").innerHTML="";
  document.getElementById("subline").innerHTML="";
  document.getElementById("sen").innerHTML="";
  alert("Please Select a Language From The DropDown");
}
}
function ran()
{
  var x=document.getElementById('select').value;
  if(x=="English")
  {


              e1 = ['John ate an apple before afternoon',
                            'before afternoon John ate an apple',
                            'John before afternoon ate an apple'
                            ];
              e2 = ['some students like to study in the night',
                            'at night some students like to study'
                           ];
              e3 = ['John and Mary went to church',
                            'Mary and John went to church'];
              e4 = ['John went to church after eating',
                            'after eating John went to church',
                            'John after eating went to church'];
              e5 = ['did he go to market',
                            'he did go to market'];
              e6 = ['the womean who called my sister sells cosmetics',
                            'the woman who sells cosmetics called my sister',
                            'my sister who sells cosmetics called the woman',
                            'my sister who called the woman sells cosmetics'];
              e7 = ['John goes to the library and studies',
                            'John studies and goes to the library'];
              e8 = ['John ate an apple so did she',
                            'she ate an apple so did John'];
             e9 = ['the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌',
                            'she‌ ‌returned‌ ‌the‌ ‌book‌ ‌after‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌ ',
                            'she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌after‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌',
                            'after‌ ‌she‌ ‌returned‌ ‌the‌ ‌book‌ ‌the‌ ‌teacher‌ ‌noticed‌ ‌the‌ ‌error‌',
                            'after‌ ‌she‌ ‌noticed‌ ‌the‌ ‌error‌ ‌the‌ ‌teacher‌ ‌returned‌ ‌the‌ ‌book‌'];
             e10 = ['I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌',
                             'I‌ ‌told‌ ‌her‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'yesterday‌ ‌I‌ ‌told‌ ‌her‌ ‌that‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌ ‌yesterday‌',
                             'I‌ ‌bought‌ ‌a‌ ‌book‌ ‌yesterday‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌',
                             'yesterday‌ ‌I‌ ‌bought‌ ‌a‌ ‌book‌ ‌that‌ ‌I‌ ‌told‌ ‌her‌'];
           var all_eng=[e1,e2,e3,e4,e5,e6,e7,e8,e9,e10];

        arr  =all_eng[Math.floor(Math.random() * all_eng.length)];
        arra =arr[Math.floor(Math.random() * arr.length)];
      var bb=arra.split(" ");
      for(i=0;i<bb.length;i++)
        {
        j = Math.floor(Math.random()*bb.length)
        arra = bb[i];
        bb[i] = bb[j]
        bb[j] = arra;
     }
  document.getElementById("sen").innerHTML=" "
  count=0;
  length=bb.length;
     for(i=0;i<bb.length;i++)
       {
          document.getElementById("sen").innerHTML += "<button class='buttons' id='buttons" +i+"' value='"+bb[i]+"' onclick='Display(this.id,this.value);'>"+bb[i]+"</button>";
          document.getElementById("msg").innerHTML="";
          document.getElementById("selected").innerHTML ="";
          document.getElementById("reform").innerHTML = "";
           document.getElementById("checkcorrectness").innerHTML="";
           document.getElementById("correct").innerHTML="";
           document.getElementById("wrong").innerHTML="";
           document.getElementById("showAnswer").innerHTML=""
    }
    reforms=document.getElementById("sen").innerHTML ;
}
         if(x=="Hindi")
        {
              h1 = ['राम‌ ‌और‌ ‌श्याम‌ ‌बाजार‌ ‌गयें‌',
                        'राम‌ ‌और‌ ‌श्याम‌ ‌गयें‌ ‌बाजार‌',
                        'बाजार‌ ‌गयें‌ ‌राम‌ ‌और‌ ‌श्याम‌',
                        'गयें‌ ‌बाजार‌ ‌राम‌ ‌और‌ ‌श्याम‌'];
              h2 = ['राम‌ ‌सोया‌ ‌और‌ ‌श्याम‌ ‌भी‌',
                        'श्याम‌ ‌सोया‌ ‌और‌ ‌राम‌ ‌भी‌',
                        'सोया‌ ‌श्याम‌ ‌और‌ ‌राम‌ ‌भी‌',
                        'सोया‌ ‌राम‌ ‌और‌ ‌श्याम‌ ‌भी‌'];
              h3 = ['मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'मैंने‌ ‌उसे‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'उसे‌ ‌मैंने‌ ‌बताया‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'मैंने‌ ‌बताया‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'उसे‌ ‌बताया‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'बताया‌ ‌मैंने‌ ‌उसे‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌',
                        'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌राम‌ ‌सो‌ ‌रहा‌ ‌है‌',
                        'बताया‌ ‌उसे‌ ‌मैंने‌ ‌कि‌ ‌सो‌ ‌रहा‌ ‌है‌ ‌राम‌'];
              h4 = ['राम‌ ‌खाकर‌ ‌सोया‌',
                        'खाकर‌ ‌राम‌ ‌सोया‌',
                        'राम‌ ‌सोया‌ ‌खाकर‌',
                        'खाकर‌ ‌सोया‌ ‌राम‌',
                        'सोया‌ ‌राम‌ ‌खाकर‌',
                        'सोया‌ ‌खाकर‌ ‌राम‌'];
              h5 = ['बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌कुत्ता‌ ‌सो‌ ‌गया‌',
                        'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌कुत्ता‌ ‌सो‌ ‌गया',
                        'बिल्लियों‌ ‌को‌ ‌मारकर‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                        'मारकर‌ ‌बिल्लियों‌ ‌को‌ ‌सो‌ ‌गया‌ ‌कुत्ता‌',
                        'कुत्ता‌ ‌सो‌ ‌गया‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर‌',
                        'कुत्ता‌ ‌सो‌ ‌गया‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌',
                        'सो‌ ‌गया‌ ‌कुत्ता‌ ‌बिल्लियों‌ ‌को‌ ‌मारकर',
                        'सो‌ ‌गया‌ ‌कुत्ता‌ ‌मारकर‌ ‌बिल्लियों‌ ‌को‌'];
               h6 = ['एक‌ ‌लाल‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                        'एक‌ ‌लाल‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                        'वहाँ‌ ‌है‌ ‌एक‌ ‌लाल‌ ‌किताब',
                        'है‌ ‌वहाँ‌ ‌एक‌ ‌लाल‌ ‌किताब'];
              h7 = ['एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                        'एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌ ‌है‌ ‌वहाँ‌',
                        'बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌वहाँ‌ ‌है‌',
                        '‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌ ‌है‌ ‌वहाँ',
                        'वहाँ‌ ‌है‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                        'वहाँ‌ ‌है‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌',
                        '‌है‌ ‌वहाँ‌ ‌एक‌ ‌बड़ी‌ ‌सी‌ ‌किताब‌',
                        'है‌ ‌वहाँ‌ ‌बड़ी‌ ‌सी‌ ‌एक‌ ‌किताब‌'];
            all_hin=[h1,h2,h3,h4,h5,h6,h7];
            arrs  =all_hin[Math.floor(Math.random() * all_hin.length)];
            array =arrs[Math.floor(Math.random() * arrs.length)];
          var b2=array.split(" ");
          for(i=0;i<b2.length;i++)
            {
            j = Math.floor(Math.random()*b2.length)
            array = b2[i];
            b2[i] = b2[j]
            b2[j] = array;
         }
        document.getElementById("sen").innerHTML=" "
        count=0;
        length=b2.length;
         for(i=0;i<b2.length;i++)
           {
             document.getElementById("sen").innerHTML += "<button class='buttons' id='buttons" +i+"' value='"+b2[i]+"' onclick='Display(this.id,this.value);'>"+b2[i]+"</button>";
             // document.getElementById("sen").innerHTML += "<button id='buttons'>"+b2[i]+"</button>";
             document.getElementById("msg").innerHTML="";
             document.getElementById("selected").innerHTML ="";
             document.getElementById("reform").innerHTML = "";
             document.getElementById("checkcorrectness").innerHTML="";
             document.getElementById("correct").innerHTML="";
             document.getElementById("wrong").innerHTML="";
             document.getElementById("showAnswer").innerHTML=""
        }
        reforms=document.getElementById("sen").innerHTML ;
      }
    }
    function Display(bid,bvalue)
        {

            document.getElementById("msg").innerHTML="Formed Sentence <span>(after selecting words):</span>";
            document.getElementById("selected").innerHTML +=" "+bvalue;
            document.getElementById(bid).style.display="none";
            document.getElementById("reform").innerHTML = "<button class='reform' id='reform' onclick='reform()'> Re-form the sentence</button>";
          count++;
            if(length==count && length>0)
            {
                document.getElementById("checkcorrectness").innerHTML="<button id='check' onclick='check()'>Check Correctness of the Sentence</button>";
                selectedSentence = document.getElementById("selected").innerHTML;

            }
            else{
                document.getElementById("checkcorrectness").innerHTML="";
            }

        }
        function reform()
        {

            document.getElementById("sen").innerHTML = reforms;
            document.getElementById("msg").innerHTML="";
            document.getElementById("selected").innerHTML ="";
            document.getElementById("reform").innerHTML = "";
            document.getElementById("checkcorrectness").innerHTML="";
            document.getElementById("correct").innerHTML="";
            document.getElementById("wrong").innerHTML="";
            document.getElementById("showAnswer").innerHTML=""


        }
        function check()
        {
            var ans= selectedSentence.trim();
            if(x=='English')
            {
                if (arr.includes(ans))
                {
                document.getElementById("correct").innerHTML="Correct Answer!!!";
                document.getElementById("wrong").innerHTML="";
                document.getElementById("showAnswer").innerHTML=""

                }
                else{
                    document.getElementById("wrong").innerHTML="Wrong Answer !!!";
                    document.getElementById("correct").innerHTML="";
                    document.getElementById("showAnswer").innerHTML="<button id='crt'>Get Correct Answer</button>"
                }
            }

            else{
              if (arrs.includes(ans))
              {
              document.getElementById("correct").innerHTML="Correct Answer!!!";
              document.getElementById("wrong").innerHTML="";
              document.getElementById("showAnswer").innerHTML=""

              }
              else{
                  document.getElementById("wrong").innerHTML="Wrong Answer !!!";
                  document.getElementById("correct").innerHTML="";
                  document.getElementById("showAnswer").innerHTML="<button id='crt'>Get Correct Answer</button>"
              }

            }
          }
