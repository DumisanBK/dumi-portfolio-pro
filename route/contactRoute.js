const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;

  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({
      msg: "Please fill all the fields, I am trying to send the email but the fields are empty",
    });
  }

  console.log(data);
  let smtpTransporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "brownkaunda13@gmail.com",
    subject: `message from ${data.name}`,
    html: `
          <li>Email: ${data.email}</li></ul>
          <h3>Message</h3>
          <p>${data.message}</p>`,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error) console.log(error);
      res.status(200).json({ msg: "Thank for contacting Dumisani B Kaunda" });
    } catch (error) {
      if (error)
        return res.status(500).json({ msg: "There is a server error" });
    }
  });
});

module.exports = router;
