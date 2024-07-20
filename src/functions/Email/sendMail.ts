// const emailClient = require("./createClient");

const emailClient = require("./createClient");

export class sendMail {
    email: string;
    body: string;

    constructor({ email, body }: { email: string, body: string }) {
        this.email = email;
        this.body = body;
    };

    async send() {
        try {
            emailClient.send({
                Host: "smtp.elasticemail.com",
                Username: "support@blackmatter.agency",
                Password: "4ED980808A9A67BEF04812491383041EC0D3",
                To: this.email,
                From: "support@blackmatter.agency",
                Subject: "Sua confirmação de registro.",
                Body: this.body
            });
        } catch (err) {
            console.log(err);
        };
    };
};