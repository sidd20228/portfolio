document.addEventListener("DOMContentLoaded", function() {
    
    const elements = document.querySelectorAll('.animate');
    
    
    function showElements() {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, index * 500); // Delay each element by 500ms
        });
    }

    
    showElements();
});
