const axios = require('axios');
const generateLyrics = async () => {
  const prompt = document.getElementById("prompt-input").value;
  const apiKey = "9kubcVIiBUGs4bBUwZVNT3BlbkFJgbKMEF5qGVUJp5pBH45K";
  const endpoint = "https://api.openai.com/v1/engines/davinci/completions";

  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 1000,
    api_key: apiKey
  };
  try {
    const response = await axios.post(endpoint, data);
    const lyrics = response.data.choices[0].text;
    document.getElementById("lyrics-output").innerHTML = lyrics;
  } catch (error) {
    console.error(error);
  }
};
