const data = [];

async function getPeople (data) {
  const reply = await fetch ('https://swapi.co/api/people/')
  const people = await reply.json()
  return people
};

console.log(data)

const peopleList = document.getElementById('peopleList')
console.log(peopleList)
