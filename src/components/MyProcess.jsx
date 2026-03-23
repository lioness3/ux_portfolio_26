import personaMock from "../assets/images/persona-mockup.png";
import lowFi from "../assets/images/low-fi-mockup.png";
import highFi from "../assets/images/hi-fi-mockup.png";
import developmentMockup from "../assets/images/development-mockup.png";

export default function MyProcess() {
  return (
    <section>
      <div className="process-section">
        <img src={personaMock} alt="Mock up of a Luis the laborer persona." />
        <p className="img-subtext">An example of a real user story I did.</p>
        <h3>User Research</h3>
        <p>
          User research grounds my design decisions in real evidence rather than
          assumptions or trends. By
          <span style={{ textDecoration: "bold" }}>
            uncovering genuine user needs
          </span>
          , pain points, and motivators, I’m able to focus on the right problems
          and design solutions that feel intuitive and meaningful.
        </p>
      </div>
      <div className="process-section">
        <img
          src={lowFi}
          alt="Mock up of a Low Fidelity Prototype from the camp store app design process."
        />
        <p className="img-subtext">My actual prototype.</p>
        <h3>Low-Fidelity Prototypes</h3>
        <p>
          I use Low‑fi prototypes to help me
          <span style={{ textDecoration: "bold" }}>explore ideas quickly</span>
          and stay focused on the core experience without getting distracted by
          visuals. This lets me test and adjust before anything becomes too
          precious to change.
        </p>
      </div>
      <div className="process-section">
        <img
          src={highFi}
          alt="Mock up of a High Fidelity Prototype from the camp store app design process."
        />
        <p className="img-subtext">I brought this prototype to life.</p>
        <h3>High-Fidelity Prototypes</h3>
        <p>
          High‑fi prototypes are my favorite part of the process because they
          <span style={{ textDecoration: "bold" }}>
            bring the design to life
          </span>
          ! This is where I get to see how the visuals and interactions work
          together to support the user experience. It also gives clients a
          realistic view of how the final product will function and feel.
        </p>
      </div>
      <div className="process-section">
        <img
          src={developmentMockup}
          alt="Mock up of a High Fidelity Prototype from the camp store app design process."
        />
        <p className="img-subtext">A real screenshot from my laptop.</p>
        <h3>Development</h3>
        <p>
          I also develop the code that makes my prototypes functional. Several
          of my development projects are available to view on
          <span style={{ textDecoration: "bold" }}>GitHub</span>.
        </p>
      </div>
    </section>
  );
}
