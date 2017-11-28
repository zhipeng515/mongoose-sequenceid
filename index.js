'use strict';

var sequence   = require('flocon-new')

module.exports = function(schema) {
    schema.add({ id: { type: String, index: true, unique: true, default: '' } });
    schema.add({ createdAt: { type: Date, default: Date.now } });


    schema.pre('save', function (next) {
        if(this.isNew && this.id == '') {
            this.id = sequence.snow();
        }
        next();
    });

    schema.methods.generateId = function() {
        this.id = sequence.snow();
    };
};
