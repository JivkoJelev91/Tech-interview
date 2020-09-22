import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getCountOfSelectedNumbers } from '../redux/actions/playgroundActions';
import '../App.css';

const Playground = ({ getCountOfSelectedNumbers }) => {
  const [choosedNumbers, setChoosedNumbers] = useState(Array(80).fill().map((v, i) => false));
  const [limit, setLimit] = useState(0);

  const chooseNumber = useCallback((index) => {
    const copyArray = [...choosedNumbers];
    const maximumLimit = 12;
    if (copyArray[index]) {
      copyArray[index] = false;
      setLimit(limit - 1);
    } else {
      if (limit >= maximumLimit) return;
      copyArray[index] = true;
      setLimit(limit + 1);
    }
    setChoosedNumbers(copyArray)
  }, [choosedNumbers, limit]);

  useEffect(() => {
    getCountOfSelectedNumbers(limit)
  }, [getCountOfSelectedNumbers, limit])

  return (
    <div className="playground">
      {choosedNumbers.map((v, i) => {
        return (
          <div
            key={i}
            onClick={() => chooseNumber(i)}
            className={`number ${v ? 'choosedNumber' : ''} ${limit === 12 && !v ? 'notAllowed' : ''}`}>
            {i + 1}
          </div>
        )
      })}
    </div>
  );
}

const mapDispatchToProps = { getCountOfSelectedNumbers }

export default connect(null, mapDispatchToProps)(Playground);