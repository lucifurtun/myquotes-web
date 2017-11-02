import React, {Component} from 'react';
import axios from 'axios';

class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: []
        };
    }

    render() {
        return (
            <div>
                {this.state.quotes.map((quote) =>
                    <li key={quote.id}>
                        {quote.title}
                    </li>
                )}
            </div>
        )
            ;
    }

    componentDidMount() {
        axios.get('https://myquotes.io/api/quotes/?page=1')
            .then(response => {
                console.log(response);
                this.setState({quotes: response.data.results})
            })
            .catch(this.handleError);
    }
}

export default Quote;
