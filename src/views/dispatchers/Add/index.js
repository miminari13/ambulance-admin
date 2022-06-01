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

const DispatchersAdd = () => (
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
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <Item>ФИО:</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <TextField fullWidth required id="dispatcher-name" label="Введите полное имя" />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Почта:</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <TextField fullWidth required id="dispatcher-email" label="Введите личный Email" />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Контактный телефон:</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <TextField fullWidth required id="dispatcher-phone" label="Введите контактный телефон" />
                        </Item>
                    </Grid>
                    <Grid item xs={4} />
                    <Grid item xs={8}>
                        <Button sx={{ m: 1 }} variant="contained">
                            Сохранить
                        </Button>
                        <Button sx={{ m: 1 }} variant="contained" color="secondary">
                            Сбросить
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    </Box>
);

export default DispatchersAdd;
