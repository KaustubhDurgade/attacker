function revealPrize() {
  const prize = document.getElementById('prize').innerText;
  document.getElementById('output').innerText = `The prize is: ${prize}`;
}