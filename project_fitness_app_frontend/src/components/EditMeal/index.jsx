import React, { useState } from 'react';


import { makeStyles } from '@mui/styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';



const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

//Fixed Edit activity

function EditActivity(props) {
    const classes = useStyles();

    const { authUser, activity, activityKey, setEditing, setOpenSnackbar, setSnackbarMsg, handleUpdate } = props;
    //const uid = authUser.uid;

    // Set default activity object
    const defaultActivity = {
        name: activity.name,
        nutrients: activity.nutrients,
        calories: activity.calories,
        date: activity.date
    }

    const [newActivity, setNewActivity] = useState(defaultActivity);

    const handleChange = e => {
        const { name, value } = e.target


        setNewActivity({
            ...newActivity,
            [name]: value,
           

        });
    }

    const handleSlider = e => {
        console.log("TARDET",e.target)
        const calories = `${e.target.value}`;
        setNewActivity({ ...newActivity, calories: calories });
    }

    const isValid = newActivity.name === '';

    // Add the activity to firebase via the API made in this app
    const handleSubmit = action => {


        const response = fetch(`https://fitnessplus.onrender.com/updateMeal/${activity._id}`, {      //Api call to update the todo status
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newActivity)
        }).then((resp) => {
            resp.json()
                .then((response) => {
                    setEditing(false);
                    // Show alert and hide after 3sec
                    setOpenSnackbar(true);
                    setSnackbarMsg('Updated activity');
                    setTimeout(() => {
                        setOpenSnackbar(false)
                    }, 3000)
                    handleUpdate(response, response._id)
                }
                )

        })



    }

    return (
        <form noValidate onSubmit={e => e.preventDefault()}>
            <FormControl className={classes.formControl}>
                <TextField
                    style={{ marginTop: '5px' }}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value={newActivity.name}
                    label="Meal"
                    name="name"
                    onChange={handleChange}
                />

                
                <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <Typography id="discrete-slider" gutterBottom>
                        Nutrients
                    </Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={newActivity.nutrients}
                        style={{ minWidth: '100%' }}
                        name="nutrients"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Protein</MenuItem>
                        <MenuItem value={2}>Carbohydrates</MenuItem>
                        <MenuItem value={3}>Fats</MenuItem>
                    </Select>
                </div>
                <Typography id="discrete-slider" gutterBottom>
                    Calories
                </Typography>
                {/* //Need to change slider */}
                <Slider
                    size="small"
                    max={3000}
                    min={10}
                    defaultValue={100}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={handleSlider}
                />
            </FormControl>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => handleSubmit('add')}
                disabled={isValid}
            >
                Save Meal
            </Button>
        </form>
    )
};

export default EditActivity;