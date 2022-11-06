import { Grid, TextField } from '@mui/material';
import React from 'react';
function Form({ handleChange, form,handleShow }) {

    return (
        <Grid container spacing={{ xs: 1.5, md: 0.5 }} flexDirection={{ xs: 'column', md: 'row' }}>
            <Grid item>
                <TextField
                    onChange={handleChange}
                    id="outlined"
                    label="تومان"
                    value={form.price * form.tier}
                    name='price'

                />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined"
                    label="واحد"
                    onChange={handleChange}
                    value={form.tier || form.conunt}
                    name='tier'
                />
            </Grid>
            <Grid item>
                <TextField
                    onClick={handleShow}
                    id="outlined-read-only-input"
                    label="انتخاب ارز"
                    onChange={handleChange}
                    value={form.name}
                    name='symbol'
                    sx={{ cursor: "pointer" }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Form;