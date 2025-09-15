import { z } from "zod";

export const usernameSchema = z
  .string()
  .min(2, "2자 이상 입력해주세요.")
  .max(32, "32자 이하로 입력해주세요.")
  .regex(/^[a-z0-9_]+$/, "영문 소문자/숫자/언더스코어만 사용 가능합니다.");

export type Username = z.infer<typeof usernameSchema>;
