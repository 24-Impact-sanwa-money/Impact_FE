import styled from "styled-components";
import userImg from "../../assets/imgs/userImg.svg";
import check from "../../assets/imgs/check.svg";
import option from "../../assets/imgs/option.svg";
import fourcut from "../../assets/imgs/4cut.png";
import favorite from "../../assets/imgs/favorite.svg";
import comment from "../../assets/imgs/comment.svg";
import place from "../../assets/imgs/place.svg";

export const FeedDemo = () => {
  return (
    <FlexContainer>
      <Container>
        <Head>
          <User src={userImg} />
          <NameContainer>
            <Name>_chaechae_1</Name>
            <Check src={check} />
          </NameContainer>
          <Option src={option} />
        </Head>
        <Fourcut src={fourcut} />
        <Foot>
          <Action>
            <FavoriteContainer>
              <FavoriteImg src={favorite} />
              <FavoriteText>587K</FavoriteText>
            </FavoriteContainer>
            <CommentContainer>
              <CommentImg src={comment} />
              <CommentText>2,111</CommentText>
            </CommentContainer>
          </Action>
          <Content>
            <Place>
              <PlaceImg src={place} />
              <PlaceName>포토이즘 하이브사옥점</PlaceName>
            </Place>
            <Explain>윤진이와 한 컷~~</Explain>
            <Time>1월 27일 (토) 오후 5시 52분</Time>
          </Content>
        </Foot>
      </Container>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border.primary};
  background: ${({ theme }) => theme.group.primary};
`;

const Head = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 8px;
`;
const User = styled.img``;

const NameContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Name = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.content.primary};
`;

const Check = styled.img`
  width: 14px;
  height: 14px;
`;

const Option = styled.img``;

const Fourcut = styled.img``;

const Foot = styled.div`
  height: auto;
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const Action = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 16px;
`;

const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const FavoriteImg = styled.img``;

const FavoriteText = styled.p`
  color: ${({ theme }) => theme.solid.red};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.14px;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const CommentImg = styled.img``;

const CommentText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.content.secondary};
`;

const Content = styled.div`
  height: auto;
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Place = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PlaceImg = styled.img``;

const PlaceName = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.content.secondary};
`;

const Explain = styled.p`
  color: ${({ theme }) => theme.content.primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

const Time = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.content.teritary};
`;
