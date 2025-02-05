/* eslint-disable react/prop-types */
import { Button } from './Button';
import { Link } from './Link';

// We can also write and use an arrow function istead of the fuction keyword and export it has a named variable.
export const Navbar = (props) => {
  console.log(props);

  return (
    <nav className="navbar">
      <h2 className="logo">{props.logo}</h2>
      <div className="links">
        {props.links.map((link) => {
          return <Link key={link.id} link={link} />;
        })}

        {/* 
        This will also work, it's a shortend version when we want to return driectly from the callback. You cna then remove the return keyword and the codeblock belonging to the callback function.
        {props.links.map((link) => (
          <Link key={link.id} link={link} />
        ))} */}
        <Button text="Search" />
      </div>
    </nav>
  );
};
