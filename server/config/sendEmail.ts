import { OAuth2Client } from 'google-auth-library';

const nodemailer = require('nodemailer');
// http://mail.google.com
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_MAIL_REFRESH_TOKEN, SENDER_EMAIL_ADDRESS } =
  process.env;

// "Welcome! Please verify your email address."

export const sendEmail = async (to: string, url: string, subject: string) => {
  const oAuth2Client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, OAUTH_PLAYGROUND);
  oAuth2Client.setCredentials({ refresh_token: GOOGLE_MAIL_REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: SENDER_EMAIL_ADDRESS,
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_MAIL_REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: `"We Are Still Dreamers"<${SENDER_EMAIL_ADDRESS}>`,
      to,
      subject,
      html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
              <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to WeAreStillDreamers.</h2>
              <p>Congratulations! You're almost set to become a dreamer!
                  Just click the button below to validate your email address.
              </p>
              <div style="width: 100%; display:flex; justify-content: center;">
              
                <a href=${url} style="text-align: center;
                background: crimson; text-decoration: none;
                color: white; padding: 10px 20px; display: inline-block;">
                Verify your email address.
                </a>
              </div>
              
              <p>If the button doesn't work for any reason, you can also click on the link below:</p>
          
              <div style="max-width: 700px;">
              <p style="word-break: break-all">${url}</p></div>
              </div>
            </div>
            `,
    };

    const res = await transport.sendMail(mailOptions);
    console.log('Sent');
    return res;
  } catch (err) {
    console.error(err);
    throw new Error('OAuth expired');
  }
};

export const sendResetEmail = async (to: string, url: string, subject: string) => {
  const oAuth2Client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, OAUTH_PLAYGROUND);
  oAuth2Client.setCredentials({ refresh_token: GOOGLE_MAIL_REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: SENDER_EMAIL_ADDRESS,
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_MAIL_REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: `"We Are Still Dreamers"<${SENDER_EMAIL_ADDRESS}>`,
      to,
      subject,
      html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
              <h2 style="text-align: center; text-transform: uppercase;color: teal;">Reset password for WeAreStillDreamers.</h2>
              <p> Please click to reset password
              </p>
              <div style="width: 100%; display:flex; justify-content: center;">
              
              <a href=${url} style="text-align: center; background: crimson; text-decoration: none; color: white; padding: 10px 20px; display: inline-block;">Reset Password.</a>
               </div>
              
              <p>If the button doesn't work for any reason, you can also click on the link below:</p>
          
              <div style="max-width: 700px;">
              <p style="word-break: break-all">${url}</p></div>
              </div>
              </div>
            `,
    };

    const res = await transport.sendMail(mailOptions);
    return res;
  } catch (err) {
    console.error(err);
    throw new Error('OAuth expired');
  }
};
