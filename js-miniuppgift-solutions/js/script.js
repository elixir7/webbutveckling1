// Uppgift 1
/*
Du ska göra ett js program som beräknar arean av en triangel givet basen och höjden.
Area_triangel = (bas * höjd) / 2

    1. Skapa en variabel för höjden och en för basen.
    2. Tilldela dem godtyckliga värden.
    3. Skapa en variabel för arean och beräkna den.
    4. Skriv ut svaret i konsolen.
*/

var height = 5;
var base = 10;

var area = (height * base) / 2; // 5 * 10 / 2 = 25

console.log(area)

// Uppgift 2
/*
Ta hjälp av en funktion för att kunna beräkna olika areor givet olika baser och höjder.

    1. Skapa en funktion som tar bas och höjd som parametrar
    2. Funktionen ska retunera arean
    3. Använd funktionen för att beräkna en area och skriv ut det i konsolen.
*/

//Viktigt att påpeka är att "base" och "height" i funktionen bara är "placeholders" för de värden man ger funktionen när man kallar på den.
function calcArea(base, height) {
    var area = base * height / 2;
    return area;
}
//För illustration skulle funktionen kunna se ut såhär och den fungerar på samma sätt.
function calcArea2(choklad, banan) {
    var area = choklad * banan / 2;
    return area;
}

//Skriver ut arean i konsolen
var minArea = calcArea(2, 5);
console.log(minArea);

//eller

console.log(calcArea(2, 5));




// Uppgift 3
/*
Nu skall du skriva ut vad arean blir på hemsidan istället för konsolen.

    1. Skapa en HTML tagg i HTML koden och se till att du kan referera till den m.h.a t.ex. Klass eller id
    2. Använd funktionen från uppg. 2 för beräkning av area
    3. Skriv ut arean i din html tagg
*/

//Hittar <h1> taggen med id, titta i HTML filen
var heading = document.getElementById("kiwi")
var nyArea = calcArea(10, 25);

heading.innerHTML = "Arean är: " + nyArea + " cm^2";

// Brütal
/*
Nu skall du hämta basen och längden från hemsidan som användaren skrivit in. 
Sedan skall arean beräknas och skrivas ut på hemsidan m.h.a en funktion.

    1. Studera och använd den ut kommenterade koden i html dokumentet.
    2. Skapa en funktion som körs när användaren klickar på knappen.
    3. Funktionen skall hämta datan från fälten på hemsidan, beräkna arean och sedan skriva ut den på sidan.
*/

//Hämta knappen
var button = document.getElementById("button");
//Lägg till en lyssnare som väntar på att någon klickar på knappen, när det händer körs funktionen computeArea()
button.addEventListener("click", computeArea)

//Hämta var texten ska skrivas ut
var outputField = document.getElementById("area")

function computeArea() {
    //Hämta det numeriska värden i textroturna med .value egenskapen
    var height = document.getElementById("height").value;
    var base = document.getElementById("base").value;

    //Beräkna arean
    var area = (base * height) / 2;
    //Skriv ut värdena för enklare felsökning om det skulle behövas
    console.log(height)
    console.log(base)
    console.log(area)

    //Skriv ut arean för användaren på hemsidan
    outputField.innerHTML = " " + area + " cm^2";

}
