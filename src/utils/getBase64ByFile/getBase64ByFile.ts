import getBase64ByBlob from "../getBase64ByBlob/getBase64ByBlob";
import getBlobByFile from "../getBlobByFile/getBlobByFile";

export default async function getBase64ByFile(file: File | null | undefined) {
  return await getBase64ByBlob(getBlobByFile(file));
}
