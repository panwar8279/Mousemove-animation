/* :::: main JS mouse track :::: */

const body = document.body;

function cursorStyle(e){

    let cursor = document.createElement('div');

    cursor.setAttribute('class', 'swipe');

    cursor.setAttribute('style', 
        `left: ${e.clientX -10}px; 
         top: ${e.clientY -10}px;`);

    cursor.onanimationend = ()=>{
        cursor.remove();
    }

    body.insertAdjacentElement('beforeend', cursor);

};

document.addEventListener('mousemove', cursorStyle);
document.addEventListener('click', cursorStyle);


/* :::: same effect for touch displays :::: */

function touchStyle(e){

    let cursor = document.createElement('div');

    cursor.setAttribute('class', 'swipe');

  /* catch the clientX/Y coordinates with e.touches[0].clientX */
    cursor.setAttribute('style', 
        `left: ${e.touches[0].clientX}px; 
         top: ${e.touches[0].clientY}px;`);

    cursor.onanimationend = ()=>{
        cursor.remove();
    }

    body.insertAdjacentElement('beforeend', cursor);

};

document.addEventListener('touchmove', touchStyle);
