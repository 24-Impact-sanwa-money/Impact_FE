import React, { useState } from 'react';
import styled from 'styled-components';
import search from "../assets/imgs/offSearch.svg"
import cut1 from "../assets/imgs/cut1.png"
import cut2 from "../assets/imgs/cut2.png"
import cut3 from "../assets/imgs/cut3.png"
import cut4 from "../assets/imgs/cut4.png"
import placeImg from "../assets/imgs/place.svg"

const Search = () => {
  return (
    <FlexContainer>
      <SearchInput>
        <InputContainer>
          <SearchImg src={search} />
          <Input placeholder='검색' />
        </InputContainer>
      </SearchInput>
      <Photoes>
        <Frame>
          <Img src={cut1} />
          <PlaceContainer>
            <PlaceImg src={placeImg} />
            <PlaceText>포토이즘 하이브사옥점</PlaceText>
          </PlaceContainer>
        </Frame>
        <Frame>
          <Img src={cut2} />
          <PlaceContainer>
            <PlaceImg src={placeImg} />
            <PlaceText>포토이즘 하이브사옥점</PlaceText>
          </PlaceContainer>
        </Frame>
        <Frame>
          <Img src={cut3} />
          <PlaceContainer>
            <PlaceImg src={placeImg} />
            <PlaceText>포토이즘 하이브사옥점</PlaceText>
          </PlaceContainer>
        </Frame>
        <Frame>
          <Img src={cut4  } />
          <PlaceContainer>
            <PlaceImg src={placeImg} />
            <PlaceText>포토이즘 하이브사옥점</PlaceText>
          </PlaceContainer>
        </Frame>
      </Photoes>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchInput = styled.div`
  display: flex;
  padding: 12px;
  align-items: flex-start;
  gap: 8px;
`

const InputContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border.secondary};
  width: 100%;
`

const SearchImg = styled.img`
  width: 24px;
  height: 24px;
`

const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.content.teritary};
  width: 100%;
  border: none;
`

const Photoes = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`

const Frame = styled.div`
  width: 178.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  height: auto;
  border-radius: 6px;
`

const PlaceContainer = styled.div`
  display: flex;
  padding: 8px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

const PlaceImg = styled.img`
  width: 16px;
  height: 16px;
`

const PlaceText = styled.p`

`


export default Search;
