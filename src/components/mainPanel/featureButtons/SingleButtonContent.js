import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../providers/AppProvider';

const StyledContent = styled.span`
  display: block;
`;

const SingleButtonContent = ({ content, longContent }) => {
  const { useWindowWidth } = useContext(AppContext);
  const windowWidth = useWindowWidth();

  return (
    <StyledContent>{windowWidth < 768 ? content : longContent}</StyledContent>
  );
};

export default SingleButtonContent;
