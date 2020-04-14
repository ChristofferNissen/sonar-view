import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import Link from "./Link";
import Logo from "./Logo";

const Wrapper = styled.div`
  padding: 20px 40px;
  width: 240px;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
  height: 100vh;
  position: sticky;
  overflow: scroll;
  ${(props) => props.theme.media.md`
      display: none
  `}
`;

function Sidebar({ items }) {
  return (
    <Wrapper>
      <Flex flexDirection="column">
        <Box width="120px" mb="70px">
          <Logo />
        </Box>
        {items.map((item) => (
          <Link href={`/surveys/${item.id}`} title={item.date} />
        ))}
      </Flex>
    </Wrapper>
  );
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sidebar;
