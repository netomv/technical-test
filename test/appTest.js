const assert = require('chai').assert;
const app = require('../print_numbers/logic');
const expect = require('chai').expect

let m1 = 3;
let m2 = 5;
let size = 100;

describe(`Identification`, () => {
    it('Should verfiy correct identification of given multiplies', (done) => {
        let outputs = app.getOutputs(m1, m2);
        let mul = 5
        let label = '';

        compare = () => {
            outputs.forEach(output => {
                if (mul % output.mult === 0) {
                    label = output.label;
                }
            });
            return label;
        }
        expect(app.identifyMult(mul)[mul]).to.be.equal(compare());
        done();
    })
});

describe(`Multiples of ${m1}, ${m2} and Both: ${(m1*m2)} `, () => {
    it(`Should compare if getInfo function returns an array with label Multi for multiples of ${m1}, TI for multiples of ${m2} and Multi for Multiples of Both`, (done) => {
        app.getInfo(m1, m2, size)
            .then(res => {
                let outputs = app.getOutputs(m1, m2);
                let testArray = app.createArray(size);
                let i = 0;

                res.forEach(r => {
                    outputs.forEach(output => {
                        if (i % output.mult === 0) {
                            testArray[i] = output.label;
                        }
                    })
                    i++;
                });
                expect(testArray).to.be.equal(res);
                done();
            })
            .catch((err) => {
                done(err);
            });
    })
});