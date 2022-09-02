// Initial Handshake
console.log('DEBUG - script.js: OK!');

// Global variables and initializations
const startBtn = document.getElementById('startButton');

// Start button on click
startBtn.addEventListener('click', () => {
    console.log('DEBUG - startBtn: CLICKED');

    // Local variables
    const cellAmount = 100;
    const mainBox = document.getElementById('main-box');

    // Create cells within the box
    for (let i = 0; i < cellAmount; i++){
        const cell = createSquare(i);

        mainBox.append(cell);
    }
})



// FUNCTIONS
function createSquare(value) {
    value = (value === null || typeof value === undefined) ? '' : value

    // Function Local Variables
    const square = document.createElement('div');
    square.classList.add('box-cell', 'd-flex', 'justify-content-center', 'align-items-center');

    const content = document.createElement('p');
    content.classList.add('text-center', 'm-0');

    if(isAnInt(value)){
        content.innerHTML = value;
        console.log(content.innerHTML);
    }
    
    square.append(content);
    console.log('DEBUG - cell created', value); 

    square.addEventListener('click', popBoxes);

    return square;
}


function popBoxes() {
    console.log(this);
    console.log(this.children[0].innerHTML);
    value = isAnInt(this.children[0].innerHTML) ? parseInt(this.children[0].innerHTML) : 0;

    if(!this.classList.contains('popped')) {
        this.classList.add('popped');
        if (value % 2 == 0) {
            this.classList.add('bg-success', 'text-dark');
        } else {
            this.classList.add('bg-warning', 'text-dark');
        }
                
    } else {
        this.classList.remove('popped');
        this.classList.remove('bg-success', 'bg-warning', 'text-dark');
    }

    console.log(this.classList);
}


function isAnInt(value){
    return (typeof value === undefined || value === null || isNaN(parseInt(value))) ? false : true;
}