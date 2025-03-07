"use client";

import { sendQuestion } from "@/action/question.action";
import { useMutation } from "@tanstack/react-query";

export const useSendQuestion = ({ onSuccess }: any) => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await sendQuestion(formData);
      return response;
    },
    onSuccess
  });
};
