import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Select, MenuItem } from '@mui/material';

function CozyGlazingQuotation() {
    const [rows, setRows] = useState([{
        winNo: '',
        unit: '',
        lrTb: '',
        type: '',
        location: '',
        wMm: '',
        hMm: '',
        moistureReading: '',
        sashStop: '',
        windowColour: '',
        trimDetails: '',
        sqBead: '',
        cCatch: '',
        cStay: '',
        normalStay: '',
        lockingStayPin: '',
        moveCatch: '',
        moveStay: '',
        baseSupports: '',
        safetyClips: '',
        cutOut: '',
        cutAngle: '',
        templateArch: '',
        veryLargeWindow: '',
        magTapeColour: '',
        extraHours: '',
        notes: ''
    }]);

    const addRow = () => {
        setRows([...rows, {
            winNo: '',
            unit: '',
            lrTb: '',
            type: '',
            location: '',
            wMm: '',
            hMm: '',
            moistureReading: '',
            sashStop: '',
            windowColour: '',
            trimDetails: '',
            sqBead: '',
            cCatch: '',
            cStay: '',
            normalStay: '',
            lockingStayPin: '',
            moveCatch: '',
            moveStay: '',
            baseSupports: '',
            safetyClips: '',
            cutOut: '',
            cutAngle: '',
            templateArch: '',
            veryLargeWindow: '',
            magTapeColour: '',
            extraHours: '',
            notes: ''
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
                <Table stickyHeader aria-label="window data entry table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Win No</TableCell>
                            <TableCell>Unit (A,B,C)</TableCell>
                            <TableCell>L/R T/B</TableCell>
                            <TableCell>Type SI/SF/CF/CC/FF</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>W/mm</TableCell>
                            <TableCell>H/mm</TableCell>
                            <TableCell>Moisture Reading</TableCell>
                            <TableCell>Sash Stop</TableCell>
                            <TableCell>Window Colour</TableCell>
                            <TableCell>Trim Details</TableCell>
                            <TableCell>Sq Bead</TableCell>
                            <TableCell>C-Catch</TableCell>
                            <TableCell>C-Stay</TableCell>
                            <TableCell>Normal Stay</TableCell>
                            <TableCell>Locking Stay Pin</TableCell>
                            <TableCell>Move Catch</TableCell>
                            <TableCell>Move Stay</TableCell>
                            <TableCell>Base Supports</TableCell>
                            <TableCell>Safety Clips</TableCell>
                            <TableCell>Cut Out</TableCell>
                            <TableCell>Cut Angle</TableCell>
                            <TableCell>Template (Arch)</TableCell>
                            <TableCell>Very Large Window</TableCell>
                            <TableCell>Mag Tape Colour</TableCell>
                            <TableCell>Extra Hours</TableCell>
                            <TableCell>Notes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell><TextField name="winNo" value={row.winNo} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell>
                                    <Select name="unit" value={row.unit} onChange={(e) => handleInputChange(index, e)}>
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value="A">A</MenuItem>
                                        <MenuItem value="B">B</MenuItem>
                                        <MenuItem value="C">C</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell><TextField name="lrTb" value={row.lrTb} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell>
                                    <Select name="type" value={row.type} onChange={(e) => handleInputChange(index, e)}>
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value="SI">SI</MenuItem>
                                        <MenuItem value="SF">SF</MenuItem>
                                        <MenuItem value="CF">CF</MenuItem>
                                        <MenuItem value="CC">CC</MenuItem>
                                        <MenuItem value="FF">FF</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell><TextField name="location" value={row.location} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField type="number" name="wMm" value={row.wMm} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField type="number" name="hMm" value={row.hMm} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="moistureReading" value={row.moistureReading} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="sashStop" value={row.sashStop} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="windowColour" value={row.windowColour} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="trimDetails" value={row.trimDetails} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="sqBead" value={row.sqBead} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="cCatch" value={row.cCatch} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="cStay" value={row.cStay} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="normalStay" value={row.normalStay} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="lockingStayPin" value={row.lockingStayPin} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="moveCatch" value={row.moveCatch} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="moveStay" value={row.moveStay} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="baseSupports" value={row.baseSupports} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="safetyClips" value={row.safetyClips} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="cutOut" value={row.cutOut} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="cutAngle" value={row.cutAngle} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="templateArch" value={row.templateArch} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="veryLargeWindow" value={row.veryLargeWindow} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="magTapeColour" value={row.magTapeColour} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField type="number" name="extraHours" value={row.extraHours} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                                <TableCell><TextField name="notes" value={row.notes} onChange={(e) => handleInputChange(index, e)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={addRow} style={{ marginTop: '20px' }}>Add Row</Button>
        </div>
    );
}

export default 'CosyGlazingQuotation';