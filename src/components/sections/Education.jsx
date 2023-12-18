import Heading from "../common/Heading";
import EducationCard from "../common/EducationCard";

export default function Education() {
  return (
    <div className="flex flex-col gap-3">
      <Heading>EDUCATION</Heading>
      <EducationCard>
        <EducationCard.Title>
          <a href="http://bsu.by/en">BELARUSIAN STATE UNIVERSITY</a>
        </EducationCard.Title>
        <EducationCard.Description>2022 - Present</EducationCard.Description>
        <EducationCard.Description>
          Specialty:{" "}
          <a href="https://mmf.bsu.by/en/bachelors-programs/mathematics-and-computer-science-web-programming-and-internet-technologies/">
            Mathematics and Information Technologies.
          </a>{" "}
          Direction: Web-Programming and Internet Technologies
        </EducationCard.Description>
      </EducationCard>
    </div>
  );
}
