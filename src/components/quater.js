import React from 'react';
import { Grid, Avatar } from "@material-ui/core";
import trump from "./assets/trump.jpg";
import keju from "./assets/keju.jpg";
const Quater = () => {
    const itemStyle = {
        border: "2px solid white",
        marginTop: "30px",
        width: "200px",
        height: "180px",
        borderRadius: "10px",
        marginLeft: "50px",
        backgroundColor : "white"
      };
      const avatarStyle = {
        width: "85px",
        height: "80px",
        marginLeft: "55px",
        marginTop: "10px",
      };
    return (
<><Grid container>
  
      <h1>Spark of the Quater</h1>
      <  Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={trump} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald Trump</label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={keju} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={trump} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald Trump</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={keju} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={trump} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald Trump</label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={keju} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={trump} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald Trump</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={keju} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={trump} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald Trump</label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={keju} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={trump} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald Trump</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={keju} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
      </Grid></Grid></>
    );
};

export default Quater;