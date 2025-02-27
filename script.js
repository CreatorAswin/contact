document.getElementById('date').addEventListener('change', function() {
    var selectedDate = new Date(this.value);
    var day = selectedDate.getDay();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day').value = dayNames[day];

    var minDate = new Date('2025-02-05');
    var maxDate = new Date('2025-02-17');

    if (selectedDate < minDate || selectedDate > maxDate || day === 0 || day === 6) {
        alert("Please select a date between 05/02/2025 and 17/02/2025, excluding weekends.");
        this.value = '';
        document.getElementById('day').value = '';
    }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        day: document.getElementById('day').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwHqSbGaujjc2q-tQRCBlBlQlvH4qgJT7VaMJ1oUp84L6RgAysa8tXKMHlNnDrcRGM3/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        document.getElementById('myForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});