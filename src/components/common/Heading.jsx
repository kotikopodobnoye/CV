import { classNames } from "../../utils/class-names";

export default function Heading({ children, className, ...rest }) {
  return (
    <h2
      className={classNames(
        "text-2xl font-heading text-black font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
