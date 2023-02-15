import { getLocalStorage, removeFromLocalStorage, saveToLocalStorageByName } from "./localstorage.js"

let listInject = document.getElementById('listInject');
let nameInject = document.getElementById('nameInject');
let saveButton = document.getElementById('saveButton');
let charName = document.getElementById('charName');
let itemLvl = document.getElementById('itemLvl');
let classInput = document.getElementById('classInput');
let roleInput = document.getElementById('roleInput');
let rndmButton = document.getElementById('rndmButton');
let groupInject = document.getElementById('groupInject');
let slider = document.getElementById('slider');


let charId;

saveButton.addEventListener('click', () => {


    saveToLocalStorageByName(charName.value, classInput.value, itemLvl.value, roleInput.value)
    CreateElements();
})
rndmButton.addEventListener('click', () => {
    GetRandomName();
    console.log(slider.value)
})


slider.addEventListener("input", () => {
    ; // update the variable with the current value of the range input
    let players = getLocalStorage();
    slider.min = 0;
    slider.max = players.length

    RandomGroups(slider.value)
  });




function GetRandomName(){
    let players = getLocalStorage();
    let num = (players.length)
    let randomNum = Math.floor(Math.random() * num)
    nameInject.innerHTML = players[randomNum].name
}


function SliderStuff(){
    let players = getLocalStorage();
slider.min = 0;
slider.max = players.length
console.log(slider.value)
};
SliderStuff();

function CreateElements(name){
    let players = getLocalStorage();

    listInject.innerHTML = '';
    let num = players.length
    players.map(player => {
        
        let div = document.createElement('div');

        div.className = 'row';        



        let div1 = document.createElement('div');
        div1.className = 'col-3'
        let p = document.createElement('p')
        p.textContent = player.name
        p.className = 'createdReportElementText'

        let div2 = document.createElement('div');
        div2.className = 'col-2'
        let p2 = document.createElement('p')
        p2.textContent = player.charClass
        p2.className = 'createdReportElementText'

        let div3 = document.createElement('div');
        div3.className = 'col-3'
        let p3 = document.createElement('p')
        p3.textContent = player.role
        p3.className = 'createdReportElementText'

        let div4 = document.createElement('div');
        div4.className = 'col-2'
        let p4 = document.createElement('p')
        p4.textContent = player.itemLvl
        p4.className = 'createdReportElementText'
        
        let div5 = document.createElement('div')
        div5.className = 'col-1'
        let deleteBtn = document.createElement('button')
        deleteBtn.className = '';
        deleteBtn.textContent = 'Del';
        deleteBtn.type = 'buton'
        deleteBtn.addEventListener('click', function() {
            removeFromLocalStorage(player.name);
            CreateElements();
        })

        listInject.appendChild(div);
        div.appendChild(div1);
        div1.appendChild(p)
        div.appendChild(div2)
        div2.appendChild(p2)
        div.appendChild(div3)
        div3.appendChild(p3)
        div.appendChild(div4)
        div4.appendChild(p4)
        div.appendChild(div5)
        div5.appendChild(deleteBtn)
        
   
    })

}


function RandomGroups(num1){
    let players = getLocalStorage();
    let groupSize = num1;
    let numOfPlayers = players.length;
    let numOfGroups = parseInt((numOfPlayers/groupSize).toFixed());
    groupInject.innerHTML = '';
    shuffleArray(players)

    let groups = []
    for (let index = 0; index < num1; index++)
    {
        let startIndex = index * numOfGroups;
        let endIndex = startIndex + numOfGroups;
        let diffGroups = players.slice(startIndex, endIndex);
        groups.push(diffGroups); 
    }


    groups.map(group => {
       let newGroup = '';

        for (let i = 0; i < group.length; i++) 
        {

            newGroup += `${group[i].name} `
  
        }
         console.log(newGroup)

         let p = document.createElement('p')
         p.textContent = newGroup
         p.className = 'createdReportElementText'
         groupInject.appendChild(p)
    });

   




}



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}























CreateElements();
