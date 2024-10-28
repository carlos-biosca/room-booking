import { BsProjector, BsCameraVideo } from "react-icons/bs";
import { FaChalkboard, FaWifi } from "react-icons/fa6";
import { MdOutlineSurroundSound, MdOutlineContactPhone } from "react-icons/md";
import { PiVideoConferenceLight, PiTelevisionSimple } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { RiSurroundSoundLine, RiFlashlightFill } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { LuCoffee } from "react-icons/lu";

const icons = {
  Projector: <BsProjector />,
  Whiteboard: <FaChalkboard />,
  "Video Conferencing": <PiVideoConferenceLight />,
  "Wi-Fi": <FaWifi />,
  "Sound System": <MdOutlineSurroundSound />,
  "Conference Phone": <MdOutlineContactPhone />,
  Television: <PiTelevisionSimple />,
  Computers: <GrPersonalComputer />,
  "Video Camera": <BsCameraVideo />,
  Soundproofing: <RiSurroundSoundLine />,
  "Lighting Equipment": <RiFlashlightFill />,
  "Air Conditioning": <TbAirConditioning />,
  "Coffee Machine": <LuCoffee />
};

export default icons;