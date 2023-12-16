
document.addEventListener('DOMContentLoaded', function () {
  var generateMemeButton = document.getElementById('generateMemeButton');
  var memeImage = document.getElementById('memeImage');

  generateMemeButton.addEventListener('click', function () {
    fetch('https://meme-api.com/gimme')
      .then(response => response.json())
      .then(data => {
        memeImage.src = data.url;
      })
      .catch(error => {
        console.error('Error fetching meme:', error);
        alert('Error fetching meme. Please try again.');
      });
  });
});
