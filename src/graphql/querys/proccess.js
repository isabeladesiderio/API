import Proccess from '../../models/Proccess';

export const resolvers = {
    proccess: async () => {
        const proccess = await Proccess.find({
            deleted: false
        });
        return proccess;
    },
};