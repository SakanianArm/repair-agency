import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
}

interface FormProps {
  onSubmit: SubmitHandler<FormData>;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
  });

  const isEmailValidFn = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label>
          Name:
          <input
            {...register("name", {
              required: "Обязательное поле",
              minLength: {
                value: 3,
                message: "Минимальная длина 3",
              },
            })}
          />
          <span>{formState.errors.name?.message}</span>
        </label>

        <label>
          Email:
          <input
            {...register("email", {
              required: "Обязательное поле",
              minLength: {
                value: 5,
                message: "Минимальная длина 5",
              },
              validate: (value) =>
                isEmailValidFn(value) || "Неправильный формат email",
            })}
          />
          <span>{formState.errors.email?.message}</span>
        </label>

        <button type="submit" disabled={!formState.isValid}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
