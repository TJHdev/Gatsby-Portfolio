import React from 'react';
import styled from 'styled-components';

// styled components
import HorizontalRule from './styled-components/HorizontalRule';

// images
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

const SocialMediaContainer = styled.div`
  text-align: center;
`;

const SocialMediaLink = styled.a``;

const SocialMediaIcon = styled.img`
  width: 40px;
  margin: 1rem;
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
  height: 80px;
  margin: 0 auto;
  padding: 15px 15px 0 15px;
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
