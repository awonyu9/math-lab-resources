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
      {course === "cs120" ? (
        <div className="back" onClick={() => navigate(`/`)}>
          <span>Back to subject selection</span>
        </div>
      ) : (
        <div className="back" onClick={() => navigate(`/${subject}`)}>
          <span>Back to course selection</span>
        </div>
      )}

      <h2>{courseObj.code}</h2>
      <h2>{courseObj.title}</h2>
      <hr />

      {resources.map((res, i) => (
        <div key={i} className="resource">
          <h3>
            <Link to={res.url} alt="Link to resource" target="_blank">
              {res.name}
            </Link>
            <div className="author">{res.author}</div>
          </h3>
          {res.url.includes("watch") ? (
            <iframe
              src={`https://youtube.com/embed/${res.screenshot}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : // add logic for playlist as well, or just change the conditional so that it's strictly for videos
          res.url.includes("playlist") ? (
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${res.screenshot}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={res.screenshot} alt="resource screenshot" />
          )}
          <p>
            {res.description}{" "}
            <Link to={res.url} alt="Link to resource" target="_blank">
              Link
            </Link>
          </p>
          {i < resources.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
