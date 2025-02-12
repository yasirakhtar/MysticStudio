<?php
// Configurations
define('PASSWORD', 'zeo1122');
define('JSON_FILE_PATH', '../bot-inline.json');

// Load JSON file
$jsonData = [];
if (file_exists(JSON_FILE_PATH)) {
    $jsonContent = file_get_contents(JSON_FILE_PATH);
    $jsonData = json_decode($jsonContent, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        die('Failed to load JSON data: ' . json_last_error_msg());
    }
} else {
    die('JSON file not found');
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verify password
    if ($_POST['password'] !== PASSWORD) {
        echo "<script>alert('Invalid password');</script>";
    }

    // Get updated data from the form
    $updatedData = [
        "thumb_url" => $_POST['thumb_url'],
        "web_title" => $_POST['web_title'],
        "web_desc" => $_POST['web_desc'],
        "poster_img_link" => $_POST['poster_img_link'],
        "caption" => $_POST['caption'],
        "web_link_name" => $_POST['web_link_name'],
        "web_link" => $_POST['web_link']
    ];

    // Update JSON data
    $jsonData['post_data'] = $updatedData;

    // Save updated JSON to file
    if (file_put_contents(JSON_FILE_PATH, json_encode($jsonData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES))) {
        echo "<script>alert('JSON file updated successfully!');</script>";
    } else {
        echo "<script>alert('Failed to update JSON file.');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bot Data Update File</title>
    
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-box">
    <form method="POST" action="">
        <div class="pass-input-box">
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required>
        </div>

        <div class="web-info-box-main">
            <div class="web-info-box-input">
                <div class="web-info-item">
                    <label for="thumb_url">Thumbnail URL:</label><br>
                    <input type="text" id="thumb_url" name="thumb_url" value="<?= htmlspecialchars($jsonData['post_data']['thumb_url'] ?? '') ?>" required>
                </div>

                <div class="web-info-item">
                    <label for="web_title">Web Title:</label><br>
                    <input type="text" id="web_title" name="web_title" value="<?= htmlspecialchars($jsonData['post_data']['web_title'] ?? '') ?>" required>
                </div>
            </div>

            <div class="web-info-box-textarea">
                <label for="web_desc">Web Description:</label><br>
                <textarea id="web_desc" name="web_desc" rows="2" required><?= htmlspecialchars($jsonData['post_data']['web_desc'] ?? '') ?></textarea>
            </div>
        </div>

        <div class="post-main-info">
            <h3>Modify</h3>
            <div class="pass-input-box">
                <label for="poster_img_link">Poster Image Link:</label><br>
                <input type="text" id="poster_img_link" name="poster_img_link" value="<?= htmlspecialchars($jsonData['post_data']['poster_img_link'] ?? '') ?>" required>
            </div>

            <div class="web-info-box-textarea">
                <label for="caption">Caption:</label><br>
                <textarea id="caption" name="caption" rows="3" cols="50" required><?= htmlspecialchars($jsonData['post_data']['caption'] ?? '') ?></textarea>
            </div>

            <div class="web-info-box-input">
                <div class="web-info-item">
                    <label for="web_link_name">Web Link Name:</label><br>
                    <input type="text" id="web_link_name" name="web_link_name" value="<?= htmlspecialchars($jsonData['post_data']['web_link_name'] ?? '') ?>" required>

                </div>
                <div class="web-info-item">
                    <label for="web_link">Web Link:</label><br>
                    <input type="text" id="web_link" name="web_link" value="<?= htmlspecialchars($jsonData['post_data']['web_link'] ?? '') ?>" required>
                </div>
            </div>
        </div>

        <div class="btn-box">
            <button type="submit">Update JSON</button>
        </div>
    </form>
    </div>
</body>
</html>
