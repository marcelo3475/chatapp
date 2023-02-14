import React, { Component } from 'react'
import '../signin.css'

export class Footer extends Component{
    render() {
        return(
            <div class='container'>
                <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@1.*/css/pico.min.css"></link>
                <div>
                    <ul>
                        <small>Developed by <a href='https://www.twitter.com/marcelo69420'>@marcelo6942</a> • and <a href='https://picocss.com/'>Picocss</a></small>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer