import Link from "next/link";
import styled from "styled-components";

const HeaderSection = styled.div`
  .span {
  }
`;

const HeaderTemplate = () => {
  return (
    <HeaderSection>
      <span> Today 0 | Total 12345</span>
      <span> 사이좋은 사람들, 싸이월드</span>
      <span> 사생활보호설정 ▶️</span>
    </HeaderSection>
  );
};

export default HeaderTemplate;
