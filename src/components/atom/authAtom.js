import { atom } from "recoil";

export const PageState = atom({
  key: "PageStates",
  default: 1
});

export const FeedID = atom({
  key: "FeedID",
  default: 0
});

export const idArrayAtom = atom({
  key: "idArrayAtom",
  default: []
});
