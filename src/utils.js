var path = require('path');
var fs = require('fs');



const utils = {
    CONSTANTS: {
        ES_EXE: 'es.exe',
        PATH_KEY:'esevpluginpath'
    },
    checkIfEsExists: function(value) {
        var fullpath = value + path.sep + this.CONSTANTS.ES_EXE;

        if (!fs.existsSync(fullpath)) {
            return false;
        }
        return true;
    }
};

module.exports = utils;
