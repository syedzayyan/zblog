export default function AnimateText(props) {
  return (
    <div className = "animate-text-container">
      <span className = "text" aria-label={props.copy} role={props.role}>
        {props.children.split("").map((char, index) =>
          <span
            aria-hidden="true"
            key={index}
            style={{ "animationDelay": (0.5 + index / 10) + "s" }}>
            {char}
          </span>
        )}
      </span>
      <style>{`
          .animate-text-container {
            font-size: 2em;
            text-align: center;
            font-weight: 600;
            color: #353239;
          }
          .animate-text-container span span {
            color: tomato;
            position: relative;
            bottom: -1em;
            opacity: 0;
            animation: move-text 0.75s forwards;
          }
          .animate-text-container span span:nth-child(2n) { color: lightseagreen; }
          .animate-text-container span span:nth-child(3n) { color: orange; }
          .animate-text-container span span:nth-child(4n) { color: dodgerblue; }
          .animate-text-container span span:nth-child(5n) { color: blueviolet; }
          
          @keyframes move-text {
            0% {
              bottom: -0.2em;
              opacity: 1;
            }
            
            50% {
              bottom: 0.2em;
            }
          
            100% {
              bottom: 0;
              opacity: 1;
            }
          }
          `}</style>
    </div>
  );
}