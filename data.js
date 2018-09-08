data = {
  "squadName" : "QA Consulting",
  "secretBase" : "Anchorage",
  "active" : true,
  "members" : [
  {
    "name" : "Matt",
    "age" : 29,
    "secretIdentity" : "The flash-er",
    "skills" : [
    "Java",
    "Testing",
    "JavaScript"
    ]
  },
  {
    "name" : "Dev",
    "age" : 32,
    "secretIdentity" : "Dev Data",
    "skills" : [
    "DevOps",
    "Linux",
    "Consultancy Skills",
    ]
  },
  {
    "name" : "Shafeeq",
    "age" : 32,
    "secretIdentity" : "T H E S H A F E E Q",
    "skills" : [
    "Java",
    "Databases",
    "JavaScript",
    "Chicken Cottage",
    ]
  }
  ]
}


function Search()

{
 var name=document.getElementById("nam2").value;
 
 var member= data.members;


 for (var i = 0; i<member.length; i++) 
 {
  if (member[i].name==name)
  {
   var xy = document.getElementById("x");
   xy.style.display = "block";

   document.getElementById("name").innerHTML=(member[i].name);
   document.getElementById("age").innerHTML=(member[i].age);
   document.getElementById("sid").innerHTML=(member[i].secretIdentity);
   for(var j=0; j<member[i].skills.length; j++)
   {
    var node = document.createElement("LI");
    var textnode =document.createTextNode(member[i].skills[j]);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    document.getElementById("notf").innerHTML="";

    console.log(member[i].skills[j]); 
  }
  console.log("\n");
  break;
}
else {
  document.getElementById("notf").innerHTML="Record not found for the name! Please Search again";

  document.getElementById("name").innerHTML="";
  document.getElementById("age").innerHTML="";
  document.getElementById("sid").innerHTML="";
  document.getElementById("myList").innerHTML="";
  var xy = document.getElementById("x");
  xy.style.display = "none";

}   
}

}

function SearchSkills()
{


  document.getElementById("myList2").innerHTML=""
  var name=document.getElementById("nam3").value;
  var member= data.members;
  
  document.getElementById("skillname").innerHTML=name;
  

  for (var i = 0; i<member.length; i++) 
  {

    for (var j = 0; j<member[i].skills.length; j++) 
    {
      if (member[i].skills[j]==name)
      {
        var xy = document.getElementById("z");
        xy.style.display = "block";
        var node = document.createElement("LI");

        var textnode =document.createTextNode(member[i].name);
        node.appendChild(textnode);
        document.getElementById("myList2").appendChild(node);

        document.getElementById("notf2").innerHTML="";

        console.log(member[i].name);
        break;
        break;

      }  
      else 
      {
       document.getElementById("notf2").innerHTML="Not More Record found for the Skills! Please Search again";

            // var xy = document.getElementById("z");
            // xy.style.display = "none";
          }   
        } 
      }

    }





    function myFunction()
    {
      var element1 = document.getElementById("demo1");
      var element2 = document.getElementById("demo2");
      var element3 = document.getElementById("demo3");
      var element4 = document.getElementById("demo4");
      var element5 = document.getElementById("demo5");





      var alphaExp = /^[a-zA-Z]+$/;
      var dob = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
      var addrs=/^[a-zA-Z0-9]+$/;
      var pcode=/^((?=.*[a-zA-Z0-9 ]+).{4,10})$/;
      var email = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/;

      if (element1.value == "" || element2.value == ""||element3.value == "" || element4.value == ""||element5.value == ""){
        alert("A Field is empty");
        return false;
      }

      if (!(element1.value.match(alphaExp))){
        alert("Invalid Name!");
        return false;
      }

      if (!(element2.value.match(dob))){
        alert("Invalid Date of Birth !");
        return false;
      }


      if (!(element3.value.match(addrs))){
        alert("Invalid address!");
        return false;
      }
      if (!(element4.value.match(pcode))){
        alert("Invalid postcode!");
        return false;
      }

      if (!(element5.value.match(email))){
        alert("Invalid Email!");
        return false;
      }

      else
      {
       saveInfo(element1.value,element2.value,element3.value,element4.value,element5.value)  

       return true;
     }

   }


   function saveInfo(nName,nDoB,nAddress,nPostCode,nEmail)
   {
    localStorage.setItem("name",nName);
    localStorage.setItem("dob",nDoB);
    localStorage.setItem("address",nAddress);
    localStorage.setItem("postcode",nPostCode);
    localStorage.setItem("email",nEmail);

  }


  function retriveInfo()
  {
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    document.getElementById("dob").innerHTML = localStorage.getItem("dob");
    document.getElementById("address").innerHTML = localStorage.getItem("address");
    document.getElementById("postcode").innerHTML =localStorage.getItem("postcode");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
  }

