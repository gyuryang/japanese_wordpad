import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./Main.styled";

export default function Main({
  clickAction,
}: {
  clickAction: (min: string, max: string) => void;
}) {
  const [minSize, setMinSize] = useState<string>("");
  const [maxSize, setMaxSize] = useState<string>("");

  return (
    <S.Wrap>
      <h1>2136 한자 테스트</h1>
      <S.Flex>
        <S.Input
          type="number"
          min={0}
          placeholder="시작 번호"
          value={minSize}
          onChange={(e) => setMinSize(e.target.value)}
        />
        <p>-</p>
        <S.Input
          type="number"
          max={2136}
          placeholder="마지막 번호"
          value={maxSize}
          onChange={(e) => setMaxSize(e.target.value)}
        />
      </S.Flex>
      <S.Button onClick={() => clickAction(minSize, maxSize)}>
        범위 지정완료
      </S.Button>
    </S.Wrap>
  );
}
