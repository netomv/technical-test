let array = [];
let outputs = [];

let createArray = (size) => {
    // size = size - 1;
    for (let i = 0; i <= size; i++) {
        array[i] = i;
    }
    return array;
}

let getOutputs = (m1, m2) => {

    // Number.isInteger(m1,m2);
    outputs = [
        { mult: m1, label: 'Multi' },
        { mult: m2, label: 'TI' },
        { mult: (m1 * m2), label: 'Multipli' }
    ]
    return outputs;
}

let identifyMult = (index) => {
    outputs.forEach(output => {
        if (index % output.mult === 0) {
            return array[index] = output.label;
        }
    });
    return array;
}

let printAll = () => {
    for (let index = 0; index <= array.length; index++) {
        identifyMult(index);
    }
}

let getInfo = async(m1 = 3, m2 = 5, size = 100) => {

    createArray(size);
    getOutputs(m1, m2);
    printAll();

    return array;

}

let test = () => {
    return 'esto es una función';
}


module.exports = {
    getInfo,
    getOutputs,
    createArray,
    printAll,
    identifyMult,
    test
}