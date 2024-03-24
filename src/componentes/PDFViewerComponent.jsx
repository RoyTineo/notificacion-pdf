import React from 'react'
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "./Pdf";

 const PDFViewerComponent = ({ data }) => (
    <PDFViewer style={{ width: '100%', height: '80vh' }}>
      {Pdf(data)}
    </PDFViewer>
  );
  


export default PDFViewerComponent