const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abhishek.zala@digi-corp.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you like the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abhishek.zala@digi-corp.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}, I hope to see you sometime back soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}