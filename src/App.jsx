import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Card from '@mui/material/Card';

const App = () => {
  const[years,setYears] = useState("--")
  const[months,setMonths] = useState("--")
  const[days,setDays] = useState("--")

  function handleClick(){
    var d1 = document.getElementById("outlined-1").value
    var m1 = document.getElementById("outlined-2").value
    var y1 = document.getElementById("outlined-3").value

    var curDate = new Date()
    var d2 = curDate.getDate();
    var m2 = curDate.getMonth() + 1;
    var y2 = curDate.getFullYear();

    var d3,m3,y3;
    y3 = y2-y1;

    if(m2 >= m1){
      m3 = m2-m1
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = new Date(y1,m1,0).getDate() + d2 - d1;
    }
    if (m3 < 0){
        m3 = 11;
        y3--;
    }
    setYears(y3)
    setMonths(m3)
    setDays(d3)
  }

  return (
    <Container>
      <Grid display="flex" alignItems="center" justifyContent="center" height="100vh">
        <Card raised="true" sx={{width:"30em",height:"30em",padding:"0 10%",textAlign:"center",borderRadius:"0 0 35%"}}>
          <Grid2>
            <Grid item>
              <h2 style={{textAlign:"center"}}>Enter Date Of Birth</h2>
            </Grid>
            
            <Grid item>
              <Box
              component="form"
              sx={{
                '& > :not(style)': { mx:1, width: '10ch' },
              }}
              autoComplete="off"
              >
                <TextField id="outlined-1" label="DD" variant="outlined" style={{width:"4em"}} />
                <TextField id="outlined-2" label="MM" variant="outlined" style={{width:"4em"}} />
                <TextField id="outlined-3" label="YYYY" variant="outlined" style={{width:"4.3em"}} />
              </Box>
            </Grid>

            <Divider variant="fullWidth" style={{ margin: '20px 0'}} >
              <IconButton color="primary" type='submit' onClick={handleClick}>
                <img src="./src/assets/arrow.png" alt="arrow" width="70em" />
              </IconButton>
            </Divider>

            <Grid item>
              <Grid container>
                <Grid>
                  <Typography variant="h3" fontWeight="700" color="#7B66FF">{years}</Typography>
                </Grid>

                <Grid>
                  <Typography variant="h3" fontWeight="700" marginLeft="0.2em">years</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container>
                <Grid>
                  <Typography variant="h3" fontWeight="700" color="#7B66FF" id="m">{months}</Typography>
                </Grid>
                
                <Grid>
                  <Typography variant="h3" fontWeight="700" marginLeft="0.2em">months</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography variant="h3" fontWeight="700" color="#7B66FF" id="d">{days}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h3" fontWeight="700" marginLeft="0.2em">days</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid2>
        </Card>
      </Grid>
    </Container>
  )
}

export default App