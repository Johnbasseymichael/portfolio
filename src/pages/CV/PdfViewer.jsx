const PdfViewer = ({ fileUrl }) => {
    return (
        <div>
            <iframe
                src={fileUrl}
                style={{ border: "none", height: "100vh", width: "100%" }}
                title="PDF Viewer"
            />
        </div>
    );
};

export default PdfViewer;
