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
var landsTag = document.getElementsByTagName('article');

// For below, refer to 1st entry in bug list
// function createEl(el){
//   document.createElement(el);
// }

// Part 1


function makeMiddleEarth() {
  // create a section tag
  let middleEarth = document.createElement('section');
  // append middle-earth to your document body
  body.appendChild(middleEarth);
  //set id of middle-earth
  middleEarth.id = "middle-earth";

  // add each land as an article tag
  lands.forEach(function(land) {
    let makeLand = document.createElement('article');
    middleEarth.appendChild(makeLand);
    // inside each article tag include an h1 with the name of the land
    makeLand.innerHTML = '<h1>' + land + '</h1>';
  })

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  //targetting var for shire
  let shire = landsTag[0];
  //creating unordered list and appending to shire
  let list = document.createElement('ul');
  list.id = 'shireList';
  shire.appendChild(list);

  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  //NOTE: Slight amendment to above set of instructions, it shld be 1st article tag on page
  // give each hobbit a class of hobbit
  hobbits.forEach(function(hobbitName) {
    let createHobbit = document.createElement('li');
    if (hobbitName == 'Frodo Baggins') {
      createHobbit.id = 'frodo';
    }
    createHobbit.class = 'hobbit';
    createHobbit.innerHTML = hobbitName;
    document.getElementById('shireList').appendChild(createHobbit);
  })
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  let ring = document.createElement('div');
  ring.id = 'the-ring';
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of Frodo
  document.getElementById('frodo').appendChild(ring);
  //  add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // NOTE:magic-imbued-jewelry css class may not have displayed correctly hence ring is unclickable. To test if the eventListener got added correctly, ring.innerHTML="testestest"
  //NOTE: Regarding above bug, only happens on ring.class = 'magic-imbued-jewelry', using setAttribute method fixes it.
  document.getElementById("the-ring").addEventListener("click", function() {
    nazgulScreech();
  });
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  let rivendell = landsTag[1];
  // create an aside tag
  let aside = document.createElement('aside')
  // insert your aside/list elements as descendants of rivendell
  let list = document.createElement('ul');
  list.id = 'rivenList';
  aside.appendChild(list);
  rivendell.appendChild(aside);
  // attach an unordered list of the 'buddies' in the aside
  buddies.forEach(function(buddy) {
    let createBuddy = document.createElement('li');
    if (buddy == 'Strider') {
      buddy.id = 'aragorn';
    }
    createBuddy.innerHTML = buddy;
    document.getElementById('rivenList').appendChild(createBuddy);
  })
}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  // document.getElementById('aragorn').innerHTML='Aragorn';
}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


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

function itsDangerousToGoAlone() {
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
