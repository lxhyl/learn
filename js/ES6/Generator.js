const { log } = console;

function* f() {
    for (let i = 0; true; i++) {
        let reset = yield i;
        if (reset) {
            log(i);
            i = -1;
        }
    }
}
let g = f();
log(g.next());
log(g.next(1));
log(g.next());


console.log('a'.toString(2));