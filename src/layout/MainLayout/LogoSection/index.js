import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'assets/images/logo.png';
// import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //
const titleStyle = {
    marginLeft: '.5rem',
    lineHeight: 1,
    fontWeight: 600
};

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img src={Logo} alt="MIR Amb" width="30" height="30" />
        <h3 style={titleStyle}>MIR.Amb</h3>
        {/* <Logo /> */}
    </ButtonBase>
);

export default LogoSection;
