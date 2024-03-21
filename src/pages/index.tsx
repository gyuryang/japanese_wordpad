import { useState, useEffect } from "react";
import Main from "../components/Main/Main";
import Test from "../components/Test/Test";

export default function Wordpad() {
  const [minSize, setMinSize] = useState<string>("");
  const [maxSize, setMaxSize] = useState<string>("");
  const [isClick, setIsClick] = useState<boolean>(false);

  const clickAction = (min?: string, max?: string) => {
    if (!isClick) {
      if (!min || !max) return alert("값을 입력해주세요");
      //Main 화면일경우
      setMinSize(min ?? "");
      setMaxSize(max ?? "");
    }
    setIsClick(!isClick);
  };

  return (
    <>
      {isClick ? (
        <Test {...{ minSize, maxSize, clickAction }} />
      ) : (
        <Main {...{ clickAction }} />
      )}
    </>
  );
}
