import { HeaderType, appendBreak, appendDivider, appendHeader, appendLog } from "../utils";
import Amplifier from "./devices/amplifier";
import PopcornPopper from "./devices/popcornPopper";
import Projector from "./devices/projector";
import Screen from "./devices/screen";
import StreamingPlayer from "./devices/streamingPlayer";
import TheaterLights from "./devices/theaterLights";
import HomeTheaterFacade from "./facades/homeTheaterFacade";

appendHeader('Facade Pattern', HeaderType.h1);
appendHeader('Home Theater', HeaderType.h2);

const amp = new Amplifier();
const player = new StreamingPlayer();
const projector = new Projector();
const screen = new Screen();
const lights = new TheaterLights();
const popper = new PopcornPopper();

const homeTheater = new HomeTheaterFacade(amp, player, projector, lights, screen, popper);
homeTheater.watchMovie('Mulan');

appendBreak();

homeTheater.endMovie();

appendDivider();
