import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MarvelHero from './MarvelHero'
import "./MarvelComic.css"

class MarvelComic extends Component {

    state = {
        heroName: ''
    }

    handleChange = (ev) => {
        const heroName = ev.currentTarget.value
        this.setState({ heroName })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/marvelcomic/${this.state.heroName}`)

    }

    render() {
        return (
            <div className="marvelcomic">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/2000px-Marvel_Studios_2016_logo.svg.png" alt="marvel logo" className="marvel-logo" />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.heroName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Lookup Marvel Hero</button>
                    </div>
                </form>
                <Route exact path='/marvelcomic' render={() => <h3>Ask, and you shall receive...</h3>} />
                <Route path='/marvelcomic/:heroName' component= {MarvelHero} />
            </div>
        )
    }
}

export default MarvelComic