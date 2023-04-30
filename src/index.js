import { select, selectAll } from "d3-selection";
const board = select("#board").append("g");

const positionG = 386;
const positionH = 450;
// Créer l'échiquier avec des rectangles alternativement remplis de steelblue et white
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    board
      .append("rect")
      .attr("x", j * 64)
      .attr("y", i * 64)
      .attr("width", 64)
      .attr("height", 64)
      .attr("fill", (i + j) % 2 === 0 ? "white" : "steelblue");
  }
}
// ajout d'une tour de l'échiquier
board
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 512)
  .attr("height", 512)
  .attr("stroke", "black")
  .attr("stroke-width", 5)
  .attr("fill", "none");
//ajout des pièces
board
  .append("image")
  .attr("id", "whiteKing")
  .attr("href", "src/img/whiteKing.svg")
  .attr("width", 60)
  .attr("x", 258)
  .attr("y", 450);

board
  .append("image")
  .attr("id", "whiteQueen")
  .attr("href", "src/img/whiteQueen.svg")
  .attr("width", 59)
  .attr("x", 195)
  .attr("y", 451);

board.append("image").attr("id", "firstmove");

board
  .append("image")
  .attr("id", "whiteRookL")
  .attr("href", "src/img/whiteRook.svg")
  .attr("width", 59)
  .attr("x", 3)
  .attr("y", 451);

board
  .append("image")
  .attr("id", "whiteRookR")
  .attr("href", "src/img/whiteRook.svg")
  .attr("width", 59)
  .attr("x", 450)
  .attr("y", 451);

board
  .append("image")
  .attr("id", "whiteBishopR")
  .attr("href", "src/img/whiteBishop.svg")
  .attr("width", 59)
  .attr("x", 323)
  .attr("y", 451);
board
  .append("image")
  .attr("id", "whiteBishopL")
  .attr("href", "src/img/whiteBishop.svg")
  .attr("width", 59)
  .attr("x", 130)
  .attr("y", 451);

board
  .append("image")
  .attr("id", "whiteKnightR")
  .attr("href", "src/img/whiteKnight.svg")
  .attr("width", 59)
  .attr("x", 385)
  .attr("y", 451);

board
  .append("image")
  .attr("id", "whiteKnightL")
  .attr("href", "src/img/whiteKnight.svg")
  .attr("width", 59)
  .attr("x", 65)
  .attr("y", 451);

board
  .append("image")
  .attr("id", "whitePawnA")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", 4)
  .attr("y", 385);

board
  .append("image")
  .attr("id", "whitePawnB")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", 66)
  .attr("y", 385);

board
  .append("image")
  .attr("id", "whitePawnC")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", 131)
  .attr("y", 385);

board
  .append("image")
  .attr("id", "whitePawnD")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", 195)
  .attr("y", 385);

board
  .append("image")
  .attr("id", "whitePawnD")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", 195)
  .attr("y", 385);

board
  .append("image")
  .attr("id", "whitePawnE")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", 258)
  .attr("y", 385);

board
  .append("image")
  .attr("id", "whitePawnF")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", 323)
  .attr("y", 385);
board
  .append("image")
  .attr("id", "whitePawnG")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", positionG)
  .attr("y", 385);
board
  .append("image")
  .attr("id", "whitePawnG")
  .attr("href", "src/img/whitePawn.svg")
  .attr("width", 59)
  .attr("x", positionH)
  .attr("y", 385);

// black Pieces
board
  .append("image")
  .attr("id", "balckKing")
  .attr("href", "src/img/blackKing.svg")
  .attr("width", 60)
  .attr("x", 258)
  .attr("y", 2);

board
  .append("image")
  .attr("id", "blackQueen")
  .attr("href", "src/img/blackQueen.svg")
  .attr("width", 59)
  .attr("x", 195)
  .attr("y", 2);

board
  .append("image")
  .attr("id", "blackRookL")
  .attr("href", "src/img/blackRook.svg")
  .attr("width", 59)
  .attr("x", 3)
  .attr("y", 2);

board
  .append("image")
  .attr("id", "blackRookR")
  .attr("href", "src/img/blackRook.svg")
  .attr("width", 59)
  .attr("x", 450)
  .attr("y", 2);

board
  .append("image")
  .attr("id", "blackBishopR")
  .attr("href", "src/img/blackBishop.svg")
  .attr("width", 59)
  .attr("x", 323)
  .attr("y", 2);
board
  .append("image")
  .attr("id", "blackBishopL")
  .attr("href", "src/img/blackBishop.svg")
  .attr("width", 59)
  .attr("x", 130)
  .attr("y", 2);

board
  .append("image")
  .attr("id", "blackKnightR")
  .attr("href", "src/img/blackKnight.svg")
  .attr("width", 59)
  .attr("x", 385)
  .attr("y", 2);

board
  .append("image")
  .attr("id", "blackKnightL")
  .attr("href", "src/img/blackKnight.svg")
  .attr("width", 59)
  .attr("x", 65)
  .attr("y", 2);

board
  .append("image")
  .attr("id", "blackPawnA")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", 4)
  .attr("y", 65);

board
  .append("image")
  .attr("id", "blackPawnB")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", 66)
  .attr("y", 65);

board
  .append("image")
  .attr("id", "blackPawnC")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", 131)
  .attr("y", 65);

board
  .append("image")
  .attr("id", "blackPawnD")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", 195)
  .attr("y", 65);

board
  .append("image")
  .attr("id", "blackPawnD")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", 195)
  .attr("y", 65);

board
  .append("image")
  .attr("id", "blackPawnE")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", 258)
  .attr("y", 65);

board
  .append("image")
  .attr("id", "blackPawnF")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", 323)
  .attr("y", 65);
board
  .append("image")
  .attr("id", "blackPawnG")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", positionG)
  .attr("y", 65);
board
  .append("image")
  .attr("id", "blackPawnG")
  .attr("href", "src/img/blackPawn.svg")
  .attr("width", 59)
  .attr("x", positionH)
  .attr("y", 65);

const width = 52;
const height = 32;

// Sélectionner le SVG et créer un groupe pour les carrés
const svg = select("#moves");
const moves = svg.append("g");

// Ajouter un carré pour chaque ligne et colonne
for (let i = 0; i < 16; i++) {
  moves
    .append("rect")
    .attr("x", 0)
    .attr("y", i * (height + 2))
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "white");

  moves
    .append("rect")
    .attr("x", width)
    .attr("y", i * (height + 2))
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "steelblue");

  moves
    .append("line")
    .attr("x1", 0)
    .attr("y1", (i + 1) * (height + 2) - 1)
    .attr("x2", 2 * width)
    .attr("y2", (i + 1) * (height + 2) - 1)
    .attr("stroke", "black")
    .attr("stroke-width", 3);
  moves
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 104)
    .attr("height", 512)
    .attr("stroke", "black")
    .attr("stroke-width", 5)
    .attr("fill", "none");
}
moves
  .append("text")
  .text("e4")
  .attr("id", "e4")
  .attr("x", width / 2)
  .attr("y", height / 2)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("c5")
  .attr("id", "c5")
  .attr("x", width * 1.5)
  .attr("y", height / 2)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Cf3")
  .attr("id", "Cf3")
  .attr("x", width / 2)
  .attr("y", height * 1.55)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");

moves
  .append("text")
  .text("d6")
  .attr("id", "d6")
  .attr("x", width * 1.5)
  .attr("y", height * 1.55)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("d4")
  .attr("id", "d4")
  .attr("x", width / 2)
  .attr("y", height * 2.6)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("cxd4")
  .attr("id", "cxd4")
  .attr("x", width * 1.5)
  .attr("y", height * 2.6)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");

moves
  .append("text")
  .text("Cxd4")
  .attr("id", "Cxd4")
  .attr("x", width / 2)
  .attr("y", height * 3.65)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Cf6")
  .attr("id", "Cf6")
  .attr("x", width * 1.5)
  .attr("y", height * 3.65)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Cc3")
  .attr("id", "Cc3")
  .attr("x", width / 2)
  .attr("y", height * 4.7)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("a6")
  .attr("id", "a6")
  .attr("x", width * 1.5)
  .attr("y", height * 4.7)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Fe3")
  .attr("id", "Fe3")
  .attr("x", width / 2)
  .attr("y", height * 5.75)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("e5")
  .attr("id", "e5")
  .attr("x", width * 1.5)
  .attr("y", height * 5.75)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Cb3")
  .attr("id", "Cb3")
  .attr("x", width / 2)
  .attr("y", height * 6.8)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Fe6")
  .attr("id", "Fe6")
  .attr("x", width * 1.5)
  .attr("y", height * 6.8)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("f3")
  .attr("id", "f3")
  .attr("x", width / 2)
  .attr("y", height * 7.85)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Fe7")
  .attr("id", "Fe7")
  .attr("x", width * 1.5)
  .attr("y", height * 7.85)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Dd2")
  .attr("id", "Dd2")
  .attr("x", width / 2)
  .attr("y", height * 8.9)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("o-o")
  .attr("id", "o-o")
  .attr("x", width * 1.5)
  .attr("y", height * 8.9)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("o-o-o")
  .attr("id", "o-o-o")
  .attr("x", width / 2)
  .attr("y", height * 9.95)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Cbd7")
  .attr("id", "Cbd7")
  .attr("x", width * 1.5)
  .attr("y", height * 9.95)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("g4")
  .attr("id", "g4")
  .attr("x", width / 2)
  .attr("y", height * 11)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("b5")
  .attr("id", "b5")
  .attr("x", width * 1.5)
  .attr("y", height * 11)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("g5")
  .attr("id", "g5")
  .attr("x", width / 2)
  .attr("y", height * 12.1)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("b4")
  .attr("id", "b4")
  .attr("x", width * 1.5)
  .attr("y", height * 12.1)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Ce2")
  .attr("id", "Ce2")
  .attr("x", width / 2)
  .attr("y", height * 13.15)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("Ce8")
  .attr("id", "Ce8")
  .attr("x", width * 1.5)
  .attr("y", height * 13.15)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("f4")
  .attr("id", "f4")
  .attr("x", width / 2)
  .attr("y", height * 14.2)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("a5")
  .attr("id", "a5")
  .attr("x", width * 1.5)
  .attr("y", height * 14.2)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("f5")
  .attr("id", "f5")
  .attr("x", width / 2)
  .attr("y", height * 15.3)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
moves
  .append("text")
  .text("a4")
  .attr("id", "a4")
  .attr("x", width * 1.5)
  .attr("y", height * 15.3)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "central")
  .attr("font-size", "20px")
  .attr("fill", "black");
// comments
//
//
const comments = select("#comments").append("g");

comments
  .append("text")
  .text("Bonjour et bienvenue pour  ")
  .attr("id", "ligne1")
  .attr("x", 15)
  .attr("y", 20)
  .attr("font-family", "Roboto")
  .attr("font-size", "14px")
  .attr("fill", "white");
comments
  .append("text")
  .text("une ouverture de folie !")
  .attr("id", "ligne2")
  .attr("x", 15)
  .attr("y", 40)
  .attr("font-family", "Roboto")
  .attr("font-size", "14px")
  .attr("fill", "white");
comments
  .append("text")
  .text("")
  .attr("id", "ligne3")
  .attr("x", 15)
  .attr("y", 60)
  .attr("font-family", "Roboto")
  .attr("font-size", "14px")
  .attr("fill", "white");
///////////////////
///////////////////////////////////
//code animation
//////////////////
/////////
const changeTexte = (text) => {
  let ligne1 = select("#ligne1");
  let ligne2 = select("#ligne2");
  let ligne3 = select("#ligne3");
  ligne1.text(text[0]);
  ligne2.text(text[1]);
  ligne3.text(text[2]);
};
const changeFont = (nom) => {
  console.log(nom);
  select("#" + nom)
    .attr("font-weight", "bold")
    .style("text-decoration", "underline");
};
const boardExplanation = (idExplanation) => {
  let explanation = "#" + idExplanation;
  let lastChar = explanation.slice(-1);
  let newNumber = parseInt(lastChar) - 1;
  let lastExplanation = "#explanation" + newNumber;
  //console.log(lastExplanation);
  select(lastExplanation).style("display", "none");

  select("#" + idExplanation).style("display", "block");
};

const boardExplanationback = (idExplanation) => {
  let explanation = "#" + idExplanation;
  let lastChar = explanation.slice(-1);
  let newNumber = parseInt(lastChar) - 1;
  let lastExplanation = "#explanation" + newNumber;
  //console.log(lastExplanation);
  select(lastExplanation).style("display", "block");

  select("#" + idExplanation).style("display", "none");
};
const move = (nom, x, y, pieceId, text, idExplanation) => {
  let pieceSelected = select("#" + pieceId);
  let currentPositionX = parseFloat(pieceSelected.attr("x"));
  let currentPositionY = parseFloat(pieceSelected.attr("y"));
  //console.log(currentPositionX, currentPositionY);
  pieceSelected.attr("x", currentPositionX + x).attr("y", currentPositionY + y);
  changeTexte(text);
  changeFont(nom);
  boardExplanation(idExplanation);
};

const moveback = (nom, x, y, pieceId, text, idExplanation) => {
  let pieceSelected = select("#" + pieceId);
  let currentPositionX = parseFloat(pieceSelected.attr("x"));
  let currentPositionY = parseFloat(pieceSelected.attr("y"));
  //console.log(currentPositionX, currentPositionY);
  pieceSelected.attr("x", currentPositionX - x).attr("y", currentPositionY - y);
  changeTexte(text);
  changeFont(nom);
  boardExplanationback(idExplanation);
};

const removeUnderline = (nom) => {
  select("#" + nom)
    .attr("font-weight", "bold")
    .style("text-decoration", "none");
};
const removefont = (nom) => {
  select("#" + nom)
    .attr("font-weight", "normal")
    .style("text-decoration", "none");
};
///////////////////////
///explanations
///////////////////////

// Crée les explanation rouge
board
  .append("rect")
  .attr("id", "explanation1")
  .attr("x", 64 * 3)
  .attr("y", 64 * 3)
  .attr("width", 128)
  .attr("height", 128)
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 3)
  .style("display", "none");
board
  .append("rect")
  .attr("id", "explanation2")
  .attr("x", 64 * 3)
  .attr("y", 64 * 4)
  .attr("width", 64)
  .attr("height", 64)
  .attr("fill", "none")
  .attr("stroke", "red")
  .attr("stroke-width", 3)
  .style("display", "none");

//move("e4", 0, -129, "whitePawnE", texte, "explanation1");
// move("c5", 0, 129, "blackPawnC", texte1, "explanation2");

// Charger les données JSON
fetch("src/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let index = 0;
    window.addEventListener("wheel", (e) => {
      //vers le haut
      if (index > data.length - 1) {
        index = data.length - 1;
      }
      if (index <= -1) {
        index = 0;
      }
      if (e.deltaY < 0) {
        index = index;
        console.log(index);
        removefont(data[index].nom);
        moveback(
          data[index - 1].nom,
          data[index].x,
          data[index].y,
          data[index].pieceId,
          data[index - 1].texte,
          data[index].idExplanation
        );
        index = index - 1;
      }
      //vers le bas
      else if (e.deltaY > 0) {
        removeUnderline(data[index].nom);
        index = index + 1;
        console.log(index);
        move(
          data[index].nom,
          data[index].x,
          data[index].y,
          data[index].pieceId,
          data[index].texte,
          data[index].idExplanation
        );

        console.log("La molette va vers le bas");
      }
    });
  })
  .catch((error) => console.error(error));
