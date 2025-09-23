import { HTTPError } from "ky";

export async function extractErrorMessage(error: unknown) {
  if (error instanceof HTTPError) {
    try {
      const { code, message } = await error.response.json<{
        code?: string;
        message?: string;
      }>();
      return message ?? code ?? "알 수 없는 오류가 발생했습니다.";
    } catch {
      return "알 수 없는 오류가 발생했습니다.";
    }
  }

  if (error instanceof Error) return error.message;
  return "알 수 없는 오류가 발생했습니다.";
}
