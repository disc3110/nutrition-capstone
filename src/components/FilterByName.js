import { useDispatch } from 'react-redux';
import { setFilter } from '../Redux/Filter/filter';

const FilterByName = () => {
  const dispatch = useDispatch();
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const handleClick = (targetedLetter) => {
    dispatch(setFilter(targetedLetter));
  };
  const displayButtons = alphabet.map((letter) => (
    <button type="button" className="bttn" key={letter} onClick={() => handleClick(letter)}>{letter}</button>
  ));
  return (
    <>
      <button type="button" className="bttn" onClick={() => handleClick(null)}>All</button>
      {displayButtons}
    </>
  );
};

export default FilterByName;
