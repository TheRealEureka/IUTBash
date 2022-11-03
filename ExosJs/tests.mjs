import test from 'ava';

test('test1', t => {
    if (controlNumber(1) === 1) {
        t.pass();
    } else {
        t.fail();
    }
});

test('test2', t => {
    if (controlNumber("abc") === "abc") {
        t.fail();
    } else {
        t.pass();
    }
});