export default function SectionBadge({ badge }) {
    return (
        <div className="flex gap-3 lg:mb-10 mb-5 items-center">
            <p className="bg-red-500 px-1 py-1 rounded">&nbsp;</p>
            <h3 className="text-red-500 font-medium">{badge}</h3>
        </div>
    )
}