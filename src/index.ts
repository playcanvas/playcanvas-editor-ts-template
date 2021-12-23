class HelloWorld extends pc.ScriptType {
    initialize() {
        console.log('Hello ' + this.text);
    }
};

pc.registerScript(HelloWorld, 'helloWorld');
HelloWorld.attributes.add('text', {type: 'string'});

interface HelloWorld {
    text: string;
}
