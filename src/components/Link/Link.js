import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UnstyledPointerLink = styled(Link)`
  cursor: pointer;
  text-decoration: none !important; 
  color: inherit !important; 
`;

export default UnstyledPointerLink;