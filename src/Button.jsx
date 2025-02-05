
function doSomething(){
    console.log("kdnbsf kn");
}

export default function Button() {
    return (
        <div className="Button">
            <button onClick={doSomething}>Add to Cart!</button>
            <button onClick={doSomething}>Buy Now!</button>
        </div>
    );
}