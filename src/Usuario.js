import React, {Component} from 'react';
import './Usuario.css'

class Usuario extends Component {
    //state = {imgSrc: '', user: '', pRepos: '', nome: '', blog: ''};
    /*componentDidMount(){
        this.setState({imgSrc: '', user: '', pRepos: '', nome: '', blog: ''})
    }*/
    render(){
        return(
            <div>
                <img src={this.props.imgSrc} alt='User' className='img'/>
                <p><b>Usuário: </b>{this.props.user}</p>
                <p><b>Public Repos: </b>{this.props.pRepos}</p>
                <p><b>Nome: </b>{this.props.nome}</p>
                <p><b>Blog: </b>{this.props.blog}</p>
            </div>
        );
    }
}

export default Usuario