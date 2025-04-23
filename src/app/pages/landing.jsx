"use client";
import React, { useEffect, useState } from 'react';
import { Card, Carousel, List } from "antd";
const axios = require('axios');


const LandingPage = () => {
    const [Data, setData] = useState([]);
    const numb = 10;
    useEffect(() => {
        const getCats = async () =>{
            try{
                const response= await axios.get(`https://cataas.com/api/cats?limit=${numb}`)
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
            ;
        };
        getCats();
    }, []); // Empty array ensures this runs only once
    console.log("data -after",Data);

    const MainCard = ({ data }) => {
        return (
            <>
                {data.map((item, index) => 
                    (
                    <Card 
                    size='medium' title= {item.tags}
                    variant='outlined' 
                    hoverable
                    cover={<img alt="example" src={`https://cataas.com/cat/${item.id}`} width="50" height="50" />}
                    >
                        <h1>Card 1</h1>
                    </Card>
                ))}
            </>
        );
    };

    return (
    <div className="LandingPage h-full w-full">
        <div className="bg-cyan-50 justify-center h-2/12 items-stretch" >
            <h1>Welcome to the website !</h1>
            <h1>This is landing page</h1>
        </div>
        <div className="static flex-col min-w-50 min-h-50 mx-50 my-10 mt-10 items-center-safe">
            <Carousel
                dotPosition='bottom'
                autoplay={{ dotDuration: true }} 
                arrows 
                infinite={true}
                className="absolute bg-blue-200 flex min-w-40 min-h-40 z-40 px-5 py-5 items-center-safe"
                >
                <MainCard key={""} data={Data} />
            </Carousel>
        </div>
    </div>
    );
}
export default LandingPage;