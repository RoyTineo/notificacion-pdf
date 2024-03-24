import { Font, StyleSheet } from "@react-pdf/renderer";
import RobotoSerifRegular from "../fuentes/RobotoSerif-Regular.ttf";
import RobotoBold from "../fuentes/Roboto-Bold.ttf";
import RobotoRegular from "../fuentes/Roboto-Regular.ttf";
// Registra la fuente localmente
Font.register({
  family: "Roboto",
  fonts: [
    { src: RobotoSerifRegular, fontStyle: "RobotoSerif" },
    { src: RobotoBold, fontStyle: "RobotoBold" },
    { src: RobotoRegular, fontStyle: "RobotoRegular" },
  ],

  // Ruta al archivo .ttf de la fuente
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  mainSection: {
//     margin: "0 2.54cm 2.54cm 2.54cm",
    margin: "0 0cm 0cm 0cm",
    
    padding: 10,
    flexGrow: 1,
    backgroundColor: "#a1ccad",
  },
  containerTitle: {
    textAlign: "center",
    margin: "0 2.54cm 0cm 2.54cm",
    marginBottom: "8px",
    marginTop:"2px"

    // hyphens: "manual"
  },
  textTitle: {
    fontSize: 14,
    fontFamily:"Roboto",
    fontStyle:"RobotoSerif",
    // marginBottom: "8px",
    letterSpacing: "0.5",
    // hyphens: "none"
  },
  containerBody: {
    fontFamily:"Roboto",
    fontStyle:"RobotoRegular",
    fontSize: 11,
    margin: "0 2.54cm 0cm 2.54cm",
  },

  table: {
    display: "table",
    width: "auto",
    marginBottom: 10,
    fontFamily:"Roboto",
    fontStyle:"RobotoRegular",
    // border:"1px solid black"
  },
  row: {
    flexDirection: "row",
    // borderBottomWidth: 1,
    borderBottom: "1px",
  },
  cell: {
    width: "30%", // Ancho fijo para la primera columna
    padding: 3,
    border: "1px solid black",
    borderBottom: "none",
    borderTop: "none",
  },
  cellHeader: {
    width: "100%",
    padding: 5,
    borderTop: "1px solid black",
    textAlign: "center",
  },

  lastCell: {
    width: "70%", // Ancho fijo para la segunda columna
    borderLeft: "none",
    wordWrap: "break-word", // Permitir envolver palabras
  },

  textBody: {
    textAlign: "justify",
    wordSpacing: "10",
    lineHeight: "1.5",
    letterSpacing: "0.3",
    // backgroundColor: "#a09",
    

  },
  dateDocument: {
    
    textAlign: "right",
  },


  cellReception: {
    width: "50%", // Ancho fijo para la primera columna
    padding: 5,
    border: "1px solid black",
    borderBottom: "none",
    borderTop: "none",
  },
  lastCellReception: {
    width: "20%", // Ancho fijo para la segunda columna
    borderLeft: "none",
    wordWrap: "break-word", // Permitir envolver palabras
  },

  textNota: {
    fontSize: 5,
    lineHeight: "1.3",
    textAlign:"justify"
  },
  containerTextNota: {
    // border: "5px solid darkblue",
    width: "30%",
    fontFamily:"Roboto",
    fontStyle:"RobotoRegular",
    marginBottom:"4px"
  },
  textLogo: {
    fontSize: "6",
    lineHeight: "1.3",
  },
  containerLogo: {
    
    width: "40%",
    display: "flex",
    justifContent: "center",
    alignItems: "center",
    fontFamily:"Roboto",
    fontStyle:"RobotoRegular",
  },

  image: {
    width: "40px",
    height: "40px",
    // textAlign:"center",
  },
});
