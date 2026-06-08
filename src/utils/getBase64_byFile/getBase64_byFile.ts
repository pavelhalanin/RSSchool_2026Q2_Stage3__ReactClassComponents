import getBase64_byBlob from "../getBase64_byBlob/getBase64_byBlob";
import getBlob_byFile from "../getBlob_byFile/getBlob_byFile";

export default async function getBase64_byFile(file: File | null | undefined) {
  return await getBase64_byBlob(getBlob_byFile(file));
}
