import { TestDAO } from '../dao/DaoTest'

const saveCrud = async document => {
    console.log('method saveCrud Service started')
    const result = await TestDAO.saveTest(document)
    console.log(`result => ${JSON.stringify(result)}`)
    console.log('method saveCrud Service ending')
    return result
}

export const ServiceCrud = {
    saveCrud
}

export default null
