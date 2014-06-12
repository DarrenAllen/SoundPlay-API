var action = {};

/////////////////////////////////////////////////////////////////////
// metadata
action.name = 'postTeam';
action.description = 'I will score points for a single team or all teams if no id is provided';
action.inputs = {
  'required' : ["points"],
  'optional' : ["id"]
};
action.blockedConnectionTypes = [];
action.outputExample = {
  bonus: 10
}

/////////////////////////////////////////////////////////////////////
// functional
action.run = function(api, connection, next){
  var bonus = Math.ceil(Math.random() * 10);
 api.cache.load(2, function(error, value, expireTimestamp, createdAt, readAt){
    var score = value;
    score += connection.params.points + bonus;
    
    api.cache.save(connection.params.id, score);
    connection.response.bonus = bonus;
    connection.response.score = score;
 
    next(connection, true);
  })

  

};

/////////////////////////////////////////////////////////////////////
// exports
exports.action = action;
