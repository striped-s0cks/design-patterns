import { appendLog } from "../../utils";
import Amplifier from "../devices/amplifier";
import PopcornPopper from "../devices/popcornPopper";
import Projector from "../devices/projector";
import Screen from "../devices/screen";
import StreamingPlayer from "../devices/streamingPlayer";
import TheaterLights from "../devices/theaterLights";

export default class HomeTheaterFacade {
    amp: Amplifier;
    player: StreamingPlayer;
    projector: Projector;
    lights: TheaterLights;
    screen: Screen;
    popper: PopcornPopper;

    constructor(
        amp: Amplifier, 
        player: StreamingPlayer, 
        projector: Projector, 
        lights: TheaterLights, 
        screen: Screen, 
        popper: PopcornPopper) {
            this.amp = amp;
            this.player = player;
            this.projector = projector;
            this.lights = lights;
            this.screen = screen;
            this.popper = popper;
        }

    watchMovie(movie: string): void {
        appendLog('Get ready to watch a movie!');

        this.popper.on();
        this.popper.pop();

        this.lights.dim(10);
        this.screen.down();

        this.projector.on();
        this.projector.wideScreenMode();

        this.amp.on();
        this.amp.setStreamingPlayer(this.player);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);

        this.player.on();
        this.player.play(movie);
    }

    endMovie(): void {
        appendLog('Shutting the movie theater down');

        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.player.stop();
        this.player.off();
    }
}
