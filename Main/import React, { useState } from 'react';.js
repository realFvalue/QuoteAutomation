import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';

function DraughtproofingDataEntryTable() {
    const [rows, setRows] = useState([{
        winNo: '',
        location: '',
        routInBrushes: '',
        aqmcBead: '',
        replaceExisting: '',
    }]);

    const addRow = () => {
        setRows([...rows, {
            winNo: '',
            location: '',
            routInBrushes: '',
            aqmcBead: '',
            replaceExisting: '',
        }]);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newRows = [...rows];
        newRows[index][name] = value;
        setRows(newRows);
    };

    return (
        <div>
            <TableContainer component={Paper} style={{ maxHeight: 440, overflow: 'auto' }}>
                <Table stickyHeader aria-label="Draughtproofing windows">
                    <TableHead>
                        <TableRow>
                            <TableCell>Win No</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Rout In Brushes</TableCell>
                            <TableCell>AQMC Bead</TableCell>
                            <TableCell>Replace Existing</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <TextField
                                        name="winNo"
                                        value={row.winNo}
                                        onChange={(e) => handleInputChange(index, e)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="location"
                                        value={row.location}
                                        onChange={(e) => handleInputChange(index, e)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="routInBrushes"
                                        value={row.routInBrushes}
                                        onChange={(e) => handleInputChange(index, e)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="aqmcBead"
                                        value={row.aqmcBead}
                                        onChange={(e) => handleInputChange(index, e)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="replaceExisting"
                                        value={row.replaceExisting}
                                        onChange={(e) => handleInputChange(index, e)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={addRow} style={{ marginTop: '20px' }}>
                Add Row
            </Button>
        </div>
    );
}

export default DraughtproofingDataEntryTable;
