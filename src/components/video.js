import React from "react";
import { Grid } from "@material-ui/core";
import fog from "../components/assets/Fog.mp4";

const Videos = () => {
  const itemStyle = {
    border: "2px solid white",
    marginTop: "10px",
    width: "200px",
    height: "180px",
    borderRadius: "10px",
    marginLeft: "50px",
    backgroundColor: "white",
  };
 
  return (
    <Grid container>
      <Grid
        container
        justify="center"
        style={{ marginTop: "10px", fontFamily: "cursive", color: "grey" }}
      >
        <h1>Videos</h1>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <video width="100%" height="100" controls>
            <source src={fog} type="video/mp4" />
          </video>
          <br /> <label style={{ marginLeft: "50px" }}>Video description</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            date
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <video width="200" height="100" controls>
            <source src="movie.mp4" type="video/mp4" />
          </video>
          <br /> <label style={{ marginLeft: "50px" }}>Video description</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            date
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <video width="200" height="100" controls>
            <source src="movie.mp4" type="video/mp4" />
          </video>
          <br /> <label style={{ marginLeft: "50px" }}>Video description</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            date
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <video width="200" height="100" controls>
            <source src="movie.mp4" type="video/mp4" />
          </video>
          <br /> <label style={{ marginLeft: "50px" }}>Video description</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            date
          </label>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Videos;
