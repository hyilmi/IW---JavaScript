//Interne voorstelling van de puzzel als een tweedimensionale lijst
let my_puzzle = [[0, 1, 2],
              [7, 4, 8],
              [3, 5, 6]];

//Wanneer de volledige HTML-pagina geladen is wordt onderstaande functie uitgevoerd
window.onload = function(){
    draw_puzzle(my_puzzle);
}

//Deze functie neemt als invoer de lijstrepresentatie van onze puzzel
//
function draw_puzzle(puzzle){
    let puzzle_html = generate_puzzle_html(puzzle);
    document.getElementById("puzzle_container").innerHTML = puzzle_html;
}

function generate_puzzle_html(puzzle){
    //TODO: Implementeer deze functie!
    //puzzle bevat een tweedimensionale lijst die de sliding puzzle voorstelt
    //Kijk naar de functie generate_board_html in voorbeeld 7 uit het hoorcollege voor inspiratie
    
    let table_inner_html = "";
    for(let i = 0; i < puzzle.length; i++){
        let row_html = "<tr>"
        
        for(let j = 0; j < puzzle[i].length; j++){
            row_html += generate_square(puzzle[i][j]);
        }
        row_html += "</tr>";
        table_inner_html += row_html;
    }

    return `<table>${table_inner_html}</table>`;
}

function generate_square(number){
    let square_class = "empty";
    let square_content = number;

    if(number == 0){
        return `<td class="empty">0</td>`;
    }else {
        return `<td>${square_content}</td>`;
    }


}


