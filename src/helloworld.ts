class HelloWorld extends pc.ScriptType {
    text: string;
    entityLink : pc.Entity;

    initialize() {
        console.log('Hello ' + this.text);
        console.log('Hello entity' + this.entityLink) // autocompletes fine
    }
};

pc.registerScript(HelloWorld, 'helloWorld');
HelloWorld.attributes.add('text', {type: 'string'});
HelloWorld.attributes.add('entityLink', {type : 'entity'})
