import Button from "../Button/Button";
import "./ButtonList.css";
const btnsList = [
  "All",
  "Javascript",
  "Computer Science",
  "Protein",
  "Excercise",
  "Stock Market",
  "Game Show",
  "Interview",
  "Hacking",
  "TDD",
  "Motivation",
  "Cricket",
  "Cooking",
  "Songs",
  "Soccer",
  "Magician",
];
const ButtonList = () => {
  return (
    <div className="flex w-full whitespace-nowrap pf-css-slider">
      <div className="row">
        {btnsList.map((text) => (
          <div className="inline-block">
            <Button name={text}></Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
