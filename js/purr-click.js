$(function() {
  // Get the audio player element
  var player1 = document.getElementById('player1');
  $('img').click(function() {
    // Play the audio when an image is clicked
    player1.play();
  });
});
