import {
  NavLink,
} from 'react-router-dom';

const Navbar = () => <>
  <nav>
    <NavLink to="/" as={NavLink}>
      {'home'}
    </NavLink>
  </nav>
</>;
export default Navbar;
