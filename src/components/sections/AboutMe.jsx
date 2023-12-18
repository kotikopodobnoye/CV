import Heading from "../common/Heading";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-10 lg:gap-16 xl:gap-20">
      <div className="max-w-[240px] mx-auto sm:mx-0">
        <img src="/image.jpg" />
      </div>
      <div className="flex flex-col gap-1">
        <Heading className="text-3xl sm:text-5xl">MARYIA MOTUZ</Heading>
        <h3 className="text-xlt">STUDENT</h3>
        <div>
          <p className="mt-2">
            Student of the Faculty of Mechanics and Mathematics.
          </p>
          <p>I consider myself a responsible and orderly person.</p>
          <p>I am looking forward for my first work experience.</p>
        </div>
      </div>
    </div>
  );
}
