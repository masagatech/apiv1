var global = module.exports = {};

global.schema = function schema(params) {
    return "erpv1." + params;
};

global.constr = function constr() {
    return 'postgres://postgres:123@192.168.1.107:5432/nilesh';
};

global.reportTemplatePath = function reportTemplatePath() {
    console.log(__dirname + '\\reports\\templates');
    return __dirname + '\\reports\\templates';
};