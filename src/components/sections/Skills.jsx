import Heading from "../common/Heading";
import Icon from "../common/Icon";
import LabelLink from "../common/LabelLink";

export default function Skills() {
  return (
    <div className="flex flex-col gap-2">
      <Heading>SKILLS</Heading>
      <LabelLink>
        <Icon type="node" />
        <span>Node.JS</span>
      </LabelLink>
      <LabelLink>
        <Icon type="react" />
        <span>React</span>
      </LabelLink>
      <LabelLink>
        <Icon type="redux" />
        <span>Redux</span>
      </LabelLink>
    </div>
  );
}
