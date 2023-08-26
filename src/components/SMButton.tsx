type buttonProps = {
  name: string;
  click: any;
};

export default function SMButton(props: buttonProps) {
  let { name, click } = props;
  return (
    <>
      <div>
        <button className="btn btn-outline-primary" onClick={click}>
          {name}
        </button>
      </div>
    </>
  );
}
