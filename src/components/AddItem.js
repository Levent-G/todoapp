import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  useDispatch } from "react-redux";
import { useState } from "react";
import { AddItemAction } from "../redux/actions/ItemActions";
const AddItem = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const AddItems = (item) => {
    try {
      dispatch(AddItemAction(item));
    
    } catch (error) {
      console.log(error);
    
    }
  };

  const AddItemForm = async (e) => {
    e.preventDefault();
    AddItems(item);
  }
  return (
    <div>
      <form onSubmit={AddItemForm}>
        <TextField
          id="outlined-basic"
          label="Item"
          variant="outlined"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />
        <Button  type="submit" variant="contained" size="small" sx={{ margin: "12px" }}>
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddItem;