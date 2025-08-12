<?php
function safe($v){ return htmlspecialchars(trim($v)); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

$fullname = isset($_POST['fullname']) ? safe($_POST['fullname']) : '';
$email = isset($_POST['email']) ? safe($_POST['email']) : '';
$mobile = isset($_POST['mobile']) ? safe($_POST['mobile']) : '';
$address = isset($_POST['address']) ? safe($_POST['address']) : '';
$items = isset($_POST['items']) ? $_POST['items'] : array();
$quantity = isset($_POST['quantity']) ? safe($_POST['quantity']) : '1';
$deliveryDate = isset($_POST['deliveryDate']) ? safe($_POST['deliveryDate']) : '';
$deliveryTime = isset($_POST['deliveryTime']) ? safe($_POST['deliveryTime']) : '';
$payment = isset($_POST['payment']) ? safe($_POST['payment']) : '';
$instructions = isset($_POST['instructions']) ? safe($_POST['instructions']) : '';
$confirm = isset($_POST['confirm']) ? true : false;

$errors = array();
if ($fullname === '') $errors[] = 'Full name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email is required.';
if ($address === '') $errors[] = 'Delivery address is required.';
if (!$confirm) $errors[] = 'You must confirm your order.';
if (empty($items)) $errors[] = 'Please select at least one grocery item.';
if ($deliveryDate === '') $errors[] = 'Delivery date is required.';

?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Order Confirmation</title>
  <style>body{font-family:Arial,Helvetica,sans-serif;padding:20px;background:#f6f7fb;color:#222} .card{max-width:780px;margin:0 auto;background:#fff;padding:18px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.06)}</style>
</head>
<body>
  <div class="card">
  <?php if(!empty($errors)): ?>
    <h2>There were problems with your submission</h2>
    <ul>
      <?php foreach($errors as $err) echo '<li>'.htmlspecialchars($err).'</li>'; ?>
    </ul>
    <p><a href="index.html">Go back to the form</a></p>
  <?php else: ?>
    <h2>Order Received</h2>
    <p>Thank you, <strong><?php echo $fullname; ?></strong>. Your order has been received.</p>

    <h3>Order Summary</h3>
    <ul>
      <li><strong>Email:</strong> <?php echo $email; ?></li>
      <li><strong>Mobile:</strong> <?php echo $mobile ?: '—'; ?></li>
      <li><strong>Address:</strong> <?php echo $address; ?></li>
      <li><strong>Items:</strong> <?php echo htmlspecialchars(implode(', ', array_map('safe', $items))); ?></li>
      <li><strong>Quantity:</strong> <?php echo $quantity; ?></li>
      <li><strong>Delivery Date:</strong> <?php echo $deliveryDate; ?></li>
      <li><strong>Delivery Time:</strong> <?php echo $deliveryTime ?: 'Any time'; ?></li>
      <li><strong>Payment Method:</strong> <?php echo $payment; ?></li>
      <li><strong>Special Instructions:</strong> <?php echo $instructions ?: '—'; ?></li>
    </ul>

    <p><a href="index.html">Place another order</a></p>
  <?php endif; ?>
  </div>
</body>
</html>