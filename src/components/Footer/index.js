import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLink,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialMedia,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signIn">How it Works</FooterLink>
              <FooterLink to="/signIn">Testimonials</FooterLink>
              <FooterLink to="/signIn">Careers</FooterLink>
              <FooterLink to="/signIn">Investors</FooterLink>
              <FooterLink to="/signIn">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to="/signIn">Contact</FooterLink>
              <FooterLink to="/signIn">Support</FooterLink>
              <FooterLink to="/signIn">Destinations</FooterLink>
              <FooterLink to="/signIn">Sponsors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signIn">Submit Video</FooterLink>
              <FooterLink to="/signIn">Ambassadors</FooterLink>
              <FooterLink to="/signIn">Agency</FooterLink>
              <FooterLink to="/signIn">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signIn">Instagram</FooterLink>
              <FooterLink to="/signIn">Facebook</FooterLink>
              <FooterLink to="/signIn">Youtube</FooterLink>
              <FooterLink to="/signIn">Twitter</FooterLink>
              <FooterLink to="/signIn">TikTok</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>
              chef
            </SocialLogo>
            <WebsiteRights>Tarean Radu &copy; 2021</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
