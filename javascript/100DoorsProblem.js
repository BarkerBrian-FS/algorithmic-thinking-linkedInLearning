function handleOpenDoors(){
    let openDoors = [];
    
    for (let i = 1; i*i <= 100; i ++){
        openDoors.push(i*i);
    }
    return openDoors;
}