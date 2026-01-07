<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendMail implements ShouldQueue
{
    use Queueable;

    private $data;
    /**
     * Create a new job instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $email = $this->data['email'];
        $subject = $this->data['subject'];
        $content = $this->data['content'];
        Mail::raw($content, function ($message) use ($email, $subject) {
            $message->to($email)
                ->subject($subject);
        });
    }
}
