import MallardDuck from "./ducks/mallardDuck";
import ModelDuck from "./ducks/modelDuck";
import FlyRocketPowered from "./flyBehaviors/flyRocketPowered";
import { appendBreak, appendDivider, appendHeader, appendLog } from "../utils";

appendHeader('Duck Simulator');

const mallard = new MallardDuck();
mallard.display();
mallard.performQuack();
mallard.performFly();

appendBreak();

const model = new ModelDuck();
model.display();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();

appendDivider();
