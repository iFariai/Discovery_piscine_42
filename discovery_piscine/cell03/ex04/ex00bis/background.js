// background.js (com jQuery)
$(document).ready(function() {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Substitui o onclick inline no botão
  $('button').click(function() {
    const randomColor = getRandomColor();
    $('body').css('background-color', randomColor);
  });
});