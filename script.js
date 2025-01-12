
function toggleBackgroundColor() {
  const currentColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = currentColor === 'lightblue' ? 'lightgreen' : 'lightblue';
}


function adjustTextSize() {
  const slider = document.getElementById('text-size-slider');
  const output = document.getElementById('slider-output');
  output.style.fontSize = slider.value + 'px';
  output.textContent = `Text size: ${slider.value}px`;
}


function showModal() {
  document.getElementById('modal').style.display = 'flex';
}


function hideModal() {
  document.getElementById('modal').style.display = 'none';
}


function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  let errorText = '';

 
  if (name.length < 3) {
    errorText += 'Name must be at least 3 characters long.<br>';
  }

 
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    errorText += 'Please enter a valid email address.<br>';
  }

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordPattern.test(password)) {
    errorText += 'Password must be at least 8 characters long, contain one uppercase letter and one number.<br>';
  }

 
  if (errorText) {
    errorMessage.innerHTML = errorText;
    return false; 
  }

 
  return true;
}


function displayMessage() {
  const dropdown = document.getElementById('dropdown');
  const message = document.getElementById('dropdown-message');
  message.textContent = `You selected: ${dropdown.value}`;
}
