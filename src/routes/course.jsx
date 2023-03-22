import { useParams, Link } from "react-router-dom";
import resourcesJSON from "../resources.json";

export default function Course() {
  const { subject, course } = useParams();
  let courseIndex;
  const courses = resourcesJSON[subject].courses;
  for (let i = 0; i < courses.length; i++) {
    if (Object.keys(courses[i])[0] === course) {
      courseIndex = i;
    }
  }
  const resources = resourcesJSON[subject].courses[courseIndex][course].resources;

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