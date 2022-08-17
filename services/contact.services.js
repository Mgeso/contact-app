import contactModel from "../models/contactSupport.js"


class ContactService{
    async create(data){
     
        const newContact = await contactModel.create(data)
        return newContact
    }
}

export default new ContactService()