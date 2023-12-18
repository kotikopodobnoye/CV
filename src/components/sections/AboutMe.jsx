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
            Hi! My name is Mariya and I am a student of the Faculty of Mechanics and Mathematics. Nice to meet you here!
          </p>
          <p>During my studies, I master HTML, CSS, JavaScript, with a primary focus on learning React and other frameworks.</p>
          <p>I consider myself a responsible and orderly person. If you are looking for an energetic team member, I would be happy to discuss a possible collaboration!</p>
        </div>
      </div>
    </div>
  );
}
