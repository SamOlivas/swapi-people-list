const peopleList = document.getElementById('peopleList');
const data = {
  people: [],
};

async function getPeople () {
  const reply = await fetch ('https://swapi.co/api/people/');
  const people = await reply.json();
  peopleArr = await people.results.map( person => person );
  data.people = peopleArr;
  render(peopleList, data.people);
};


function render (element, data) {
  element.innerHTML = `
  <ul>
  ${data.map( item =>`<li> ${item.name} </li>`
  ).join('')}
  </ul>
  `;
}


peopleList.addEventListener('click', function (ev) {
  let target = ev.target
  console.log(target)
})

getPeople()
