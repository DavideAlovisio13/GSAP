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

// metodo from e fromTo per gestire i tween

// from andiamo a gestire l'animazione nello stato iniziale

gsap.from(".square1", {
  duration: 3,
  delay: 0.5,
  // per lavorare con la proprietà opacity, meglio usare autoAlpha, che è la combinazione di visibilità e opacità. Per esempio con una modale
  autoAlpha: 0,
  x: -300,
})

// il metodo fromTo serve per combinare stato iniziale e finale

// in questo caso passiamo due oggetti, nel primo stato iniziale, nel secondo lo stato finale

gsap.fromTo(".square2", {
  autoAlpha: 0,
  x: 300,
  rotate: 180
}, {
  autoAlpha: 1,
  x: 0,
  rotate: 0,
  duration: 4,
    delay:1,
    ease:"linear",
})

// timing functions, gestiamo la velocità di traslazione. Di default gsap utilizza un tipo di animazione che velocizza man mano l'animazione

document.querySelector(".start").addEventListener("click", () => {
  gsap.to(".time1", {
    x: 500,
    duration: 3,
    // timing function
    ease: "none",
  });
  gsap.to(".time2", {
    x: 500,
    duration: 3,
    ease:"power3.out"
  });
  gsap.to(".time3", {
    x: 500,
    duration: 3,
    ease:"bounce"
  });
});

// sezione easing su documentazione: in alcune animazioni hanno parametri in, out e inOut, questo determina se il rallentamento avviene all'inizio, alla fine o in entrambi i casi. Es. di solito con elemnti trasparenti da far apparire in pagina usiamo out, in al contrario. Con step dobbiamo inserire una stringa in base al numero di step.

// funzioni custom: possiamo creare funzioni personalizzate per gestire le animazioni. Per esempio(extra sulla documentazione, servono dei plug in per questo tipo di animazioni)

// set e getProprety 
// primo parametro selettore, secondo di quale attributo vogliamo conoscere il valore, terzo per conversione(per esempio se vogliamo il valore in rem, px, ecc...)

// metodo getProperty, lavora su unico elemento

const data = gsap.getProperty("#square", 'data-number', '')
console.log(data)

const value = gsap.getProperty("#circle", 'opacity')
console.log(value)

const className = gsap.getProperty("#square", 'class')
console.log(className)

// getter crea funzione, dove posso chiedere qualsiasi valore 

const getter = gsap.getProperty("#square")
const x = getter('x')
const top = getter('top')
const id = getter('id')
console.log(x, top, id)

// metodo set, lavora su piu elementi

gsap.set(["#circle", "#rec", "#square"], {
    autoAlpha: 0,
    x: -200
})

gsap.to(["#circle", "#rec", "#square"], {
    autoAlpha: 1,
    x: 0,
    duration: 2,
    ease: "elastic",
})
