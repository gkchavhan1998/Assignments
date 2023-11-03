import React from "react";
import { useForm } from "react-hook-form";

export default function Data() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Text"
        {...register("Text", { required: true, pattern: /@/i })}
      />
      <input
        type="password"
        placeholder="pass"
        {...register("pass", { required: true, max: 20, min: 7 })}
      />
      <select {...register("select", { required: true })}>
        <option value="opt1">opt1</option>
        <option value=" opt2"> opt2</option>
      </select>
      <input
        type="checkbox"
        value="ck1"
        {...register("checkbox", { required: true })}
      />
      <input {...register("radio")} type="radio" value="rad1, rad3" />
      <input
        type="number"
        placeholder="Number"
        {...register("Number", { required: true, max: 5, min: 2 })}
      />
      <textarea {...register("textarea", { required: true, maxLength: 10 })} />
      <input
        type="email"
        placeholder="email"
        {...register("email", { maxLength: 20, pattern: /@/i })}
      />
      <input
        type="range"
        placeholder="Range"
        {...register("Range", { required: true, max: 100, min: 50 })}
      />
      <input type="search" placeholder="Search" {...register("Search", {})} />
      <input
        type="tel"
        placeholder="Telephone"
        {...register("Telephone", { required: true })}
      />
      <input type="url" placeholder="url" {...register("url", {})} />
      <input
        type="time"
        placeholder="Time"
        {...register("Time", { required: true })}
      />
      <input
        type="datetime"
        placeholder="date time"
        {...register("date time", {})}
      />
      <input
        type="datetime-local"
        placeholder="datetime -local"
        {...register("datetime -local", {})}
      />
      <input type="week" placeholder="week" {...register("week", {})} />
      <input type="month" placeholder="month" {...register("month", {})} />

      <input type="submit" />
    </form>
  );
}
