const connection = require('../database/connections');

module.exports ={
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        
        if(!ong){
            return response.status(400).json({ error: 'No ONG find with this ID' });
        }

        return response.json(ong);
    }
}