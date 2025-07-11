$(document).ready(function () {
  let size = 200;

  $('#ballon').click(function () {
    size += 10;
    if (size > 420) {
      $(this).css({
        width: '200px',
        height: '200px',
        backgroundColor: 'red'
      });
      size = 200;
    } else {
      $(this).css({
        width: size + 'px',
        height: size + 'px'
      });

      if (size <= 300) {
        $(this).css('background-color', 'red');
      } else if (size <= 400) {
        $(this).css('background-color', 'green');
      } else {
        $(this).css('background-color', 'blue');
      }
    }
  });
});
