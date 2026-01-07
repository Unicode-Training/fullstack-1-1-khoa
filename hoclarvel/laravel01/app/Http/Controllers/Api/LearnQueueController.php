<?php

namespace App\Http\Controllers\Api;

use App\Events\LearnQueueCreatedEvent;
use App\Http\Controllers\Controller;
use App\Jobs\SendMail;
use Illuminate\Http\Request;

class LearnQueueController extends Controller
{
    public $tries = 3; //Số lần chạy lại nếu failed

    public $retryAfter = 30;

    public function dispatchQueue()
    {
        SendMail::dispatch([
            'email' => 'hoangan.web@gmail.com',
            'subject' => 'Send mail from queue',
            'content' => 'Test send mail from queue: ' . url('/')
        ]);
        //->delay(now()->addMinutes(1));
    }

    public function create()
    {
        $status = true;
        if ($status) {
            //Ok
            //Dispatch Event --> Listener
            LearnQueueCreatedEvent::dispatch([
                'name' => 'Hoàng An'
            ]);
        }
    }
}
