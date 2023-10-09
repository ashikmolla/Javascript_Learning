//   1. where add
const namePerant = document.getElementById("namePerant");
//  2. what to add
// const li = document.createElement("li");
// li.innerText="Robul Auwal Ridy";
// 3. add the celement
// namePerant.appendChild(li);


// --------------- section add first system

// 1. where add
const mainContainer = document.getElementById("main-container");
// 2. what add`
const section1 = document.createElement('section');
mainContainer.appendChild(section1);
const h1 = document.createElement("h1");
h1.innerText = "Hello New section Create a Javascript element"
section1.appendChild(h1)
const ul = document.createElement("ul");
section1.appendChild(ul)
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.innerText = "Vivo Y11"
li2.innerText = "Vivo Y20"
li3.innerText = "Vivo wx"

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

// --------------- section add 2nd system
const section2 = document.createElement('section');
section2.innerHTML=`
<h1>Hello new section 22222</h1>
<ul>
<li>bangladesh</li>
<li>India</li>
<li>Pakistan</li>
<li>Afganistan</li>
</ul>
`
mainContainer.appendChild(section2)







