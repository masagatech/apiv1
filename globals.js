var global = module.exports = {};

global.schema =  function schema(params) {
    return "erpv1." + params;
};

global.constr =  function constr() {
    return 'postgres://postgres:123@192.168.1.104:5432/erpdb';
};