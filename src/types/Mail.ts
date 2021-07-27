export type Topic = "Job Offer" | "Question" | "Proposal" | "Other";

export type Mail = {
  topic: Topic;
  name: string;
  email: string;
  message: string;
};
