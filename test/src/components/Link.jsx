/* eslint-disable react/prop-types */

// We destruct the props object here straight away, since we expect it to just have one property, which is link. We don't want to write props.link since it's ugly.
export function Link({ link }) {
  return (
    <span className="link" key={link.id}>
      {link.name}
    </span>
  );
}
