const form = document.querySelector('form');
// const height = parseInt(document.getElementById('height').value); // Ths usecase will give you empty value

form.addEventListener('submit', (e) => {
  e.preventDefault(); //for Stop submit for few minutes

  const height = parseInt(document.querySelector('#height').value); //for geting textbox value
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please Enter Valid Height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Enter Valid Weight';
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    results.innerHTML = `The BMI is  ${bmi}`;
  }
});
