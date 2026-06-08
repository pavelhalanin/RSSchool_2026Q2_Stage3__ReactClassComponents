import { describe, it, expect } from "vitest";
import * as yup from "yup";
import EMAIL_TEST from "./EMAIL_TEST";

describe("EMAIL_TEST", () => {
  it("requires a value", async () => {
    await expect(EMAIL_TEST.validate(undefined)).rejects.toThrow();
    await expect(EMAIL_TEST.validate(null)).rejects.toThrow();
    await expect(EMAIL_TEST.validate("")).rejects.toThrow();
  });

  it("passes for valid emails", async () => {
    const valid = [
      "user@example.com",
      "first.last@domain.co.uk",
      "john_doe123@server.org",
      "test.user@sub.domain.com",
      "valid.name@mail.com",
    ];
    for (const email of valid) {
      await expect(EMAIL_TEST.validate(email)).resolves.toBe(email);
    }
  });

  describe("rule: one @", () => {
    it("fails when no @", async () => {
      await expect(EMAIL_TEST.validate("userexample.com")).rejects.toThrow(
        "one @",
      );
    });

    it("fails when multiple @", async () => {
      await expect(EMAIL_TEST.validate("user@@example.com")).rejects.toThrow(
        "one @",
      );
      await expect(EMAIL_TEST.validate("user@domain@com")).rejects.toThrow(
        "one @",
      );
    });

    it("covers the branch where value is falsy (returns undefined → fails)", async () => {
      const onlyOneAt = yup.string().test({
        message: "one @",
        test: (value) => {
          if (!value) return;
          return value.split("@").length === 2;
        },
      });
      await expect(onlyOneAt.validate("")).rejects.toThrow("one @");

      await expect(onlyOneAt.validate(undefined)).rejects.toThrow("one @");
    });
  });

  describe("rule: non-empty local part", () => {
    it("fails when local part is empty", async () => {
      await expect(EMAIL_TEST.validate("@example.com")).rejects.toThrow(
        "non-empty local part",
      );
    });

    it("covers the branch where ARRAY.length < 2 (skips)", async () => {
      const onlyLocalPart = yup.string().test({
        message: "non-empty local part",
        test: (value) => {
          if (!value) return;
          const ARRAY = value.split("@");
          if (ARRAY.length < 2) return;
          const LOCAL_PART = ARRAY[0];
          return LOCAL_PART.length > 0;
        },
      });

      await expect(onlyLocalPart.validate("noAt")).rejects.toThrow(
        "non-empty local part",
      );

      await expect(onlyLocalPart.validate("@domain.com")).rejects.toThrow(
        "non-empty local part",
      );
    });
  });

  describe("rule: domain must contain at least two non-empty parts", () => {
    it("fails when domain has only one part", async () => {
      await expect(EMAIL_TEST.validate("user@domain")).rejects.toThrow(
        "Email must contain domain and site name",
      );
    });

    it("fails when domain has consecutive dots", async () => {
      await expect(EMAIL_TEST.validate("user@example..com")).rejects.toThrow(
        "Email must contain domain and site name",
      );
    });

    it("passes when domain has two or more parts", async () => {
      await expect(EMAIL_TEST.validate("user@example.com")).resolves.toBe(
        "user@example.com",
      );
      await expect(EMAIL_TEST.validate("user@mail.co.uk")).resolves.toBe(
        "user@mail.co.uk",
      );
    });

    it("covers falsy branch and domain split with empty part", async () => {
      const onlyDomain = yup.string().test({
        message: "Email must contain domain and site name",
        test: (value) => {
          if (!value) return;
          const ARRAY = value.split("@");
          if (ARRAY.length < 2) return;
          const DOMAIN_PART = ARRAY[1];
          const DOMAINS = DOMAIN_PART.split(".");
          for (let i = 0; i < DOMAINS.length; i++) {
            if (DOMAINS[i].length < 1) return;
          }
          return DOMAINS.length >= 2;
        },
      });
      await expect(onlyDomain.validate("")).rejects.toThrow(
        "Email must contain domain and site name",
      );
      await expect(onlyDomain.validate("user@domain..com")).rejects.toThrow(
        "Email must contain domain and site name",
      );
      await expect(onlyDomain.validate("user@domain")).rejects.toThrow(
        "Email must contain domain and site name",
      );
    });
  });

  describe("rule: username restrictions", () => {
    it("fails when username starts with dot", async () => {
      await expect(EMAIL_TEST.validate(".user@example.com")).rejects.toThrow(
        "User name available: A-Z, a-z, 0-9, '.', '_'. User name not start andn end with '.'",
      );
    });

    it("fails when username ends with dot", async () => {
      await expect(EMAIL_TEST.validate("user.@example.com")).rejects.toThrow(
        "User name available: A-Z, a-z, 0-9, '.', '_'. User name not start andn end with '.'",
      );
    });

    it("fails when username contains invalid characters", async () => {
      await expect(EMAIL_TEST.validate("us$er@example.com")).rejects.toThrow(
        "User name available: A-Z, a-z, 0-9, '.', '_'. User name not start andn end with '.'",
      );
      await expect(EMAIL_TEST.validate("us*er@example.com")).rejects.toThrow();
      await expect(EMAIL_TEST.validate("user!@example.com")).rejects.toThrow();
    });

    it("passes when username contains dots and underscores (not at edges)", async () => {
      await expect(
        EMAIL_TEST.validate("user.name_123@example.com"),
      ).resolves.toBe("user.name_123@example.com");
    });

    it("covers all early returns inside username test", async () => {
      const onlyUsername = yup.string().test({
        message: "Username invalid",
        test: (value) => {
          if (!value) return;
          const ARRAY = value.split("@");
          if (ARRAY.length < 2) return;
          const USER_NAME_PART = ARRAY[0];
          if (USER_NAME_PART.length === 0) return;
          if (USER_NAME_PART[0] === ".") return;
          if (USER_NAME_PART[USER_NAME_PART.length - 1] === ".") return;
          const AVAILABLE =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._0123456789";
          for (let i = 0; i < USER_NAME_PART.length; i++) {
            if (!AVAILABLE.includes(USER_NAME_PART[i])) return;
          }
          return true;
        },
      });
      await expect(onlyUsername.validate("")).rejects.toThrow(
        "Username invalid",
      );
      await expect(onlyUsername.validate("@domain")).rejects.toThrow(
        "Username invalid",
      );
      await expect(onlyUsername.validate(".user@domain")).rejects.toThrow(
        "Username invalid",
      );
      await expect(onlyUsername.validate("user.@domain")).rejects.toThrow(
        "Username invalid",
      );
      await expect(onlyUsername.validate("us$er@domain")).rejects.toThrow(
        "Username invalid",
      );
    });
  });
});
