import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

// eslint-disable-next-line react/prop-types
function DropZone({ onDrop, acceptedFileType = "image/*" }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      [acceptedFileType]: [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      if (onDrop) {
        onDrop(acceptedFiles);
      }
    },
  });

  const thumbs = files.map((file) => (
    <div className="inline-flex border rounded border-gray-300 mb-2 mr-2 p-1" key={file.name}>
      <div className="flex min-w-0 overflow-hidden">
        <img
          src={file.preview}
          className="block w-auto h-full"
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      <div {...getRootProps({ className: "dropzone border-solid h-5.5 rounded-md border-2 border-gray-300 p-4 text-center" })}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">{thumbs}</aside>
    </section>
  );
}

export default DropZone;
