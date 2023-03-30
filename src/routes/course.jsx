import { useParams, Link, useNavigate } from "react-router-dom";
import resourcesJSON from "../resources.json";

export default function Course() {
  const navigate = useNavigate();
  const { subject, course } = useParams();
  let courseIndex;
  const courses = resourcesJSON[subject].courses;
  for (let i = 0; i < courses.length; i++) {
    if (Object.keys(courses[i])[0] === course) {
      courseIndex = i;
    }
  }
  const courseObj = resourcesJSON[subject].courses[courseIndex][course];
  const resources = courseObj.resources;

  return (
    <div className="Course">
      { course === "cs120" ?
      <div className="back" onClick={() => navigate(`/`)}>
        <span>Back to subject selection</span>
      </div>
      :
      <div className="back" onClick={() => navigate(`/${subject}`)}>
        <span>Back to course selection</span>
      </div>
      }

      {/* <h2>{`${courseObj.code}: ${courseObj.title}`}</h2> */}
      <h2>{courseObj.code}</h2>
      <h2>{courseObj.title}</h2>

      {resources.map((res, i) => (
        <div key={i} className="resource">
          <h3><Link to={res.url} target="_blank">{res.name}</Link></h3>
          <img src={res.screenshot} alt="resource screenshot" />
          <p>{res.description}</p>
          {i < resources.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}