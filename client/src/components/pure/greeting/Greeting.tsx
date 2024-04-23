import "./greeting.css";

export default function Greeting(): JSX.Element {
  return (
    <section className="greeting">
      <div className="name">
        <h1>
          welcome, <span>Jhon Duoe</span>
        </h1>
      </div>
      <div className="date">
        <h3>Monday, 24 March 2024 </h3>
      </div>
    </section>
  );
}
