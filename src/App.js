import React from 'react';
import './App.css';
import ItemCard from './components/ItemCard';

const items = [
  {
    id: 1,
    title: "Ikea Sleeper Sofa",
    description: "Ikea 2 seater sofa which becomes a very comfortable near queen size bed. Very good condition.\n\n\n https://www.ikea.com/us/en/p/lycksele-loevas-sleeper-sofa-ransta-natural-s79387027/",
    price: "$100 (Orignal price $450)",
    images: [
      `${process.env.PUBLIC_URL}/images/sofa-bed-1.jpg`,
      `${process.env.PUBLIC_URL}/images/sofa-bed-2.jpg`,
      `${process.env.PUBLIC_URL}/images/sofa-bed-3.jpg`
    ]
  },
  {
    id: 2,
    title: "Zinus Queen Memory Foam Mattress - 10 inches",
    description: "11 months used, extremely comfortable. Selling for cheap because slightly stained.\n\n https://www.amazon.com/dp/B0CKYZ3B83?ref_=ppx_hzsearch_conn_dt_b_fed_asin_title_1&th=1",
    price: "$50 (Orignal price $260)",
    images: [
      `${process.env.PUBLIC_URL}/images/mattress-1.jpg`
    ]
  },
  {
    id: 3,
    title: "Bar",
    description: "Very cool bar/storage. Only selling at a discount because the condition is not perfect",
    price: "$30",
    images: [
      `${process.env.PUBLIC_URL}/images/bar-1.jpg`,
      `${process.env.PUBLIC_URL}/images/bar-2.jpg`
    ]
  },
  {
    id: 4,
    title: "Storage Cabinet",
    description: "Storage cabinet with 3 boxes and drawers.",
    price: "$20",
    images: [
      `${process.env.PUBLIC_URL}/images/storage.jpg`
    ]
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Moving Out Sale</h1>
        <p>Looking to sell off my furniture asap, contact for more details</p>
        <p>Megh Panandikar</p>
        <p>646-372-6308</p>
      </header>
      <main className="items-container">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </main>
      <footer className="App-footer">
        <p>DM for more info and more items I'm selling</p>
        <p>646-372-6308</p>
      </footer>
    </div>
  );
}

export default App; 
