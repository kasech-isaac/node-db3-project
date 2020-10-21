const db=require("../data/config")

function find(){
    return db("schemes")
}
function findById(id){
    return db("schemes").where({id}).first()
}

function findSteps(id){
    return db("schemes")
    .join ("steps","schemes.id","steps.scheme_id")
    .where("scheme_id", id)
  .select("schemes.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")

}

function add(schemeData){
    return db("schemes").insert(schemeData)
}
function update(changes, id){
    return db("schemes").where({id}).update(changes)
}

function remove(id){
    return db("schemes").where({id}).del()
}

module.exports={
    find,
    findById,
    findSteps,
    add,
    remove,
    update
}