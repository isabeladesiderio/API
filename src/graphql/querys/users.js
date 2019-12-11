import Users from '../../models/Users';

export const resolvers = {
    users: async () => {
        const users = await Users.find({
            deleted: false
        });
        return users;
    },
};