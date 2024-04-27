document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('addCustomerForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log("Form data submitted: ", data);
        // Here you would typically send the data to the server via fetch or AJAX
    });
});
