// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// material-ui
import {
    Box,
    Toolbar,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    // Chip,
    // TablePagination,
    // TableFooter,
    // IconButton,
    Divider
} from '@mui/material';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
import DispatcherService from '../../../api/DispatcherService';

// ==============================|| Dispatchers list ||============================== //
const DispatchersAll = () => {
    const [dispatchers, setDispatchers] = useState([]);
    /* const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); */

    async function fetchDispatchers() {
        const dispatchers = await DispatcherService.getList();
        setDispatchers(dispatchers);
    }

    useEffect(() => {
        fetchDispatchers();
    }, []);

    /* const TablePaginationActions = (props) => {
        const { count, page, rowsPerPage, onPageChange } = props;

        const handleFirstPageButtonClick = (event) => {
            onPageChange(event, 0);
        };

        const handleBackButtonClick = (event) => {
            onPageChange(event, page - 1);
        };

        const handleNextButtonClick = (event) => {
            onPageChange(event, page + 1);
        };

        const handleLastPageButtonClick = (event) => {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };

        return (
            <Box sx={{ flexShrink: 0, ml: 2.5 }}>
                <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                    <FirstPageIcon />
                </IconButton>
                <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
                    <KeyboardArrowRight />
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    <LastPageIcon />
                </IconButton>
            </Box>
        );
    };

    TablePaginationActions.propTypes = {
        count: PropTypes.number.isRequired,
        onPageChange: PropTypes.func.isRequired,
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dispatchers.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    */

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
                        Список всех диспетчеров
                    </Typography>
                </Toolbar>
                <Divider />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, width: '100%' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Идентификатор</TableCell>
                                <TableCell>ФИО</TableCell>
                                <TableCell>Личный email</TableCell>
                                <TableCell>Контактный телефон</TableCell>
                                <TableCell align="right">Действия</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dispatchers && dispatchers.length > 0 ? (
                                dispatchers.map((dispatcher) => (
                                    <TableRow key={dispatcher.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {dispatcher.id}
                                        </TableCell>
                                        <TableCell>{dispatcher.name}</TableCell>
                                        <TableCell>{dispatcher.email}</TableCell>
                                        <TableCell>
                                            {dispatcher.phone}
                                            {/* <Chip color="primary" label={dispatcher.phone} size="small" /> */}
                                        </TableCell>
                                        <TableCell align="right">actions</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow sx={{ p: 5, '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        Нет данных
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        {/* <TableBody>
                            {(rowsPerPage > 0 && dispatchers.length
                                ? dispatchers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : dispatchers
                            ).map((dispatcher) => (
                                <TableRow key={dispatcher.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {dispatcher.id}
                                    </TableCell>
                                    <TableCell>{dispatcher.name}</TableCell>
                                    <TableCell>{dispatcher.email}</TableCell>
                                    <TableCell>status</TableCell>
                                    <TableCell align="right">actions</TableCell>
                                </TableRow>
                            ))}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 50 * emptyRows }}>
                                    <TableCell colSpan={12} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={12}
                                    count={dispatchers.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true
                                    }}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter> */}
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default DispatchersAll;
