import React from 'react';
import { Grid ,Avatar} from '@material-ui/core';
import messi from "../sparks/Assets/messi.jpg";
import virat from '../sparks/Assets/virat.jpg';

function Year() {
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
        <h1>Spark of the Quater</h1>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <Avatar src={messi} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>messi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Footballer
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={virat} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Virat Kohli</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Footballer
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={messi} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>messi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Footballer
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={virat} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Virat Kohli</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Footballer
            </label>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <Avatar src={messi} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>messi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Footballer
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={virat} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Virat Kohli</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Cricket
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={messi} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>messi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Footballer
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={virat} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Virat Kohli</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red", justify:'center' }}>
              Cricket
            </label>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item style={itemStyle}>
            <Avatar src={messi} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>messi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Cricket
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={virat} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Virat Kohli</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Cricket
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={messi} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "70px" }}>messi</label> <br />{" "}
            <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Cricket
            </label>
          </Grid>
          <Grid item style={itemStyle}>
            <Avatar src={virat} style={avatarStyle} />
            <br /> <label style={{ marginLeft: "50px" }}>Virat Kohli</label>
            <br /> <br />{" "}
            <label style={{ marginLeft: "40px", color: "red" }}>
              Cricket
            </label>
          </Grid>
        </Grid>
        </Grid>
      
    )
}

export default Year;
