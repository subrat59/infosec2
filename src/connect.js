
const mongoose = require('mongoose');
const db = 'mongodb+srv://saisubrat9:Subrat@cluster0.c9lajty.mongodb.net/infosec?retryWrites=true&w=majority';


// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


// Create a mongoose schema for event cards
const eventSchema = new mongoose.Schema({
  eventname: String,
  about: String,
  imglink: String,
  reglink: String,
});
const Eschema = new mongoose.Schema({
  name:String,
  email:String,
  message:String,
  
});
const Mschema = new mongoose.Schema({
  name:String,
  email:String,
  position:String,
  imglink:String,
  
});

const Aschema = new mongoose.Schema({
  eventname:String,
  first:String,
  second:String,
  third:String,
  imglink:String,
  
});

const EventCard = mongoose.model('events', eventSchema);
const submit=new mongoose.model("Submit",Eschema);
const MemberCard = mongoose.model('members', Mschema);
const AchieveCard = mongoose.model('achievements', Aschema);

module.exports = {
    EventCard: EventCard,
    submit: submit,
    MemberCard: MemberCard,
    AchieveCard: AchieveCard
  };
