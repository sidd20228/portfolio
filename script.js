document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class 'animate'
    const elements = document.querySelectorAll('.animate');
    
    // Function to add 'show' class to elements with delay
    function showElements() {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, index * 500); // Delay each element by 500ms
        });
    }

    // Initially, call the function to show elements
    showElements();
});
