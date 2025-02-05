/* eslint-disable react/prop-types */

// We destruct the props object here straight away, since we expect it to just have one property, which is link. We don't want to write props.link since it's ugly.
export function Link({ link }) {
  return (
    <div className="link">
      <span className="material-symbols-outlined">{link.icon}</span>
      <span>{link.name}</span>
    </div>
  );
}
