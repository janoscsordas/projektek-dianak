import { FlipWords } from "./ui/flip-words";

export default function FlipWordsComponent() {
    const words = ["Csordás János", "a mester"];

    return (
        <div className="my-16 flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Készítette
            <FlipWords words={words} />
        </div>
        </div>
    )
}
