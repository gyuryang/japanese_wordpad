import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function Wordpad() {
    const [jsonData, setJsonData] = useState<string[][]>([]);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/langList.xlsx'); // Excel 파일 경로
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target) {
                const binaryString = event.target.result as string;
                const workbook = XLSX.read(binaryString, { type: 'binary' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];

                const data = XLSX.utils.sheet_to_json<string[]>(worksheet, { header: 1 });
                setJsonData(data);
              }
            };
            reader.readAsBinaryString(blob);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return(
        <>
            
        </>
    )
}