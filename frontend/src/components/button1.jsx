import button from "./styles/button1.module.scss";

export default function Button1(props) {
  return (
    <div className={button.Wrapper}>
      <button className={button.Button}>{props.text}</button>
    </div>
  );
}
