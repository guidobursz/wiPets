//This will fetch and get verified stores, and make a table

//Bootstrap
//
//Import components
import StoreRowIndex from "../general/table/StoreRowIndex";
import SpinnerBootstrap from "../SpinnerBootstrap";
//Import components
//

const TableLayout = ({ data }) => {
  console.log(data);

  if (data.storesList === undefined) {
    return (
      <>
        {/* div for center spinner */}
        <div className="mx-auto">
          {data.loadingQuery === true && (
            <>
              <br />
              <br />
              <h4 className="d-flex justify-content-center">Cargando...</h4>
              <div className="d-flex justify-content-center">
                <SpinnerBootstrap />
              </div>
              <br />
              <br />
            </>
          )}
        </div>

        <div>Hay un problemon</div>
      </>
    );
  } else {
    return (
      <>
        {/* div for center spinner */}
        <div className="mx-auto">
          {data.loadingQuery === true && (
            <>
              <br />
              <br />
              <h4 className="d-flex justify-content-center">Cargando...</h4>
              <div className="d-flex justify-content-center">
                <SpinnerBootstrap />
              </div>
              <br />
              <br />
            </>
          )}
        </div>

        <div className="container">
          {data.storesList.map((el) => (
            <StoreRowIndex data={el} />
          ))}
        </div>

        {/* 

<div className="border border-warning">
  {data.storesList.map((el) => (
    <div className="border border-primary">
      {el.name} || {el.province} ||{" "}
      {el.Services.length >= 0
        ? el.Services.map((serv) => <div>{serv.id}</div>)
        : ""}
    </div>
  ))}
</div>

*/}
      </>
    );
  }
};

export default TableLayout;
