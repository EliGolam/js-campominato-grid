// Initial Handshake
console.log('DEBUG - script.js: OK!');

// Global variables and initializations
const startBtn = document.getElementById('startButton');


/* ************************************************************************************** */
// Start button on click
startBtn.addEventListener('click', () => {
    console.log('DEBUG - startBtn: CLICKED');

    // Local variables
    const mainBox = document.getElementById('main-box');

    if(!mainBox.classList.contains('active')) {
        // Activate mainBox
        mainBox.classList.add('active');
        startBtn.textContent = 'Reset';

        const cellAmount = 100;
        const numSet = generateRandSet(cellAmount);
        

        // Create cells within the box
        for (const num of numSet){
            console.log('DEBUG - cell number:', num);
            const cell = createSquare(num);
            cell.addEventListener('click', popBoxes);

            mainBox.append(cell);
        }

    } else {
        while(mainBox.firstChild) {
            mainBox.removeChild(mainBox.firstChild);
        }
        
        // Deactivate mainBox
        mainBox.classList.remove('active');
        startBtn.textContent = 'Start';
    }    
});



/* ************************************************************************************** */
// FUNCTIONS
function createSquare(value) {
    value = (value === null || typeof value === undefined) ? '' : value

    // Function Local Variables
    const square = document.createElement('div');
    square.classList.add('box-cell', 'd-flex', 'justify-content-center', 'align-items-center');

    const content = document.createElement('p');
    content.classList.add('text-center', 'm-0', 'cell-content');

    if(isAnInt(value)){
        content.textContent = value;
        console.log(content.textContent);
    }
    
    square.append(content);
    console.log('DEBUG - cell created', value); 

    return square;
}


function popBoxes() {
    console.log(this);
    const content = this.querySelector('.cell-content');
    console.log(content, content.textContent);
    value = isAnInt(content.textContent) ? parseInt(content.textContent) : 0;

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


function generateRandSet(size) {
    const randSet = new Set();

    while (randSet.size < size){
        randSet.add(Math.ceil(Math.random() * size));
    }

    console.log(randSet.size, randSet);

    return randSet;
}


function isAnInt(value){
    return (typeof value === undefined || value === null || isNaN(parseInt(value))) ? false : true;
}

// Function to randomize array
function randomNumArray () {
    const array = [];

    array.sort(function(){
        const random = Math.round(Math.random);
        return random === 1 ? 1 : -1;
    })

    console.log(array);

    return array;
}