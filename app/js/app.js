
const React = require('react'),
    ReactDOM = require('react-dom');


const Neighborhoods = require('./components/neighborhoods');

const ReactBootstrap = require('react-bootstrap'),
    Well = ReactBootstrap.Well,
    Panel = ReactBootstrap.Panel,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Button = ReactBootstrap.Button,
    Alert = ReactBootstrap;

const Application = React.createClass({

    getInitialState() {
        return {
            alerts: ['alert1', 'alert2', 'alert3']
        };
    },


    render() {

        return (

            <Well>
                <Panel header={<h2>New York Neighborhoods</h2>}>
                    <Neighborhoods/>
                </Panel>
            </Well>


        );
    }
});



ReactDOM.render(<Application/>, document.getElementById("app_container"));