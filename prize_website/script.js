async function fetchPrize() {
    const response = await fetch('/prize');
    const data = await response.json();
    document.getElementById('output').innerText = `The prize is: ${data.prize}`;
  }