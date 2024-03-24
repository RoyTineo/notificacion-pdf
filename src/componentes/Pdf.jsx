import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { styles } from "./EstilosPdf";
import escudoNacional from "../img/Gran_Sello_de_la_República_del_Perú.png";

const Pdf = ( data ) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.mainSection}>
        <View style={styles.containerLogo}>
          {/* Añadir imagen */}
          <Image src={escudoNacional} style={styles.image} />
          <Text style={styles.textLogo}>MINISTERIO DEL INTERIOR</Text>
          <Text style={styles.textLogo}>
            DIRECION GENERAL DEL GOBIERNO INTERIOR
          </Text>
          <Text style={styles.textLogo}>
            SUBPREFECTURA DISTRITAL DE AYACUCHO
          </Text>
        </View>
       
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>
            NOTIFICACIÓN SUBPREFECTURA DE LA PROVINCIA DE HUAMANGA 
          </Text>
          {/* <Text style={styles.textTitle}>DE LA PROVINCIA DE HUAMANGA</Text> */}
          <Text style={[styles.textTitle, { fontSize: "14" }]}>
            (PARA DENUNCIANTE) 
          </Text>
        </View>

        <View style={styles.containerBody}>
          {/* Tablita */}
          <View style={styles.table}>
            {/* Fila 1 */}
            <View style={styles.row}>
              <Text style={[styles.cell, styles.cellHeader]}>
                EXP. {data[0]} - 2024
              </Text>
            </View>
            {/* Fila 2 */}
            <View style={styles.row}>
              <Text style={styles.cell}>NOMBRES Y APELLIDOS</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[1]}
              </Text>
            </View>
            {/* Fila 3 */}
            <View style={styles.row}>
              <Text style={styles.cell}>DOMICILIO REAL O PROCESAL</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[11]}
              </Text>
            </View>
            {/* Fila 4 */}
            <View style={styles.row}>
              <Text style={styles.cell}>DISTRITO</Text>
              <Text style={[styles.cell, styles.lastCell]}>{data[12]}</Text>
            </View>
            {/* Fila 5 */}
            <View style={styles.row}>
              <Text style={styles.cell}>OCUPACIÓN</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[13]}
              </Text>
            </View>
            {/* Fila 6 */}
            <View style={styles.row}>
              <Text style={styles.cell}>REFERENCIA</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[14]}
              </Text>
            </View>
          </View>

          {/* texo */}
          <View>
            <Text style={styles.textBody}>
              POR MEDIO DEL PRESENTE; SE LE NOTIFICA A UD, PARA QUE SE APERSONE
              A LA SUBPREFECTURA DE LA PROVINCIA DE HUAMANGA, SITIO PORTAL
              CONSTITUCIÓN Nº 15, PLAZA MAYOR DE AYACUCHO, DÍA:{" "}
              <Text style={{ fontStyle: "RobotoBold" }}>
              {data[4]} {[data[3]]} DE {data[5]} DEL {data[6]}
              </Text>
              , <Text style={{ fontStyle: "RobotoBold" }}>{data[7]}</Text>{" "}
              HORA EXACTA, PARA ESCLARECIMIENTO DE LA DENUNCIA , INTERPUESTA
              CONTRA LAS PERSONAS :{" "}
              <Text style={{ fontStyle: "RobotoBold" }}>
              {data[2]}
              </Text>
              . RESPECTO DEL AGRAVIO QUE ATENTA CONTRA LOS DERECHOS
              FUNDAMENTALES DE LAS PERSONA CONSAGRADOS POR LA CONSTITUCION
              POLITICA DEL PERU, LEYES Y NORMAS VIGENTES.
            </Text>

            <Text style={styles.dateDocument}>
            {data[8]}, DE {data[9]} DEL {data[10]}
            </Text>
            <View style={styles.containerTextNota}>
              <Text style={styles.textNota}>NOTA</Text>
              <Text style={styles.textNota}>
                DE NO ASISTIR EN EL DIA HORA Y LUGAR SEÑALADO EN LA PRESENTE
                NOTIFICACION, SU SOLICITUD SERÁ DECLARADO EN ABANDONO
                PROCEDIENDO A SU ARCHIVAMIENTO CORRESPONDIENTE.
              </Text>
            </View>

            <View style={[styles.containerTitle, { marginTop: "20px" }]}>
              <Text style={styles.textTitle}>CONSTANCIA DE RECEPCIÓN</Text>
              <Text style={styles.textTitle}>EXP. N° {data[0]} - 2024</Text>
            </View>
            <View style={{ lineHeight: "1.7" }}>
              <Text>
                NOMBRES Y APELLIDOS:
                .........................................................................................................
              </Text>
              <Text>
                DNI:.....................................................
                FIRMA:...........................................................................
              </Text>
              <Text>
                PARENTESCO:..............................................
                FECHA:...................................
                HORA:..................
              </Text>
              <Text>CARACTERISTICAS DEL INMUEBLE:</Text>
            </View>
            {/* Tablita */}
            <View style={styles.table}>
              {/* Fila 1 */}
              <View style={[styles.row, { borderTop: "1px" }]}>
                <Text style={[styles.cell, { width: "25%" }]}>
                  CASA DE MATERIAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  PISOS
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>
              {/* Fila 2 */}
              <View style={styles.row}>
                <Text style={[styles.cell, { width: "40%" }]}>PUERTAS</Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  MATERIAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "20%", borderLeft: "none" }]}
                >
                  COLOR
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>
              {/* Fila 3 */}
              <View style={styles.row}>
                <Text style={[styles.cell, { width: "40%" }]}>
                  PUERTA PRINCIPAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  MATERIAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "20%", borderLeft: "none" }]}
                >
                  COLOR
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>
              {/* Fila 4 */}
              <View style={styles.row}>
                <Text style={[styles.cell, { width: "40%" }]}>N° MEDIDOR</Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  LUZ
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "20%", borderLeft: "none" }]}
                >
                  AGUA
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>

              {/* Fila 5 */}
              <View style={styles.row}>
                <Text style={[styles.cell]}>
                  DATOS ADICIONALES U OBSERVACIONES
                </Text>
                <Text style={[styles.cell, styles.lastCell]}></Text>
              </View>
            </View>

            <View style={{ lineHeight: "2" }}>
              <Text style={{ fontStyle: "RobotoBold" }}>NOTIFICADO POR:</Text>
              <Text>
                NOMBRES Y APELLIDOS:
                ..........................................................................................................
              </Text>
              <Text>
                DIA: ........................ HORA:
                ............................, DEL MES:
                ......................................... DEL 2024
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.mainSection}>
        <View style={styles.containerLogo}>
          {/* Añadir imagen */}
          <Image src={escudoNacional} style={styles.image} />
          <Text style={styles.textLogo}>MINISTERIO DEL INTERIOR</Text>
          <Text style={styles.textLogo}>
            DIRECION GENERAL DEL GOBIERNO INTERIOR
          </Text>
          <Text style={styles.textLogo}>
            SUBPREFECTURA DISTRITAL DE AYACUCHO
          </Text>
        </View>
       
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>
            NOTIFICACIÓN SUBPREFECTURA DE LA PROVINCIA DE HUAMANGA 
          </Text>
          {/* <Text style={styles.textTitle}>DE LA PROVINCIA DE HUAMANGA</Text> */}
          <Text style={[styles.textTitle, { fontSize: "14" }]}>
            (PARA DENUNCIADO) 
          </Text>
        </View>

        <View style={styles.containerBody}>
          {/* Tablita */}
          <View style={styles.table}>
            {/* Fila 1 */}
            <View style={styles.row}>
              <Text style={[styles.cell, styles.cellHeader]}>
                EXP. {data[0]} - 2024
              </Text>
            </View>
            {/* Fila 2 */}
            <View style={styles.row}>
              <Text style={styles.cell}>NOMBRES Y APELLIDOS</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[2]}
              </Text>
            </View>
            {/* Fila 3 */}
            <View style={styles.row}>
              <Text style={styles.cell}>DOMICILIO REAL O PROCESAL</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[15]}
              </Text>
            </View>
            {/* Fila 4 */}
            <View style={styles.row}>
              <Text style={styles.cell}>DISTRITO</Text>
              <Text style={[styles.cell, styles.lastCell]}>{data[16]}</Text>
            </View>
            {/* Fila 5 */}
            <View style={styles.row}>
              <Text style={styles.cell}>OCUPACIÓN</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[17]}
              </Text>
            </View>
            {/* Fila 6 */}
            <View style={styles.row}>
              <Text style={styles.cell}>REFERENCIA</Text>
              <Text style={[styles.cell, styles.lastCell]}>
              {data[18]}
              </Text>
            </View>
          </View>

          {/* texo */}
          <View>
            <Text style={styles.textBody}>
              POR MEDIO DEL PRESENTE; SE LE NOTIFICA A UD, PARA QUE SE APERSONE
              A LA SUBPREFECTURA DE LA PROVINCIA DE HUAMANGA, SITIO PORTAL
              CONSTITUCIÓN Nº 15, PLAZA MAYOR DE AYACUCHO, DÍA:{" "}
              <Text style={{ fontStyle: "RobotoBold" }}>
              {data[4]} {[data[3]]} DE {data[5]} DEL {data[6]}
              </Text>
              , <Text style={{ fontStyle: "RobotoBold" }}>{data[7]}</Text>{" "}
              HORA EXACTA, PARA ESCLARECIMIENTO DE LA DENUNCIA , INTERPUESTA
              CONTRA LAS PERSONAS :{" "}
              <Text style={{ fontStyle: "RobotoBold" }}>
              {data[1]}
              </Text>
              . RESPECTO DEL AGRAVIO QUE ATENTA CONTRA LOS DERECHOS
              FUNDAMENTALES DE LAS PERSONA CONSAGRADOS POR LA CONSTITUCION
              POLITICA DEL PERU, LEYES Y NORMAS VIGENTES.
            </Text>

            <Text style={styles.dateDocument}>
            {data[8]}, DE {data[9]} DEL {data[10]}
            </Text>
            <View style={styles.containerTextNota}>
              <Text style={styles.textNota}>NOTA</Text>
              <Text style={styles.textNota}>
                DE NO ASISTIR EN EL DIA HORA Y LUGAR SEÑALADO EN LA PRESENTE
                NOTIFICACION, SU SOLICITUD SERÁ DECLARADO EN ABANDONO
                PROCEDIENDO A SU ARCHIVAMIENTO CORRESPONDIENTE.
              </Text>
            </View>

            <View style={[styles.containerTitle, { marginTop: "20px" }]}>
              <Text style={styles.textTitle}>CONSTANCIA DE RECEPCIÓN</Text>
              <Text style={styles.textTitle}>EXP. N° {data[0]} - 2024</Text>
            </View>
            <View style={{ lineHeight: "1.7" }}>
              <Text>
                NOMBRES Y APELLIDOS:
                .........................................................................................................
              </Text>
              <Text>
                DNI:.....................................................
                FIRMA:...........................................................................
              </Text>
              <Text>
                PARENTESCO:..............................................
                FECHA:...................................
                HORA:..................
              </Text>
              <Text>CARACTERISTICAS DEL INMUEBLE:</Text>
            </View>
            {/* Tablita */}
            <View style={styles.table}>
              {/* Fila 1 */}
              <View style={[styles.row, { borderTop: "1px" }]}>
                <Text style={[styles.cell, { width: "25%" }]}>
                  CASA DE MATERIAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  PISOS
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>
              {/* Fila 2 */}
              <View style={styles.row}>
                <Text style={[styles.cell, { width: "40%" }]}>PUERTAS</Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  MATERIAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "20%", borderLeft: "none" }]}
                >
                  COLOR
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>
              {/* Fila 3 */}
              <View style={styles.row}>
                <Text style={[styles.cell, { width: "40%" }]}>
                  PUERTA PRINCIPAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  MATERIAL
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "20%", borderLeft: "none" }]}
                >
                  COLOR
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>
              {/* Fila 4 */}
              <View style={styles.row}>
                <Text style={[styles.cell, { width: "40%" }]}>N° MEDIDOR</Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "25%", borderLeft: "none" }]}
                >
                  LUZ
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
                <Text
                  style={[styles.cell, { width: "20%", borderLeft: "none" }]}
                >
                  AGUA
                </Text>
                <Text style={[styles.cell, styles.lastCell, { width: "25%" }]}>
                  .
                </Text>
              </View>

              {/* Fila 5 */}
              <View style={styles.row}>
                <Text style={[styles.cell]}>
                  DATOS ADICIONALES U OBSERVACIONES
                </Text>
                <Text style={[styles.cell, styles.lastCell]}></Text>
              </View>
            </View>

            <View style={{ lineHeight: "2" }}>
              <Text style={{ fontStyle: "RobotoBold" }}>NOTIFICADO POR:</Text>
              <Text>
                NOMBRES Y APELLIDOS:
                ..........................................................................................................
              </Text>
              <Text>
                DIA: ........................ HORA:
                ............................, DEL MES:
                ......................................... DEL 2024
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Pdf;
