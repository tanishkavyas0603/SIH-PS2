import { DPRUpload } from "../DPRUpload";

export default function DPRUploadExample() {
  return (
    <div className="p-4 max-w-2xl">
      <DPRUpload onUpload={(file) => console.log("Uploaded:", file.name)} />
    </div>
  );
}
