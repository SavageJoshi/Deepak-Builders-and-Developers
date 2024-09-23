<?php
header("Access-Control-Allow-Origin: *"); // Allow all origins or specify your frontend URL
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow the necessary HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get the JSON input from the frontend
    $data = json_decode(file_get_contents('php://input'), true);

    // Set up the API URL for the third-party service
    $apiUrl = 'https://dbd.360enrich.io/api/method/marketingcenter.lead.create_website_dbdgroup_lead';

    // Create a cURL session
    $ch = curl_init($apiUrl);

    // Set the cURL options for sending a POST request with JSON data
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: Bearer YOUR_API_KEY', // Add your API key if necessary
    ));

    // Execute the cURL request and get the response
    $response = curl_exec($ch);

    // Close the cURL session
    curl_close($ch);

    // Return the response to the frontend
    echo $response;
} else {
    echo json_encode(["message" => "Only POST requests are allowed."]);
}
