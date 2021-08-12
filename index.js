const { Plugin } = require('powercord/entities');
const { getModule, React } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = class Encrypt extends Plugin {
    async startPlugin() {
        
        let parentThis = this;

        

        const messageEvents = await getModule(["sendMessage"]);
        inject("encryptSend", messageEvents, "sendMessage", function(args) {
            if (!args[1].content.startsWith(powercord.api.commands.prefix)) {
                // set output to whatever you want!
                var output = "Hi!";
                // shit with output here
                
                // sets your message to the output
                args[1].content = output;
            }
        }, true);
    }

    pluginWillUnload() {
        uninject("encryptSend");
    }    
};
