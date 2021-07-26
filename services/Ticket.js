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
        return response;
    }
}

module.exports = Ticket;