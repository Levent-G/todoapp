import React from 'react'
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { useSelector } from "react-redux";
import {  useDispatch } from "react-redux";
import { deleteItem } from "../redux/actions/ItemActions";
const ItemsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.items);


  const deleteItemFunc = (items) => {
    try {
      dispatch(deleteItem(items));
      console.log(state?.items);
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div>
         {state?.items.map((item, index) => (
      <Card className="mt-5 " sx={{ backgroundColor: "#ADD8E6" }}>
        <Button className="float-right"    onClick={() => deleteItemFunc(state.items)}>
          <DeleteIcon className=" text-red-700 hover:text-[30px] hover:text-red-500" />
        </Button>
        <Button className="float-right">
          <UpgradeIcon className=" text-blue-700 hover:text-[30px] hover:text-blue-500" />
        </Button>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Itemtext
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            className="float-right "
          >
           {index+1}
          </Typography>
        </CardContent>
      </Card>
        ))}
    </div>
  );
}

export default ItemsList