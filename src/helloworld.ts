class HelloWorld extends pc.ScriptType {
    text: string;
    entityLink : pc.Entity | null;

    initialize() {
        console.log('Hello ' + this.text);
    }
};

pc.registerScript(HelloWorld, 'helloWorld');
HelloWorld.attributes.add('text', {type: 'string'});
HelloWorld.attributes.add('entityLink', {type : 'entity'})
