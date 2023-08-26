import "./App.css";
import BATable from "./components/BATable";
import Input from "./components/Input";
import SMButton from "./components/SMButton";
import SMSelect from "./components/SMSelect";
import Card from "./components/card";

function App() {
  // =========== Input Component ============= //

  let getData = (data: any) => {
    console.log(data);
  };

  // =========== Button Component ============= //

  let clicked = () => {
    alert("You Clicked");
  };

  // =========== Table Component ============== //

  let data = [
    {
      id: 1,
      name: "Shahzaib",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 2,
      name: "Ammad",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 3,
      name: "Hassan",
      course: "Hyrbrid Development",
      enrolled: true,
    },
    {
      id: 4,
      name: "Haris",
      course: "Hyrbrid Development",
      enrolled: false,
    },
    {
      id: 5,
      name: "Shahmeer",
      course: "Hyrbrid Development",
      enrolled: false,
    },
  ];

  let card = [
    {
      id: 1,
      name: "Shahzaib",
      age: 22,
      institute: "Jawan Pakistan",
      isActive: true,
    },
    {
      id: 2,
      name: "Ammad",
      age: 24,
      institute: "Jawan Pakistan",
      isActive: false,
    },
    {
      id: 3,
      name: "Hassan",
      age: 25,
      institute: "Jawan Pakistan",
      isActive: false,
    },
  ];

  return (
    <>
      {/* =========== Input Component ========== */}
      <div className="mb-4">
        <h1>Input Component</h1>
        <Input type="text" placeHolder="Enter user name" getData={getData} />
      </div>

      {/* =========== Button Component ========= */}

      <div className="my-5">
        <h1>Button Component</h1>
        <SMButton name="Click me" click={clicked} />
      </div>

      {/* =========== Select Component ========== */}

      <div className="my-5">
        <h1>Select Component</h1>
        <SMSelect
          getValue={(data: string) => console.log(data)}
          label="Gender"
          options={[
            {
              value: "male",
              displayName: "Male",
            },
            {
              value: "female",
              displayName: "Female",
            },
          ]}
        />
      </div>

      {/* =========== Table Component ========== */}

      <div className="my-5">
        <h1>Table Component</h1>
        <BATable
          label="abc"
          dataCourse={data}
          cols={[
            {
              heading: "User ID",
              key: "id",
            },
            {
              heading: "Name",
              key: "name",
            },
            {
              heading: "Course",
              key: "course",
            },
            {
              heading: "Enrolled",
              key: "enrolled",
            },
          ]}
        />
      </div>

      {/* ============ Card Component =========== */}

      <div className="my-5">
        <h1 className="mb-5">Card Component</h1>
        <div className="d-flex ">
          {card.map((x, i) => {
            return (
              <div key={i}>
                <Card
                  id={x.id}
                  name={x.name}
                  age={x.age}
                  institute={x.institute}
                  isActive={x.isActive}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
