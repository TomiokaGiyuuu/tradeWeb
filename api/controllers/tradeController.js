import logger from "../utils/logger.js";
import ObjectModel from "../models/objectModel.js";

const arrayFromQuery = (queryArray) => {
    const array = [];
    for (let queryArrayKey in queryArray) {
        array.push(queryArray[queryArrayKey]);
    }

    return array;
}

async function objectsSorter(queryArray, globalCategory = null) {
    const objectsArray = arrayFromQuery(queryArray);
    return await Promise.all(objectsArray.map(async (item) => {
        const {id, location, price, rooms, status, model, square, category, want} = item;
        const filter = globalCategory ? await ObjectModel.find({category: want, want: globalCategory}, {}, {limit: 5})
            : await ObjectModel.find({category: want}, {}, {limit: 5});

        return {
            id,
            location,
            price,
            rooms,
            category,
            want,
            status,
            model,
            square,
            reference: filter,
        }
    }));
}

class TradeController {
    async wantsTwoPerson(req, res, next) {
        try {
            const {category, want} = req.query;
            const sortedFlats = await ObjectModel.find({category, want});
            res.json(sortedFlats);
            return next();
        } catch (e) {
            logger.error(`wantsTwoPerson: ${e}`);
            res.status(400).json({error: true, message: e});
            next(e);
        }
    }

    async wantsThreePerson(req, res, next) {
        try {
            const {category: globalCategory, want} = req.query;
            const sortedFirst = await ObjectModel.find({category: want}, {}, {limit: 5});
            const sortedSecond = await objectsSorter(sortedFirst, globalCategory);

            res.json(sortedSecond);
            return next();
        } catch (e) {
            logger.error(`wantsFourPerson: ${e}`);
            res.status(400).json({error: true, message: e});
            next(e);
        }
    }

    async wantsFourPerson(req, res, next) {
        try {
            const {category: globalCategory, want} = req.query;
            const sortedFirst = await ObjectModel.find({category: want}, {}, {limit: 5});
            const sortedSecond = await objectsSorter(sortedFirst);
            const sortedThird = await Promise.all(sortedSecond.map(async (second) => {
                const {id, location, price, rooms, category, want, status, model, square} = second;
                const thirdSort = await objectsSorter(second.reference, globalCategory);
                return {
                    id,
                    location,
                    price,
                    rooms,
                    category,
                    want,
                    status,
                    model,
                    square,
                    reference: thirdSort
                }
            }));
            res.json(sortedThird);

            return next();
        } catch (e) {
            logger.error(`wantsFourPerson: ${e}`);
            res.status(400).json({error: true, message: e});
            next(e);
        }
    }

    async wantsFourMoney(req, res, next) {
        try {
            const {want} = req.query;
            const sortedFirst = await ObjectModel.find({category: want}, {}, {limit: 5});
            const sortedSecond = await objectsSorter(sortedFirst);
            const sortedThird = await Promise.all(sortedSecond.map(async (second) => {
                const {id, location, price, rooms, category, want, status, model, square} = second;
                const thirdSort = await objectsSorter(second.reference);
                return {
                    id,
                    location,
                    price,
                    rooms,
                    category,
                    want,
                    status,
                    model,
                    square,
                    reference: thirdSort
                }
            }));
            res.json(sortedThird);

            return next();
        } catch (e) {
            logger.error(`wantsFourPerson: ${e}`);
            res.status(400).json({error: true, message: e});
            next(e);
        }
    }

    async getAllFlats(req, res, next) {
        try {
            const flats = await ObjectModel.find({});
            res.json(flats);

            return next();
        } catch (e) {
            logger.error(`getAllFlats: ${e}`);
            res.status(400).json({error: true, message: e});
            next(e);
        }
    }
}

export default new TradeController();