import type { Handler, HandlerEvent } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface SendMailPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const handler: Handler = async (event: HandlerEvent) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Accept only POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Method Not Allowed. Only POST requests are accepted.',
      }),
    };
  }

  // Parse incoming JSON body
  let payload: SendMailPayload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Invalid JSON payload provided.',
      }),
    };
  }

  // Extract and trim fields
  const name = (payload.name || '').trim();
  const email = (payload.email || '').trim();
  const phone = (payload.phone || '').trim();
  const message = (payload.message || '').trim();

  // Basic validation rules
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, message: 'Name is required.' }),
    };
  }

  if (!email || !emailRegex.test(email)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, message: 'A valid email address is required.' }),
    };
  }

  if (!phone) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, message: 'Phone number is required.' }),
    };
  }

  if (!message) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, message: 'Message content is required.' }),
    };
  }

  // Validate SMTP Environment Variables presence
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD, MAIL_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !MAIL_TO) {
    console.warn('[Netlify Function] Missing SMTP environment variables in Netlify Dashboard.');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Email service is not fully configured on the server. Please set SMTP environment variables.',
      }),
    };
  }

  try {
    // Configure Nodemailer transporter using exact requested pattern
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: (SMTP_PASSWORD || '').replace(/\s+/g, ''),
      },
    });

    console.log(`[SMTP INFO] Sending enquiry email to ${MAIL_TO} (requester: ${name} <${email}>)`);

    // Send email using exact requested mail structure
    const info = await transporter.sendMail({
      from: SMTP_USER,
      to: MAIL_TO,
      replyTo: email,
      subject: `Transport Website Enquiry - ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `.trim(),
    });

    console.log(`✅ [SMTP SUCCESS] Email delivered successfully to ${MAIL_TO}. MessageID: ${info.messageId}`);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Your enquiry has been sent successfully!',
      }),
    };
  } catch (error: any) {
    // Log error safely without exposing passwords or stack trace to client
    console.error('[SMTP Error]:', error.message || 'Failed to dispatch email');

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Failed to send enquiry due to a mail server issue. Please try again later or call dispatch directly.',
      }),
    };
  }
};
