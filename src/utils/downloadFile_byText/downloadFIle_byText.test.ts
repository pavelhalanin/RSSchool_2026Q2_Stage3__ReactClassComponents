import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { downloadFile_byText } from './downloadFile_byText';

describe('downloadFile_byText', () => {
  let anchor: HTMLAnchorElement;

  beforeEach(() => {
    anchor = {
      href: '',
      download: '',
      click: vi.fn(),
    } as unknown as HTMLAnchorElement;

    vi.spyOn(document, 'createElement').mockReturnValue(anchor);
    vi.spyOn(document.body, 'appendChild').mockImplementation(() => anchor);
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => anchor);
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock-url');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create a link, set attributes, and click', () => {
    downloadFile_byText('myfile.txt', 'Hello world');

    expect(URL.createObjectURL).toHaveBeenCalledOnce();
    expect(anchor.href).toBe('blob:mock-url');
    expect(anchor.download).toBe('myfile.txt');
    expect(anchor.click).toHaveBeenCalledOnce();
    expect(document.body.appendChild).toHaveBeenCalledWith(anchor);
    expect(document.body.removeChild).toHaveBeenCalledWith(anchor);
  });
});
