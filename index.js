//  for the slide section of the teacher
 let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        next.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            let slide = document.querySelector('.slide');
            if (items.length > 0) {
                slide.appendChild(items[0]);
            }
        });
        prev.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            let slide = document.querySelector('.slide');
            if (items.length > 0) {
                slide.prepend(items[items.length - 1]);
            }
        });





        // form script
    
document.querySelectorAll('form[action="https://formspree.io/f/xqaydpbw"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
        // Let the form submit normally
        setTimeout(function() {
            form.reset();
        }, 1000); // Wait a moment for Formspree to process
    });
});


//max width functions

function shownav(){
    navbar.style.display='block';
    container.style.display='none'
};
function hidenav(){
    navbar.style.display='none'
     container.style.display='block'
}