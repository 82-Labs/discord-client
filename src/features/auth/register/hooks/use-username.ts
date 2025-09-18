import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usernameSchema } from "~entities/user/model/user";

const registerSchema = z.object({
  username: usernameSchema,
});
type RegisterForm = z.infer<typeof registerSchema>;

export const useUsername = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: { username: "" },
  });

  const usernameValue = watch("username");
  const handleUsernameInput: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    const v = e.target.value.toLowerCase();
    const sanitized = v.replace(/[^a-z0-9_]/g, "");
    if (sanitized !== usernameValue)
      setValue("username", sanitized, { shouldValidate: true });
  };

  return {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    handleUsernameInput,
    reset,
  };
};
