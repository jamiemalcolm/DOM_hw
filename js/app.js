// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

});
// When the form is submitted, 
// access the data from the form in the form's submit event object
const handleFormSubmit = (e) => {
  e.preventDefault();
  const newListItem = createNewListItem(e.target);
  const playerList = document.querySelector('#player-list');
  playerList.appendChild(newListItem);

  e.target.reset();
}



const createNewListItem = (form) =>{
  const newListItem = document.createElement('li');
  newListItem.classList.add('player-list-item');

  const name = document.createElement('h4');
  name.textContent = `${form.first.value} ${form.last.value}`;
  newListItem.appendChild(name);

  // const lastName = document.createElement('h4');
  // lastName.textContent = form.last.value;
  // newListItem.appendChild(lastName);

  
  const team = document.createElement('h5');
  team.textContent = form.team.value;
  newListItem.appendChild(team);
  
  return newListItem;
  // const position = document.createElement('h3');
}



// Append the submitted data to the list