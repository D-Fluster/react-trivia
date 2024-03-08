/* Import ReactNode for passing the "children" property as rich text */
import { ReactNode } from "react";

/* Initialize interface properties to be displayed within this component */
interface Props {
  children: ReactNode;
  color: string;
  heading: string;
  question: string;
}

/* Define the layout of this Card component */
const Card = ({ children, color, heading, question }: Props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className={"card-title text-bg-" + color}>{heading}</h5>
          <p className="card-text">{question}</p>
        </div>
        {children}
      </div>
    </>
  );
};

/* Export this component for use within the program */
export default Card;

/* BOOTSTRAP HTML:
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
*/
