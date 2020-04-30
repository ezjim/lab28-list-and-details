import React, { useEffect, useState } from 'react';
import List from '../../components/App/Detail/Detail';
import { fetchList } from '../../Services/fetch';

const ListPage = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchList(page)
      .then(fetchedList => setList(fetchedList));
  }, [page]);

  const changePage = by = setPage(prevPage => prevPage + by);
  
  return (
    <>
      <button onClick={() => changePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage(1)} disabled={list.length < 20}>&gt;</button>
      <List list={list} />
    </>
  );
};

export default ListPage;
