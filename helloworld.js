/* helloworld.ts */
class Greeter {
    constructor(message) {
        this.message = message;
    }
    sayHi() {
        return "<h1>" + this.message + "</h1>";
    }
}
let greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.sayHi();
//# sourceMappingURL=helloworld.js.map