import React, { Component } from 'react'

class MarvelHero extends Component {

    state = {
        hero: {
            thumbnail: '',
            name: '',
            description: '',
            series: '',
            

        }
    }

    constructor(props){
        super(props)
        console.log("ran")
        this.fetchUserData()

    }

    fetchUserData = () => {


        // const toRequest = this.state.heroName.replace(/%20/g, " ")
        
        fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${this.props.match.params.heroName}&apikey=f3825925cbe329f790b6e7b7a45204efa136809b`)
            .then(response => response.json())
            .then(hero => this.setState( { hero } ))
    } 

    render() {
        const { hero } = this.state
        return (
        
            <div className="hero">

                <h2>{hero.thumbnail}</h2>
                <h3>Hero Name: {hero.name}</h3>
                <h3>Series: {hero.series}</h3>
                <h3>Description: </h3>
                    <p>{hero.description}</p>

            </div>

        )

    }
}

export default MarvelHero