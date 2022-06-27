import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const ProductList = useSelector((state) => state.app?.productList)


  useEffect(() => {
    dispatch.app.fetchProduct()
  }, [dispatch])

  return (
    <div className="App">
      {ProductList.length > 0 && ProductList.map((x, i) =>
        <ul key={x.id}>
          {x.title}
        </ul>)}
    </div>
  );
}

export default App;
