import "./style.css";
import { gsap } from "gsap";

// tween(singola animazione, uno o più elementi che passano da uno stato a ad uno stato b) e timeline(un container di tween, più animazioni su elemnti diversi, gestendo le variabili)

// tween
// 1à parametro: l'elemento su cui si vuole animare
// 2° parametro: un oggetto con le proprietà da animare

// gestione con eventi
const square = document.querySelector(".square");
square.addEventListener("click", () => {
  gsap.to(".square", {
    // traslare lungo l'asse x
    x: 400,
    // durata dell'animazione
    duration: 3,
    // ritardo dell'animazione
    delay: 0.5,
    //
  });
});
// in questo caso l'animazione non continua con il click, perchè lo stato iniale coincide con lo stato finale dell'animazione

const squares = document.querySelectorAll(".square");

// altri consigli di manipolazione su più nodi
gsap.to(squares, {
  duration: 3,
  opacity: 0,
  y:200,
});

// stesso tween su classi diverse 
gsap.to([".class1", ".class2", ".class3"], {
    duration: 3,
    // opacity: 0,
    rotate: 180,
    borderRadius: '50%',
    y: 200
})