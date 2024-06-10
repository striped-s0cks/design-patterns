import { HeaderType, appendBreak, appendHeader } from "../utils";
import GumballMachine from "./gumballMachine";

appendHeader('State Pattern', HeaderType.h1);
appendHeader('Gumball Machine', HeaderType.h2);

const gumballMachine = new GumballMachine(5);
gumballMachine.print();
appendBreak();

gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.print();
appendBreak();

gumballMachine.insertQuarter();
gumballMachine.ejectQuarter();
gumballMachine.turnCrank();
gumballMachine.print();
appendBreak();

gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.ejectQuarter();
gumballMachine.print();
appendBreak();

gumballMachine.insertQuarter();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.print();
