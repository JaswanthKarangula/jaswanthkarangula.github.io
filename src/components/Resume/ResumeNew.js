import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://cdn.jsdelivr.net/gh/JaswanthKarangula/jaswanthkarangula.github.io@86d6087b17a35a81d3c2779cb9a431d3663d8573/Jaswanth_Karangula.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/*<Row style={{ justifyContent: "center", position: "relative" }}>*/}
        {/*  <Button*/}
        {/*    variant="primary"*/}
        {/*    href={pdf}*/}
        {/*    target="_blank"*/}
        {/*    style={{ maxWidth: "250px" }}*/}
        {/*  >*/}
        {/*    <AiOutlineDownload />*/}
        {/*    &nbsp;Download CV*/}
        {/*  </Button>*/}
        {/*</Row>*/}

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>

        </Row>

        {/*<Row style={{ justifyContent: "center", position: "relative" }}>*/}
        {/*  <Button*/}
        {/*    variant="primary"*/}
        {/*    href={pdf}*/}
        {/*    target="_blank"*/}
        {/*    style={{ maxWidth: "250px" }}*/}
        {/*  >*/}
        {/*    <AiOutlineDownload />*/}
        {/*    &nbsp;Download CV*/}
        {/*  </Button>*/}
        {/*</Row>*/}
      </Container>
    </div>
  );
}

export default ResumeNew;
