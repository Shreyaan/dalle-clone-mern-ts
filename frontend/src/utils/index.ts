import FileSaver from 'file-saver';
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


export async function downloadImage(_id:string, photo:string) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}