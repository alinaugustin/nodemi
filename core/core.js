import routers from "../routes/web.js"
import db from "./database/database.js"
import loadModels from "./model/Models.js"
import middleware from "./middleware/Middleware.js"

const load = async (app) => {

    try {

        //------------------------------------------------------- Database
        // process.env.PRODUCTION
        await db.authenticate()
        // db.drop({cascade: true})
        // await db.sync({alter: true})
        //------------------------------------------------------- 

        //------------------------------------------------------- Models
        loadModels()
        //------------------------------------------------------- 

        //------------------------------------------------------- Middleware
        middleware(app)
        //------------------------------------------------------- 

        //------------------------------------------------------- Routers
        routers(app)
        //------------------------------------------------------- 


    } catch (error) {
        console.log("\x1b[31m",error, "\x1b[0m");
    }


}

export default load