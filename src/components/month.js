import React from 'react';
import { Grid, Avatar } from "@material-ui/core";
import shubash from "./assets/Subhash.jpg";
import bhagat from "./assets/bhagat.jpg";

const Month = () => {
    const itemStyle = {
        border: "2px solid white",
        marginTop: "30px",
        width: "200px",
        height: "180px",
        borderRadius: "10px",
        marginLeft: "50px",
        backgroundColor: "white",
      };
      const avatarStyle = {
        width: "85px",
        height: "80px",
        marginLeft: "55px",
        marginTop: "10px",
      };
    return (
<Grid container>
      <h1>Spark of the Month</h1>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={shubash} style={avatarStyle} />
          <br />{" "}
          <label style={{ marginLeft: "20px" }}>
            Subhash Chandra Bose
          </label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={bhagat} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Bhagat Singh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={shubash} style={avatarStyle} />
          <br />{" "}
          <label style={{ marginLeft: "20px" }}>
            Subhash Chandra Bose
          </label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={bhagat} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Bhagat Singh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={shubash} style={avatarStyle} />
          <br />{" "}
          <label style={{ marginLeft: "20px" }}>
            Subhash Chandra Bose
          </label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={bhagat} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Bhagat Singh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={shubash} style={avatarStyle} />
          <br />{" "}
          <label style={{ marginLeft: "20px" }}>
            Subhash Chandra Bose
          </label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={bhagat} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Bhagat Singh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={shubash} style={avatarStyle} />
          <br />{" "}
          <label style={{ marginLeft: "20px" }}>
            Subhash Chandra Bose
          </label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={bhagat} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Bhagat Singh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={shubash} style={avatarStyle} />
          <br />{" "}
          <label style={{ marginLeft: "20px" }}>
            Subhash Chandra Bose
          </label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={bhagat} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Bhagat Singh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Freedom Fighter
          </label>
        </Grid>
      </Grid>
      </Grid>
    )
}

export default Month;