function tooltip() {
    $('.tooltip').tooltipster();
};


function drapAndDrop(){
    interact('.draggable')
        .draggable({
            autoScroll: true,
            // call this function on every dragmove event
            onmove: dragMoveListener
        });
};



function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    var translate = 'translate(' + x + 'px, ' + y + 'px)';
    target.style.webkitTransform = translate;
    target.style.transform = translate;

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}


function tapTarget(){
    interact('.tap-target')
        .on('tap', function (event) {
            alert(event.currentTarget.classList);
            event.preventDefault();
        })
        .on('doubletap', function (event) {
            alert(event.currentTarget.classList);
            event.preventDefault();
        })
};


<img src="img/pont.png" name="pont-epine" class="building pont  tooltip tap-target tooltipstered" style="top:935px; left:4180px" alt="Pont"></img>




