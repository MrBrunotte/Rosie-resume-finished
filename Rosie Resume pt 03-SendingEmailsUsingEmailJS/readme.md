# Setting up the contact form

## Setup EmailJS account
[EmailJS-signin](https://dashboard.emailjs.com/account/login?next=%2F)

There are two types of services: Transactional and Personal

I use the personal Gmail email service.

1) Choose type of service (Transactional/Personal).

2) Connect account

3) Check box for test email and then "Add service"

4) Check in my email account that the test email was sent to me

### Email Template setup in EmailJS

1) Click on "Email Template" section (second option to the left)

2) Chose "Create New Template" and "Blank" template

3) Supply Template name: Rosie (which will be the id of the template )

4) Set subject if we want that to be attached to the email. For example: New message from {{from_name}}

5) Set "To email": mrbruntte@gmail.com, "From": Stefan

6) Uncheck the "Use default Email Adress"

7) Save and send a test email to my inbox (A modal should appear). Fill in the "Template parameters" and click "Send test mail". And there should be an "OK" in the "Result" box. Check your inbox!

### Connect the contact.html to emailJS

1) Click on "Docs" upper right corner

2) Go down to SDK and then click on "Installation"

3) Copy the codesnippet in the "Browser Script" and paste it in the contact.html file above the closing head tag (Line 12 - 16)

4) Get the user ID (rosie) from the "Account" in the dashboard (user id: user_8joaCq81tatp5wO2YADJy)

5) Copy the user ID ("user_8joaCq81tatp5wO2YADJy") and paste it in the emailjs.init() function (line 14)

6) Go back to "instructions" and look at the simple example. Copy the emailjs.send() function and paste it in line 15.

7) This is a selfinvoking function so when I refresh the page I should get an email in my inbox (check if it is working)

### Edit email template to pass in parameters and content

#### variables in emailJS

In the template variables are represented with two {{  }} curly brackets, and this is placeholder for variable names.

1) Add the variables in the "Template parameters":
    1.1) from_name      Stefan
    1.2) to_name        Rosie
    1.3) email          mrbrunotte@gmail.com
    1.4) message_html   Message I want to send!

2) Click the "Send test email" button and if everything is correct you should get an "OK" in the result box.

### Back to contact.html and sendEmail.js file

1) Remove the test emailjs.send(function) Line 15

2) We update the form element so that when a form has been submitted, we want to invoke a function that will send the email to us.

    2.1) add an onsubmit="return sendMail(this);" function Line 66

3) Add a script tag linked to the sendEmail.js file in the js folder

## ERROR

Emails are sent but not from the form! "Test" emails are sent from the EmailJS template!

The form is not sending properly, there is a bug somewhere that I havent found! I think it is in the sendEmail.js file
The keys are the same as in the EmailJS template ("from_name", "email")
I get a message in "Events" in EmailJS that says "no-referrer", dont know the meaning of this.
EmailJS keeps sending the "Test" email from the template instead of the form from the contact.html file!
