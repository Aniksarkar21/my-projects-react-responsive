import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData)
                setSpinner(false)
            })
    }, [])
    return (
        <div>
            <div>
                {
                 spinner && <span className="w-3xs loading loading-infinity "></span>
                }
               
            </div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1600} height={300} data={phones}>
                <Bar dataKey='price' fill="#8884d8"></Bar>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;