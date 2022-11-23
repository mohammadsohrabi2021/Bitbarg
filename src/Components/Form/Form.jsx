import { Grid, TextField } from '@mui/material';
import React from 'react';
function Form({ setForm,setOpen,form }) {
    const handleShow = () => {
        setOpen(true)
    }
    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <Grid container spacing={{ xs: 1.5, md: 0.5 }} flexDirection={{ xs: 'column', md: 'row' }}>
            <Grid item>
                <TextField
                    onChange={handleChange}
                    id="outlined"
                    label="تومان"
                    value={Number(form.price * form.tier).toFixed(2)}
                    name='price'

                />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined"
                    label="واحد"
                    onChange={handleChange}
                    value={form.tier || form.tier}
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
                    sx={{ cursor: "pointer", paddingRight: '0' }}
                    InputProps={{
                        readOnly: true,
                        startAdornment: <Grid sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}><img width={'30px'} height={'30px'} src={form.iconUrl||form.icon} /></Grid>
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Form;