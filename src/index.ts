import MallardDuck from "./strategyPattern/ducks/mallardDuck";
import ModelDuck from "./strategyPattern/ducks/modelDuck";
import FlyRocketPowered from "./strategyPattern/flyBehaviors/flyRocketPowered";
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
