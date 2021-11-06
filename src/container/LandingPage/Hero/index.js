import { Grid, Item } from "@mui/material";
import {HeroBody, HeroTitle,HeroSubTitle, KnowMore } from "./hero.style";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const Hero = () => {
  return (
    <HeroBody>
        <Grid container spacing={2}>
      <Grid item lg={6} xs={12}>
        <HeroTitle >The Everyday Carry</HeroTitle>
        <HeroSubTitle >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</HeroSubTitle>
        <TextField
          id="filled-search"
          label="Enter Email"
          type="search"
          variant="filled"
        />
      </Grid>
      <Grid item lg={6} xs={12}>
        <img src='images/Group_354.png' alt="Timt" />
      </Grid>
    </Grid>
    </HeroBody>
  );
};

export default Hero;
