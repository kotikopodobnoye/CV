import { classNames } from "../../utils/class-names";

export default function Project({ children, className, ...rest }) {
  return (
    <div className={classNames("flex flex-col gap-2", className)} {...rest}>
      {children}
    </div>
  );
}

Project.Title = Title;
Project.Description = Description;

function Title({ children, className, ...rest }) {
  return (
    <h3 className={classNames("font-bold text-md", className)} {...rest}>
      {children}
    </h3>
  );
}

function Description({ children, className, ...rest }) {
  return (
    <p className={classNames("text-md", className)} {...rest}>
      {children}
    </p>
  );
}
