import { Grid ,Avatar} from '@material-ui/core'
import React from 'react';
import sandeep from "../sparks/Assets/sandeep.jpg";
import sonu from "../sparks/Assets/sonu.jpg";

function Quatar() {
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
        
      <>  <Grid container>
        <h1>Spark of the Quater</h1>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <Avatar src={sandeep} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sonu} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sandeep} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sonu} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <Avatar src={sandeep} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sonu} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sandeep} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sonu} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red", justify:'center' }}>
              Speaker
            </label>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <Avatar src={sandeep} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sonu} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sandeep} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>Modi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={sonu} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Rahul Gandhi</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Speaker
            </label>
          </Grid>
        </Grid></Grid></>
        
    )
}

export default Quatar
