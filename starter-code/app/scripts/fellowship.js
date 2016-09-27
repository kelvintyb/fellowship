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

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  //add Frodo and Sam id
  hobbits.forEach(function(hobbitName) {
    let createHobbit = document.createElement('li');
    let firstName = hobbitName.split(' ')[0].toLowerCase();
    createHobbit.id = firstName;
    createHobbit.className = 'hobbit';
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

  // ring.setAttribute("class", "magic-imbued-jewelry");
  ring["className"] = 'magic-imbued-jewelry';
  // ring.className = 'magic-imbued-jewelry';

  // add the ring as a child of Frodo
  document.getElementById('frodo').appendChild(ring);
  //  add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // BONUS Within the click listener for clicking `'#the-ring'`, add functionality so that when it's clicked, it not only calls `nazgulScreech` but also causes Frodo's opacity to go down to 0 for a while, only to fade back in.
  // BONUS If the ring is clicked three times, the entire body element should disappear, to be replaced with the text "The Ring has been returned to Sauron and the world is over."
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
    //attach id and class to buddies that are needed for later funcs
    if (buddy == 'Strider') {
      createBuddy.id = 'aragorn';
    } else {
      let firstName = buddy.split(' ')[0].toLowerCase();
      createBuddy.id = firstName;
    }
    createBuddy.className = 'buddy';
    createBuddy.innerHTML = buddy;
    document.getElementById('rivenList').appendChild(createBuddy);
  })
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  buddies[3] = 'Aragorn II, son of Arathorn';
  document.querySelector('#aragorn').textContent = 'Aragorn';
}


beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  let rivendell = landsTag[1];
  let shire = landsTag[0];
  let hobbitList = shire.removeChild(document.querySelector('#shireList'));
  rivendell.querySelector('aside').appendChild(hobbitList);

  // let cloned = document.getElementById('shireList').cloneNode(true);
  // rivendell.appendChild(cloned);
  // document.getElementsByTagName('ul')[0].innerHTML = '';
}



leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  let rivendell = landsTag[1];
  let fellowship = document.createElement('div');
  fellowship.id = 'the-fellowship';
  rivendell.appendChild(fellowship);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party


  fellowship = document.querySelector('#the-fellowship');
  let shireList = document.querySelector('#shireList');
  let rivenList = document.querySelector('#rivenList');


  hobbits.forEach(function(currHobbit) {
    let hobbit = document.querySelector('.hobbit');
    fellowship.appendChild(shireList.removeChild(hobbit));
    alert(currHobbit + ' has joined the Fellowship of the Ring!');
  })
  buddies.forEach(function(currBuddy) {
    let buddy = document.querySelector('.buddy');
    fellowship.appendChild(rivenList.removeChild(buddy));
    alert(currBuddy + ' has joined the Fellowship of the Ring!');
  })


}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  let gandalf = document.querySelector('#gandalf');
  gandalf.textContent = 'Gandalf the White';

  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = 'white';
  gandalf.style.border = 'solid 0.3em grey';
}

theBalrog();
// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!")
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
  let boromir = document.querySelector('#boromir');
  boromir.style['text-decoration'] = 'line-through';

  // Remove Boromir from the Fellowship
  let fellowship = document.querySelector('#the-fellowship');
  //set timeout if you want to see the line-through on boromir

  // setTimeout(function() {
  //   fellowship.removeChild(boromir);
  // }, 5000)

  fellowship.removeChild(boromir);
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  let fellowship = document.querySelector('#the-fellowship');
  let frodo = document.querySelector('#frodo');
  let sam = document.querySelector('#samwise');
  let mordor = landsTag[2];

  // let travellingFrodo = fellowship.removeChild(frodo);
  // let travellingSam = fellowship.removeChild(sam);
  mordor.appendChild(frodo);
  mordor.appendChild(sam);

  // add a div with an id of 'mount-doom' to Mordor
  let mountDoom = document.createElement('div');
  mountDoom.id = 'mount-doom';
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  let gollum = document.createElement('div');
  let mordor = landsTag[2];
  gollum.id = 'gollum';
  mordor.appendChild(gollum);

  // Remove the ring from Frodo and give it to Gollum
  let ring = document.querySelector('#the-ring');
  // let frodo = document.querySelector('#frodo')
  gollum.appendChild(ring);

  // Move Gollum into Mount Doom
  let mountDoom = document.querySelector('#mount-doom');
  gollum = document.querySelector('#gollum');
  mountDoom.appendChild(gollum);
}

weWantsIt();
// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  let gollum = document.querySelector('#gollum');
  document.querySelector('#mount-doom').removeChild(gollum);
  // remove all the baddies from the document
  let mordor = landsTag[2];
  // mordor.style['background'] = 'url("")';
  mordor.style.setProperty('background', 'url("")');
  // Move all the hobbits back to the shire
  let fellowship = document.querySelector('#the-fellowship')
  let shire = landsTag[0];
  let arrOfHobbits = document.querySelectorAll('.hobbit');

  arrOfHobbits.forEach(function(currHobbit) {
    if (fellowship.querySelector('.hobbit')) {
      shire.appendChild(currHobbit);
    } else if (mordor.querySelector('.hobbit')) {
      shire.appendChild(currHobbit)
    }
  });
}

thereAndBackAgain()
