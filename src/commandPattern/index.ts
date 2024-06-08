import { HeaderType, appendBreak, appendHeader, appendLog } from "../utils";
import Command from "./commands/command";
import GarageDoorCloseCommand from "./commands/garageDoorCloseCommand";
import GarageDoorOpenCommand from "./commands/garageDoorOpenCommand";
import LightOffCommand from "./commands/lightOffCommand";
import LightOnCommand from "./commands/lightOnCommand";
import MacroCommand from "./commands/macroCommand";
import StereoOffCommand from "./commands/stereoOffCommand";
import StereoOnWithCdCommand from "./commands/stereoOnWithCdCommand";
import GarageDoor from "./receivers/garageDoor";
import Light from "./receivers/light";
import Stereo from "./receivers/stereo";
import RemoteControl from "./invokers/remoteControl";

appendHeader('Command Pattern', HeaderType.h1);
appendHeader('Remote Control', HeaderType.h2);

const remote = new RemoteControl();

const kitchenLight = new Light('Kitchen');
const kitchenLightOn = new LightOnCommand(kitchenLight);
const kitchenLightOff = new LightOffCommand(kitchenLight);

const garageDoor = new GarageDoor();
const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);
const garageDoorClose = new GarageDoorCloseCommand(garageDoor);

const stereo = new Stereo();
const stereoOnWithCd = new StereoOnWithCdCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

appendBreak();

remote.setCommand(0, kitchenLightOn, kitchenLightOff);
remote.setCommand(1, garageDoorOpen, garageDoorClose);
remote.setCommand(2, stereoOnWithCd, stereoOff);

remote.print();

appendBreak();

remote.handleOnClick(0);
remote.handleOffClick(0);
remote.print();
remote.handleUndoClick();
remote.handleOnClick(1);
remote.handleOffClick(1);
remote.handleOnClick(2);
remote.print();
remote.handleUndoClick();
remote.print();
remote.handleOffClick(2);

appendBreak();

remote.handleOnClick(4);
appendLog('Unset button has been clicked');
remote.handleOnClick(21);
appendLog('Nonexistent button has been clicked');

appendBreak();

const partyOn: Command[] = [kitchenLightOn, stereoOnWithCd];
const partyOnMacro = new MacroCommand(partyOn);
const partyOff: Command[] = [kitchenLightOff, stereoOff];
const partyOffMacro = new MacroCommand(partyOff);

remote.setCommand(3, partyOnMacro, partyOffMacro);
remote.print();

appendLog('Macro commands');
remote.handleOnClick(3);
remote.handleOffClick(3);
remote.handleUndoClick();
