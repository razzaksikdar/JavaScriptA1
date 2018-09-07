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
        "Consultancy Skills"
      ]
    },
    {
      "name" : "Shafeeq",
      "age" : 32,
      "secretIdentity" : "T H E S H A F E E Q",
      "skills" : [
        "Databases",
        "Java",
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
    document.getElementById("name").innerHTML=(member[i].name);
    document.getElementById("age").innerHTML=(member[i].age);
     document.getElementById("sid").innerHTML=(member[i].secretIdentity);
   
    // document.getElementById("skills").innerHTML=("skills: ");
    for(var j=0; j<member[i].skills.length; j++)
          {
          document.getElementById("skills").innerHTML=(member[i].skills[j]); 
          console.log(member[i].skills[j]); 
          }
         console.log("\n");
    }
    // else{
    //    document.getElementById("demo4").innerHTML="";
    // }
  }

}

function Search1()
{
   var skills=document.getElementById("nam3").value;
 
   var member= data.members;
  for (var i = 0; i<member.length; i++) 
  {

    for(var j=0; j<member[i].skills.length; j++)
 
      if (member[i].skills==skills)
              document.getElementById("name1").innerHTML=(member[i].name);
              document.getElementById("age1").innerHTML=(member[i].age);
              document.getElementById("sid1").innerHTML=(member[i].secretIdentity);
              document.getElementById("skills1").innerHTML=(member[i].skills[j]); 
              console.log(member[i].skills[j]); 
          }
         console.log("\n");
    }
 
  


// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const listMaker = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   listMaker(input.value);
//   input.value = "";
// });

// data.forEach(item => {
//   listMaker(item);
// });

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
// });