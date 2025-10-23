document.getElementById("findButton").addEventListener("click", async () => {
  const songName = document.getElementById("songInput").value.trim();
  const resultsDiv = document.getElementById("results");

  if (!songName) {
    resultsDiv.innerHTML = "<p>Please enter a song name!</p>";
    return;
  }

  // Placeholder: This will later use Spotify API
  resultsDiv.innerHTML = `<p>Searching for songs similar to "<strong>${songName}</strong>"...</p>`;

  // Fake "results" for now to show what it will look like
  setTimeout(() => {
    const exampleSongs = [
      "Song 1 - Example Artist",
      "Song 2 - Example Artist",
      "Song 3 - Example Artist"
    ];

    resultsDiv.innerHTML = `
      <h3>Similar Songs:</h3>
      <ul>${exampleSongs.map(song => `<li>${song}</li>`).join('')}</ul>
    `;
  }, 1000);
});
