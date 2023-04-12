import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Itens = styled(HashLink)`
  &:hover {
    opacity: 0.8;
  }
`;

export const Headers = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: rgb(20, 137, 204);
  position: sticky;
  top: 0;
  max-height: 600px;
`;

export const Navbar = styled.nav`
  width: 200px;
  max-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Ul = styled.ul`
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

export const Li = styled.li`
  margin: 0.6rem 0;
`;

export const Profile = styled.div`
  position: absolute;
`;

export const ProfileImg = styled.img`
  max-width: 150px;
  border-radius: 100%;
  border: 6px solid rgba(161, 214, 255, 0.3);
`;
