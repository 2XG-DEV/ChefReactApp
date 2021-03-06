import styled from "styled-components";

import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.div`
  padding: 4.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 110rem;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (maxwidth: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.6rem;
  text-align: left;
  width: 16rem;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-wdth: 420px) {
    margin: 0;
    padding: 1rem;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1.4rem;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 100rem;
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 110rem;
  margin: 4rem auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1.6rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 2.4rem;
`;
