import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const PageLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <PageLink to="/">{siteTitle}</PageLink>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
