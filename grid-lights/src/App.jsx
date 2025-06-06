import React, { useState } from 'react'

function Cell({ filled, onclick, isDisabled, label }) {
  return <button type='button'
    onClick={onclick}
    disabled={isDisabled}
    aria-label={label}
    className={filled ? "cell cell-activated" : "cell"}
  />
}

const App = () => {

  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]

  const deactivateCells = () => {
    setIsDeactivating(true)
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice()
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      })
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index]
    setOrder(newOrder)

    //Deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length)
      deactivateCells();
  }
  return (
    <div className='wrapper'>
      Click Colums In Any Ordrs 😊
      <div className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? <Cell
            key={index}
            label={`Cell ${index}`}
            filled={order.includes(index)}
            onclick={() => activateCells(index)}
            isDisabled={order.includes(index) || isDeactivating}
          /> : <span />
        })}
      </div>
    </div>
  )
}

export default App
