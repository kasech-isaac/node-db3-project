const db=require("../data/config")

// resolves to an array of schemes
function find(){
    return db("schemes")
}
// resolves to an single id of schemes
function findById(id){
    return db("schemes")
    .where({id})
    .first()
}

function findSteps(id){
  return db("steps")
    .innerJoin("schemes", "schemes.id", "steps.scheme_id"  )
    .where("steps.scheme_id", id)
    .select("steps.id", "steps.step_number", "steps.instructions","schemes.scheme_name")

}

function add(schemeData){
    return db("schemes")
    .insert(schemeData)
}

function update(changes, id){
    return db("schemes")
    .where({id})
    .update(changes)
}

function remove(id){
    return db("schemes")
    .where({id})
    .del()
}

module.exports={
    find,
    findById,
    findSteps,
    add,
    remove,
    update
}