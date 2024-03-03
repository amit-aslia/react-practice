function useGeneratePassword() {
  const generatePassword = (checkboxes, length) => {
    let str = "";
    let password = "";

    const checkedIds = checkboxes
      .filter((elem) => elem.checked)
      .map((elem) => elem.id);

    const getFullPasswordString = (elem) => {
      switch (elem) {
        case "upperCase": {
          str += "abcdefghijklmnopqrstuvwxyz";
          break;
        }

        case "lowerCase": {
          str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        }
        case "numbers": {
          str += "1234567890";
          break;
        }
        case "symbols": {
          str += "!@#$%^&*()_+{}:";
          break;
        }
        default: {
          return "";
        }
        // upperCase', 'lowerCase', 'numbers', 'symbols
      }
    };

    checkedIds.forEach((elem) => {
      getFullPasswordString(elem);
    });

    for (let i = 0; i < length; i++) {
      password += str[Math.ceil(Math.random() * str.length)];
    }
    return password;
  };
  return {
    generatePassword,
  };
}

export default useGeneratePassword;
