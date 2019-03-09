import React, { Component } from 'react';
import './App.css';
import Usuario from './Usuario';
import Entrada from './Entrada';

class App extends Component {
  state = {user: '', userValidate: '', imgSrc: '', pRepos: '', nome: '', blog: '', erro: false, loading: false, info: false};
  handleChange = (e)=>{
    this.setState({user: e.target.value});
  }

  handleSubmit = (e)=>{
    this.setState({loading: true, erro:false});
    e.preventDefault();
    fetch('https://api.github.com/users/' + this.state.user).then(
      (r) => {
        r.json().then(
          e => {
            if(e.message !== "Not Found")
            this.setState({userValidate: e.login, imgSrc: e.avatar_url, pRepos: e.public_repos, nome: e.name, blog: e.blog, loading: false, info: true});
            else this.setState({userValidate: 'Não encontrado', info: true, erro: false, loading: false});
          }
        ).catch(
          (e) => {
            this.setState({erro: true});
          }
        );
      }
    ).catch((e)=>{
      alert(e);
      this.setState({userValidate: 'Não encontrado'})
    })
  }
  buildBlocoUsuario(){
    if(this.state.erro) return "Oooooops, deu erro!";
    if(this.state.loading) return "Carregando...";
    if(this.state.info) return <Usuario user={this.state.userValidate} imgSrc={this.state.imgSrc} pRepos={this.state.pRepos} nome={this.state.nome} blog={this.state.blog}/>
  }
  render() {
    return (
      <div className="App">
        <Entrada handleChange={this.handleChange} onSubmit={this.handleSubmit} />
        
        {this.buildBlocoUsuario()}
      </div>
    );
  }
}

export default App;
