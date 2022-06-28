import { useState } from 'react';
import axios from '../../../utils/axios';
// material-ui
import { Box, Toolbar, Typography, Paper, Divider, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// ==============================|| Add dispatcher ||============================== //
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary
}));

const DispatchersAdd = () => {
    const emptyForm = {
        name: '',
        email: '',
        phone: ''
    };
    const [formData, setFormData] = useState(emptyForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = new FormData();
        Object.keys(formData).forEach((key) => {
            user.append(key, formData[key]);
        });

        axios.post('dispatchers/add', user).then((res) => {
            console.log(res.data);
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        newData[e.target.name] = e.target.value;
        setFormData(newData);
        console.log(newData);
    };

    const handleReset = () => {
        setFormData(emptyForm);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 }
                    }}
                >
                    <Typography sx={{ flex: '1 1 100%', p: 2 }} variant="h3" component="div">
                        Добавить диспетчера в систему
                    </Typography>
                </Toolbar>
                <Divider />
                <Box
                    component="form"
                    sx={{
                        p: 2
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <Item>ФИО:</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <TextField
                                    fullWidth
                                    required
                                    id="dispatcher-name"
                                    label="Введите полное имя"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>Почта:</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <TextField
                                    fullWidth
                                    required
                                    id="dispatcher-email"
                                    label="Введите личный Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>Контактный телефон:</Item>
                        </Grid>
                        <Grid item xs={8}>
                            <Item>
                                <TextField
                                    fullWidth
                                    required
                                    id="dispatcher-phone"
                                    label="Введите контактный телефон"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={8}>
                            <Button sx={{ m: 1 }} variant="contained" type="submit">
                                Сохранить
                            </Button>
                            <Button sx={{ m: 1 }} variant="contained" color="secondary" type="reset" onClick={handleReset}>
                                Сбросить
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default DispatchersAdd;
