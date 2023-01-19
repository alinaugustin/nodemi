import User from "./User.js";
import UserDetail from "./UserDetail.js";



const loadModels = async () => {
    await User.sync({
        alter: true,
        // force: true
    })
    await UserDetail.sync({
        alter: true,
        // force: true
    })

    User.hasOne(UserDetail, {
        foreignKey: 'user_id',
        as: 'user_details'
    });

    UserDetail.belongsTo(User, {
        foreignKey: 'user_id',
        as: 'user'
    });
}

export default loadModels