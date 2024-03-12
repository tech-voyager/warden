const fetch = require('node-fetch');

async function api(token, method, endpoint, data = null) {
  try {
    const url = `https://discord.com/api/v10/${endpoint}`;
    const headers = {
      "Authorization": `Bot ${token}`,
      "Content-Type": "application/json",
    };
    const options = {
      method,
      headers
    };
    if (data) options.body = JSON.stringify(data);
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to ${method} data: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

module.exports = {
  api
};
