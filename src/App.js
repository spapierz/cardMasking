import React, { useState } from "react"
import './App.css';

const cards = [
  {
    bank: 'Chase',
    number: '1234 5678 9101 1234',
    expiry: '01/23',
    cvv: '123',
    name: 'Sally Rhode',
  },
  {
    bank: 'Wells Fargo',
    number: '8702 2312 1111 1111',
    expiry: '07/28',
    cvv: '988',
    name: 'Ned Sparky',
  },
  {
    bank: 'Sofi',
    number: '7888 6870 0000 1233',
    expiry: '09/25',
    cvv: '222',
    name: 'Prashanth Taly',
  },
  {
    bank: 'American Express',
    number: '9211 9999 0000 2323',
    expiry: '10/23',
    cvv: '888',
    name: 'Jack Sparrow',
  },
  {
    bank: 'test',
    number: '1234 5678 9101 1234',
    expiry: '01/23',
    cvv: '123',
    name: 'Sally Rhode',
  },
  {
    bank: 'New Moon Bank',
    number: '5000 2222 0000 4444',
    expiry: '01/23',
    cvv: '123',
    name: 'Sally Rhode',
  }
];

const CardDetails = ({ card, isClicked, onClick, index }) => {
  const cardNumberDisplay = isClicked ? card.number : `${card.number.slice(0, 4)} XXXX XXXX XXXX`;

  return (
    <div className={`credit-card credit-card-${index}`} data-testid="debit-card-body" onClick={onClick}>
      <div className="bank" data-testid="debit-card-bank-name">{card.bank}</div>
      <div className="card-number" data-testid="debit-card-no">{cardNumberDisplay}</div>
      <div className="name" data-testid="debit-card-holder-name">{isClicked ? card.name : 'XXXX XXXX'}</div>
      <div className="expiry" data-testid="debit-card-expiry-date">{isClicked ? card.expiry : 'XX/XX'}</div>
      <div className="cvv" data-testid="debit-card-cvv">{isClicked ? card.cvv : 'XXX'}</div>
    </div>
  );
};

export const DebitCard = () => {
	const [clickedIndex, setClickedIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

	const handleOnButtonClick = (index) => {
    setClickedIndex(index);
    setIsClicked(false); // Reset isClicked when switching cards
  };

  const handleOnCardClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  }; 

	const CardButtons = () => {
    return cards.map((card, index) => (
      <div key={index} className="list-card" data-testid={`list-card-${index}`} onClick={() => handleOnButtonClick(index)}>
        <p className="list-card-title">Card {index}</p>
      </div>
    ));
  };

	return (
    <div className="justify-content-center align-items-center" >
      <div className="card outlined">
        {clickedIndex !== null && (
          <div data-testid="debit-card">
            <h3 style={{ textAlign: 'center' }}>Card Details</h3>
            <br />
            <CardDetails index={clickedIndex} card={cards[clickedIndex]} isClicked={isClicked} onClick={handleOnCardClick} />
          </div>
        )}
        <div className="card-list-wrapper">
          <h3 style={{ textAlign: "center" }}>Cards List</h3>
          <div className="debit-card-list" data-testid="debit-card-list">
            <CardButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <DebitCard />
    </div>
  );
};

export default App;
