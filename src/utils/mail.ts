import nodemailer from "nodemailer";

import { Mail, Topic } from "types";

const validateEmail = (email: string): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const validateTopic = (topic: Topic): boolean => {
  const topics: Topic[] = ["Job Offer", "Other", "Proposal", "Question"];
  return topics.includes(topic);
};

export const isValid = ({ email, message, name, topic }: Mail): boolean => true;

export const sendMail = async ({
  email,
  message,
  name,
  topic: subject,
}: Mail) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3",
    },
    secure: false,
    auth: {
      user: "qwercy142@gmail.com",
      pass: process.env.NEXT_APP_EMAIL_PASSWD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}> `,
      to: "qwercy142@gmail.com",
      subject,
      text: message,
      html: `<h1> New Message From ${name} -  ${email} </h1> <b>Is it great idea?</b>`,
    });
    return true;
  } catch (e) {
    throw new Error(e.message);
  }
};
