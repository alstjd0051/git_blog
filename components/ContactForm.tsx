"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 2자 이상이어야 합니다.")
    .max(50, "이름은 50자 이하여야 합니다."),
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  subject: z
    .string()
    .min(2, "제목은 2자 이상이어야 합니다.")
    .max(100, "제목은 100자 이하여야 합니다."),
  message: z
    .string()
    .min(10, "메시지는 10자 이상이어야 합니다.")
    .max(1000, "메시지는 1000자 이하여야 합니다."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-10 text-center dark:border-green-900 dark:bg-green-950/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
          <svg
            className="h-7 w-7 text-green-600 dark:text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <div>
          <p className="text-lg font-semibold text-green-800 dark:text-green-300">
            메시지가 전송되었습니다!
          </p>
          <p className="mt-1 text-sm text-green-600 dark:text-green-400">
            빠른 시일 내에 답변 드리겠습니다.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-green-700 underline underline-offset-2 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200"
        >
          새 메시지 작성
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* 이름 & 이메일 */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="홍길동"
            {...register("name")}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 ${
              errors.name
                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-600 dark:focus:ring-red-900"
                : "border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:focus:border-blue-500 dark:focus:ring-blue-900"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
            className={`w-full rounded-lg border px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 ${
              errors.email
                ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-600 dark:focus:ring-red-900"
                : "border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:focus:border-blue-500 dark:focus:ring-blue-900"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* 제목 */}
      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          제목 <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="문의 제목을 입력해주세요"
          {...register("subject")}
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 ${
            errors.subject
              ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-600 dark:focus:ring-red-900"
              : "border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:focus:border-blue-500 dark:focus:ring-blue-900"
          }`}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* 메시지 */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          메시지 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="문의 내용을 입력해주세요 (최소 10자)"
          {...register("message")}
          className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 ${
            errors.message
              ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:border-red-600 dark:focus:ring-red-900"
              : "border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-600 dark:focus:border-blue-500 dark:focus:ring-blue-900"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-zinc-900 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            전송 중...
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            메시지 보내기
          </>
        )}
      </button>
    </form>
  );
}
