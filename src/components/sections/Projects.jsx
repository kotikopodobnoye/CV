import Heading from "../common/Heading";
import Project from "../common/Project";

export default function Projects() {
  return (
    <div className="flex flex-col gap-3">
      <Heading>PROJECTS</Heading>
      <Project>
        <Project.Title>
          <a href="https://github.com/kotikopodobnoye/notion">NOTION</a>
        </Project.Title>
        <Project.Description>
          Project created for convenient storing and managing notes
        </Project.Description>
      </Project>
      <Project>
        <Project.Title>
          <a href="https://github.com/kotikopodobnoye/router">SPA & API</a>
        </Project.Title>
        <Project.Description>
          Project with basic routing system in SPA with usage of mock API
        </Project.Description>
      </Project>
      <Project>
        <Project.Title>
          <a href="https://github.com/kotikopodobnoye/shop">E-Commerce Shop</a>
        </Project.Title>
        <Project.Description>
          Project representing basic example of e-commerce shop
        </Project.Description>
      </Project>
    </div>
  );
}
