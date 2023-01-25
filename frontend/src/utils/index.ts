import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt: string):string => {
  const randomIndex: number = Math.floor(
    Math.random() * surpriseMePrompts.length
  );
    if (prompt === surpriseMePrompts[randomIndex]) {
        return getRandomPrompt(prompt);
    }
    return surpriseMePrompts[randomIndex];
};
