import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="Index">
      <p>
        Hello, dear student! This website has been put together by the Math Lab
        here at Wartburg College, to help <i>you</i> help yourself in select
        mathematics and computer science courses! We've gathered tons of
        resources on each course we tutor, so feel
        free to check them out whenever you're stuck!
      </p>

      {/* Talk about how they could also feel free to check the websites and YouTube channels linked in their entirety for even more resources */}
      {/* Maybe can also drop a link to the booking website explicitly here */}

      <h3>Choose a subject below to get started!</h3>

      <div className="subject-buttons">
        {/* <button><Link to="/mathematics">Mathematics</Link></button>
        <button><Link to="/computer-science">Computer Science</Link></button> */}
        <button onClick={() => navigate("/mathematics")}>Mathematics</button>
        <button onClick={() => navigate("/computer-science")}>
          Computer Science
        </button>
      </div>
    </div>
  );
}