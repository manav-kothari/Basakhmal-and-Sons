import styled from "styled-components";
import mobimg from "../../images/mobimg.jpg";
import compimg from "../../images/compimg.jpg";

export const CategoryContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${compimg});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 420px) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${mobimg});
    background-position: 6500px 0px;
    background-size: cover;
  }
`;
