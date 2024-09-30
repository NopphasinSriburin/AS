import React, { useEffect, useState } from 'react';
import { FinanceRecord } from '../models/FinanceRecord';

const RecordList = () => {
  const [records, setRecords] = useState<FinanceRecord[]>([]);

  useEffect(() => {
    // Logic to fetch records from API
    const fetchRecords = async () => {
      try {
        const response = await fetch('/api/records'); // ใช้ API endpoint ที่แท้จริงของคุณ
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: FinanceRecord[] = await response.json(); // ระบุประเภทของ data ที่นี่
        setRecords(data);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <ul>
      {records.map((record) => (
        <li key={record.id}>
          {record.date}: {record.type} - {record.amount} ({record.note})
        </li>
      ))}
    </ul>
  );
};

export default RecordList;
