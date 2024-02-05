import mongoose from 'mongoose';
import Room from "../backend/models/room";
import { rooms } from './data';

const seedRooms = async () => {
  try {
    // connect DB
    await mongoose.connect('mongodb+srv://kimmy:rootroot@cluster0.curlpbd.mongodb.net/');

    await Room.deleteMany();
    console.log('Rooms are deleted');

    await Room.insertMany(rooms);
    console.log('All Rooms are added');

    process.exit();

  } catch (err) {
    console.error(err);
   }
}
 

seedRooms();
