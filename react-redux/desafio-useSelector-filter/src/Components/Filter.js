import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeFilters, selectUniqueColors } from "../store/productsSlice";

function Filter() {
  const colors = useSelector(selectUniqueColors);
  const dispatch = useDispatch();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  const handleChange = ({ target }) => {
    if (target.checked) setSelectedColors([...selectedColors, target.value]);
    else setSelectedColors(selectedColors.filter((c) => c !== target.value));
  };

  const handleChecked = (color) => {
    return selectedColors.includes(color);
  };

  useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
  }, [dispatch, selectedColors]);

  useEffect(() => {
    dispatch(
      changeFilters({
        name: "prices",
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      })
    );
  }, [dispatch, minPrice, maxPrice]);

  return (
    <div>
      <input
        type="number"
        onChange={({ target }) => setMinPrice(target.value)}
        value={minPrice}
        placeholder="Min"
      />
      <input
        type="number"
        onChange={({ target }) => setMaxPrice(target.value)}
        value={maxPrice}
        placeholder="Max"
      />

      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={handleChecked(color)}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
    </div>
  );
}

export default Filter;
