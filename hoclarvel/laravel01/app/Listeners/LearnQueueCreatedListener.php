<?php

namespace App\Listeners;

use App\Jobs\SendMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class LearnQueueCreatedListener
{
    /**
     * Create the event listener.
     */
    public function __construct() {}

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        // $data = [
        //     'email' => 'hoangan.web@gmail.com',
        //     'subject' => 'Send mail from queue',
        //     'content' => 'Test send mail from queue: ' . url('/')
        // ];
        // $email = $data['email'];
        // $subject = $data['subject'];
        // $content = $data['content'];
        // Mail::raw($content, function ($message) use ($email, $subject) {
        //     $message->to($email)
        //         ->subject($subject);
        // });
        SendMail::dispatch([
            'email' => 'hoangan.web@gmail.com',
            'subject' => 'Send mail from queue',
            'content' => 'Test send mail from queue: ' . url('/')
        ]);
    }
}
