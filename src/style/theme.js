export const lightTheme = {
  // 팔레트 기본 색상 계열 (모드 변경 시에도 유지)
  Solid: {
    Black: "#000000",
    White: "#FFFFFF",
    Red: "#FF4035",
    Orange: "#FF9A05",
    Yellow: "#FFD105",
    Green: "#32CC58",
    Blue: "#057FFF",
    Indigo: "#5B59DE",
    Translucent_Red: "rgba(255,64,53,0.24)",
    Translucent_Orange: "rgba(255,154,5,0.24)",
    Translucent_Yellow: "rgba(255,109,5,0.24)",
    Translucent_Green: "rgba(50,204,88,0.24)",
    Translucent_Blue: "rgba(5,127,255,0.24)",
    Translucent_Indigo: "rgba(91,89,222,0.24)"
  },
  // 브랜드 컬러 & 모노 코어 컬러 (모드 변경 시에도 유지)
  Core: {
    Accent: "#5182F6",
    Positive: "#32CC58",
    Warning: "#FFD105",
    Negative: "#FF4035"
  },
  // 최하단 배경 (전경)에 사용되는 색상)
  Background: {
    Primary: "#FFFFFF",
    Secondary: "#F2F3F8",
    Tertiary: "#EBEEF5"
  },
  // 오브젝트 아웃라인 or 구분자에 사용되는 색상
  Border: {
    Primary: "rgba(112, 124, 151, 0.2)",
    Secondary: "rgba(112, 124, 151, 0.12)",
    Tertiary: "rgba(112, 124, 151, 0.08)"
  },
  // 배경 위 오브젝트 채우기 색상 계열
  Fill: {
    Primary: "rgba(149, 157, 178, 0.16)",
    Secondary: "rgba(149, 157, 178, 0.12)",
    Tertiary: "rgba(149, 157, 178, 0.8)"
  },
  // Fill 또는 스크링 위에 표시되는 오브젝트 채우기 생상 계열
  Group: {
    Primary: "#FFFFFF",
    Secondary: "#F8F9FB",
    Tertiary: "#F1F4F9",
    Quartenary: "#EBEEF6"
  },
  // 텍스트 및 아이콘에 사용되는 색상
  Content: {
    Primary: "#24272E",
    Secondary: "rgba(36, 39, 46, 0.6)",
    Tertiary: "rgba(36, 39, 46, 0.32)",
    Quartenary: "rgba(36, 39, 46, 0.16)"
  }
};

export const darkTheme = {
  // 팔레트 기본 색상 계열 (모드 변경 시에도 유지)
  Solid: {
    Black: "#000000",
    White: "#FFFFFF",
    Red: "#FF4035",
    Orange: "#FF9A05",
    Yellow: "#FFD105",
    Green: "#32CC58",
    Blue: "#057FFF",
    Indigo: "#5B59DE"
  },
  // 브랜드 컬러 & 모노 코어 컬러 (모드 변경 시에도 유지)
  Core: {
    Accent: "#5182F6",
    Positive: "#32CC58",
    Warning: "#FFD105",
    Negative: "#FF4035"
  },
  // 최하단 배경 (전경)에 사용되는 색상)
  Background: {
    Primary: "#000000",
    Secondary: "#090A0B",
    Tertiary: "#0E0F11"
  },
  // 오브젝트 아웃라인 or 구분자에 사용되는 색상
  Border: {
    Primary: "rgba(112, 124, 151, 0.2)",
    Secondary: "rgba(112, 124, 151, 0.12)",
    Tertiary: "rgba(112, 124, 151, 0.08)"
  },
  // 배경 위 오브젝트 채우기 색상 계열
  Fill: {
    Primary: "rgba(255, 255, 255, 0.16)",
    Secondary: "rgba(255, 255, 255, 0.12)",
    Tertiary: "rgba(255, 255, 255, 0.8)"
  },
  // Fill 또는 스크링 위에 표시되는 오브젝트 채우기 생상 계열
  Group: {
    Primary: "#0E0F11",
    Secondary: "#121416",
    Tertiary: "#17181C",
    Quartenary: "#1C1D22"
  },
  // 텍스트 및 아이콘에 사용되는 색상
  Content: {
    Primary: "#FFFFFF",
    Secondary: "rgba(255, 255, 255, 0.6)",
    Tertiary: "rgba(255, 255, 255, 0.32)",
    Quartenary: "rgba(255, 255, 255, 0.16)"
  }
};

export const theme = {
  lightTheme,
  darkTheme
};
