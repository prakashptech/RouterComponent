import React from "react";
import { Grid } from "@material-ui/core";

import "./design.css";

import sam from "./asset/sam.jpg";
import huw from "./asset/huw.jpg";
import one from "./asset/one.jpg";
import s21 from "./asset/s21.jpg";
import sony from "./asset/sony.jpg";
import sale from "./asset/sale.jpg";

const Design = () => {
  const itemStyle = {
    width: "550",
    height: "250px",
    //  marginTop: "50px",
    marginLeft: "120px",
  };
  const itemStyle1 = {
    width: "550px",
    justify: "center",
  };
  const itemStyle2 = {
    marginTop: "10px",
  };
  return (
    <Grid container>
      <Grid container justify="center" style={itemStyle2}>
        <Grid item >
          <Grid container spacing={2} justify="center">
            <Grid item style={itemStyle}>
              <img src={sam} height="300px" width="500px" alt="s" />
            </Grid>
            {/* <Grid item style={{marginTop:"60px"}}>
            <img src={sale} height="320px" width="150px" alt="s" />
          </Grid> */}
          </Grid>
          <Grid
            container
            justify="center"
            style={{ marginTop: "55px", marginLeft: "10%" }}
          >
            <Grid item style={{ itemStyle1 }}>
              <h3>Samsung Galaxy Note 20 Ultra review : The Pros and cons</h3>
              <small>
                The iPhone 12 Pro is one of the most feature-rich iPhones you
                can buy right now. It has the
                <br /> greatest of all Apple's features inside
              </small>
              <Grid style={{ itemStyle1 }}>
                <small> BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "10px" }}>
          <img src={sale} height="320px" width="150px" alt="s" />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" style={itemStyle2}>
        <Grid item style={{ itemStyle2 }}>
          <img src={huw} height="200px" width="250" alt="s" />
          <Grid style={itemStyle2}>
            Huwaei Mate 40 Pro review, launch,
            <br /> design, processor and more
          </Grid>
          <Grid style={itemStyle2}>
            <small> BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
          </Grid>
        </Grid>
        <Grid item>
          <img src={one} height="200px" width="250px" alt="s" />
          <Grid style={itemStyle2}>
            OnePlus 9 Pro vs Samsung Galaxy S21
            <br /> Ultra review, Which Android phone wins
          </Grid>
          <Grid style={itemStyle2}>
            <small> BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" style={itemStyle2}>
        <Grid item>
          <img src={s21} height="200px" width="250" alt="s" />
          <Grid style={itemStyle2}>
            Samsung Galaxy S21 hands on review
            <br />
          </Grid>
          <Grid style={itemStyle2}>
            <small> BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
          </Grid>
        </Grid>
        <Grid item>
          <img src={sony} height="200px" width="250px" alt="s" />
          <Grid style={itemStyle2}>
            Sony Xperia 1 ll review, the best phone
            <br /> for watching movies
          </Grid>
          <Grid>
            <small style={itemStyle2}> BY MARIO SPEEDWAGON | 2 DAYS AGO</small>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" style={itemStyle2}>
        <button
          onClick={() => {
            console.log("clicked");
          }}
          className="btn"
        >
          SHOW MORE
        </button>
      </Grid>
    </Grid>
  );
};

export default Design;