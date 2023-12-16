import React  from 'react';
import { getUser } from '../services/utility';

const UpdatedComponent = (OriginalComponent) => {
    const user = getUser();
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent user={user} />;
        }
    }

    return NewComponent;
};

export default UpdatedComponent;