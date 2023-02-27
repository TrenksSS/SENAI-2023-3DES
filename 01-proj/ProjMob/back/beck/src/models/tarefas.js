const toReadAll = () => {
    return "SELECT * FROM tarefa";
}
const toCreate = (model) => {
    return `INSERT INTO tarefa VALUES (DEFAULT,'${model.descricao}',curTime(),curTime(),'${model.status}')`;
}
const toUpdateTarefa = (model)=>{
    return `UPDATE pedidos SET   status = '${model.status}'`;
    }

module.exports = {
    toReadAll,
    toCreate,
    toUpdateTarefa
}