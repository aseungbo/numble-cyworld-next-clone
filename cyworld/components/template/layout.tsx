import styled from "styled-components";
import Image from "next/image";
import HeaderTemplate from "./headerTemplate";
import background from "/public/images/background.jpg";
import innerbox from "/public/images/innerbox.jpg";

// 반응형 고려 시 useWindowSize hook 사용.
const Container = styled.section`
  width: 75rem;
  height: 37.5rem;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -2;
`;
const InnerBox = styled.div`
  width: 70%;
  height: 90%;
  position: absolute;
  margin: 20px;
  z-index: -1;
`;

const Content = styled.div`
  z-index: 1;
`;

const Layout = ({ children }: { children: any }): JSX.Element => {
  return (
    <Container>
      <Background>
        <Image src={background} alt="background" fill />
      </Background>
      <InnerBox>
        <Image src={innerbox} alt="innerbox" fill />
      </InnerBox>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
