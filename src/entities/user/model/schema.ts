import { z } from "zod";
import { usernameSchema } from "./user";

export const registerSchema = z.object({
  username: usernameSchema,
});

export type RegisterForm = z.infer<typeof registerSchema>;
