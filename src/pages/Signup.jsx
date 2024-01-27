import React, { useState } from "react";
import { Back } from "../assets";
import styled from "styled-components";
import Input from "../components/common/input";
import Button from "../components/common/Button";
import {
  useGetAuthNumber,
  useGetAuthVerify,
  useGetHandler
} from "../utils/auth";
import { PageState } from "../components/atom/authAtom";
import { useRecoilState } from "recoil";

export const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [id, setId] = useState("");
  const [page, setPage] = useRecoilState(PageState);
  const { mutate: getAuthNumberMutate } = useGetAuthNumber();
  const { mutate: getAuthVerifyMutate } = useGetAuthVerify();
  const { mutate: getUserHandler } = useGetHandler();

  const handlePress = (e) => {
    const inputValue = e.target.value;
    const regex = /^[0-9\b -]{0,13}$/;
    if (!regex.test(inputValue)) {
      alert("숫자만 입력해 주세요.");
      return;
    }
    setPhoneNumber(inputValue);
  };

  const ButtonClick = () => {
    getAuthNumberMutate({ phone: phoneNumber });
  };

  const handleButtonClick = () => {
    getAuthVerifyMutate({
      name: userName,
      phone: phoneNumber,
      code: authNumber
    });
    setUserName("");
    setPhoneNumber("");
    setAuthNumber("");
  };

  const userHandlerClick = () => {
    getUserHandler({
      handle: id
    });
  };

  return (
    <Wrapper>
      {page === 1 && (
        <Main>
          <img src={Back} alt="뒤로가기" />
          <Title>
            휴대폰 번호와 이름을 입력해서 <br />
            가입을 진행할게요.
          </Title>
          <Input
            label="이름"
            placeholder="이름을 입력해주세요."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {userName.length >= 3 && (
            <Input
              label="전화번호"
              placeholder="전화번호를 입력해 주세요."
              value={phoneNumber}
              onChange={handlePress}
            />
          )}
          <ButtonContainer>
            <Button
              width="100%"
              backgroundColor="#5182F6"
              color="#ffffff"
              onClick={ButtonClick}
              text="다음"
            ></Button>
          </ButtonContainer>
        </Main>
      )}
      {page === 2 && (
        <Main>
          <img src={Back} alt="뒤로가기" onClick={() => setPage(1)} />
          <Title>인증번호를 입력해 주세요.</Title>
          <Input
            label="인증번호"
            placeholder="6자리 숫자를 입력해주세요."
            value={authNumber}
            onChange={(e) => setAuthNumber(e.target.value)}
          />
          <ButtonContainer>
            <Button
              width="100%"
              backgroundColor="#5182F6"
              color="#ffffff"
              onClick={handleButtonClick}
              text="다음"
            ></Button>
          </ButtonContainer>
        </Main>
      )}
      {page === 3 && (
        <Main>
          <img src={Back} alt="뒤로가기" onClick={() => setPage(2)} />
          <Title>나만의 특별한 아이디를 만들게요</Title>
          <Input
            label="아이디"
            placeholder="나만의 특별한 아이디를 입력해 주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <ButtonContainer>
            <Button
              width="100%"
              backgroundColor="#5182F6"
              color="#ffffff"
              onClick={userHandlerClick}
              text="다음"
            ></Button>
          </ButtonContainer>
        </Main>
      )}
    </Wrapper>
  );
};

const Title = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.24px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 15px;
  padding-top: 30px;
`;
