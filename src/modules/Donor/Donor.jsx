import {
  Space, Typography,
} from 'antd';
import DataTable from 'elements/DataTable/DataTable';
import React, { useEffect } from 'react';
import { getDonor } from 'store/stats/actions';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from 'modules/Donor/SearchForm';

const { Text } = Typography;
const Donor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonor({}));
  }, []);

  const stats = useSelector((state) => state.stats);
  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      defaultSortOrder: 'ascend',
      render: (text, record) => (
        <Space direction="horizontal">
          <Text>{ text }</Text>
          { record.prev_rank && (
          <Text style={{ fontSize: '0.8rem' }} disabled>
            / Prev:
            { record.prev_rank }
          </Text>
          ) }
        </Space>
      ),
      sorter: (a, b) => a.rank - b.rank,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit',
      align: 'right',
      render: (text) => text?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      sorter: (a, b) => a.credit - b.credit,
    },
    {
      title: 'WUs',
      dataIndex: 'wus',
      key: 'wus',
      align: 'right',
      render: (text) => text?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      sorter: (a, b) => a.wus - b.wus,
    },
    {
      title: 'Team ID',
      dataIndex: 'team',
      key: 'team',
      sorter: (a, b) => a.team - b.team,
    },
  ];

  return (
    <>
      <SearchForm />
      <DataTable
        columns={columns}
        dataSource={stats?.donors?.results}
        pagination={{ defaultPageSize: 100 }}
      />
    </>
  );
};

export default Donor;