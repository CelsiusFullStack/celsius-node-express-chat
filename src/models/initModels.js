const Users = require('./users.models')
const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')

const initModels = () => {
    Users.hasMany(Conversations)
    Users.hasMany(Participants)
    Users.hasMany(Messages)
    Conversations.hasMany(Participants)
    Conversations.hasMany(Messages)
    Conversations.belongsTo(Users)
    Participants.belongsTo(Users)
    Participants.belongsTo(Conversations)
    Messages.belongsTo(Users)
    Messages.belongsTo(Conversations)
}
module.exports = initModels