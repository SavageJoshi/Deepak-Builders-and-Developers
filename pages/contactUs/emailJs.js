function SendMail() {
    // Get form input values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email_id").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if any field is empty
    if (fullName === "" || email === "" || subject === "" || message === "") {
        // Display alert for empty fields
        alert("Please fill out all the fields.");
        return; // Exit function if any field is empty
    }

    // Phone number validation rules
    if (!/^\d{10}$/.test(email)) {
        // Display alert if phone number is invalid
        alert("Please enter a valid 10-digit phone number without spaces or special characters.");
        return; // Exit function if phone number is invalid
    }

    // If all fields are filled, proceed to send the email
    var params = {
        from_name: fullName,
        email_id: email,
        subject: subject,
        message: message,
    }

    emailjs.send("service_12534z5", "template_1gwupj6", params).then(
        function (res) {
            if (res.status === 200) {
                // Successful response
                alert("Message sent! Thank you for reaching out.");
            } else {
                // Error response
                alert("Error. Please try again later.");
            }
        },
        function (error) {
            // Handle any errors during the API request
            alert("Error. Please try again later. Or reach out to us at deepakbuilderssales@gmail.com");
        }
    );
}

function reset() {
    document.getElementById("contact-form").reset();
}

// function SendMail() {
//     var fullName = document.getElementById("fullName").value;
//     var email = document.getElementById("email_id").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;

//     if (fullName === "" || email === "" || subject === "" || message === "") {
//         alert("Please fill out all the fields.");
//         return;
//     }

//     if (!/^\d{10}$/.test(email)) {
//         alert("Please enter a valid 10-digit phone number without spaces or special characters.");
//         return;
//     }

//     var data = {
//         apikey: "iyufndsi7f98sd79f87ds9f87",
//         lead_name: fullName,
//         mobile_no: email,
//         country_code: "+91",
//         notes: `Subject: ${subject}, Message: ${message}`,
//         visitor_ip: "192.168.2.1",
//         full_url: "https://www.deepakbuildersanddevelopers.com/"
//     };

//     fetch('http://127.0.0.1:5511/send-to-crm', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         alert("Message sent! Thank you for reaching out.");
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert("Error. Please try again later.");
//     });
// }

