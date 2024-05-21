import MallardDuck from "./simUDuck/ducks/mallardDuck";
import ModelDuck from "./simUDuck/ducks/modelDuck";
import FlyRocketPowered from "./simUDuck/flyBehaviors/flyRocketPowered";
import { appendBreak, appendDivider, appendHeader, appendLog } from "./utils";

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
