// ------------- ONE: Arrow functions
// 1. Rewrite this object to use arrow functions instead of the function keyword.
// 2. Make it a constructor so we can customize each instance.
// 3. Discuss - how do we feel about this feature? Helpful? Useless? Weird?
var Button = {
  message: 'Thanks fer clickn',
  onClick: function(event) {
    var spanElement = getSpanEl();
    spanElement.innerText = this.message;
  }
}

// ------------- TWO: Using `let`
var interestingFacts = [
  'Dogs can actually see in a limited range of colors.',
  'Pencil lead is not actually lead, but graphite.',
  'Snakes have so many eyelids (ok more like two)',
  'You\'re more likely to die by lightning strike than get eaten by a shark.',
]

// Rewrite this function to:
//  - 1. Use let instead of var where appropriate
//  - 2. Use the arrow function syntax
// Discuss - any interesting finds? How did you implement this?

function displayInterestingFacts() {
  var span = getSpanEl()
  span.innerText = ''

  for (var i = 0; i < interestingFacts.length; i++) {
    var liElement = document.createElement('li')
    liElement.innerText = interestingFacts[i]
    liElement.addEventListener('click', function() {
      alert(interestingFacts[i])
    })
    span.appendChild(liElement)
  }
}

// ------------- THREE: Default values for function parameters
//  - 1. Define default parameters for le chat
//  - 2. Use the arrow function syntax
//  - 3. Try using `let` instead of var in the meow function. 'Sup with that?
//  - 4. Allow a new volume and energy level to be passed in
// when you invoke `meow`. Use the object's attributes as defaults.
// BONUS! Try modifying this function to take an `options` object
// with default keys instead of ordered arguments. :mindblown:

function Cat(name, volume, energyLevel) {
  this.name = name;
  this.volume = volume;
  this.energyLevel = energyLevel;
  this.meow = function() {
    if (this.volume > 5) {
      var noise = 'MROW';
    } else {
      var noise = "mrow";
    }
    var exclamationPoints = '';
    for (var i = 0; i < energyLevel; i++) {
      exclamationPoints += '!';
    }
    return noise + exclamationPoints;
  }.bind(this)
}

function catSpeaks() {
  var span = getSpanEl();
  var cat = new Cat('Meowmers', 10, 3);
  span.innerText = cat.name + ' says ' + cat.meow();
}

// ------ helpers and stuff -------

window.onload = function() {
  var buttonElement = getButtonEl();
  buttonElement.addEventListener('click', Button.onClick);
}

function getButtonEl() {
  return document.getElementById('the-only-button');
}

function getSpanEl() {
  return document.getElementById('display');
}
