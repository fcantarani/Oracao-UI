export interface ITagComponent {
    title?: string,
}

export default function TagComponent({ title }: ITagComponent) {
    return (
        <div className="flex justify-center w-16 p-1 text-[0.7rem] bg-yellow-500 dark:bg-yellow-800 rounded-lg">
            {title}
        </div>
    )

}