/**
 * Takes a flat list of menu items with `id` and `parentID` properties.
 * Moves items with a parentID to the parent's `children` array.
 *
 * @see https://www.wpgraphql.com/docs/menus/#hierarchical-data.
 */
export function flatToTree(
    data = [],
    {idKey = 'key', parentKey = 'parentId', childrenKey = 'children'} = {}) {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const newItem = {...item};
        const {[idKey]: id, [parentKey]: parentId = 0} = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (
                childrenOf[parentId] = childrenOf[parentId] || []
            ).push(newItem)
            : tree.push(newItem);
    });
    return tree;
}
