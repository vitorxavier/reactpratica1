import React, {Component} from 'react';

class Entrada extends Component {
    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input type="text" placeholder="Usuário" onChange={this.props.handleChange}/>
                    <button>Pesquisar</button>
                </form>
            </div>
        );
    }
}

export default Entrada;