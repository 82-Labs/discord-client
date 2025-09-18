import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usernameSchema } from "~entities/user/model";

const usernameFormSchema = z.object({
  username: usernameSchema,
});

type UsernameForm = z.infer<typeof usernameFormSchema>;

export const useUsername = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm<UsernameForm>({
    resolver: zodResolver(usernameFormSchema),
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

  const validateUsername = (username: string) => {
    const result = usernameSchema.safeParse(username);
    return {
      isValid: result.success,
      error: result.error?.issues[0]?.message,
    };
  };

  const sanitizeUsername = (input: string) => {
    return input.toLowerCase().replace(/[^a-z0-9_]/g, "");
  };

  return {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    handleUsernameInput,
    reset,
    validateUsername,
    sanitizeUsername,
  };
};
