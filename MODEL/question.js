const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    questionText:{
        type: String,
        required: true
    },
    answerOptions:[{
        type: String
    }],
    correctAnswer:{
       type:String,
       required: true
    }
})

module.exports = mongoose.model('question', questionSchema)