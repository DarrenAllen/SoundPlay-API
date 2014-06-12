var action = {};

/////////////////////////////////////////////////////////////////////
// metadata
action.name = 'getTeam';
action.description = 'I will get the points for a single team';
action.inputs = {
  'required' : ["id"],
  'optional' : []
};
action.blockedConnectionTypes = [];
action.outputExample = {
  bonus: 10
}

/////////////////////////////////////////////////////////////////////
// functional
action.run = function(api, connection, next){
 api.cache.load(connection.params.id, function (error, value, expireTimestamp, createdAt, readAt) {
    connection.response.score = value;
    next(connection, true);
  })
  

};

/////////////////////////////////////////////////////////////////////
// exports
exports.action = action;
