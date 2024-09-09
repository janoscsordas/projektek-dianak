import GroceriesList from "./GroceriesList";


export default async function Groceries() {
    return (
        <section>
            <h1 className="text-3xl font-bold">Élelmiszerek</h1>
            <p className="text-[.9rem] text-gray-500">Válasszon egy élelmiszert bővebb információkért</p>
            <GroceriesList />
        </section>
    )
}
