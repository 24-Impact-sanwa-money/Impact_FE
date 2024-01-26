import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}
	:root {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
	}

	* {
		font-family: "Pretendard Variable", Pretendard, -apple-system,
			BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
			"Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		color: ${({ theme }) => theme.Background.Primary};
		background-color: ${({ theme }) => theme.Content.Primary};
	}
`;
