import { classNames } from "../../utils/class-names";

export default function LabelLink({ children, className, ...rest }) {
  return (
    <div className={classNames("flex gap-2 items-center", className)} {...rest}>
      {children}
    </div>
  );
}
