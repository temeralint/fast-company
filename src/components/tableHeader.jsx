import PropTypes from 'prop-types';

const TableHeader = ({thItems, sortState, onSort}) => {
    let classes = 'm-1 bi bi-caret-'
    classes += sortState.order === 'asc' ? 'up-fill' : 'down-fill'
    return (
        <thead>
            <tr>
                {
                    thItems.map(item => {
                        return <th scope="col" 
                                   key={item.name} 
                                   onClick={item.iter ? () => onSort(item.iter) : null}
                                   role={item.iter ? "button" : null}
                                >
                                    {item.name}
                                    {item.iter === sortState.iter ? <i className={classes}></i> : null}
                                </th>
                    })
                }
                <th></th>
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    thItems: PropTypes.array.isRequired,
    sortState: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
}

export default TableHeader;