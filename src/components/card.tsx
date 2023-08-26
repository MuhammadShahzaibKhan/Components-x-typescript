type cardProps = {
  id: number;
  name: string;
  age: number;
  institute: string;
  isActive: boolean;
};

export default function Card(props: cardProps) {
  let { id, name, age, institute, isActive } = props;
  return (
    <>
      <div className="border border-3 border-black ms-3 my-3 p-3 text-center">
        <h4><span className="fw-bold">Name:</span> {name}</h4>
        <p><span className="fw-bold">ID:</span> {id}</p>
        <p><span className="fw-bold">Age:</span> {age}</p>
        <p><span className="fw-bold">Institute:</span> {institute}</p>
        <p><span className="fw-bold">IsActive:</span> {isActive ? "Yes" : "No"}</p>
      </div>
    </>
  );
}
