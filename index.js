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
  render(peopleList, data.people);
};

//RENDER SECTION TO PAGE
function render (element, data) {
  element.innerHTML = `
  <ul>
  ${data.map( item =>`<li> ${item.name} </li>`
  ).join('')}
  </ul>
  `;
}

// PROVIDES INDEX OF CHAR IN DATA ON CLICK [current state: console logs index]
peopleList.addEventListener('click', function (ev) {
  let charName = ev.target.innerHTML
  console.log(charName)
  let charArray = data.people
  for (let i = 0; i < charArray.length; i++) {
    console.log(charArray[i].name)
    if ( ' '+charArray[i].name +' '  === charName) {
      console.log( i )
    }
  }
});

getPeople()
