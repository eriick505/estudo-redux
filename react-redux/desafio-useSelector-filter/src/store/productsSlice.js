import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const slice = createSlice({
  name: "products",
  initialState: {
    data,
    filters: {
      colors: [],
      prices: {
        min: 0,
        max: 0,
      },
    },
  },
  reducers: {
    changeFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
  },
});

export const { changeFilters } = slice.actions;
export default slice.reducer;

export const selectUniqueColors = ({ products }) =>
  Array.from(new Set(products.data.map(({ color }) => color)));

export const filterColors = (colors) => (product) =>
  !colors.length || colors.includes(product.color);

export const filterPrices = (prices) => (product) =>
  (!prices.max || product.price <= prices.max) &&
  (!prices.min || product.price >= prices.min);

export const filterProducts = ({ products }) => {
  const { data, filters } = products;

  return data
    .filter(filterColors(filters.colors))
    .filter(filterPrices(filters.prices));
};
