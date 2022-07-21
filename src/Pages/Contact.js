import { Component } from "react";
import React from "react";
class Contact extends Component {
    render() {
        return (
            <div>
                <section className="pt-4">
                    <div className="container">
                        <div className="text-center">
                            <h2>Drop your message</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <div className="contact-form">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfZ0rqXjNqpxN7m1kKlAP9QXlZ0tM5KZjED3xXNe2r5cfpSQ/viewform?embedded=true" width="640" height="485" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact