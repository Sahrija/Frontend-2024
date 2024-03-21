export default function Profile(props) {
    const { name, major } = props;
    return (
        <>
            <img src="" alt="" width="100" height="100"></img>
            <p className="">
                My name is {name}
            </p>
            <p>
                I am learning {major}
            </p>
        </>
    );
}
