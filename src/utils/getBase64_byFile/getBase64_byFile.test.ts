import { describe, it, expect, vi } from "vitest";
import getBase64_byFile from "./getBase64_byFile";
import getBase64ByBlob from "../getBase64ByBlob/getBase64ByBlob";
import getBlob_byFile from "../getBlob_byFile/getBlob_byFile";

vi.mock("../getBase64ByBlob/getBase64ByBlob");
vi.mock("../getBlob_byFile/getBlob_byFile");

describe("getBase64_byFile", () => {
  it("calls getBlob_byFile and getBase64ByBlob and returns base64 string", async () => {
    const mockFile = new File(["test"], "test.txt");
    const mockBlob = new Blob(["test"]);
    const mockBase64 = "data:text/plain;base64,dGVzdA==";

    const mockedGetBlobByFile = vi.mocked(getBlob_byFile);
    const mockedGetBase64ByBlob = vi.mocked(getBase64ByBlob);

    mockedGetBlobByFile.mockReturnValue(mockBlob);
    mockedGetBase64ByBlob.mockResolvedValue(mockBase64);

    const result = await getBase64_byFile(mockFile);

    expect(mockedGetBlobByFile).toHaveBeenCalledWith(mockFile);
    expect(mockedGetBase64ByBlob).toHaveBeenCalledWith(mockBlob);
    expect(result).toBe(mockBase64);
  });
});
