import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IOperations } from '../Services/Dashboard/interfaces';

export interface DashboardInterface {
    data: IOperations[]
}
export const DashboardTable: React.FC<DashboardInterface> = (props) => {    
    return (
        <>
            {props.data.length > 0 ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>                            
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">Operation</TableCell>
                            <TableCell align="left">A</TableCell>
                            <TableCell align="left">B</TableCell>
                            <TableCell align="left">Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row._id}</TableCell>                                
                                <TableCell align="left">{row.operationType}</TableCell>
                                <TableCell align="left">{row.parameters.firstArgument}</TableCell>
                                <TableCell align="left">{row.parameters.secondArgument}</TableCell>
                                <TableCell align="left">{row.result}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> : <></>
            }
        </>

    );
}