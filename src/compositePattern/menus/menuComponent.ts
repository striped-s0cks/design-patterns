/**
 * Interface for both Menu and MenuItem. Subclasses only need to implement methods they actually support.
 */
export default abstract class MenuComponent {
    add(menuComponent: MenuComponent): void {
        throw new Error('Unsupported operation');
    }

    remove(menuComponent: MenuComponent): void {
        throw new Error('Unsupported operation');
    }

    getChild(index: number): MenuComponent {
        throw new Error('Unsupported operation');
    }

    getName(): string {
        throw new Error('Unsupported operation');
    }

    getDescription(): string {
        throw new Error('Unsupported operation');
    }

    getPrice(): number {
        throw new Error('Unsupported operation');
    }

    isVegetarian(): boolean {
        throw new Error('Unsupported operation');
    }

    print(): void {
        throw new Error('Unsupported operation');
    }
}
