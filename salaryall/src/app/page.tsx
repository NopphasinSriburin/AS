// src/app/page.tsx
"use client"; // ทำให้แน่ใจว่าเป็น Client Component

import React from 'react';
import Home from './pages/Home'; // เปลี่ยนเส้นทางตามโครงสร้างที่คุณมี

const Page = () => {
  return <Home />;
};

export default Page;
