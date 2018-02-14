<?php

require 'vendor/autoload.php';

use Mailgun\Mailgun;

$params = $_POST;

$mg = Mailgun::create('key-1715c074f053673f6e3c4c79e8595390');

$mg->messages()->send('iamdowntownwindsor.com', [
    'from' => 'info@iamdowntownwindsor.com',
    'to' => 'corbettproductions@me.com',
    'subject' => 'A new submission from iamdowntownwindsor.com',
    'html' => "Contact Name: {$params['contact-name']} <br> Phone Number: {$params['phone']} <br> Email: {$params['email']} <br> Group Name: {$params['group-name']} <br> Party Date: {$params['party-date']} <br> Size of party: {$params['size-of-party']} <br> Message: {$params['help']}"
]);

$mg->messages()->send('iamdowntownwindsor.com', [
    'from' => 'info@iamdowntownwindsor.com',
    'to' => 'christiankomsa@me.com',
    'subject' => 'A new submission from iamdowntownwindsor.com',
    'html' => "Contact Name: {$params['contact-name']} <br> Phone Number: {$params['phone']} <br> Email: {$params['email']} <br> Group Name: {$params['group-name']} <br> Party Date: {$params['party-date']} <br> Size of party: {$params['size-of-party']} <br> Message: {$params['help']}"
]);

$mg->messages()->send('iamdowntownwindsor.com', [
    'from' => 'info@iamdowntownwindsor.com',
    'to' => 'lucasmcconnell22@gmail.com',
    'subject' => 'A new submission from iamdowntownwindsor.com',
    'html' => "Contact Name: {$params['contact-name']} <br> Phone Number: {$params['phone']} <br> Email: {$params['email']} <br> Group Name: {$params['group-name']} <br> Party Date: {$params['party-date']} <br> Size of party: {$params['size-of-party']} <br> Message: {$params['help']}"
]);
