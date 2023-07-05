import { PastExamData } from "../types.ts/PastExamData";
import emailjs from "emailjs-com";

export const submitMail = async (data: PastExamData) => {
  const serviceId: string = process.env.REACT_APP_EMAILJS_SERVICE_ID as string; //ServeceIDを取得
  const templateId: string = process.env
    .REACT_APP_EMAILJS_TEMPLATE_ID as string; // TemplateIDを取得
  const publicId: string = process.env.REACT_APP_EMAILJS_PUBLIC_ID as string; // Public Keyを取得

  try {
    await emailjs.send(serviceId, templateId, data, publicId);
  } catch (error) {
    console.error("エラーが発生しました: " + error);
  }
};
