class HelloWorld extends pc.ScriptType {
    text: string;

    initialize() {
        console.log('Hello ' + this.text);
    }
};

pc.registerScript(HelloWorld, 'helloWorld');
HelloWorld.attributes.add('text', {type: 'string'});
