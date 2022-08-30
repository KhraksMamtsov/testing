//test framework
function describe(message, cases) {
    console.group(message);
    cases.forEach(({it, test}) => {
        let error,
            isError = false;

        try {
            test();
        } catch (err) {
            isError = true;
            error = err;
        }

        if (isError) {
            console.groupCollapsed("🚫", it);
            console.error(error);
            console.groupEnd();
        } else {
            console.log("✔️", it);
        }
    });
    console.groupEnd()
}

//assertion library
const expect = (a) => ({
    equal(b) {
        if (a !== b) {
            throw new Error(`Expect ${a} should be equal ${b}.`)
        }
    }
});

//tested functionality
const mul = (a, b) => a * b;

//test cases
describe("Умножение", [{
    it: "Должно вернуть 2",
    test() {
        expect(mul(1, 2)).equal(1);
    }
}, {
    it: "Должно вернуть 4",
    test() {
        expect(mul(2, 2)).equal(4);
    }
}]);