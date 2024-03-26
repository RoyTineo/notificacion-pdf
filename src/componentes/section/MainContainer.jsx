import React, { useState } from "react";
import PDFViewerComponent from "../PDFViewerComponent";
import CalendarComponent from "./CalendarComponent";

function MainContainer() {
  const today = new Date();

  const months = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];

  const monthName = months[today.getMonth()];

  const initialValues = {
    exp: "",
    nombreDnte: "",
    nombreDcdo: "",

    fechaAudiencia: today.getDate(),
    diaAudiencia: "",
    mesAudiencia: monthName,
    anioAudiencia: today.getFullYear(),

    horaAudiencia: "10:00 A.M.",
    fechaDocumento: today.getDate(),
    mesDocumento: monthName,
    anioDocumento: today.getFullYear(),

    domicilioDnte: "",
    distritoDnte: "",
    ocupacionDnte: "",
    referenciaDnte: "",

    domicilioDcdo: "",
    distritoDcdo: "",
    ocupacionDcdo: "",
    referenciaDcdo: "",
  };
  
  // Define el estado para almacenar los valores de los inputs
  const [inputValues, setInputValues] = useState(initialValues);

  const [reportData, setReportData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const uppercaseValue = value.toUpperCase();
    setInputValues({ ...inputValues, [name]: uppercaseValue });

    // const { name, value } = e.target;
    // setInputValues({ ...inputValues, [name]: value });
  };

  const handleGenerateReport = () => {
    const newData = Object.values(inputValues);
    setReportData(newData);
    console.log(newData);
    // Llama a PDFViewerComponent después de establecer reportData
    showPDF();
  };

  // Función para limpiar el formulario
  const handleClearForm = () => {
    setInputValues(); // Establece el estado en los valores iniciales
    console.log("limpiando formulario"); // Establece el estado en los valores iniciales
  };

  const showPDF = () => {
    return <PDFViewerComponent data={reportData} />;
  };

  return (
    <section className="home">
      <div className="container-md mt-4">
        <div className="border border-info bg-white  rounded mb-4 p-4">
          <div className="row">
            <div className="col-md-6 mb-4">
          <button className="btn btn-success mb-4 " onClick={handleClearForm}>
            Nuevo Exp
          </button>
              <div className="card">
                <h5 className="card-header bg-warning text-white p-3">
                  Numero de Exp
                </h5>
                <div className="card-body">
                  {/* <div className="col-md-2"> */}
                  <label htmlFor="inputExp" className="form-label">
                    Exp. N°
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputExp"
                    name="exp"
                    value={inputValues.exp}
                    onChange={handleChange}
                  />
                  {/* </div> */}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4 text-center">
              <CalendarComponent />
            </div>
          </div>

          {/* end card exp */}

          <div className="card p-0 mb-4">
            <h5 className="card-header bg-info text-white p-3">
              Detalles de la audiencia
            </h5>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <label htmlFor="inputFechaAudiencia" className="form-label">
                    Fecha:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="inputFechaAudiencia"
                    name="fechaAudiencia"
                    value={inputValues.fechaAudiencia}
                    onChange={handleChange}
                  >
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                    <option value={"5"}>5</option>
                    <option value={"6"}>6</option>
                    <option value={"7"}>7</option>
                    <option value={"8"}>8</option>
                    <option value={"9"}>9</option>
                    <option value={"10"}>10</option>
                    <option value={"11"}>11</option>
                    <option value={"12"}>12</option>
                    <option value={"13"}>13</option>
                    <option value={"14"}>14</option>
                    <option value={"15"}>15</option>
                    <option value={"16"}>16</option>
                    <option value={"17"}>17</option>
                    <option value={"18"}>18</option>
                    <option value={"19"}>19</option>
                    <option value={"20"}>20</option>
                    <option value={"21"}>21</option>
                    <option value={"22"}>22</option>
                    <option value={"23"}>23</option>
                    <option value={"24"}>24</option>
                    <option value={"25"}>25</option>
                    <option value={"26"}>26</option>
                    <option value={"27"}>27</option>
                    <option value={"28"}>28</option>
                    <option value={"29"}>29</option>
                    <option value={"30"}>30</option>
                    <option value={"31"}>31</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="inputDiaAudiencia" className="form-label">
                    Día:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="inputDiaAudiencia"
                    name="diaAudiencia"
                    value={inputValues.diaAudiencia}
                    onChange={handleChange}
                  >
                    <option>Selecciona el día</option>
                    <option value={"LUNES"}>LUNES</option>
                    <option value={"MARTES"}>MARTES</option>
                    <option value={"MIERCOLES"}>MIERCOLES</option>
                    <option value={"JUEVES"}>JUEVES</option>
                    <option value={"VIERNES"}>VIERNES</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="inputMesAudiencia" className="form-label">
                    Mes:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="inputMesAudiencia"
                    name="mesAudiencia"
                    value={inputValues.mesAudiencia}
                    onChange={handleChange}
                  >
                    <option value={"ENERO"}>ENERO</option>
                    <option value={"FEBRERO"}>FEBRERO</option>
                    <option value={"MARZO"}>MARZO</option>
                    <option value={"ABRIL"}>ABRIL</option>
                    <option value={"MAYO"}>MAYO</option>
                    <option value={"JUNIO"}>JUNIO</option>
                    <option value={"JULIO"}>JULIO</option>
                    <option value={"AGOSTO"}>AGOSTO</option>
                    <option value={"SEPTIEMBRE"}>SEPTIEMBRE</option>
                    <option value={"OCTUBRE"}>OCTUBRE</option>
                    <option value={"NOVIEMBRE"}>NOVIEMBRE</option>
                    <option value={"DICIEMBRE"}>DICIEMBRE</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputAnioAudiencia" className="form-label">
                    Año:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="inputAnioAudiencia"
                    name="anioAudiencia"
                    value={inputValues.anioAudiencia}
                    onChange={handleChange}
                  >
                    <option value={"2024"}>2024</option>
                    <option value={"2025"}>2025</option>
                    <option value={"2026"}>2026</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputHora" className="form-label">
                    Hora:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="inputHora"
                    name="horaAudiencia"
                    value={inputValues.horaAudiencia}
                    onChange={handleChange}
                  >
                    <option value={"9:00 A.M."}>9:00 A.M.</option>
                    <option value={"9:30 A.M."}>9:30 A.M.</option>
                    <option value={"10:00 A.M."}>10:00 A.M.</option>
                    <option value={"10:30 A.M."}>10:30 A.M.</option>
                    <option value={"11:00 A.M."}>11:00 A.M.</option>
                    <option value={"11:30 A.M."}>11:30 A.M.</option>
                    <option value={"12:00 A.M."}>12:00 A.M.</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* end card detalles de audiencia */}

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card">
                <h5 className="card-header bg-primary text-white p-3">
                  Datos del Denunciante
                </h5>
                <div className="card-body m-2">
                  <label htmlFor="inputNomApeDnte" className="form-label">
                    Denunciante (es):
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNomApeDnte"
                    name="nombreDnte"
                    value={inputValues.nombreDnte}
                    onChange={handleChange}
                  />

                  <label htmlFor="inputDomicilioDnte" className="form-label">
                    Domicilio Real o Precesal:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputDomicilioDnte"
                    name="domicilioDnte"
                    value={inputValues.domicilioDnte}
                    onChange={handleChange}
                  />
                  <label htmlFor="inputDistritoDnte" className="form-label">
                    Distrito:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputDistritoDnte"
                    name="distritoDnte"
                    value={inputValues.distritoDnte}
                    onChange={handleChange}
                  />
                  <label htmlFor="inputOcupacionDnte" className="form-label">
                    Ocupación:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputOcupacionDnte"
                    name="ocupacionDnte"
                    value={inputValues.ocupacionDnte}
                    onChange={handleChange}
                  />
                  <label htmlFor="inputReferenciaDnte" className="form-label">
                    Referencia:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputReferenciaDnte"
                    name="referenciaDnte"
                    value={inputValues.referenciaDnte}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <h5 className="card-header bg-danger text-white p-3">
                  Datos del Denunciado
                </h5>
                <div className="card-body m-2">
                  <label htmlFor="inputNomApeDcdo" className="form-label">
                    Denunciado (es):
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNomApeDcdo"
                    name="nombreDcdo"
                    value={inputValues.nombreDcdo}
                    onChange={handleChange}
                  />
                  <label htmlFor="inputDomicilio" className="form-label">
                    Domicilio Real o Precesal:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputDomicilio"
                    name="domicilioDcdo"
                    value={inputValues.domicilioDcdo}
                    onChange={handleChange}
                  />
                  <label htmlFor="inputDistrito" className="form-label">
                    Distrito:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputDistrito"
                    name="distritoDcdo"
                    value={inputValues.distritoDcdo}
                    onChange={handleChange}
                  />
                  <label htmlFor="inputOcupacion" className="form-label">
                    Ocupación:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputOcupacion"
                    name="ocupacionDcdo"
                    value={inputValues.ocupacionDcdo}
                    onChange={handleChange}
                  />
                  <label htmlFor="inputReferencia" className="form-label">
                    Referencia:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputReferencia"
                    name="referenciaDcdo"
                    value={inputValues.referenciaDcdo}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* end datos denunciante y Denunciado */}

          <div className="row m-4">
            <div className="col-md-4">
              <label htmlFor="inputFechaDocumento" className="form-label">
                Fecha del documento:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="inputFechaDocumento"
                name="fechaDocumento"
                value={inputValues.fechaDocumento}
                onChange={handleChange}
              >
                <option>Selecciona el día</option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"11"}>11</option>
                <option value={"12"}>12</option>
                <option value={"13"}>13</option>
                <option value={"14"}>14</option>
                <option value={"15"}>15</option>
                <option value={"16"}>16</option>
                <option value={"17"}>17</option>
                <option value={"18"}>18</option>
                <option value={"19"}>19</option>
                <option value={"20"}>20</option>
                <option value={"21"}>21</option>
                <option value={"22"}>22</option>
                <option value={"23"}>23</option>
                <option value={"24"}>24</option>
                <option value={"25"}>25</option>
                <option value={"26"}>26</option>
                <option value={"27"}>27</option>
                <option value={"28"}>28</option>
                <option value={"29"}>29</option>
                <option value={"30"}>30</option>
                <option value={"31"}>31</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputMesDocumento" className="form-label">
                Mes Documento:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="inputMesDocumento"
                name="mesDocumento"
                value={inputValues.mesDocumento}
                onChange={handleChange}
              >
                <option value={"ENERO"}>ENERO</option>
                <option value={"FEBRERO"}>FEBRERO</option>
                <option value={"MARZO"}>MARZO</option>
                <option value={"ABRIL"}>ABRIL</option>
                <option value={"MAYO"}>MAYO</option>
                <option value={"JUNIO"}>JUNIO</option>
                <option value={"JULIO"}>JULIO</option>
                <option value={"AGOSTO"}>AGOSTO</option>
                <option value={"SEPTIEMBRE"}>SEPTIEMBRE</option>
                <option value={"OCTUBRE"}>OCTUBRE</option>
                <option value={"NOVIEMBRE"}>NOVIEMBRE</option>
                <option value={"DICIEMBRE"}>DICIEMBRE</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAnioDocumento" className="form-label">
                Año del documento:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="inputAnioDocumento"
                name="anioDocumento"
                value={inputValues.anioDocumento}
                onChange={handleChange}
              >
                <option value={"2024"}>2024</option>
                <option value={"2025"}>2025</option>
                <option value={"2026"}>2026</option>
              </select>
            </div>
          </div>

          {/* end formularios */}

          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              className="btn btn-primary d-block "
              onClick={handleGenerateReport}
            >
              Generar PDF
            </button>
          </div>

          {/* end button */}

          {/* end border */}
        </div>
        {/* Muestra el PDF cuando reportData tenga datos */}
        {reportData.length > 0 && showPDF()}
        {/* <PDFViewerComponent data={reportData} /> */}
      </div>
    </section>
  );
}

export default MainContainer;
