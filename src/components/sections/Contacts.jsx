import Heading from "../common/Heading";
import Icon from "../common/Icon";
import LabelLink from "../common/LabelLink";

export default function Contacts() {
  return (
    <div className="flex flex-col gap-2">
      <Heading>CONTACT ME</Heading>
      <LabelLink>
        <Icon type="telegram" />
        <a href="https://t.me/kotikopodobnoye">kotikopodobnoye</a>
      </LabelLink>
      <LabelLink>
        <Icon type="github" />
        <a href="https://github.com/kotikopodobnoye">GitHub</a>
      </LabelLink>
      <LabelLink>
        <Icon type="mail" />
        <a href="mailto:mari_motuz@mail.ru">mari_motuz@mail.ru</a>
      </LabelLink>
      <LabelLink>
        <Icon type="location" />
        <span>Minsk</span>
      </LabelLink>
    </div>
  );
}
