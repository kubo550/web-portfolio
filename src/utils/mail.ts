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

export const isValid = ({ email, message, name, topic }: Mail): boolean =>
  validateTopic(topic) && validateEmail(email);
