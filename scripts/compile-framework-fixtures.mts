import { existsSync, readFileSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import {
  compileScript,
  compileTemplate,
  parse as parseVue,
} from "@vue/compiler-sfc";
import { compile as compileSvelteSource } from "svelte/compiler";

const CWD = process.cwd();
const requestedFramework = process.argv
  .find((argument) => argument.startsWith("--framework="))
  ?.split("=")[1];

const listFiles = async (directory: string): Promise<string[]> => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? listFiles(path) : [path];
    })
  );
  return files.flat();
};

const compileVue = async (filename: string) => {
  try {
    const source = await readFile(filename, "utf8");
    const { descriptor, errors } = parseVue(source, { filename });
    if (errors.length > 0) {
      throw errors[0];
    }
    const id = `shark-${filename.replaceAll(/[^a-z0-9]/gi, "-")}`;
    if (descriptor.script || descriptor.scriptSetup) {
      compileScript(descriptor, {
        fs: {
          fileExists: existsSync,
          readFile: (path) => readFileSync(path, "utf8"),
        },
        id,
      });
    }
    if (descriptor.template) {
      const result = compileTemplate({
        filename,
        id,
        source: descriptor.template.content,
      });
      if (result.errors.length > 0) {
        throw result.errors[0];
      }
    }
  } catch (error) {
    throw new Error(`[vue compiler] ${filename}`, { cause: error });
  }
};

const compileSvelte = async (filename: string) => {
  const source = await readFile(filename, "utf8");
  compileSvelteSource(source, { filename, generate: false });
};

const compileFramework = async (framework: "svelte" | "vue") => {
  const root = join(CWD, "registry", framework);
  const extension = framework === "vue" ? ".vue" : ".svelte";
  const files = (await listFiles(root)).filter(
    (filename) => extname(filename) === extension
  );
  const compiler = framework === "vue" ? compileVue : compileSvelte;
  await Promise.all(files.map(compiler));
  console.log(
    `Compiled ${files.length} ${framework} adapter and fixture files.`
  );
};

if (requestedFramework === "vue" || requestedFramework === "svelte") {
  await compileFramework(requestedFramework);
} else {
  await compileFramework("vue");
  await compileFramework("svelte");
}
