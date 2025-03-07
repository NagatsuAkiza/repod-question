"use client";

import useGetQuestion from "@/hooks/useGetQuestion";
import { useSendQuestion } from "@/hooks/useSendQuestion";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    question: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const { refetch: refetchQuestions } = useGetQuestion();
  const { mutate } = useSendQuestion({
    onSuccess: () => {
      alert("Pertanyaan berhasil di kirim");
    },
    refetchQuestions
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      mutate(formData);
      setFormData({ name: "", question: "" });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-700 text-center mb-5">Form Pertanyaan</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Nama
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nama kamu"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-600">
            Pertanyaan
          </label>
          <input
            type="text"
            name="question"
            placeholder="Pertanyaan kamu"
            value={formData.question}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200">
          Kirim
        </button>
      </form>
    </div>
  );
}
