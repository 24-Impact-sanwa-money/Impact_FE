import { useMutation } from "@tanstack/react-query";
import instance from "./axios";
import { toast } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { PageState } from "../components/atom/authAtom";
import { useNavigate } from "react-router-dom";
import { setToken } from "./Token";

export const useGetAuthVerify = () => {
  const [page, setPage] = useRecoilState(PageState);
  return useMutation(
    async (params) => {
      return await instance.post(`/auth/phone/verify`, params);
    },
    {
      onError: () => {
        toast.error("인증에 실패하였습니다.");
        setPage(1);
      },
      onSuccess: ({ data }) => {
        toast.success("인증에 성공하셨습니다.");
        console.log(data.token);
        setToken(data.token);
        setPage(3);
      }
    }
  );
};

export const useGetAuthNumber = () => {
  const [page, setPage] = useRecoilState(PageState);
  return useMutation(
    async (params) => {
      return await instance.post(`/auth/phone`, params);
    },
    {
      onSuccess: () => {
        toast.success("인증번호가 발송되었습니다.");
        setPage(2);
      }
    }
  );
};

export const useGetHandler = () => {
  const [page, setPage] = useRecoilState(PageState);
  const navigate = useNavigate();
  return useMutation(
    async (params) => {
      return await instance.post(`/user/my/handle`, params);
    },
    {
      onSuccess: () => {
        toast.success("가입이 완료되었습니다.");
        navigate("/");
      },
      onError: () => {
        toast.error("오류가 발생하였습니다.");
        setPage(1);
      }
    }
  );
};
