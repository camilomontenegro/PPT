function game(ammo) {
    
    var items = ["piedra", "papel", "tijera"];
    var cpu = items[Math.floor(Math.random()*items.length)];
    document.getElementById("cpu").innerHTML = `CPU: ${cpu}`;
    var pick = ammo;
     

    if (pick === cpu.toLowerCase()) {
        document.getElementById("result").innerHTML =  "empate!";
    } else if 
        (pick === "piedra" && cpu === items[1] || pick ===  "papel" && cpu === items[2] || pick === "tijera" && cpu === items[0]) {
            document.getElementById("result").innerHTML = "La cpu gana";
    }  else if 
        (pick === "papel" && cpu === items[0] || pick ===  "tijera" && cpu === items[1] || pick === "piedra" && cpu === items[2]) {
        document.getElementById("result").innerHTML = "Has ganado!";
    } 
}




