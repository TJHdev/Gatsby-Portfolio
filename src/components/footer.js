import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import linkedin from '../images/footer/linkedin.svg';
import email from '../images/footer/email.svg';
import github from '../images/icons/github-icon.svg';
import twitter from '../images/footer/twitter.svg';

import TJHlogo from '../images/TJHlogo.svg';

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  max-width: 100%;
  z-index: 9;
  position: relative;
  bottom: 0;
  background: rgba(0.05, 0.05, 0.05, 0.9);
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 1rem 0.5rem;
`;

const PageLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const SocialMediaContainer = styled.div`
  text-align: center;
`;

const SocialMediaLink = styled.a``;

const SocialMediaIcon = styled.img`
  height: 50px;
  margin: 1rem;
`;

const HorizontalRule = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #333, #ccc, #333);
`;

const Copyright = styled.p`
  margin-top: 3px;
  font-size: 1.5rem;
  color: white;
`;

const IconContainer = styled.div`
  display: block;
  text-align: center;
`;

const Icon = styled.img`
  margin: 0 auto;
  padding: 20px;
`;

const Footer = () => (
  <FooterWrapper>
    <IconContainer>
      <Icon src={TJHlogo} />
    </IconContainer>
    <FooterContainer>
      <SocialMediaContainer>
        <SocialMediaLink href="mailto:thomasjhanna@outlook.com">
          <SocialMediaIcon src={email} />
        </SocialMediaLink>
        <SocialMediaLink href="https://github.com/TJHdev">
          <SocialMediaIcon src={github} />
        </SocialMediaLink>
        <SocialMediaLink href="https://www.linkedin.com/in/thomas-hanna-2b946394/">
          <SocialMediaIcon src={linkedin} />
        </SocialMediaLink>
        <SocialMediaLink href="https://twitter.com/Tea_JH">
          <SocialMediaIcon src={twitter} />
        </SocialMediaLink>
        <HorizontalRule />
        <Copyright>All rights reserved Thomas Hanna &#169;</Copyright>
      </SocialMediaContainer>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
