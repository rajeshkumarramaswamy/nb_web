import React, { Component } from 'react';
import { Container, Grid, Segment, Button, Card, Icon, Modal, Form, GridColumn } from 'semantic-ui-react';
import ItemCard from './ItemCard';

const data = [
    {
        'id': 1,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 2,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 3,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 4,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 5,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 6,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 7,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 8,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    },
    {
        'id': 9,
        'header': 'Steve Sanders',
        'meta': 'Friends of Elliot',
        'description': 'Steve wants to add you to the group best friends',
    }
]


class AdminItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Card.Group centered style={{marginTop: '20px'}}>
                {data.map((details) => <ItemCard id={details.id} details={details} />)}
            </Card.Group>
        );
    }
}

export default AdminItemsList;