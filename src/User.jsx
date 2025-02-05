import "./User.css";

function User({ username, textcolor }) {
    let styles = { color: textcolor }; 
    console.log(styles);
    return (
        <div className='User' style={styles}> 
            <h1>{username}</h1>
        </div>
    );
}

export default User;
