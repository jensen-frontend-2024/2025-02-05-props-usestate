/* eslint-disable react/prop-types */
import { Button } from './Button';

// We can also write and use an arrow function istead of the fuction keyword and export it has a named variable.
export const Navbar = (props) => {
  console.log(props);
  
  return (
    <nav className="navbar">
      <h2 className="logo">{props.logo}</h2>
      <div className="links">
        {props.links.map((link) => {
          return (
            <span className="link" key={link.id}>
              {link.name}
            </span>
          );
        })}
        <Button />
      </div>
    </nav>
  );
};
