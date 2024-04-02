class Email {
  get_headers() {
    const headers = [];
    headers.push("MIME-Version: 1.0");
    headers.push("Content-type: text/html; charset=iso-8859-1");
    headers.push(
      `From: HourlyBets Account <no-reply@${window.location.hostname}>`
    );
    // headers.push(`Cc: international@${window.location.hostname}`);
    return headers;
  }

  recovery_email_template(code) {
    const text = `
        <html>
          <body style='font-family: sans-serif;'>
            <img src='https://hourlybets.com/assets/images/logo.png' />
            <p style='height: 50px'></p>
            <h3 style='color:#000;'>Reset your password</h3>
            <p>We are sorry you have been locked out of your account.</p>
            <p>Use the reset link below to update your HourlyBets password and continue predicting interesting world events. This link will expire in 15 minutes.</p>
            <p style='color:#080;font-size:18px;'><a href='https://${window.location.hostname}/#/account-reset/${code}'>Reset your password</a></p>
            <p>If the link above doesn't work, copy the link below and paste it to your browser:</p>
            <p>https://${window.location.hostname}/#/account-reset/${code}</p>
            <p style='height: 50px'></p>
            <hr />
            <p>With <img style='height: 15px' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-d3LozscUMBY%2FVtz13aLffMI%2FAAAAAAAALp0%2FY9pFym980s0%2Fs1600%2Flove.png&f=1&nofb=1' /> from HourlyBets Account Team</p>
            <p style='opacity: .6; font-size: 13px'>You are receiving this message because you opted to recover your account on the HourlyBets web platform. If you did not do this, please disregard this email.</p>
          </body>
        </html>`;
    return text;
  }

  send_recovery_mail(recipient, subject, message) {
    this.send_mail(recipient, subject, this.recovery_email_template(message));
  }

  send_mail(recipient, subject, message) {
    // This is just a placeholder implementation. In real-world scenarios, you would use a proper email sending library or API.
    console.log(`Sending email to ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  }
}

const email = new Email();
