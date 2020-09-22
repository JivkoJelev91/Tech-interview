import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../App.css';

const BetDetails = ({ count }) => {
  const [bet, setBet] = useState(1);
  const [draw, setDraw] = useState(1);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (count > 0) {
      setPrice((Math.round((count * bet * draw) * 100) / 100))
    }else{
      setPrice(null)
    }
  }, [bet, count, draw])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'bet') {
      setBet(value && value >= 1 ? Number(value) : '')
    }
    if (name === 'draw') {
      setDraw(value && value >= 1 ? Number(value) : '')
    }
  }

  const addBet = (field) => {
    if (field === 'bet') {
      setBet((Math.round((bet + 0.2) * 100) / 100));
    }
    if (field === 'draw') {
      setDraw(draw + 1)
    }
  }

  const removeBet = (field) => {
    if (field === 'bet') {
      if (bet <= 1) return;
      setBet((Math.round((bet - 0.2) * 100) / 100));
    }
    if (field === 'draw') {
      if (draw <= 1) return;
      setDraw(draw - 1)
    }
  }

  return (
    <div>
      <div className="inputWrapper">
        <div className="label">Bet</div>
        <div>
          <i onClick={() => addBet('bet')} className="fa fa-plus-square fa-2x buttons" />
        </div>
        <input
          name="bet"
          type="number"
          className="inputNumber"
          step="0.20"
          value={bet}
          onChange={handleChange}
        />
        <div>
          <i onClick={() => removeBet('bet')} className="fa fa-minus-square fa-2x buttons"/>
        </div>
      </div>
      <div className="inputWrapper">
        <div className="label">Draw</div>
        <div>
          <i onClick={() => addBet('draw')} className="fa fa-plus-square fa-2x buttons"/>
        </div>
        <input
          name="draw"
          type="number"
          className="inputNumber"
          step="1"
          value={draw}
          onChange={handleChange}
        />
        <div>
          <i onClick={() => removeBet('draw')} className="fa fa-minus-square fa-2x buttons"/>
        </div>
      </div>
      <div className="inputWrapper">
        <div className="label">Price</div>
        <div></div>
        <input
          type="number"
          className={'inputNumber notAllowed'}
          readOnly
          disabled
          value={price || 0}
        />
        <div></div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.playground.count,
});

export default connect(mapStateToProps, null)(BetDetails);

