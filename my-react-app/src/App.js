import { useState } from 'react';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MySecButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function MyThirdButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
 
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  
  const [count, setCount] = useState(0);

  function handleThirdClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <ul>{listItems}</ul>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <h1>Welcome to my app</h1>
      <MyButton />    
      
      <h1>Counters that update separately</h1>
      <MySecButton />
      <MySecButton />

      <h1>Counters that update separately</h1>
      <MyThirdButton  count={count} onClick={handleThirdClick} />
      <MyThirdButton  count={count} onClick={handleThirdClick} />

</div>
  );
}

