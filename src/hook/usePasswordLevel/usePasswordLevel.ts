export default function usePasswordLevel(password: string) {
  return {
    hasNumber: /\d/.test(password), // 1 number,
    hasUppercase: /[A-ZА-Я]/.test(password), // 1 uppercase
    hasLowercase: /[a-zа-я]/.test(password), // 1 lowercase
    hasSpecialCharacter: /[^A-Za-z0-9А-Яа-я]/.test(password), // 1 special character
  };
}
