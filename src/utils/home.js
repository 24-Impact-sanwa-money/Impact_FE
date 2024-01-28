import { useQuery, useMutation } from "@tanstack/react-query";
import instance from "./axios";
import toast from "react-hot-toast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FeedID, idArrayAtom } from "../components/atom/authAtom";

const router = "post";

export const Getfeeds = () => {
  return useQuery(["Getfeeds"], async () => {
    const { data } = await instance.get(`/${router}`);
    return data.posts;
  });
};

export const GetLikePerson = () => {
  const getValues = useRecoilValue(idArrayAtom);
  return useQuery(["GetLikePerson"], async () => {
    const { data } = await instance.get(`/${router}/`);
    return data;
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
