import React from "react";
import styled from "styled-components";
import Instagram from "../assets/imgs/instagram.svg";
import profileImg from "../assets/imgs/profileImg.svg";
import f1 from "../assets/imgs/f1.svg";
import f2 from "../assets/imgs/f2.svg";
import f3 from "../assets/imgs/f3.svg";
import Button from "../components/common/Button";
import option from "../assets/imgs/option.svg";
import category1 from "../assets/imgs/onPeed.svg";
import category2 from "../assets/imgs/offFavorite.svg";
import category3 from "../assets/imgs/offAssignment.svg";
import post1 from "../assets/imgs/post1.png";
import post2 from "../assets/imgs/post2.png";
import place from "../assets/imgs/place.svg";

const Profile = () => {
  return (
    <ProfileContainer>
      <Top>
        <Title>
          <TextContainer>
            <MainTitle>조현우</MainTitle>
            <SubTitle>
              <Id>@batasilverfan</Id>
              <Insta>
                <InstaImg src={Instagram} />
                fxxntrbl
              </Insta>
            </SubTitle>
          </TextContainer>
          <ProfileImg src={profileImg} />
        </Title>
        <MemoContainer>
          <Memo>이상한 사람</Memo>
          <FContainer>
            <FollowerConatiner>
              <FImgsContainer>
                <FImg src={f1} />
                <FImg src={f2} />
                <FImg src={f3} />
              </FImgsContainer>
              <FText>26 팔로워</FText>
            </FollowerConatiner>
            <FollowerConatiner>
              <FImgsContainer>
                <FImg src={f1} />
                <FImg src={f2} />
                <FImg src={f3} />
              </FImgsContainer>
              <FText>26 팔로잉</FText>
            </FollowerConatiner>
          </FContainer>
        </MemoContainer>
        <PButtonContainer>
          <Button
            text="프로필 수정"
            backgroundColor="#5182F6"
            color="#FFFFFF"
          />
          <Button text="프로필 공유" />
          <Option src={option} />
        </PButtonContainer>
      </Top>
      <CategoryBtnCon>
        <CategoryBtn>
          <CategoryImg src={category1} />
        </CategoryBtn>
        <CategoryBtn>
          <CategoryImg src={category2} />
        </CategoryBtn>
        <CategoryBtn>
          <CategoryImg src={category3} />
        </CategoryBtn>
      </CategoryBtnCon>
      <ContentContainer>
        <PostContainer>
          <PostImg src={post1} />
          <PostPlace>
            <PlaceImg src={place} />
            <PlaceText>인생네컷 숙대입구역점</PlaceText>
          </PostPlace>
        </PostContainer>
        <PostContainer>
          <PostImg src={post2} />
          <PostPlace>
            <PlaceImg src={place} />
            <PlaceText>인생네컷 신사점</PlaceText>
          </PostPlace>
        </PostContainer>
      </ContentContainer>
    </ProfileContainer>
  );
};

const PlaceText = styled.p`
  color: #24272e99;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.14px;
`;

const PlaceImg = styled.img`
  width: 16px;
  height: 16px;
`;

const PostPlace = styled.div`
  display: flex;
  padding: 8px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const PostImg = styled.img`
  border-radius: 6px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const CategoryImg = styled.img`
  width: 24px;
  height: 24px;
`;

const CategoryBtn = styled.button`
  border: none;
  background-color: #ffffff;
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  &:first-child {
    border-bottom: 2px solid #5182f6;
  }
`;

const CategoryBtnCon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;

const Option = styled.img`
  width: 20px;
  height: 20px;
`;

const PButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FText = styled.p`
  position: absolute;
  right: 0;
  color: #24272e52;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.14px;
`;

const FImg = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;

  &:nth-child(2) {
    left: 14px;
  }
  &:last-child {
    left: 28px;
  }
`;

const FImgsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: -6px;
`;

const FollowerConatiner = styled.div`
  position: relative;
  width: 112px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 64px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Memo = styled.p`
  color: #24272e;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

const MemoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 4px;
  flex-direction: column;
  gap: 12px;
`;

const ProfileContainer = styled.div`
  display: flex;
  padding: 16px 12px;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: auto;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  > img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }
`;

const Title = styled.div`
  display: flex;
  padding: 0px 4px;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

const MainTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.24px;
`;

const SubTitle = styled.div`
  color: #24272e99;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Id = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.16px;
`;
const Insta = styled.p`
  color: #24272e52;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.fill.secondary};
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.12px;
`;
const InstaImg = styled.img``;

export default Profile;
