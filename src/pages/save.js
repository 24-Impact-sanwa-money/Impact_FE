import React from 'react';
import styled from 'styled-components';
import option from "../assets/imgs/option.svg"
import friends from "../assets/imgs/friends.png"
import Button from '../components/common/Button';

const Save = () => {
  return (
    <Container>
      <Head>
        <Title>보관함</Title>
        <Option src={option} />
      </Head>
      <ContentContainer>
        <Friends src={friends} />
        <Foot>
          <TextContainer>
            <Place>인생네컷 숙대입구역점</Place>
            <Date>2022.09.30</Date>
          </TextContainer>
          <Buttons>
            <Button text="사진 저장" backgroundColor="#5182F6" color="#FFFFFF" width="168.5px" />
            <Button text="프로필에 업로드" backgroundColor="#959DB229" color="#24272E99" width="168.5px" />
          </Buttons>
        </Foot>
      </ContentContainer>
    </Container>
  );
};

const Title = styled.p`
  color: ${({ theme }) => theme.content.tertiary};
  width: 321px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.24px;
`

const Container = styled.div`
  margin: 15px;
  width: 92vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Head = styled.div`
  display: flex;
  padding: 0px 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const Option = styled.img`
  width: 32px;
  height: 32px;
`

const ContentContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  background: ${({ theme }) => theme.group.primary};
`

const Friends = styled.img`
  border-radius: 16px 16px 0 0;
`

const Foot = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  height: auto;
  width: 100%;
`

const TextContainer = styled.div`
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  height: auto;
  width: 100%;
`

const Place = styled.p`
  color: ${({ theme }) => theme.content.primary};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.2px;
`

const Date = styled.p`
  color: ${({ theme }) => theme.content.secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.14px;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: auto;
`

export default Save;