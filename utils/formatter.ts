export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const replaceContentForCopy = (inputCode: string) => {
  let code = inputCode;
  code = code.replaceAll("@/registry/react/components", "@/components/ui");
  code = code.replaceAll(/export const (\w+) = \(/g, "export const $1 = (");
  code = code.replaceAll(/export default (\w+);/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");

  return code;
};

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
