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
                <Link to="/dashboard" style={{ all: 'unset' }}>
                    <DashboardIcon color="primary" />
                </Link >
            </ListItemIcon>
            <Link to="/dashboard" style={{ all: 'unset' }}>
                <ListItemText primary="Dashboard" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Link to="/operations" style={{ all: 'unset' }}>
                    <CalculateIcon color="primary" />
                </Link>
            </ListItemIcon>
            <Link to="/operations" style={{ all: 'unset' }}>
                <ListItemText primary="Operations" />
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Link to="/settings" style={{ all: 'unset' }}>
                    <SettingsIcon  color="primary"/>
                </Link>
            </ListItemIcon>
            <Link to="/settings" style={{ all: 'unset' }}>
                <ListItemText primary="Settings" />
            </Link>
        </ListItem>
    </div>
);
