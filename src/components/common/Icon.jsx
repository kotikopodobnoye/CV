import { classNames } from "../../utils/class-names";

export default function Icon({ type, className, ...rest }) {
  return (
    <div
      className={classNames("w-6 h-6 flex justify-center", className)}
      {...rest}
    >
      <img src={`/icons/${type}.svg`} alt={`Icon ${type}`} />
    </div>
  );
}
