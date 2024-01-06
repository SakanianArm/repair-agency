import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  id: number;
  quantity: number;
  date: string;
  status: string;
  product: number;
  user: number;
}

const BasicTable: React.FC = () => {
  const tableData:DataType[] = [
    {
      id: 1,
      quantity: 2,
      date: '2023-06-27',
      status: "SHIPPED",
      product: 1,
      user: 2,
    },
    {
      id: 2,
      quantity: 1,
      date: '2023-06-27',
      status: "PROCESSING",
      product: 2,
      user: 2,
    },
    {
      id: 3,
      quantity: 1,
      date: '2023-06-27',
      status: "DELIVERED",
      product: 3,
      user: 7,
    },
    {
      id: 4,
      quantity: 2,
      date: '2023-06-27',
      status: "SHIPPED",
      product: 1,
      user: 2,
    },
    {
      id: 5,
      quantity: 1,
      date: '2023-06-27',
      status: "PROCESSING",
      product: 2,
      user: 2,
    },
    {
      id: 6,
      quantity: 1,
      date: '2023-06-27',
      status: "DELIVERED",
      product: 3,
      user: 7,
    },
    {
      id: 7,
      quantity: 1,
      date: '2023-06-27',
      status: "PROCESSING",
      product: 2,
      user: 2,
    },
    {
      id: 8,
      quantity: 1,
      date: '2023-06-27',
      status: "DELIVERED",
      product: 3,
      user: 7,
    },


  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id: string) => <a>{id}</a>,
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Статус",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "ID Товара",
      key: "product",
      dataIndex: "product",
    },
    {
      title: "ID Пользователя",
      key: "user",
      dataIndex: "user",
    },
  ];

  return (
    <Table columns={columns} dataSource={tableData} />
  );
};

export default BasicTable;