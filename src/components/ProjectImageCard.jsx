import IMAGES from "../stores/Images";

export default function ProjectImageCard({ project }) {
  return (
    <div
      className="bg-gray-200 bg-[url('../assets/projects/quizzical.png')]"
      // className={`bg-gray-200 bg-[url(.${
      //   IMAGES[project.id] ? IMAGES[project.id].name : ""
      // })] bg-contain`}
    >
      {/* <img
        src={IMAGES[project.id] ? IMAGES[project.id].name : ""}
        alt={project.name}
        className="object-center"
      /> */}
    </div>
  );
}
