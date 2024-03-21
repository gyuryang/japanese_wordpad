import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

import * as S from "./Test.styled";

export default function Test({
  minSize,
  maxSize,
  clickAction,
}: {
  minSize: string;
  maxSize: string;
  clickAction: () => void;
}) {
  const [testData, setTestData] = useState<string[][]>([]);
  const [testIndex, setTestIndex] = useState<number>(0);
  console.log(minSize, maxSize);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/langList.xlsx"); // Excel 파일 경로
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            const binaryString = event.target.result as string;
            const workbook = XLSX.read(binaryString, { type: "binary" });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            const data = XLSX.utils.sheet_to_json<string[]>(worksheet, {
              header: 1,
            });

            const rangeData = data.slice(Number(minSize), Number(maxSize) + 1);
            const randomSort = rangeData.sort(() => Math.random() - 0.5);
            setTestData(randomSort);
          }
        };
        reader.readAsBinaryString(blob);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Wrap>
      <S.Flex>
        <S.TestNumber>문제{testIndex + 1}</S.TestNumber>
        <h1 onClick={clickAction}>X</h1>
      </S.Flex>

      <S.MainText>{testData[testIndex]?.[2]}</S.MainText>

      <S.Flex>
        <S.Answer>훈독: {testData[testIndex]?.[3]}</S.Answer>
        <S.Answer>음독: {testData[testIndex]?.[4]}</S.Answer>
      </S.Flex>

      <S.Flex>
        {testIndex !== 0 ? (
          <S.Button onClick={() => setTestIndex((prev) => prev - 1)}>
            이전
          </S.Button>
        ) : (
          <p></p>
        )}
        {testIndex < testData.length - 1 ? (
          <S.Button onClick={() => setTestIndex((prev) => prev + 1)}>
            다음
          </S.Button>
        ) : (
          <S.Button onClick={clickAction}>종료</S.Button>
        )}
      </S.Flex>
    </S.Wrap>
  );
}
