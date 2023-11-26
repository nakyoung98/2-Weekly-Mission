import React from 'react';

function CardFactory({ dataList }) {
    return (
        <div>
            {dataList.map(item => <Card key={item.id} data={item} />)}
        </div>
    );
}

export default CardFactory;
