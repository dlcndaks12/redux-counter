import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Buttons = ({onCreate, onRemove}) => {
  return (
    <div className="Buttons">
      <div className="btn add" onClick={onCreate}>
        생성
      </div>
      <div className="btn remove" onClick={onRemove}>
        제거
      </div>
    </div>
  );
};

Buttons.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
};
Buttons.defaultProps = {
  onCreate: () => console.log('onCreate not defined'),
  onRemove: () => console.log('onRemove not defined')
};

export default Buttons;
