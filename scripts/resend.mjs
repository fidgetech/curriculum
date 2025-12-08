import { Resend } from 'resend';
import { readFile } from 'fs/promises';
import 'dotenv/config';

const { SCRIPTS_RESEND_API_KEY, SCRIPTS_FROM, SCRIPTS_TO } = process.env;

export const sendMail = async ({ subject, html, filePath='' }) => {
  const resend = new Resend(SCRIPTS_RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: SCRIPTS_FROM,
      to: SCRIPTS_TO,
      subject,
      html,
      attachments: filePath ? [{
        type: 'text/plain',
        filename: filePath.split('/').pop(),
        data: await readFile(filePath, 'utf-8')
      }] : [],
    });
    console.log(`Email sent to ${SCRIPTS_TO}`);
  } catch (error) {
    console.error(`Error sending email to ${SCRIPTS_TO}`, error);
    throw error;
  }
};
