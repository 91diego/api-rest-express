require('dotenv').config();

class Ticket {

    constructor() {
        //
    }

    /**
     * GALL TICKETS
     */
    getAll() {
        let response;
        let code = 200;
        let status = 'success';
        let message = 'OK';
        let items = null;
        response = {
            'code': code,
            'status': status,
            'message': message,
            'items': process.env.DB_NAME
        }
        return response;
    }

    /**
     * GET TICKET BY ID
     */
    get(id) {
        let response;
        let code = 200;
        let status = 'success';
        let message = 'OK';
        let items = null;
        response = {
            'code': code,
            'status': status,
            'message': message,
            'items': items
        }
        return response;
    }

    /**
     * CREATE TICKET
     */
    create(products) {
        let response;
        let code = 201;
        let status = 'success';
        let message = 'OK';
        let items = null;
        response = {
            'code': code,
            'status': status,
            'message': message,
            'items': products
        }

        try {
            // console.log(products['items'][2]);
            let result = products['items'].filter((item, index) => {
                // console.log(products['items'][index]);
                // console.log(products.items[index].product === item.product);
                // console.log(item.product);
                return products.items[index].product === item.product;
            });
            console.log(result);
        } catch (error) {
            console.log(error);   
        }
        /*Post.findAll({
            where: {
              id: [1,2,3] // Same as using `id: { [Op.in]: [1,2,3] }`
            }
        });*/
        return response;
    }
}

module.exports = Ticket;