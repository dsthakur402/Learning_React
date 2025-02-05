import Card from './Card';
import './Cards.css';


function Cards() {
    return (
        <div className="Cards">
            <Card title={"Realme"} idx = {0} />
            <Card title={"Iphone"} idx = {1} />
            <Card title={"samsung"} idx = {2} />
            <Card title={"Nokia"} idx = {3} />
        </div>
    );
}

export default Cards;