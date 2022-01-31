import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { IDashboardData } from '../Services/Dashboard/interfaces';
import GetDashboardInfo from '../Services/Dashboard/Dashboard';
import { DashboardTable } from './DashboardTable';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Dashboard = () => {
    const [operation, setOperation] = React.useState<IDashboardData>({
        lengths: {
            sum: 0,
            divs: 0,
            multi: 0,
            subs: 0
        },
        result: [{
            _id: '',
            operationType: '',
            parameters: {
                firstArgument: 0,
                secondArgument: 0
            },
            result: 0,
        }]
    })

    const getData = async () => {
        const result = await new GetDashboardInfo().execute()
        setOperation({
            lengths: result.data.body.lengths,
            result: result.data.body.result
        })
    }

    React.useEffect(() => {
        getData()
    }, [])

    React.useEffect(() => { }, [operation])
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item>Sums:<br /> {operation.lengths?.sum}</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Multiplications:<br /> {operation.lengths?.multi}</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Divisions:<br /> {operation.lengths?.divs}</Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>Subtractions:<br />{operation.lengths?.subs}</Item>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <DashboardTable data={operation.result} />
        </Container>
    );
}