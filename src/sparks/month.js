import { Avatar, Grid } from '@material-ui/core'
import React from 'react'
import akshay from "../sparks/Assets/akshay.jpg";
import amitabh from "../sparks/Assets/amitabh.jpg";

function Month() {
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
      
        <Grid container>
          <h1>Spark of the Month</h1>
      <  Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={amitabh} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald amitabh</label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={akshay} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={amitabh} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald amitabh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={akshay} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={amitabh} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald amitabh</label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={akshay} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={amitabh} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald amitabh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={akshay} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={itemStyle}>
          <Avatar src={amitabh} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald amitabh</label>{" "}
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={akshay} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={amitabh} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Donald amitabh</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Former President
          </label>
        </Grid>
        <Grid item style={itemStyle}>
          <Avatar src={akshay} style={avatarStyle} />
          <br /> <label style={{ marginLeft: "50px" }}>Kejriwal</label>
          <br /> <br />{" "}
          <label style={{ marginLeft: "40px", color: "red" }}>
            Cheif Minister
          </label>
        </Grid>
      </Grid></Grid>
          
        
    )
}

export default Month;