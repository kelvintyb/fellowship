console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1

function makeMiddleEarth() {
  var middleEarth = document.createElement("section")
  middleEarth['id'] = 'middle-earth'
  document.body.appendChild(middleEarth);

for (var i = 0; i < lands.length; i++) {
  var landed = document.createElement('article')
  document.querySelector('#middle-earth').appendChild(landed)
  document.querySelectorAll('article')[i].innerHTML = '<h1>' + lands[i] + '</h1>'
  }
}

makeMiddleEarth();
// makeMiddleEarth();
// create a section tag with an id of middle-earth
// add each land as an article tag
// inside each article tag include an h1 with the name of the land
// append middle-earth to your document body


// Part 2

function makeHobbits() {
var ullist = document.createElement('ul')
document.querySelector('h1').appendChild(ullist)

for (var i = 0; i < hobbits.length; i++) {
  var lilist = document.createElement('li')
  document.querySelector('ul').appendChild(lilist)
  lilist.innerHTML = hobbits[i]
  lilist.className = "hobbit"
 }
}

makeHobbits();
// document.querySelector('h1').appendChild. = "<ul></ul>"
// for (var i = 0; i < hobbits[i]; i++) {
// document.querySelectorAll('ul')[0].innerHTML = "<li><li>"
// document.querySelectorAll('li')[i].innerHTML = '<p>' + hobbits[i] + '</p>'
// document.querySelectorAll('li')[i].className = "hobbit"

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
 // }// give each hobbit a class of hobbit


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
var theRing = document.createElement('div')
theRing['id'] = "the-ring"
theRing.className = "magic-imbued-jewelry"

var screech = document.getElementById("nazgul-screech");

function playAudio() {
  screech.play();
}

theRing.addEventListener('click',playAudio)

document.querySelector('li').appendChild(theRing)
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {

var aside = document.createElement('aside')

var ullist2 = document.createElement('ul')
document.querySelectorAll('h1')[1].appendChild(ullist2)

 for (var i = 0; i < buddies.length; i++) {
   var lilist2 = document.createElement('li')
   document.querySelectorAll('ul')[1].appendChild(lilist2)
   lilist2.innerHTML = buddies[i]
   lilist2.className = "buddies"
  }
 //
 // document.querySelectorAll('h1')[1].appendChild(aside)
 // }


  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies();


// Part 5


function beautifulStranger() {

  document.querySelectorAll('.buddies')[3].innerHTML = "Aragorn"
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
// for (var i = 0; i < hobbits.length; i ++) {
var assemble = document.querySelector('h1')
var rivendell = document.querySelectorAll('h1')[1]

// }

for (var i = 0; i < hobbits.length; i ++) {
  console.log(i)
  var indiHobbits = assemble.querySelector('ul')
  console.log(indiHobbits);
  var movingAssemble = assemble.removeChild(indiHobbits)
  rivendell.appendChild(movingAssemble)

}

// var breakfast = document.getElementById('breakfast-foods')
// var lunch = document.getElementById('lunch-foods')
// var button = document.getElementById('brunch')


// var lastList = breakfast.querySelector('li:last-child')
//       var removedList = breakfast.removeChild(lastList)
//
//       lunch.appendChild(removedList)
// var re

}

leaveTheShire();

// var Rivendell = document.querySelectorAll('h1')[1];


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var theFellowShip = document.createElement('div')
var rivendell = document.querySelectorAll('h1')[1]
rivendell.appendChild(theFellowShip)

}

// forgeTheFellowShip();
//

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
