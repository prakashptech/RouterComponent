import React from 'react';
import { Grid, Avatar } from "@material-ui/core";
import modi from "./assets/modi.jpg";
import rahul from "./assets/rahul.jpg";
const Year = () => {
    const itemStyle = {
        border: "2px solid white",
        marginTop: "30px",
        width: "200px",
        height: "180px",
        borderRadius: "10px",
        marginLeft: "50px",
        backgroundColor:"white"
      };
      const avatarStyle = {
        width: "85px",
        height: "80px",
        marginLeft: "55px",
        marginTop: "10px",
      };
    return (
<><Grid container>
      <h1>Spark of the Year</h1>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={modi} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
          <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Prime Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={rahul} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Congress Leader
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={modi} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
          <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Prime Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={rahul} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Congress Leader
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={modi} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
          <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Prime Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={rahul} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Congress Leader
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={modi} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
          <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Prime Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={rahul} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Congress Leader
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={modi} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
          <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Prime Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={rahul} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Congress Leader
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={modi} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
          <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Prime Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={rahul} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Congress Leader
          </label>
        </Grid>
      </Grid></Grid></>
    )
}

export default Year;