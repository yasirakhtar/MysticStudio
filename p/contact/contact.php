<?php
// JSON file path
$jsonFile = 'users.json';

// Function to validate email format
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to check if email exists in the JSON file
function emailExists($email, $jsonFile) {
    if (!file_exists($jsonFile)) {
        return false; // File does not exist, so email cannot exist
    }

    $data = json_decode(file_get_contents($jsonFile), true);
    if (isset($data[0]['emails']) && in_array($email, $data[0]['emails'])) {
        return true; // Email exists in the JSON file
    }
    return false;
}

// Handling form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);

    // Check if email is valid
    if (!isValidEmail($email)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
        exit;
    }

    // Check if email already exists
    if (emailExists($email, $jsonFile)) {
        echo json_encode(['status' => 'error', 'message' => 'Email already exists']);
        exit;
    }

    // Save email to JSON file
    $data = file_exists($jsonFile) ? json_decode(file_get_contents($jsonFile), true) : [['emails' => []]];
    $data[0]['emails'][] = $email;
    file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));

    echo json_encode(['status' => 'success', 'message' => 'Thanks For Subscribing..']);
    exit;
}

//end
?>
