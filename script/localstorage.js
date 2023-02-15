function saveToLocalStorageByName(name, charClass, itemLvl, role){

    let player = getLocalStorage();
    let storedObject = {name: name, charClass: charClass, itemLvl:itemLvl, role: role}

    player.push(storedObject);


    localStorage.setItem('Players', JSON.stringify(player));
}


function getLocalStorage(){

    let localStorageData = localStorage.getItem('Players');

    if(localStorageData == null){
        return [];
    }


    return JSON.parse(localStorageData);
}


function removeFromLocalStorage(balance){
    let player = getLocalStorage('Players');
    
    player.forEach(element => {
        if (element.name === balance )
        {
            player.splice(player.indexOf(element), 1)
        }
    });
    localStorage.setItem('Players', JSON.stringify(player));
}

export {removeFromLocalStorage, getLocalStorage, saveToLocalStorageByName};