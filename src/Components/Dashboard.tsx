import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IDashboard } from '../Services/Dashboard/interfaces';
import GetDashboardInfo from '../Services/Dashboard/Dashboard';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Dashboard = () => {
    const [operation, setOperation] = React.useState<IDashboard>({
        body: {
            result: null,
            lengths: null
        }
    })

    const getData = async () => {
        const result = await new GetDashboardInfo().execute()
        setOperation({
            body: {
                lengths: result.data.body.lengths,
                result: result.data.body.result
            }
        })
    }

    React.useEffect(() => {
        getData()
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>Sums:<br /> {operation.body.lengths?.sum}</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Multiplications:<br /> {operation.body.lengths?.multi}</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Divisions:<br /> {operation.body.lengths?.divs}</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>Subtractions:<br />{operation.body.lengths?.subs}</Item>
                </Grid>
            </Grid>
        </Box>
    );
}