import React, { useState } from 'react';
import { Pagination } from 'antd';

const Page: React.FC = () => {
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const totalItems = 1000; 

  return (
    <div className="flex justify-end items-center px-4 py-2 w-full">
      <Pagination
        current={current}
        pageSize={pageSize}
        total={totalItems}
        onChange={(page, pageSize) => {
          setCurrent(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
};

export default Page;
