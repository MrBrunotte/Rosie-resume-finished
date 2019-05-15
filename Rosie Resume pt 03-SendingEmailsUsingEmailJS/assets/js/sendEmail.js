function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "email": contactForm.emailaddress.value,
        "message_html": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}
