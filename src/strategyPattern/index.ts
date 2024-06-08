import MallardDuck from "./ducks/mallardDuck";
import ModelDuck from "./ducks/modelDuck";
import FlyRocketPowered from "./flyBehaviors/flyRocketPowered";
import { HeaderType, appendBreak, appendHeader, appendLog } from "../utils";

appendHeader('Strategy Pattern', HeaderType.h1);
appendHeader('Duck Simulator', HeaderType.h2);

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
