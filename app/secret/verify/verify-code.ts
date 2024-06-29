import axios from "axios";
import { VerifyCodeResponse } from "~/app/types/code";
import { baseUrl } from "~/app/utils/constants";

export async function verifyCode(code: string): Promise<VerifyCodeResponse> {
  try {
    const response = await axios.post<VerifyCodeResponse>(
      `${baseUrl}/api/auth/code/verify`,
      { code }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
