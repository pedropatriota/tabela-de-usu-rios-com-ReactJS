import styled from 'styled-components';
import { Person, Security } from '@material-ui/icons';

export const User = styled(Person)`
    color: #fff;
    border-radius: 5px;
    width: 46px;
    opacity: 1;
    height: 59px;
    background-image: linear-gradient(to top right, purple, red, yellow);
`;

export const Shield = styled(Security)`
    color: #fff;
    border-radius: 5px;
    width: 46px;
    height: 59px;
    background-image: linear-gradient(to top right, purple, red, yellow);
`;