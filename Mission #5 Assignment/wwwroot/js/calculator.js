$(document).ready(function () {
    const hourlyRate = 25;

    $('#calculateBtn').click(function () {
        var hours = $('#hours').val();

        // Validation: check if input is a positive number
        if (hours === '' || isNaN(hours) || parseFloat(hours) <= 0) {
            $('#hoursError').show();
            $('#totalCost').val('');
            return;
        }

        // Hide error message if validation passes
        $('#hoursError').hide();

        // Calculate total
        var total = parseFloat(hours) * hourlyRate;

        // Display the total formatted as currency
        $('#totalCost').val('$' + total.toFixed(2));
    });

    // Clear error when user starts typing
    $('#hours').on('input', function () {
        $('#hoursError').hide();
    });
});
