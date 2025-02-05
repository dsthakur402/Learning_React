import './Card.css'
import Price from './Price';
import Button from './Button';

function Card({title, idx}) {
    const oldPrices = ["2322", "3232", "34341", "343414"];
    const newPrices = ["2342", "3392", "39841", "3404814"];
    const desc = ["smdsdfjnffngbiv", "ANFIJIjbj", "ssnfd", "fniosfd"];
    return (
        <div className="Card">
            <h4>{title}</h4>
            <p>{desc[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
            <Button />
        </div>
    );
}

export default Card;