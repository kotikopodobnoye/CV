import Icon from "../common/Icon";
import LabelLink from "../common/LabelLink";

export default function Footer() {
  return (
    <div className="border-t border-black/50 flex justify-center mt-2 py-4 sm:mt-4 md:mt-6 lg:mt-8">
      <div className="flex justify-center gap-2">
        <LabelLink>
          <a href="https://t.me/kotikopodobnoye">
            <Icon type="telegram" />
          </a>
        </LabelLink>
        <LabelLink>
          <a href="https://github.com/kotikopodobnoye">
            <Icon type="github" />
          </a>
        </LabelLink>
        <LabelLink>
          <a href="mailto:mari_motuz@mail.ru">
            <Icon type="mail" />
          </a>
        </LabelLink>
      </div>
    </div>
  );
}
