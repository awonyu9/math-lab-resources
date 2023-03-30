import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="Index">
      <p>
        Hello, dear student! This website has been put together by the Math Lab
        here at Wartburg College, to help <i>you</i> help yourself in select
        mathematics and computer science courses!
      </p>
      
      <h3>Choose a subject below to get started!</h3>

      <div className="subject-buttons">
        {/* <button><Link to="/mathematics">Mathematics</Link></button>
        <button><Link to="/computer-science">Computer Science</Link></button> */}
        <button onClick={() => navigate("/mathematics")}>Mathematics</button>
        <button onClick={() => navigate("/computer-science")}>Computer Science</button>
      </div>
    </div>
  );
}