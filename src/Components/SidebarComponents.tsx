import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Link to="/dashboard">
                    <DashboardIcon />
                </Link>
            </ListItemIcon>
            <Link to="/dashboard">
                <ListItemText primary="Dashboard" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Link to="/operations">
                    <CalculateIcon />
                </Link>
            </ListItemIcon>
            <Link to="/operations">
                <ListItemText primary="Operations" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);
