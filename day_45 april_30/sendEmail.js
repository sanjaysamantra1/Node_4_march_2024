import express from 'express';
import nodemailer from 'nodemailer';

const app =express();

app.get('/', (req, res) => {
    res.send('api working')
})
app.get('/sendMail', async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "sanjaysamantra2@gmail.com",
            pass: "vqnz angb vioh jbmu", // Google App Password
        },
    });

    let mailInfo = {
        from: 'sanjaysamantra2@gmail.com', // sender address
        to: ["aviksarkar29@gmail.com", "manjusha772019@gmail.com","srinivas.dasari21@gmail.com"], // list of receivers
        subject: "Test Email Using NodeJS", // Subject line
        html: `
            <h1>This is a Test Email</h1>
            <h3 style="color:red;text-align:center">Congratulations!!!</h3>
            <p>Please follow the below steps to claim your amount</p>

            <pre>
                Hello, Worls
                Hiiiiii
                Good Morning
            </pre>
        `,
        attachments:[
            {fileName:'profile.png',path:'./profile.png'}
        ]
    }
    await transporter.sendMail(mailInfo);
    res.send("Mail Sent Succesfully")
});
app.listen(5000,()=>{console.log('server started')});