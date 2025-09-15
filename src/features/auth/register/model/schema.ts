import { z } from "zod";
import { usernameSchema } from "~/entities/user/model/user";

export const registerSchema = z.object({
  username: usernameSchema,
});

export type RegisterForm = z.infer<typeof registerSchema>;
