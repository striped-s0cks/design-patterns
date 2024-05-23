export default abstract class Beverage {
    description = 'Unknown Beverage';

    getDescription(): string {
        return this.description;
    }

    abstract cost(): number;
}
