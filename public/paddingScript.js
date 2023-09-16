window.addEventListener('load', function() {
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    // Set body padding equal to navbar height
    body.style.paddingTop = navbar.clientHeight + 'px';

    // Update body padding on window resize
    window.addEventListener('resize', function() {
        body.style.paddingTop = navbar.clientHeight + 'px';
    });
});