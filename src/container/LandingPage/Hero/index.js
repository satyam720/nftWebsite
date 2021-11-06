import { Grid, Item } from "@mui/material";
import styles from './hero.module.css'
import HeroImage from '../../../../public/images/Group_354.png'

const Hero = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} xs={12}>
        <span className={styles.heroTitle}>Lorem Ipsum</span ><br />
        <span className={styles.heroSubTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
      </Grid>
      <Grid item lg={6} xs={12}>
        <img src = {HeroImage} alt="Timt" />
      </Grid>
    </Grid>
  );
};

export default Hero;
