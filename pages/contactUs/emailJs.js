async function SendMail() {
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
        apikey:'iyufndsi7f98sd79f87ds9f87',
        lead_name: fullName,
        mobile_no: email,
        country_code: "+91",
        project: subject,
        notes: message,
    }

    const header = {
        'Content-Type': 'application/json', // Sending data as JSON
        // 'Cache-Control': 'no-cache',       
        // 'Pragma': 'no-cache',
        // 'Expires': '0',
        
    };

    try {
        console.log(params);
        const response = await fetch('https://dbd.net.in/backend/proxy.php', {
            method: 'POST',
            // mode: 'no-cors',
            headers: header, 
            body: JSON.stringify(params), 
        });

if (response.ok) {
            const responseData = await response.json();
            // console.log('Response:', responseData);
            alert('Your message has been sent successfully!');
        } else {
            console.error('Error:', response.statusText);
            alert('There was an error sending your message. Please try again.');
        }

    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    }

    
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

