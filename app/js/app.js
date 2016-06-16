
const React = require('react'),
    ReactDOM = require('react-dom');


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

        var i = 0;
        return (

            <Grid>
                <Row>
                    <Col xs={4}>
                        <h1>React Demo</h1>
                    </Col>

                </Row>
                {
                    this.status.alerts.map(() => (
                        <Row>
                            <Col xs={4}>
                                        <Alert><h3>Hello {this.props.name}</h3></Alert>
                            </Col>

                        </Row>)
                    );
                }


            </Grid>


        );
    }
});



ReactDOM.render(<Application/>, document.getElementById("app_container"));