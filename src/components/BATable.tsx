type tableProps = {
  label: string;
  dataCourse: any[];
  cols: any[];
};

export default function BATable(props: tableProps) {
  const { label, dataCourse, cols } = props;
  return (
    <>
      <div>
        <table className="table table-bordered border-dark w-50 text-center">
          <thead>
            <tr>
              {cols.map((x, i) => (
                <th key={i}>{x.heading}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {dataCourse.map((row, i) => (
              <tr key={i}>
                {cols.map((col, i) => (
                  <td key={i}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
