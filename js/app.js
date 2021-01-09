// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDeleteButton);

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

  
  const team = document.createElement('h4');
  team.textContent = form.team.value;
  newListItem.appendChild(team);
  
  const position = document.createElement('h4');
  position.textContent = form.position.value;
  newListItem.appendChild(position);

  console.log(form.stillPlaying.value);

  return newListItem;
}

const handleDeleteButton = (e) => {
  const playerList = document.querySelector('#player-list');
  playerList.innerHTML = '';
}


// Append the submitted data to the list