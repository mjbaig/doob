function getConfiguration(){
    switch(process.env.NODE_ENV){
        case 'development':
            return require('../../../resources/dev-properties.json');

        case 'production':
            return require('../../../resources/dev-properties.json');

        default:
            return require('../../../resources/dev-properties.json');
    }
};

module.exports = getConfiguration();

