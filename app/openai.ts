import OpenAI from "openai";

export const openai = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION_ID,
  project: process.env.OPENAI_PROJECT_ID,
});
