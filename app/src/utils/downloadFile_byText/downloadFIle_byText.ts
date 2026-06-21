export function downloadFile_byText(filename: string, text: string) {
  const a = document.createElement('a');
  const file = new Blob([text], { type: 'text/plain' });
  a.href = URL.createObjectURL(file);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
