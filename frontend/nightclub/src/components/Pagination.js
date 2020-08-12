import React from 'react';
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
const StyledLi = styled.li`
  height: 20px;
  width: 20px;
  margin: .5rem;
  background-color: var(--theme-pink);

  @media ${breakpoints.sm} {
    margin: 1rem;
  }
`

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'center' }}>
        {pageNumbers.map(number => (
          <StyledLi key={number} onClick={() => paginate(number)}></StyledLi>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
