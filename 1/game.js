console.log("start out script");

// alert("velcome")
//     console.warn("start collect data player");
 let heroName = "name";
// heroName = prompt("name your charakter:");
console.log("heroName");

let level = 1;
let health = 100;
const maxInventorySize = 50;
let HardCore = true

let currentWeapon = {};
let magicSkills;

console.log(
    typeof currentWeapon, 
    typeof magicSkills,
    typeof health,
    typeof HardCore
);

if (HardCore) {
    console.log(heroName);

}

let IsAdult = false;
HardCore = false

if (HardCore) {
    console.log(heroName);
    health = 20;
} else if (!IsAdult) {
    health = 100;
} else{
    health = 50;
}
console.log(health)

// 8 pfdl
let htmlCard = `
  <div class="card">
    <h2>🗡️ ${heroName}</h2>
    <p>Статус: ${HardCore ? "Хардкор" : "Стандарт"}</p>
    <ul>
      <li>Рівень: ${level}</li>
      <li>Здоров'я: ${health} HP</li>
    </ul>
  </div>
`;

// document.body.innerHTML = htmlCard;
let mainDiv = document.getElementById('main-div');
mainDiv.innerHTML = htmlCard;

