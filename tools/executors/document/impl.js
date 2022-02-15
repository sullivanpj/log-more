"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var util_1 = require("util");
var Path = require("path");
var execute = function (command) { return __awaiter(void 0, void 0, void 0, function () {
    var result, e_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, util_1.promisify)(child_process_1.exec)(command)];
            case 1:
                result = _b.sent();
                if (result === null || result === void 0 ? void 0 : result.stderr) {
                    console.error(result.stderr);
                    return [2 /*return*/, result.stderr];
                }
                return [2 /*return*/, undefined];
            case 2:
                e_1 = _b.sent();
                console.error(e_1);
                return [2 /*return*/, (_a = e_1 === null || e_1 === void 0 ? void 0 : e_1.message) !== null && _a !== void 0 ? _a : "Exception occurred while processing request. "];
            case 3: return [2 /*return*/];
        }
    });
}); };
function documentExecutor(options, context) {
    return __awaiter(this, void 0, void 0, function () {
        var rootPath, packagePath, docsPath, result, path, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    console.info("Executing \"document\" executor...");
                    console.info("Options: ".concat(JSON.stringify(options, null, 2)));
                    console.info("Current Directory: ".concat(__dirname));
                    console.info("context: ".concat(JSON.stringify(context)));
                    rootPath = context.root;
                    packagePath = "".concat(rootPath, "/packages/").concat(context.projectName);
                    docsPath = "".concat(rootPath, "/apps/docs/docs");
                    console.info("Clearing previous Document builds.");
                    result = void 0;
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
                    console.info("Building project \"".concat(context.projectName, "\"..."));
                    return [4 /*yield*/, execute(" nx run ".concat(context.projectName, ":build "))];
                case 1:
                    result = _a.sent();
                    if (result) {
                        console.error(result);
                        return [2 /*return*/, { success: false }];
                    }
                    console.info("Building succeeded.");
                    path = Path.join("".concat(packagePath, "/build/"), "make-docs.js");
                    if (!!(0, fs_1.existsSync)(path)) return [3 /*break*/, 3];
                    console.info("Could not find make-docs.js in project directory - ".concat(path));
                    if (!(0, fs_1.existsSync)(Path.join("".concat(rootPath, "/build"), "make-docs.js"))) {
                        console.error("Could not find make-docs.js in workspace root. Cancelling processing.");
                        return [2 /*return*/, { success: false }];
                    }
                    console.info("Copying make-docs.js from the root directory...");
                    return [4 /*yield*/, execute(" xcopy \"".concat(rootPath, "/build/make-docs.js\" \"").concat(packagePath, "/build/make-docs.js\" "))];
                case 2:
                    result = _a.sent();
                    if (result) {
                        console.error(result);
                        return [2 /*return*/, { success: false }];
                    }
                    _a.label = 3;
                case 3:
                    path = Path.join("".concat(packagePath, "/"), "api-extractor.json");
                    if (!!(0, fs_1.existsSync)(path)) return [3 /*break*/, 5];
                    console.info("Could not find api-extractor.json in project directory - ".concat(path));
                    if (!(0, fs_1.existsSync)(Path.join("".concat(rootPath, "/"), "api-extractor.json"))) {
                        console.error("Could not find make-docs.js in workspace root. Cancelling processing.");
                        return [2 /*return*/, { success: false }];
                    }
                    console.info("Copying api-extractor.json from the root directory...");
                    return [4 /*yield*/, execute(" xcopy \"".concat(rootPath, "/api-extractor.json\" \"").concat(packagePath, "/api-extractor.json\" "))];
                case 4:
                    result = _a.sent();
                    if (result) {
                        console.error(result);
                        return [2 /*return*/, { success: false }];
                    }
                    _a.label = 5;
                case 5: return [4 /*yield*/, execute(" cd \"".concat(packagePath, "\" "))];
                case 6:
                    result = _a.sent();
                    if (result) {
                        console.error(result);
                        return [2 /*return*/, { success: false }];
                    }
                    console.info("Executing make-docs.js...");
                    return [4 /*yield*/, execute(" node build/make-docs.js ")];
                case 7:
                    result = _a.sent();
                    if (result) {
                        console.error(result);
                        return [2 /*return*/, { success: false }];
                    }
                    console.info("Copying document files to Docusaurus site - ".concat(docsPath, "..."));
                    return [4 /*yield*/, execute(" xcopy \"".concat(packagePath, "/docs/api\" \"").concat(docsPath, "\" /O /X /E /H /K "))];
                case 8:
                    result = _a.sent();
                    if (result) {
                        console.error(result);
                        return [2 /*return*/, { success: false }];
                    }
                    console.info("Documents successfully generated and included in Docusaurus site!");
                    return [2 /*return*/, { success: !result }];
                case 9:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [2 /*return*/, { success: false }];
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports["default"] = documentExecutor;
