document.addEventListener('DOMContentLoaded', function() {
    
    var form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        var searchInput = document.getElementById('search').value;
        
        if (searchInput.toLowerCase().includes('<script>alert(1)</script>')) {
            alert('FLAG!@#$%WELL%^&DONE');
            
            event.preventDefault();
            
        }
    });
});
