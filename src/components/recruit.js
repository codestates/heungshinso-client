import React from 'react';
import Article from './article';
import Filter from '../components/filter'

class Recruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalData: null,

      ft_items: [],
      ft_items_id: 1,

      query: '',

      data: this.props.teams
    };
  }

  modalOn(modal) {
    this.setState({ modal: true });
    this.setState({ modalData: modal });
  }

  modalOff() {
    this.setState({ modal: false });
  }

  addQuery(e, item) {
    // this.setState(state => ({
    //   ft_items_id: state.ft_items_id + 1
    // }))
    this.setState({ ft_items: [...this.state.ft_items, e.target.textContent] })

    if (this.state.query === '') {
      if (item === 'resion') {
        this.setState(state => ({
          query: state.query + `?resion=${e.target.textContent}`
        }))
      }
      else if (item === 'position') {
        this.setState(state => ({
          query: state.query + `?position=${e.target.textContent}`
        }))
      }
    }
    else {
      if (item === 'resion') {
        this.setState(state => ({
          query: state.query + `&resion=${e.target.textContent}`
        }))
      }
      else if (item === 'position') {
        this.setState(state => ({
          query: state.query + `&position=${e.target.textContent}`
        }))
      }
    }
  }

  replaceQuery(e, item) {
    if (item === 'Planner' || item === 'Designer' || item === 'Developer' || item === 'ETC') {
      this.setState(state => ({
        query: state.query.replace(`position=${item}`, '')
      }))
      this.setState(state => ({
        ft_items: state.ft_items.filter(el => el !== item)
      }))
    }
    else {
      this.setState(state => ({
        query: state.query.replace(`resion=${item}`, '')
      }))
      this.setState(state => ({
        ft_items: state.ft_items.filter(el => el !== item)
      }))
    }

    if (this.state.ft_items.length === 1) {
      this.setState({ query: '' })
    }
  }

  componentDidUpdate() {
    let url = `http://localhost:3000/teams/apply${this.state.query}`

    if (this.state.query !== '') {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => {
          this.setState({ data: res })
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <>
        <div className="recruit_container">
          {/* filter_section */}
          <section className="filter_section">
            <Filter team={1} addQuery={this.addQuery.bind(this)} replaceQuery={this.replaceQuery.bind(this)} ft_items={this.state.ft_items} />
          </section>

          {/* recruit_section */}
          <section className="recruit__section">
            <div className="recruit_articles">
              {this.props.teams.map((team) => (
                <Article key={team.id} team={team} modalOn={this.modalOn.bind(this)} />
              ))}
            </div>
          </section>
        </div>

        {/* modal_section */}
        {this.state.modal ? <>
          <section className="modal_section">
            <div className="modal_overlay" onClick={this.modalOff.bind(this)}></div>
            <div className="modal_card">
              <div className="title">{this.state.modalData.title}</div>
              <div className="username">작성자: 추노</div>
              <div className="description">{this.state.modalData.description}</div>
              <div className="position">{this.state.modalData.team_position}</div>
              <div className="region">{this.state.modalData.team_region}</div>
            </div>
          </section>
        </> : null}
      </>
    );
  }
}

export default Recruit;
