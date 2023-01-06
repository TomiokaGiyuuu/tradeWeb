import React, {useEffect, useState} from 'react';
import Card from "../../components/card/Card";
import {Cards} from '../../dummyData';
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import './products.css'
import TradeCard from "../../components/tradeCard/TradeCard";
import MiniTradeCard from "../../components/miniTradeCard/MiniTradeCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [trades, setTrades] = useState(["1-1", "1-3", "1-4", "1-4(with money)"]);
    const [categories, setCategories] = useState(["квартира", "машина", "дом"])
    const [active, setActive] = useState(-1);
    const [have, setHave] = useState("квартира");
    const [want, setWant] = useState("квартира");
    const [moreThanTwo, setMoreThanTwo] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(`http://localhost:5000/api/allFlats`);
            let temp = res.data;
            setProducts(temp);
        }
        fetchProducts();
    }, [])

    const clickHandler = () => {
        if(active === 0){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantTwo?category=${have}&want=${want}`);
                let temp = res.data;
                setProducts(temp);
                setMoreThanTwo(false);
                console.log(products);
            }
            fetchProducts();
        } else if(active === 1){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantThree?category=${have}&want=${want}`);
                let temp = res.data;
                setProducts(temp);
                setMoreThanTwo(true);
                console.log(products);
            }
            fetchProducts();
        } else if(active === 2){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantFour?category=${have}&want=${want}`);
                let temp = res.data;
                setMoreThanTwo(true);
                setProducts(temp);
            }
            fetchProducts();
        } else if(active === 3){
            const fetchProducts = async () => {
                const res = await axios.get(`http://localhost:5000/api/wantFourMoney?category=${have}&want=${want}`);
                let temp = res.data;
                setMoreThanTwo(true);
                setProducts(temp);
                console.log(products);
            }
            fetchProducts();
        }
    }

    const handleHave = (e) => {
        const value = e.target.value;
        setHave(value);
        e.preventDefault();
    }
    const handleWant = (e) => {
        const value = e.target.value;
        setWant(value);
        e.preventDefault();
    }

    return (
        <div className="products">
            <div className="productsSort">
                <div className="productsSortText">
                    Мои обмены
                </div>
                <div className="productsSortCategories">
                    {trades.map((p) => (
                        <div className="productsSortCategory"
                             onClick={() => {
                                 setActive(trades.indexOf(p));
                                 clickHandler();
                             }
                        }>{p}</div>
                    ))}
                    <div className="categoryChoose">
                        <div className="categoryText">Имею: </div>
                        <select name = "category" onChange = {handleHave} className="productsCategorySelect">
                            <option disabled>Категория</option>
                            {categories.map((c) => (
                                <option>{c}</option>
                            ))}
                        </select>
                        <div className="categoryText">Хочу: </div>
                            <select name = "category" onChange = {handleWant} className="productsCategorySelect">
                            <option disabled>Категория</option>
                            {categories.map((c) => (
                                 <option>{c}</option>
                            ))}
                    </select>
                    </div>
                </div>
            </div>
            <div className="productsContainer">
                {
                    moreThanTwo ?
                        <>
                            <div>
                                <div className="productThatHave">
                                    <div className="productThatHaveImg">
                                        {have === 'машина'
                                            ?
                                            <img className="miniTradeCardTopImg" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/range-rover-2022-001-tracking-front.jpg" alt=""/>
                                            :
                                            have === 'квартира'
                                                ?
                                                <img className="miniTradeCardTopImg" src="https://is1-3.housingcdn.com/4f2250e8/55efe32dace3623af94a7197ae5a34f3/v0/large/ghoghari_alif_1_appartment-makarba-ahmedabad-ghoghari_infrastructure.jpeg" alt=""/>
                                                :
                                                <img className="miniTradeCardTopImg" src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg" alt=""/>
                                        }
                                    </div>
                                <TradeCard item = {products}/>
                                </div>
                            </div>
                        </>
                    :
                        products?.map((c) => (
                        <Card key = {c.id} item = {c}/>
                        ))
                }

            </div>
        </div>
    );
};

export default Products;