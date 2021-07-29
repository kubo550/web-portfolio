import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import type { Mail } from "types";
import axios from "axios";
import { useState } from "react";
import { FC } from "react";

interface ContactFormProps {
  handleSendState: (type: "error" | "sended") => void;
  resetState: () => void;
}

export const ContactForm: FC<ContactFormProps> = ({
  handleSendState,
  resetState,
}) => {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Mail>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Mail) => {
    resetState();
    setSending(true);
    try {
      const { status } = await axios.post("/api/mail", data);
      if (status === 200) {
        reset();
        handleSendState("sended");
      } else {
        handleSendState("error");
      }
    } catch (err) {
      handleSendState("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      className='flex flex-col max-w-md mx-auto w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className='uppercase text-sm text-gray-600 font-bold flex flex-col'>
        Subject
        <select
          {...register("topic")}
          className='bg-gray-200 text-gray-900 mt-2 px-3 py-2 focus:outline-none rounded-lg'
        >
          <option defaultChecked value='Job Offer'>
            Job Offer
          </option>
          <option value='Question'>Question</option>
          <option value='Proposal'>Proposal</option>
          <option value='Other'>Other</option>
        </select>
      </label>
      <label className='uppercase text-sm text-gray-600 font-bold flex flex-col'>
        Your Full Name
        <input
          type='text'
          placeholder='Full Name'
          className='w-full bg-gray-200 text-gray-900 mt-2 p-3 focus:outline-none rounded-lg focus:shadow-outline'
          {...register("name")}
        />
        {errors.name && (
          <div className='text-red-500 mt-2 mb-4'>{errors.name.message}</div>
        )}
      </label>

      <label className='uppercase text-sm text-gray-600 font-bold flex flex-col'>
        Email
        <input
          type='email'
          placeholder='E-mail'
          className='w-full bg-gray-200 text-gray-900 mt-2 p-3 focus:outline-none rounded-lg focus:shadow-outline'
          {...register("email")}
        />
        {errors.email && (
          <div className='text-red-500 mt-2 mb-4'> {errors.email.message} </div>
        )}
      </label>

      <label className='uppercase text-sm text-gray-600 font-bold flex flex-col'>
        Message
        <textarea
          placeholder='Enter your message...'
          className='w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 focus:outline-none rounded-lg focus:shadow-outline'
          cols={30}
          rows={10}
          {...register("message")}
        />
        {errors.message && (
          <div className='text-red-500 mt-2 mb-4'>{errors.message.message}</div>
        )}
      </label>

      <button
        type='submit'
        className='my-5 uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 focus:outline-none rounded-lg w-full focus:shadow-outline'
      >
        {sending ? "SENDING..." : "SEND"}
      </button>
    </form>
  );
};
