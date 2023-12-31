import * as fs from "fs";
import {Manage} from "./manage";
import {exportToHelmFormat} from "./generator";

const listExamples = fs.readdirSync("./examples");

for (let i = 0; i < listExamples.length; i++) {
    const example = listExamples[i];
    const name = example.substring(0, example.lastIndexOf("."));
    import("../examples/" + listExamples[0] ).then((module) => {
        let manage:Manage = module.manage;
        exportToHelmFormat(manage, "./helm/"+name);
    })
}



//console.log(listExamples);