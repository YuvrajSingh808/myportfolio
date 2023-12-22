export function SocialLink({ link, icon }) {
    return (
        <a href={link} target="_blank" rel="noreferrer"
            className="text-4xl hover:scale-105 duration-150 transition-all ease-in-out font-medium hover:text-gray-300">{icon}</a>
    );
}
