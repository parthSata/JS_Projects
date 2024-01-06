const selectLi = document.querySelectorAll('.button');
const selectBody = document.querySelector('body');
selectLi.forEach((li) => {
  console.log(li);
  li.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'Red') {
      selectBody.style.backgroundColor = 'red';
    } else if (e.target.id == 'Green') {
      selectBody.style.backgroundColor = 'green';
    } else if (e.target.id == 'Blue') {
      selectBody.style.backgroundColor = 'blue';
    } else if (e.target.id == 'Orange') {
      selectBody.style.backgroundColor = 'orange';
    }
  });
});
