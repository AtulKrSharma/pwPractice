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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const myArrayOfObjects_json_1 = __importDefault(require("../Data/myArrayOfObjects.json"));
test_1.test.describe('dataReader31', () => {
    myArrayOfObjects_json_1.default.forEach((data) => {
        (0, test_1.test)(`Test for ${data.name}`, () => __awaiter(void 0, void 0, void 0, function* () {
            console.log(data.name);
            console.log(data.age);
            console.log(data.role);
        }));
    });
});
