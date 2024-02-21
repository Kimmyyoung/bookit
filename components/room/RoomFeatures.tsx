import { IRoom } from '@/backend/models/room';
import React from 'react'
import { IconContext } from "react-icons";
import { FaCheck } from "react-icons/fa6";
import { RiProhibitedLine } from "react-icons/ri";

interface Props {
  room: IRoom;
}

const RoomFeatures = ({ room } : Props) => {
  return (
    <div className="mt-5">
      <h3 className="text-2xl text-blue-500 mb-4 font-semibold">Features</h3>
      <ul className="ml-5 list-none">
        <li className="flex flex-row gap-2 items-center mb-2">
          <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
            <span>
            <FaCheck />
            </span>
          </IconContext.Provider>
          Guests: {room?.guestCapacity}
        </li>
        <li className="flex flex-row gap-2 items-center mb-2">
        <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
            <span>
            <FaCheck />
            </span>
          </IconContext.Provider>
          Bedrooms: {room?.numOfBeds}
        </li>
        <li className="flex flex-row gap-2 items-center mb-2">
          {room?.isBreakfast === true ? (
            <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
            <span>
            <FaCheck />
            </span>
          </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
            <span>
            <RiProhibitedLine />
            </span>
          </IconContext.Provider>
          )}
          Breakfast
        </li>
        <li className="flex flex-row gap-2 items-center mb-2">
          {room?.isInternet === true ? (
            <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
            <span>
            <FaCheck />
            </span>
          </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
            <span>
            <RiProhibitedLine />
            </span>
          </IconContext.Provider>
          )}
          Internet
        </li>
        <li className="flex flex-row gap-2 items-center mb-2">
          {room?.isAirConditioned === true ? (
            <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
            <span>
            <FaCheck />
            </span>
          </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ color: "red", className: "global-class-name" }}>
            <span>
            <RiProhibitedLine />
            </span>
          </IconContext.Provider>
          )}
          Air Conditioned
        </li>
      </ul>
    </div>
  )
}

export default RoomFeatures