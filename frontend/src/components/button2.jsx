import button from "./styles/button2.module.scss";

export default function Button2(props) {
  return (
    <div className={button.Wrapper}>
      <button className={button.Button}>{props.text}</button>
    </div>
  );
}
