import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  CreditMobile,
  CreditLaptop,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Basakhmal and Sons</SocialLogo>
            <CreditLaptop
              href="https://manavkothari.netlify.app/"
              target="_blank"
            >
              Developed by Manav Kothari
            </CreditLaptop>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/Basakhmal-and-Sons-Dhamtari-100571724704615/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://api.whatsapp.com/send?phone=919131513181/"
                target="_blank"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCNyBCLU6yCBXqSYqXQgursw"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      <CreditMobile href="https://manavkothari.netlify.app/" target="_blank">
        Developed by Manav Kothari
      </CreditMobile>
    </FooterContainer>
  );
};

export default Footer;
