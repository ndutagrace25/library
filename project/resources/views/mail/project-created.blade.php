@component('mail::message')
# Introduction
#New Project: 


The body of your message.

@component('mail::button', ['url' => url('/projects/')])
View Project
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
