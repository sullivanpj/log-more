import { ExecutorContext } from "@nrwl/devkit";
import { exec } from "child_process";
import { existsSync } from "fs";
import { promisify } from "util";
const Path = require("path");

const execute = async (command: string): Promise<string | undefined> => {
  try {
    let result = await promisify(exec)(command);
    if (result?.stderr) {
      console.error(result.stderr);

      return result.stderr;
    }

    return undefined;
  } catch (e) {
    console.error(e);

    return e?.message ?? "Exception occurred while processing request. ";
  }
};

export default async function documentExecutor(
  options: {},
  context: ExecutorContext
) {
  try {
    console.info(`Executing "document" executor...`);
    console.info(`Options: ${JSON.stringify(options, null, 2)}`);
    console.info(`Current Directory: ${__dirname}`);
    console.info(`context: ${JSON.stringify(context)}`);

    const rootPath = context.root;
    const packagePath = `${rootPath}/packages/${context.projectName}`;
    const docsPath = `${rootPath}/apps/docs/docs`;

    console.info("Clearing previous Document builds.");
    let result;
    /*let result = await execute(` del "${packagePath}/dist" /f `);
    if (result) {
      console.error(result);
      return { success: false };
    }
    result = await execute(` del "${packagePath}/docs" /f `);
    if (result) {
      console.error(result);
      return { success: false };
    }
    result = await execute(` del "${packagePath}/etc" /f `);
    if (result) {
      console.error(result);
      return { success: false };
    }*/
    console.info("Directory successfully cleated.");

    console.info(`Building project "${context.projectName}"...`);
    result = await execute(` nx run ${context.projectName}:build `);
    if (result) {
      console.error(result);
      return { success: false };
    }
    console.info("Building succeeded.");

    let path = Path.join(`${packagePath}/build/`, "make-docs.js");
    if (!existsSync(path)) {
      console.info(
        `Could not find make-docs.js in project directory - ${path}`
      );

      if (!existsSync(Path.join(`${rootPath}/build`, "make-docs.js"))) {
        console.error(
          "Could not find make-docs.js in workspace root. Cancelling processing."
        );
        return { success: false };
      }

      console.info("Copying make-docs.js from the root directory...");

      result = await execute(
        ` xcopy "${rootPath}/build/make-docs.js" "${packagePath}/build/make-docs.js" `
      );
      if (result) {
        console.error(result);

        return { success: false };
      }
    }

    path = Path.join(`${packagePath}/`, "api-extractor.json");
    if (!existsSync(path)) {
      console.info(
        `Could not find api-extractor.json in project directory - ${path}`
      );

      if (!existsSync(Path.join(`${rootPath}/`, "api-extractor.json"))) {
        console.error(
          "Could not find make-docs.js in workspace root. Cancelling processing."
        );
        return { success: false };
      }

      console.info("Copying api-extractor.json from the root directory...");

      result = await execute(
        ` xcopy "${rootPath}/api-extractor.json" "${packagePath}/api-extractor.json" `
      );
      if (result) {
        console.error(result);

        return { success: false };
      }
    }

    result = await execute(` cd "${packagePath}" `);
    if (result) {
      console.error(result);

      return { success: false };
    }

    console.info("Executing make-docs.js...");

    result = await execute(" node build/make-docs.js ");
    if (result) {
      console.error(result);

      return { success: false };
    }

    console.info(`Copying document files to Docusaurus site - ${docsPath}...`);

    result = await execute(
      ` xcopy "${packagePath}/docs/api" "${docsPath}" /O /X /E /H /K `
    );
    if (result) {
      console.error(result);

      return { success: false };
    }

    console.info(
      "Documents successfully generated and included in Docusaurus site!"
    );

    return { success: !result };
  } catch (e) {
    console.error(e);

    return { success: false };
  }
}
