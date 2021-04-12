import React from 'react';

import { connect } from 'react-redux';

import './collections-overview.style.scss';



import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
);

    
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);



