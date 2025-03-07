"use server";

import prisma from "@/lib/prisma";

export const getAllQuestions = async () => {
  try {
    const question = await prisma.question.findMany();
    return question;
  } catch (error) {
    console.error(error);
  }
};

export const sendQuestion = async (formData: FormData) => {
  try {
    const name = formData.get("name");
    const question = formData.get("question");

    const reqQuest = await prisma.question.create({
      data: {
        name: name as string,
        question: question as string
      }
    });

    return reqQuest;
  } catch (error) {
    console.error(error);
  }
};
