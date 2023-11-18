// src/seed.js
const { sequelize, models } = require("./models");

const seedData = async () => {
    try {
        await sequelize.sync({ force: true }); // Hati-hati penggunaan di produksi
        await models.Booking.bulkCreate([
            {
                propertyId: 1,
                userId: 1,
                checkInDate: new Date("2023-12-01"),
                checkOutDate: new Date("2023-12-05"),
                status: "Confirmed",
            },
            {
                propertyId: 2,
                userId: 2,
                checkInDate: new Date("2023-12-02"),
                checkOutDate: new Date("2023-12-06"),
                status: "Pending",
            },
            {
                propertyId: 3,
                userId: 3,
                checkInDate: new Date("2023-12-03"),
                checkOutDate: new Date("2023-12-07"),
                status: "Confirmed",
            },
            {
                propertyId: 4,
                userId: 4,
                checkInDate: new Date("2023-12-04"),
                checkOutDate: new Date("2023-12-08"),
                status: "Pending",
            },
            {
                propertyId: 5,
                userId: 5,
                checkInDate: new Date("2023-12-05"),
                checkOutDate: new Date("2023-12-09"),
                status: "Confirmed",
            },
            {
                propertyId: 1,
                userId: 2,
                checkInDate: new Date("2023-12-06"),
                checkOutDate: new Date("2023-12-10"),
                status: "Confirmed",
            },
            {
                propertyId: 2,
                userId: 3,
                checkInDate: new Date("2023-12-07"),
                checkOutDate: new Date("2023-12-11"),
                status: "Pending",
            },
            {
                propertyId: 3,
                userId: 4,
                checkInDate: new Date("2023-12-08"),
                checkOutDate: new Date("2023-12-12"),
                status: "Confirmed",
            },
            {
                propertyId: 4,
                userId: 5,
                checkInDate: new Date("2023-12-09"),
                checkOutDate: new Date("2023-12-13"),
                status: "Pending",
            },
            {
                propertyId: 5,
                userId: 1,
                checkInDate: new Date("2023-12-10"),
                checkOutDate: new Date("2023-12-14"),
                status: "Confirmed",
            },
        ]);

        console.log("Seed data added successfully.");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        sequelize.close();
    }
};

seedData();
