import {React, useState} from 'react';
import {bmiOptions, fetchData} from '../utils/fetchData'
import { Box, Button, Stack, TextField, Typography} from '@mui/material';

const Bmi = () => {

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();

    const bmiData =async()=>{
      if(!height || !weight || isNaN(height) || isNaN(weight)){
        alert("Enter number inputs for height and weight")
      }
    const response= await fetchData(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?` + new URLSearchParams({height : height,weight : weight}) , bmiOptions);
    setBmi(response.bmi)
    console.log("RESPNSE",bmi)
    }

    const bmiCategory=(bmiValue)=>{
      let category;
      if(bmiValue<18.5){
        category="Under Weight"
      }
      else if(bmiValue>=18.5 && bmiValue<=24.99){
        category="Healthy Weight"
      }
      else if(bmiValue>=25 && bmiValue<=29.99){
        category="Over Weight"
      }
      else{
        category="Obese"
      }
      return category;

    }

  return (
    
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
  
    <Box component="div" display="inline">
      
    <Typography display='inline' fontWeight={400} sx={{ fontSize: { lg: '33px', xs: '20px' } }} mb="29px" textAlign="center">
      Height  
    </Typography>
    <Box component="div" marginLeft="15px" display="inline">
    <TextField
    id="required"
    required label="Height in mts"
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '190px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px', paddingTop: '0px' }}
        onChange={(e) => setHeight(e.target.value)}
        type="text"
      />
      </Box >
      
      </Box >
      <Box sx={{ m: 0.5 }} padding="20px">
      <Typography display='inline' fontWeight={400} sx={{ fontSize: { lg: '33px', xs: '20px' }}} padding="00px" mb="29px" textAlign="center" >
      Weight 
    </Typography>
    <Box component="div" marginLeft="10px" display="inline">
      <TextField
      id="outlined-basic" required label="Weight in kgs"
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '190px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px',paddingTop: '0px' }}
        onChange={(e) => setWeight(e.target.value)}
        type="text"
      />
      </Box>
      </Box>
    
      <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', fontSize: { lg: '20px', xs: '14px' } }} onClick={bmiData}>
        Search
      </Button>
      {!bmi &&
        <Typography fontWeight={400} sx={{ fontSize: { lg: '22px', xs: '12px' }} } padding='30px' color="red">
        Enter your height and weight !!!
      </Typography>}

      {bmi &&
          <Typography fontWeight={400} sx={{ fontSize: { lg: '22px', xs: '12px' }} } padding='30px'>
            Your BMI is <b>{Math.round(bmi*100)/100}</b>, indicating your weight is in the <b>{bmiCategory(bmi)}</b> category for adults of your height.
          </Typography>

      }
    
  </Stack>

  )
    
}

export default Bmi