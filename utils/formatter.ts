export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

export const replaceContentForCopy = (inputCode: string) => {
  let code = inputCode;
  code = replaceRegistryImportsForCopy(code);
  code = code.replaceAll(/export const (\w+) = \(/g, "export const $1 = (");
  code = code.replaceAll(/export default (\w+);/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");
  code = code.replaceAll(/\n$/g, "");

  return code;
};

export const replaceRegistryImportsForCopy = (inputCode: string) =>
  inputCode
    .replaceAll("@/registry/react/components", "@/components/ui")
    .replaceAll("@/registry/react/hooks", "@/hooks");
