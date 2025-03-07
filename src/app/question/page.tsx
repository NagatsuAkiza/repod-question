"use client";

import useGetQuestion from "@/hooks/useGetQuestion";
import { useState } from "react";

export default function QuestionsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: questions, isLoading } = useGetQuestion();

  const handleNextQuestion = () => {
    if (questions && questions.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }
  };

  if (isLoading) {
    return <p className="text-gray-500 text-center">Memuat pertanyaan...</p>;
  }

  if (!questions || questions.length === 0) {
    return <p className="text-gray-500 text-center">Belum ada pertanyaan.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
      <h2 className="text-xl font-bold text-gray-700 mb-5">
        RePod
        <span className="from-indigo-400 bg-gradient-to-r to-purple-500 text-transparent bg-clip-text">
          QNA
        </span>
      </h2>
      <div className="text-gray-700">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">Nama</p>
          <p>{questions[currentIndex].name}</p>
        </div>
        <div className="mt-2">
          <p>{questions[currentIndex].question}</p>
        </div>
        <button
          onClick={handleNextQuestion}
          className="mt-4 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200">
          Tampilkan Pertanyaan Berikutnya
        </button>
      </div>
    </div>
  );
}
