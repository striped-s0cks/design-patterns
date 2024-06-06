*The Facade Pattern* provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level
interface that makes the subsystem easier to use.

```mermaid
classDiagram
    class HomeTheaterFacade {
        watchMovie()
        endMovie()
    }

    namespace subsystems {
        class Amplifier {
            on()
            off()
            setStreamingPlayer()
            setSurroundSound()
            setVolume()
        }

        class PopcornPopper {
            on()
            off()
            pop()
        }

        class Projector {
            on()
            off()
            wideScreenMode()
        }

        class Screen {
            up()
            down()
        }

        class StreamingPlayer {
            on()
            off()
            play()
            stop()
        }

        class TheaterLights {
            on()
            off()
            dim()
        }
    }

    HomeTheaterFacade *-- Amplifier
    HomeTheaterFacade *-- PopcornPopper
    HomeTheaterFacade *-- Projector
    HomeTheaterFacade *-- Screen
    HomeTheaterFacade *-- StreamingPlayer
    HomeTheaterFacade *-- TheaterLights

    Amplifier *-- StreamingPlayer
```
