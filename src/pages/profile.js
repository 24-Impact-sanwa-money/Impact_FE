import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <ProfileContainer>
      <Top>
        <Title>
          <MainTitle>조현우</MainTitle>
          <SubTitle>
            <Id>@batasilverfan</Id>
            <Insta>fxxntrbl</Insta>
          </SubTitle>
        </Title>
        <img src="https://i.namu.wiki/i/d1A_wD4kuLHmOOFqJdVlOXVt1TWA9NfNt_HA0CS0Y_N0zayUAX8olMuv7odG2FiDLDQZIRBqbPQwBSArXfEJlQ.webp"/>
      </Top>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  padding: 16px 12px;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: auto;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  >img{
    border-radius:50%;
    width: 64px;
    height: 64px;
  }
`

const Title = styled.div`
  display: flex;
  padding: 0px 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const MainTitle = styled.p`

`

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Id = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.16px;
`
const Insta = styled.p`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.fill.tertiary};
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 6px;
`
export default Profile;
