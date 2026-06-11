import getBase64ByBlob from "../getBase64ByBlob/getBase64ByBlob";
import getBlob_byFile from "../getBlob_byFile/getBlob_byFile";

export default async function getBase64_byFile(file: File | null | undefined) {
  return await getBase64ByBlob(getBlob_byFile(file));
}
