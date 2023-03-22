import { useParams, Link } from "react-router-dom";
import resourcesJSON from "../resources.json";

export default function Course() {
  const { subject, course } = useParams();
  // console.log(course)
  console.log(resourcesJSON[subject].courses[0][course].resources)
  const resources = resourcesJSON[subject].courses[0][course].resources;

  return (
    <div className="Course">
      Course page placeholder: {course}
      {resources.map((res, i) => (
        <div key={i}>
          <img src={res.screenshot} alt="resource screenshot" />
          <h3><Link to={res.url} target="_blank">{res.name}</Link></h3>
          <p>{res.description}</p>
        </div>
      ))}
    </div>
  );
}