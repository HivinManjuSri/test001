document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var searchInput = document.getElementById('search').value;

        if (searchInput.toLowerCase().includes('<script>alert(1)</script>')) {
            alert('Potential XSS attack detected!');
            console.log("FLAG!@#$%WELL%^&DONE");
            event.preventDefault();
        } else if (searchInput.toLowerCase() === 'correct answer') {
            var flagElement = document.createElement('p');
            flagElement.textContent = "FLAG!@#$%WELL%^&DONE";
            document.body.appendChild(flagElement);
        }
    });
});
