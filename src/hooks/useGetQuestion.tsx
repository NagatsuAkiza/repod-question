"use client";

import { getAllQuestions } from "@/action/question.action";
import { useQuery } from "@tanstack/react-query";

const useGetQuestion = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const response = await getAllQuestions();
      return response;
    }
  });
};

export default useGetQuestion;
