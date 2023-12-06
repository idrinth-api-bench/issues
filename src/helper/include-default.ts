import {analyze} from "./function-analyzer.js";

function isConstructor(obj) {
    return !!obj.prototype && !!obj.prototype.constructor.name;
}

const include = async(path: string,): Promise<any> => {
    let val = await import(path.replace(/\/\//, '/'),);
    if (typeof val === 'object' && val.default) {
        val = val.default;
    }
    if (typeof val === 'function' && !isConstructor(val)) {
        const parameters = analyze(val,);
        return val(...parameters.map((x,) => x.value,),);
    }
    return val;
};

export default include;
