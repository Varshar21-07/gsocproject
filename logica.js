function playGame() {
    const direction = document.getElementById("direction").value.toLowerCase();
    const result = document.getElementById("result");

    switch (direction) {
        case "north":
            result.textContent = "You head north and encounter a wild bear. Game Over!";
            break;
        case "east":
            result.textContent = "You walk east and find a treasure chest. You win!";
            break;
        case "south":
            result.textContent = "You walk south and fall into a pit. Game Over!";
            break;
        case "west":
            result.textContent = "You head west and reach a peaceful village. You win!";
            break;
        default:
            result.textContent = "Invalid direction. Try again.";
            break;
    }
}






