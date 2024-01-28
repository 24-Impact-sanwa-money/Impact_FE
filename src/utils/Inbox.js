import { useQuery, useMutation } from "@tanstack/react-query";
import instance from "./axios";
import toast from "react-hot-toast";

const router = "inbox";

export const GetInboxLink = () => {
  return useQuery(["GetInboxLink"], async () => {
    const { data } = await instance.get(`/${router}`);
    return data.inbox;
  });
};

export const useGetAuthNumber = () => {
  return useMutation(
    async (params) => {
      return await instance.post(`/auth/phone`, params);
    },
    {
      onSuccess: () => {
        toast.success("인증번호가 발송되었습니다.");
      }
    }
  );
};
