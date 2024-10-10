import React from 'react';
import PropTypes from 'prop-types';
import {createHash} from 'crypto';
import {Button, Card, CardBody, HeadingText, nerdlet, TextField} from 'nr1';

export default class EmailHashFilterVisualization extends React.Component {
    // Custom props you wish to be configurable in the UI must also be defined in
    // the nr1.json file for the visualization. See docs for more details.
    static propTypes = {
        /**
         * Attribute name to apply filter
         */
        attributeName: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        }
        this.email='';
        this.setValue = this.setValue.bind(this);
        this.filterHash = this.filterHash.bind(this);
    }

    filterHash() {
        const {attributeName} = this.props;
        const hash = createHash('md5');
        hash.update(this.email);
        const filter = attributeName + " = '" + hash.digest('hex') + "'";
        console.log('Filter:', filter);
        nerdlet.setUrlState({ filters: filter })
    }

    setValue(event) {
        this.email = event.target.value;
        const disabled = this.email.length === 0;
        if (this.state.visible !== disabled) {
            this.setState({disabled})
        }
    }

    render() {
        const {attributeName} = this.props;
        const {disabled} = this.state;
        if (!attributeName) {
            return <EmptyState />;
        }

        return (
            <div className="Input">
                <TextField label="Email" labelInline placeholder="john@example.com" onChange={this.setValue} />
                <Button className="Button" sizeType={Button.SIZE_TYPE.SMALL} disabled={disabled} onClick={this.filterHash}>Filter</Button>
            </div>
        );
    }
}

const EmptyState = () => (
    <Card className="EmptyState">
        <CardBody className="EmptyState-cardBody">
            <HeadingText
                spacingType={[HeadingText.SPACING_TYPE.LARGE]}
                type={HeadingText.TYPE.HEADING_3}
            >
                Please specify name of attribute to apply filter to
            </HeadingText>
        </CardBody>
    </Card>
);
