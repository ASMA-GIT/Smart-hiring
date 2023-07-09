let names = ['James Smith','Michael Smith','Robert Smith','Maria Garcia','David Smith','Maria Rodriguez','Mary Smith','Maria Hernandez'];
let profession = [
    "Web Designer",
    "Webmaster",
    "UX Designer",
    "SEO Specialist",
    "Project Manager",
    "Digital Marketer",
    "Copywriter",
    "Front End Developer",
    // "Back End Developer",
    // "Full Stack Developer",
];
let locations = [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    // "Dallas",
    // "San Jose"
  ]
let li="";
var candidates = document.getElementById('row');
for (let i = 0; i < names.length; i++) {
    li += `<div class="user" id="user">
    <div class="userinfo">
        <img src="https://researchsnipers.com/wp-content/uploads/2021/01/Microsoft-Headquarters-1024x649.png" alt="" width="50px" height="50px">
        <h3 class="name-user">${names[i]}</h3>
    </div>
    <div class="userrole" id="userrole">
        <h1 class="profession">${profession[i]}</h1>
        <p class="location">${locations[i]}</p>
    </div>
    <div class="userdescription">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="resume">
        <button>Resume</button>
    </div>
</div>`;
  }
candidates.innerHTML=li;
let li2="";
for (let i = 0; i < locations.length; i++) {
    li2 +=`<li>${locations[i]}</li>`;
}
document.getElementById('listitems').innerHTML=li2;

function searchuser() {
    let cards = document.querySelectorAll('.user')
    let role =document.querySelectorAll('.profession')
    let search_query = document.getElementById("searchbox").value;
    for (var i = 0; i < cards.length; i++) {
      if(role[i].innerText.toLowerCase()
        .includes(search_query.toLowerCase())) {
          cards[i].classList.remove("is-hidden");
      } else {
        cards[i].classList.add("is-hidden");
      }
    }
};