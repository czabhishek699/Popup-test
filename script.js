// Display the popup with animation when the page loads
window.onload = function() {
    document.getElementById('blur-background').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    setTimeout(function() {
        document.getElementById('popup').style.opacity = '1';
    }, 100); // Delay to show the popup with a fade-in effect
};

// Close the popup with animation when the close button is clicked
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('blur-background').style.display = 'none';
    }, 300); // Delay to hide the popup with a fade-out effect
});
