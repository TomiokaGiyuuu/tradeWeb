import './card.css';
import {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';

const Card = ({item, moreThanTwo}) => {
    const PF = "http://localhost:5000/";

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const res = await axios.get(`/user?userId=${post.userId}`);
    //     }
    // }, []);


    return (
        <div className="card">
            <div className="cardWrapper">
                {item.category === 'машина'
                    ?
                    <div className="cardTop">
                        <img className="cardTopImg" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/range-rover-2022-001-tracking-front.jpg" alt=""/>
                    </div>
                    :
                    <div className="cardTop">
                        <img className="cardTopImg" src="https://is1-3.housingcdn.com/4f2250e8/55efe32dace3623af94a7197ae5a34f3/v0/large/ghoghari_alif_1_appartment-makarba-ahmedabad-ghoghari_infrastructure.jpeg" alt=""/>
                    </div>
                }
                <div className="cardText">
                    <hr className="cardHr"/>
                    <div className="cardTextCategory">
                        Имею: {item.category}
                    </div>
                    <div className="cardWantCategory">
                        Хочу: {item.want}
                    </div>
                    {moreThanTwo === true ?
                        <Link to = "/trade">
                        <div className="cardShowTrades">
                            Показать обмены
                        </div>
                        </Link>
                        :
                        <div className="cardShowTrades">
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Card;