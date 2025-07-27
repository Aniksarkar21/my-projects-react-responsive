
const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 hover:bg-gray-300 px-4">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;