import React, {useState} from 'react';
import './tradeCard.css'
import MiniTradeCard from "../miniTradeCard/MiniTradeCard";
import EmptyCard from "../emptyCard/EmptyCard";

const TradeCard = ({item}) => {
    // const [items, setItems] = useState(item.reference);
    // console.log(item);
    const[indexLast, setIndexLast] = useState(0);
    const[activeLast, setActiveLast] = useState(false);
    const[active, setActive] = useState(false);
    const[index, setIndex] = useState(0);

    console.log("works 1 " + item[index].reference);
    if(item) {
        return (
            <div className="tradeCard">
                <div className="tradeWrapper">
                    <div className="tradeWrapperCat">
                        {item?.map((c,index) =>(
                            <div className = "tradeWrapperFirstInner" onClick={() => {
                                setIndex(index);
                                setActive(!active);}}>
                            <MiniTradeCard key={c.id} item={c}/>
                            </div>
                        ))}
                    </div>
                    <div className="tradeWrapperCat">
                        {active
                            ?
                            <>
                            {item[index]?.reference?.map((c, index) => {
                                if(c !== null){
                                return <div className = "tradeWrapperFirstInner" onClick={() => {
                                setIndexLast(index);
                                console.log(indexLast);
                                console.log(item[index]?.reference[indexLast]);
                                setActiveLast(!activeLast);}}>
                                <MiniTradeCard key={c.id} item={c}/>
                                </div>
                            }
                            }
                                // if (c !== null) return <MiniTradeCard key={c.id} item={c} />
                            )
                            }
                            </>
                            :
                            <></>
                        }
                    </div>
                    <div className="tradeWrapperCat">
                        {activeLast
                            ?
                            <EmptyCard key = {item[index]?.reference[indexLast]} item={item[index]?.reference[indexLast]}/>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default TradeCard;