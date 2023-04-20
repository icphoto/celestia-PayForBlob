// app.js
document
  .getElementById('cpfb-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const namespaceId = document.getElementById('namespace-id').value;
    const data = document.getElementById('data').value;

    const resultElement = document.getElementById('result');
    try {
      const response = await fetch('http://localhost:26659/submit_pfb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          namespace_id: namespaceId,
          data: data,
          gas_limit: 80000,
          fee: 2000
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const result = await response.json();
      resultElement.textContent = `Success: ${JSON.stringify(result, null, 2)}`;
    } catch (error) {
      resultElement.textContent = `Error: ${error.message}`;
    }
  });
