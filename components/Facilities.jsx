import { BsProjector, BsCameraVideo } from "react-icons/bs";
import { FaChalkboard, FaWifi } from "react-icons/fa6";
import { MdOutlineSurroundSound, MdOutlineContactPhone } from "react-icons/md";
import { PiVideoConferenceLight, PiTelevisionSimple } from "react-icons/pi";
import { GrPersonalComputer } from "react-icons/gr";
import { RiSurroundSoundLine, RiFlashlightFill } from "react-icons/ri";

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
  "Lighting Equipment": <RiFlashlightFill />
};

const Facilities = ({ amenities }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">Facilities</h2>
      <ul className="flex flex-wrap gap-4">
        {amenities.length > 0
          ? amenities.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-2 border px-3 py-1 rounded-lg"
                >
                  {icons[item]}
                  {item}
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};

export default Facilities;
