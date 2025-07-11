const ballon = document.getElementById('ballon');

const colors = ['red' , 'green' , 'blue'];
let size = 200;
let colorIndex = 0;

function updateBallon() {
    ballon.style.width = size +'px';
    ballon.style.height = size + 'px';
    ballon.style.backgroundColor = colors[colorIndex];
}
ballon.addEventListener('click',() => {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    if (size >420) {
        alert('Boom!');
        size = 200;
        colorIndex = 0;
    }
    updateBallon ();
});

ballon.addEventListener('mouseleave', () => {
    if (size >200) {
        size -=5;
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBallon ();
    }
});
updateBallon();