import { Component } from "react"
import client from './Client'
import React from "react"
import BlackLoader from '../Images/black-loader.gif'
import { marked } from 'marked'

class About extends Component {
    constructor() {
        super()
        this.state = { aboutpage: [] }
    }

    componentDidMount() {
        client.getEntries({
            'content_type': 'about'
        }).then((entries) => {
            this.setState({ aboutpage: entries.items[0] }) // 200
        })
    }

    getParsedMarkdown(aboutDescription) {
        return {
            __html: marked(aboutDescription, {})
        }
    }

    render() {
        return (

            <div>
                <div className="container">
                    <h2 className="text-center">About us</h2>

                    {this.state.aboutpage.length === 0 ?
                        <div align="center" className="pt-5"><img src={BlackLoader} alt="Loader" /></div>
                        :
                        //<p>{this.state.aboutpage.fields.aboutDescription}</p>
                        <div dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.aboutpage.fields.aboutDescription)}>

                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default About
