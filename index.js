const peopleList = document.getElementById('peopleList');
const peopleDetails = document.getElementById('details');
const data = {
  people: [],
};

//gets people and renders section
async function getPeople () {
  const reply = await fetch ('https://swapi.co/api/people/');
  const people = await reply.json();
  peopleArr = await people.results.map( person => person );
  data.people = peopleArr;
  renderLeft (peopleList, data.people);
};

//RENDER SECTION TO PAGE
function renderLeft (element, data) {
  element.innerHTML = `
  <ul>
  ${data.map( item =>`<li> ${item.name} </li>`
  ).join('')}
  </ul>
  `;
}

function renderRight (element, obj) {
  const detailArr = Object.keys(obj).map(function(key) {
    return [key, obj[key]]
  })
  element.innerHTML = `
  <ul>
  ${detailArr.map( stat =>`<li> ${stat} </li>`
  ).join('')}
  </ul>
  `;
}

// PROVIDES INDEX OF CHAR IN DATA ON CLICK [current state: console logs index]
peopleList.addEventListener('click', function (ev) {
  let charName = ev.target.innerHTML
  let charArray = data.people
  let charIndex = 0
  for (let i = 0; i < charArray.length; i++) {
    if ( ' '+charArray[i].name +' '  === charName) {
      charIndex = i
    };
  };
  let charObject = data.people[charIndex]
  renderRight(peopleDetails, charObject)
});

getPeople()
