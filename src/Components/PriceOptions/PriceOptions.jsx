import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 personal training session/month",
                "Free Wi-Fi",
                "Open 6 AM – 9 PM",
                "Mobile app access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "All Basic Plan features",
                "Unlimited group classes",
                "3 personal training sessions/month",
                "Sauna and steam room access",
                "Nutrition guide (PDF)",
                "Open 5 AM – 11 PM",
                "Guest pass (1/month)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 69.99,
            "features": [
                "All Standard Plan features",
                "Unlimited personal training",
                "1-on-1 nutrition coaching",
                "Massage therapy access (1/month)",
                "Hydrotherapy pool access",
                "Open 24/7",
                "Free gym merchandise pack",
                "Monthly progress tracking"
            ]
        },
        {
            "id": 4,
            "name": "Student Plan",
            "price": 24.99,
            "features": [
                "Access to gym equipment",
                "Group classes (off-peak hours)",
                "Student ID required",
                "Locker access",
                "Campus shuttle pickup",
                "Discount on healthy snacks",
                "Wi-Fi and study corner"
            ]
        },
        {
            "id": 5,
            "name": "Family Plan",
            "price": 99.99,
            "features": [
                "Access for up to 4 members",
                "All Premium Plan features",
                "Child care service",
                "Weekend family yoga classes",
                "Free weekend guest passes",
                "Birthday discounts for members",
                "Family lounge access"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2>Best prices in the town</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    PriceOptions.map(option => <PriceOption option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;