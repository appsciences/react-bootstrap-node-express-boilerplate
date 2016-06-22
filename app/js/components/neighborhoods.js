
const React = require('react'),
    ReactDOM = require('react-dom');


const nhoods = require('../../data/data');

const ReactBootstrap = require('react-bootstrap'),
    Table = ReactBootstrap.Table;

const neighborhoods = React.createClass({

    getInitialState() {
        return {
            alerts: ['alert1', 'alert2', 'alert3']
        };
    },


    render() {

        return (

            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>

                {
                    nhoods.map(nhood =>
                        <tr>
                            <td>{nhood.name}</td>
                            <td>{nhood.location}</td>
                        </tr>)
                }

                </tbody>
            </Table>

        );
    }
});


module.exports = neighborhoods;
