/* eslint-disable react/prop-types */

export function Button({color, text, variant }) {
  const classNames = ['btn'];

  if (variant === 'outline') {
    classNames.push('outline');
  }

  if (color === 'warning') {
    classNames.push('warning');
  }

  return (
    <button className={classNames.join(' ')} type="button">
      {text}
    </button>
  );
}
