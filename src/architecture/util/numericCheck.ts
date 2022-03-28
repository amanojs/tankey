const regexp = new RegExp(/^[0-9]+(\.[0-9]+)?$/);
const numericCheck = (val: number) => {
    return regexp.test(String(val));
};

export default numericCheck;
