import DataLoader from 'dataloader'
import _ from 'lodash'

const loader = itemModel => {
    return new DataLoader(itemIds => {
        return itemModel
            .getModel()
            .find({
                _id: {
                    $in: itemIds
                }
            })
            .then(items => {
                const itemByIds = _.keyBy(items, '_id')
                return itemIds.map(itemId => itemByIds[itemId])
            })
    })
}

export { loader }
