import React from 'react'
import { Container,Grid,Box } from '@mui/material';
import AddItem from "../components/AddItem";
import ItemsList from '../components/ItemsList';
const HomePage = () => {
  return (
    <div>
      <Container>
        <Box>
          <Grid className="relative m-auto pt-32 w-full  justify-center ">
            <Grid xs={12} md={12} className='text-center'>
              <AddItem />
            </Grid>
            <Grid xs={12} md={12}>
                <ItemsList/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default HomePage