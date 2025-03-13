import React from "react";
import PdfViewer from "./PdfViewer";
import pdf from "/JohnBasseyMichael.pdf";

function CV() {
    return (
        <div>
            <PdfViewer fileUrl={pdf} />
        </div>
    );
}

export default CV;
