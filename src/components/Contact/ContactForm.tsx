import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import type { Mail } from "types";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Mail>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Mail) => {
    console.log(data);
  };

  return (
    <form className='block' onSubmit={handleSubmit(onSubmit)}>
      <select {...register("topic")}>
        <option value=''></option>
      </select>

      <label>
        Your Full Name
        <input type='text' placeholder='Full Name' {...register("name")} />
        {errors.name && <div> {errors.name.message} </div>}
      </label>

      <label>
        Email
        <input type='email' placeholder='E-mail' {...register("email")} />
        {errors.email && <div> {errors.email.message} </div>}
      </label>

      <textarea
        placeholder='Enter your message...'
        cols={30}
        rows={10}
        {...register("message")}
      />

      <button type='submit'>SEND</button>
    </form>
  );
};
