export default function getBlobByFile(file: File | null | undefined): Blob {
  if (!file) {
    return new Blob();
  }

  return new Blob([file], { type: file.type });
}
